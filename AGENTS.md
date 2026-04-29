# Project Design Guidelines - FloorMark Surfaces

## Typography & Headlines
- **Colors:** ALL Headlines (`h1`, `h2`, `h3`, `h4`) MUST be either **Pure Black** (`text-black` / `text-brand-dark`) or **Pure White** (`text-white`). 
  - NEVER use grey, transparent orange, or any lightened brand colors for headlines.
- **Line Height:** All primary Headlines MUST use a snug line height: `leading-[0.9]`.
- **Case:** Use `uppercase` for almost all decorative text and primary headlines.
- **Body Text:** Use `leading-snug` for better density and readability.

## Components
- **Icons:** NEVER use background shapes (circles, squares, rotated boxes) behind icons. Icons should stand alone, typically in `brand-orange`.
- **Dividers:** 
  - Use `border-r last:border-r-0 border-white/20` for vertical dividers in grid layouts (e.g., benefits cards).
  - NEVER use top or bottom borders (`border-y`) for global section boundaries in grid layouts; use only vertical separators.
- **CTA / Outcome Sections:** 
  - Background color MUST be the accent color (`brand-orange`).
  - Text inside these sections should use **Pure White** (`text-white`) for headlines to maintain high energy, while subtext or accents can use `brand-dark`.
  - Buttons in these sections should be `brand-dark` with hover to `white`.
  - Use generous vertical padding (`py-44` / 180px) for high-impact CTA sections.

## Layout Details
- **Hero:** Use large typography, often split with line breaks, with a snug `leading-[0.9]` and tracking `tracking-tighter`.
  - On **Mobile**, Service Page Heroes MUST be `h-[100dvh]` for full-screen impact.
  - **Sticky Elements:** Use `lg:sticky` to ensure headers only stick on desktop; they MUST be `static` on mobile to prevent content overlap.
- **CTA Text:** Standardize all primary call-to-actions to **"GET A FREE QUOTE"**.
- **Comparison Slider:** Maintain the "Before/After" labels with high contrast tags.
- **Service Pages:** Follow the established `ServiceTemplate.tsx` structure: Hero -> Problem/Solution (Contrast) -> Benefits (Grid with Dividers) -> Process -> Outcome (CTA).
