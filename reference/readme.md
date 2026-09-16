# PHILRx Design System

Extracted from the attached Figma file **"My-Phil-cash-flow.fig"**, scoped to the **`/Cash-Flow`** page — 27 frames covering the PHILRx patient onboarding & cash-pay checkout flow on mobile: identity confirmation, password/login setup, notification preferences, a health questionnaire, delivery confirmation, and the SMS message previews that kick the flow off.

**Product:** PHILRx (also labelled "My Phil" / "MyPhilRx" in the source) — a pharmacy patient-intake product. A patient receives an SMS/link, confirms identity (last name + DOB), sets up login (password or one-time code), answers health/insurance questions, pays, and gets delivery status — all inside a mobile web flow with a persistent progress bar.

**Source:** Figma file "My-Phil-cash-flow.fig" (mounted read-only for this build; original file not otherwise linked). The full file has 13 pages and 212 component families — this design system only builds the **Cash-Flow** page's 27 frames per the user's request. See "Scope" below.

## Scope — why this isn't the whole kit

The source file spans onboarding, insurance, payment, thank-you, and several 2026 prototype/A-B-testing pages, with 212 component families total. The user explicitly scoped this build to 27 named frames on the `/Cash-Flow` page. This design system implements the components and patterns **used within that scope only** — it is not a full extraction of the file. If more of the file is needed (insurance flows, payment forms, the desktop header variants, etc.), re-open this project and ask to expand scope.

## Components

- **MyPhilButtonExtended** — `components/core/` — the primary CTA button. 32 variants (mobile/desktop × primary/secondary/tertiary/link × default/hover/clicked/disabled). Colors: primary `#2363C3`, hover `#4F82CF`, active `#1C4F9C`, disabled `#A7C1E7`.
- **RadioButtons**, **RadioButtonChecked**, **RadioButtonUnchecked** — `components/core/` — the card-style Yes/No radio option (unselected = white + grey border, selected = light-blue fill + blue border).
- **MyPhil24PlusSm** — `components/core/` — the button's default leading/trailing icon glyph.
- **Icon** — `assets/icons/` — 75-glyph Material-Symbols-style set (15 glyphs × Filled/Outlined/Round/Sharp/TwoTone), e.g. `check_box`, `radio_button_checked`, `error`, `arrow_forward`. See `Icon.d.ts` for exact names.
- **Input** — `components/forms/` — floating-label text field (default/focused/filled/error/disabled). *Intentional addition*: the flow builds this pattern inline per screen rather than as a bound symbol; recreated here as a reusable component from the exact inline values.
- **Checkbox** — `components/forms/` — label + Material-style glyph row (no box chrome), used for "Show Password" and card-type opt-ins. *Intentional addition*, same reasoning as Input.
- **InfoMessage** — `components/feedback/` — the "Point 1" reassurance card (teal icon circle + copy) shown above every screen's CTA, recreating the kit's **info-message** family. *Intentional addition* — the specific instance is inline, not a bound symbol, so it's rebuilt from the exact values.ayer, rebuilt as a component since it recurs but isn't a bound symbol.
- **HeaderAndStatusbar** — `components/navigation/` — logo + tagline + step progress bar + Go Back link, recreating the "Header and statusbar" symbol plus each screen's inline progress-bar frame. *Intentional addition* for the same reason.
- **MyPhilFooter** — `components/navigation/` — Questions/FAQ links, Privacy/HIPAA links, logo + copyright, recreating the "My-Phil/Footer" family. *Intentional addition*, same reasoning.

## Intentional additions

The source Figma kit (scoped to the 27 Cash-Flow frames) has no bound component for these recurring inline patterns, so they're built as reusable components anyway — each recreates a specific in-scope pattern, named for what it does rather than the source's ad-hoc layer name:

- **MyPhilFooter** (`components/navigation/MyPhilFooter.jsx`) — recreates the **My-Phil/Footer** family (Questions/FAQ links, Privacy/HIPAA links, logo, copyright) as used inline on every Cash-Flow screen.
- **HeaderAndStatusbar** (`components/navigation/HeaderAndStatusbar.jsx`) — recreates the **Header and statusbar** symbol plus each screen's inline progress-bar frame (logo, tagline, step progress, Go Back link).
- **InfoMessage** (`components/feedback/InfoMessage.jsx`) — recreates the kit's **info-message** family (2 variants, Device: 2) — the teal icon-in-circle reassurance card shown above the CTA on nearly every screen, authored from the "Point 1" layer's exact inline values since that instance itself isn't a bound symbol.

## UI kit

- `ui_kits/cash-flow/` — click-through recreation of the onboarding flow (Welcome/identity → Password → Health questionnaire → Delivery confirmation). Open `index.html`.

## Foundations

- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — hand-authored from exact values found in the Cash-Flow frames (see Visual Foundations below).
- `tokens/fig-tokens.css` — the file's 9 Figma Variables (generic blue/gray/green/zinc swatches). These did not match any color actually used in the Cash-Flow frames, so they're included for completeness but **not** used as the primary palette — see Visual Foundations.
- `guidelines/*.card.html` — specimen cards for colors, type, spacing/radius, and the logo (visible in the Design System tab).

## Content fundamentals

