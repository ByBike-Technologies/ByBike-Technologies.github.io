# Pricing Page Redesign — Design Spec

**Date:** 2026-07-18  
**Status:** Approved for implementation planning  
**Page:** `/pricing`

## Goal

Redesign the Plans and Pricing page with a black background, dark-glass plan cards, and a working live revenue calculator (replacing the “Coming Soon” waitlist module).

## Decisions Locked

| Topic | Choice |
| --- | --- |
| Calculator scope | Live revenue estimate (Approach A) |
| Page layout | Stacked: plans on top, calculator below (Layout A) |
| Plan card style | Dark glass cards, Grow featured (Style B) |
| Implementation approach | Focused redesign (Approach 1) |

## Visual Direction

- Full-page background: `bybikeBlack` (`#0B0E13`)
- Accent: `bybikeBlue` (`#00A29D`) — no purple
- Plan cards: translucent dark surfaces (`white/5`–`white/8`), `1px` light border, subtle hover lift
- Grow: teal “Recommended” label + stronger teal border
- Typography: existing Montserrat stack
- Motion: staggered scroll reveal; respect `prefers-reduced-motion`

## Page Structure

1. **Hero** — “Plans and pricing” + one supporting line
2. **Plans** — three equal-width dark-glass cards (Start / Grow / Scale)
3. **Calculator** — section title, subtitle, interactive estimate panel, Contact CTA

## Plan Cards

Keep current feature content:

- **Start** — Rider App, CRM, CMS (Sales Management), Operations (Basic Fleet Management)
- **Grow** — Start features + Marketing Management under CMS
- **Scale** — Extended sales/marketing + Extended Fleet, Workforce, Supply Chain, Warehouse Management

Each card ends with **Contact Us** → `/demo`.

## Revenue Calculator

### Inputs (defaults)

| Input | Default | Notes |
| --- | --- | --- |
| Fleet size | `100` | Non-negative number |
| Rides per day (per vehicle) | `3` | Non-negative number |
| Average ride price | `2.50` | Currency, USD display |

### Formula

```
monthly = fleet × ridesPerDay × avgPrice × 30
yearly  = monthly × 12
```

- Recalculate live on input change (client-side)
- Empty or invalid values coerce to `0`
- Format totals with locale currency (USD)
- Disclaimer under results: “Estimate only — not a quote.”

### Calculator UI

- Dark panel matching plan cards
- Three labeled inputs in a responsive grid (1 col mobile, 3 col desktop)
- Large monthly total; secondary yearly total
- Primary CTA: Contact Us → `/demo`

## Components

| File | Responsibility |
| --- | --- |
| `app/pricing/page.js` | Page shell: hero + compose sections |
| `app/_components/PricingPlans.js` | Plan card grid (client for reveal/hover) |
| `app/_components/RevenueCalculator.js` | Inputs, formula, live totals, CTA |

Reuse existing `Reveal` for entrance motion where useful. Update `globals.css` pricing styles for dark-glass cards (remove white-card assumptions).

## Out of Scope

- Plan recommendation based on fleet size
- Billing periods / comparison table
- Email notify / waitlist capture
- Backend persistence or analytics
- Changing plan feature lists beyond presentation

## Error / Edge Handling

- Negative numbers blocked or clamped to `0`
- Very large inputs still format safely (no crash)
- Keyboard-accessible inputs and focus styles

## Success Criteria

- `/pricing` feels cohesive on black with dark-glass plans
- Grow is clearly the recommended tier
- Calculator updates monthly/yearly totals as the user types
- Mobile and desktop layouts remain usable
- Existing demo CTA path preserved
