# Decisions, deviations and things to check

Everything here was found while building the flow from Figma. It is the part a
screenshot cannot tell you. Read it before implementing for real.

---

## 1. Source-file issues to fix upstream

These are mistakes *in the design file*. They are reproduced faithfully in the
code, so fixing them means fixing Figma first.

| What | Where | Note |
|---|---|---|
| **"HIPPA policy"** | Welcome + Create password consent cards | Misspelled. The footer links and screen 2 spell "HIPAA" correctly, so the same file is inconsistent with itself. |
| **"Morphin"** | Health info allergy list | Almost certainly "Morphine". |
| **Progress 57% twice** | Shipping address and Payment | Both frames read 57%; the bar does not advance between two consecutive steps. |
| **Progress jumps 57 → 86** | Payment → Health info | A large gap with nothing between. |
| **No progress bar** | Create password | Every other screen after welcome has one. |
| **Welcome sub-copy wraps differently** | Welcome, mobile vs desktop | Mobile frames set 14px; desktop sets 16px. Intentional or drift — worth confirming. |

## 2. Placeholder content — not unfinished work

These read as bugs but are exactly what the design specifies. They need real data
wired in.

- **`$XX` / `$XX/month`** — Best price screen, and the Payment CTA label
  (`Confirm $XX`). Props: `amount`, `monthly`.
- **`[[day, mm/dd2]]`** — Delivery screen date. A mail-merge token. The prop
  `deliveryBy` defaults to a realistic date so the prototype does not look broken;
  the design's literal token is `[[day, mm/dd2]]`.
- **Sample form values** — `123 Main Street`, `San Francisco`, `CA`, `55320`,
  `1234-1234-1234-1234`, `(786) 191 1021`. All are props.
- **FAQ body copy on the desktop frame** is lorem-ish placeholder referencing a
  different drug ("Libervant", "Dr. Blair Collins"). The mobile copy is the real
  one and is what the code uses.

## 3. Behaviour that isn't visible in a static frame

Several Figma nodes contain **multiple frames of the same screen** in different
states, not separate screens. These are implemented as conditional state.

**Notification preferences** (`1758:65928` — 2 frames)
Text Messages is checked by default and reveals the Phone Number field. Checking
Email reveals an additional Email field.

**Payment information** (`1764:91163` — 3 frames)
- Nothing selected → **no CTA button at all**
- A method selected → the card expands and the CTA appears, labelled `Confirm $XX`
- Unchecking "Billing address same as shipping" → reveals a full billing address block

**Health information** (`1758:65930` — 3 frames)
- Nothing answered → CTA **present but disabled** (`#A7C1E7`)
- "No" → CTA enabled
- "Yes" → allergy checklist plus Current Medication / Medical History textareas

> Note the two different patterns for the same problem: payment **omits** the
> button until valid, health info **disables** it. Both are as drawn. Worth
> deciding whether the real product should pick one.

**Delivery** has no CTA at all; forward navigation is the "Set up password" link.

## 4. Deliberate deviations from Figma

| Decision | Why |
|---|---|
| **Desktop keeps a CTA** | The desktop Welcome frame (`1758:72445`) contains no button anywhere in its node tree. Removing it would strand the flow, so the CTA is kept and placed inline, right-aligned, above the footer per the desktop board. |
| **Consent card and CheckRow centre their icon** | Figma draws both `items-start`. Centring was requested during review. CheckRow still top-aligns when it carries a description, matching the one frame that does. |
| **"Ship refills automatically" always shows** | Payment frame 86 includes it, frame 85 omits it. Tying an auto-refill opt-in to billing-address sameness makes no sense, so frame 85 is treated as stale. |
| **Browser chrome excluded** | Most frames include an iOS status bar, a Safari URL bar reading `philrx.com`, and a bottom toolbar. These are mockup dressing, not page content. |
| **Per-screen bottom spacing** | Mobile uses 60/100/200px per screen (set during review); desktop collapses to 24px because the sticky bar it was clearing no longer exists there. Delivery overrides desktop to 100px. |

## 5. Assets

- **The checkbox is a Figma export, not the existing design system component.**
  `reference/components/forms/Checkbox.jsx` uses `#757575` unchecked and a
  17.0625px label from the older Cash-Flow scale; this flow uses `#0A0A0A` and
  14px. The underlying glyph is the same Material symbol. **If the host app has a
  real checkbox component, use that instead** — this one exists only because the
  prototype has no design-system dependency.
- **Visa / Mastercard is CSS, not an image.** Figma composes that lockup from a
  text layer plus two circles with no exported asset, and it only renders at 1×
  (66×14), which is blurry on retina. Reproduced with the exact primitives —
  Inter 900 `#1A1F71`, circles `#EB001B` / `#F79E1B`.
- **Apple Pay and PayPal use their real exported assets.**
- **Trust badges are third-party marks** (Trustpilot, BBB Accredited, SOC 2).
  Confirm usage rights before shipping publicly.
- All Figma asset URLs expire after ~7 days, so every asset is committed to
  `public/assets/` rather than hot-linked.

## 6. Prototype limitations

No validation, no persistence, no error states, no loading states, no analytics,
no i18n. Hash routing rather than a router. Form state is local to each screen
and resets on navigation — there is no shared flow state, so nothing entered on
one screen reaches another.

The CTA on every screen simply advances; none of them submit anything. The
final screen's **Save** wraps back to the welcome screen so the flow can be
walked repeatedly during review — that is a prototype affordance, not
intended behaviour. In the real product it submits and goes wherever the
account flow continues.

## 7. Scope

Built from the `Cash-Flow` portion of the Figma file only. `reference/` holds an
earlier extraction of the broader design system (212 component families across 13
pages) which this app does not use.