- **Voice:** direct, reassuring, second-person ("Confirm your identity to continue", "Select a secure password to protect **your** PHILRx account"). Headlines state the immediate next action or milestone ("Welcome to PHILRx!", "Set up your password!", "Success! Next step: Delivery").
- **Tone:** calm and clinical-but-warm — no exclamatory hype beyond the occasional "!" on milestone screens (Welcome, Set up your password). Body copy is short, literal, and specific (drug name in caps with ®, doctor's full name, exact dollar amounts).
- **Casing:** sentence case throughout for headlines and body copy; buttons use Title Case ("Confirm Order", "Go Back", "Track My Order").
- **Pronouns:** "you/your" for the patient; "we" for PHILRx ("we'll review your health information").
- **Emoji:** none found anywhere in the scoped frames.
- **Structure:** every screen = headline + one line of context + the task (inputs or a Yes/No choice) + one reassurance callout + one primary button. Legal/trust language ("agree to our terms of use, privacy policy and HIPAA policy") appears just above the CTA on nearly every step.

## Visual foundations

- **Color:** one primary action color, cool blue `#2363C3` (buttons, links, progress fill, selected-state border) with a very light blue tint `#DBE7FB` for the progress track and `#ECF1F9` for a selected radio's fill. A secondary teal `#00827E` (+ tint `#D5F1F0`) marks reassurance/success moments — the tagline "Rx at your fingertips" and the icon-circle in the InfoMessage. Text is near-black (`#0A0A0A` body / `#191919` headings), never pure black. Errors use a saturated red (`#DB0E0E`). No purple, no gradients anywhere in the scope.
- **Type:** a single family, **Lato**, weight 400 for body and 700 for everything else (headlines, labels, buttons) — no italic or light weights used. The mobile flow renders at a distinct decimal scale (e.g. headline `31.6875/43.875px`, body `17.0625/24.375px`) — this is the frame's actual authored scale (not a rounding artifact); the base component library underneath uses a cleaner `16/24px` scale. Both are captured in `tokens/typography.css`.
- **Spacing/radius:** cards and inputs use `9.75px` corner radius on mobile screens; base library components (buttons, radio rows) use a flatter `4px`. No fully-rounded ("pill") shapes except the progress-bar track and the button's mid-run hover states.
- **Backgrounds:** flat white screens throughout — no photography, no illustration, no patterns or textures, no full-bleed imagery. The only "image" content is the two SMS-message device mockups (`Card`/`Card2` frames) used to show the entry point, not the flow itself.
- **Shadows:** a soft `0 4.875px 12.188px rgba(0,0,0,.15)` drop shadow lifts the one recurring reassurance card off the page; a very soft `rgba(0,0,0,.05)` shadow lifts the delivery-summary card. Everything else is flat with a 1px inset border, no shadow.
- **Borders:** thin (`1–1.2px`) light-grey (`#D9D9D9`/`#D1D6DC`) borders define input fields, radio rows, and card edges — borders do the separating work, not shadows, on most surfaces.
- **Animation/hover/press:** no motion or transition values found in the source (Figma frames are static); hover/press are expressed purely as color steps on the button (default → lighter-blue hover → darker-blue active → pale-blue disabled). Treat these as instant-swap states unless a consuming project wants to add easing.
- **Transparency/blur:** none observed in-scope.
- **Imagery color vibe:** N/A — no photography in scope.

## Iconography

- One icon system: a Material-Symbols-style outline/filled glyph set (`assets/icons/`), used for radio dots, checkboxes, status/error glyphs, and chevrons. 75 glyphs materialized (15 families × 5 style variants: Filled, Outlined, Round, Sharp, TwoTone) as SVG path data — see `assets/icons/Icon.d.ts` for the full name list.
- No icon font, no PNG icon set, no emoji, no Unicode-character icons found in the scoped frames.
- The button's default leading/trailing icon (`MyPhil24PlusSm`) is a separate "My Phil / 24 / plus-sm" glyph, materialized alongside the button.

## Logo

- One real mark found in scope: the **PHILRx wordmark** (`assets/logo/philrx-logo-color.png` — teal, the color actually used in the flow's header/footer; `assets/logo/myphil-wordmark-white.svg` — a white/mono variant for dark or colored backgrounds, labelled "myphil" in the source but rendering the same PHILRx wordmark). No standalone icon-only mark or favicon was found — wherever a small mark might otherwise go, use the full wordmark or plain type.

## Fonts

- **Lato** — sourced from Google Fonts via `@import` in `tokens/typography.css` (Lato is itself a Google Font, so this is the exact typeface, not a substitution). Weights loaded: 400, 700, 900.
- Two other families appear in the file's overall metadata (Inter, SF Pro Text) but **not** inside the scoped Cash-Flow frames — not included here.

## Index

- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/` — colors, typography, spacing/radius, plus the file's raw Figma variables.
- `components/core/` — Button, Radio, base icon glyph.
- `components/forms/` — Input, Checkbox.
- `components/feedback/` — InfoMessage.
- `components/navigation/` — HeaderAndStatusbar, MyPhilFooter.
- `assets/icons/` — Icon component + icon-data.js (75 glyphs).
- `assets/logo/` — PHILRx wordmark (color + white).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/cash-flow/` — the click-through onboarding recreation.
- `SKILL.md` — Claude-Code-portable skill file for this design system.

## Caveats

- Scoped to 27 Cash-Flow frames only, per the user's request — not the full 212-family Figma file (see "Scope" above).
- Input/Checkbox/InfoMessage/HeaderAndStatusbar/MyPhilFooter are hand-authored recreations of recurring inline patterns, not bound Figma component instances — flagged as "Intentional additions" above.
- The Figma file's own color Variables (`tokens/fig-tokens.css`) didn't match any color actually seen in-scope, so they're kept but unused by components.
