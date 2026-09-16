# PHILRx — cash-flow onboarding

A reference implementation of the PHILRx cash-pay patient onboarding flow, built
from the Figma file **1Q26-2Q26 MyPhil Branded Template**. Eight screens, mobile
and desktop, with the interaction behaviour each screen's frames imply.

This is a **prototype for handoff**, not a production app: it has no backend, no
validation, no analytics, and no routing library. It exists so the behaviour and
visual spec are unambiguous when the flow is built for real.

> Read **[DECISIONS.md](DECISIONS.md) before implementing.** It records where the
> code deliberately departs from Figma, which values are merge tokens rather than
> real content, and which inconsistencies are in the source file itself.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build
```

## The flow

Screens are reachable directly by slug, e.g. `#/payment`.

| # | Screen | Slug | Progress | Figma node |
|---|---|---|---|---|
| 1 | Welcome / confirm identity | `#/welcome` | – | `1593:11798` |
| 2 | Notification preferences | `#/notifications` | 29% | `1758:65928` |
| 3 | Best price found | `#/best-price` | 43% | `1576:5437` |
| 4 | Shipping address | `#/shipping-address` | 57% | `1576:5758` |
| 5 | Payment information | `#/payment` | 57% | `1764:91163` |
| 6 | Health information | `#/health-info` | 86% | `1758:65930` |
| 7 | Success / delivery | `#/delivery` | 100% | `1576:6200` |
| 8 | Set up your password | `#/create-password` | – | `1576:6345` |

Desktop layout comes from a separate frame, `1758:72445`.

Order lives in [`src/flow.js`](src/flow.js) — reordering the flow never means
renaming a file.

## Layout

```
src/
├── main.jsx        entry; mounts App, loads styles, dev-only annotation overlay
├── App.jsx         hash router (#/welcome, #/payment, …)
├── flow.js         screen order + Figma node for each
├── screens/        one file per screen, named for what it is
├── components/     Shell, Header, Footer, ProgressBar, GoBack, ConsentCard, CheckRow
└── styles/
    ├── index.css       import order matters — see the comment in the file
    ├── colors.css      \
    ├── typography.css   |  design tokens extracted from Figma
    ├── spacing.css      |
    ├── fig-tokens.css  /
    ├── base.css        layout primitives
    ├── components.css  reusable pieces
    └── desktop.css     the ≥768px breakpoint (must load last)

public/assets/      images and SVGs exported from Figma, served from /assets/…
reference/          the original extracted design system — not used by this app
```

## Conventions

**Every screen renders inside `<Shell>`**, which supplies the header, footer and
optional CTA. A screen that passes no `cta` prop gets no button — that's how the
delivery screen works.

**Styling is plain CSS with `mf-` prefixed classes** and CSS custom properties for
tokens. No CSS-in-JS, no utility framework. Per-screen spacing overrides are set
as custom properties inline, e.g.

```jsx
<section className="mf-section" style={{ '--mf-pad-bottom': '100px' }}>
```

`--mf-pad-bottom` applies on mobile, `--mf-pad-bottom-desktop` on ≥768px.

**Content shown in the UI is sample data from the design**, exposed as props so it
can be replaced without editing markup:

```jsx
<BestPriceScreen amount="$249" monthly="$83/month" />
```

## Deployment

Vercel, configured in `vercel.json` — `npm run build` to `dist/`. Any static host
works; the build output is plain files.

## Dev tooling

[Agentation](https://www.npmjs.com/package/agentation) is wired in for in-browser
annotation during review. It is dynamically imported behind `import.meta.env.DEV`,
so it is never part of the production bundle. Optional — the app runs without the
companion MCP server.
