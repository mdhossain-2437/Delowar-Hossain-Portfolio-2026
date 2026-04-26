# Testing the Delowar.dev portfolio (Next.js 16)

This app is a static-rendered Next.js 16 (App Router, Turbopack) portfolio for `delowarhossain.dev`. There are no user accounts, no backend services, and no preview deployment — testing happens on the local dev server.

## Quick start

```bash
npm install     # already part of devin_env maintenance
npm run dev     # http://localhost:3000
```

Dev server is Turbopack-based and very fast (Ready in ~400ms).

Useful single-command sanity sweep before the recording:

```bash
for path in / /work /work/webdevwarrior /about /services /resume /blog /blog/lenis-the-quiet-revolution-in-scroll /contact; do
  printf "%-60s -> %s\n" "$path" "$(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000$path)"
done
```

All should return `200`.

## Verification commands (no extra setup needed)

```bash
npm run lint          # eslint
npx tsc --noEmit      # typecheck
npm run build         # full production build, prerenders 21 routes
```

## Architecture cheat sheet

- App Router pages live in `src/app/<route>/page.tsx`.
- Static content (projects, articles, services, social) is in `src/lib/data.ts` — change content there, not in the page files.
- Design tokens (colors, fonts, vignette, marquee animation) are CSS custom props in `src/app/globals.css` under the `@theme` block.
- Interactions live under `src/components/fx/`:
  - `SmoothScroll.tsx` mounts Lenis (respects `prefers-reduced-motion`).
  - `CustomCursor.tsx` renders a dual-element green cursor; gated on `(hover: hover) and (pointer: fine)` via `useSyncExternalStore`.
  - `RevealObserver.tsx` adds `.in` to `.reveal` elements via IntersectionObserver. **Important:** it keys its `useEffect` on `usePathname()` so it re-runs after client-side navigation. If you ever see a route that's blank after clicking a `<Link>`, this is the first thing to check — pre-fix the deps were `[]` and any sub-page reached without a hard reload stayed invisible.
- `src/components/ui/MagneticButton.tsx` exposes a `type?: "button" | "submit" | "reset"` prop. **Forms must pass `type="submit"`** — otherwise the rendered `<button type="button">` will silently swallow clicks. The contact form (`src/components/sections/ContactForm.tsx`) is the canonical example.

## Adversarial test ideas (what to actually verify on camera)

The two highest-value regression tests:

1. **RevealObserver across client-side navigation.** Open `/`, click into `/work/<slug>`, then click `About` in the top nav. The whole About body must be visible at `opacity: 1`. If it stays blank (`opacity: 0; translateY(28px)`) the observer's `usePathname()` re-key was reverted.
2. **ContactForm submit.** Fill in the form, click `Send brief ↗`. The button label must flip from `SEND BRIEF ↗` to `SENT ✓`. The `mailto:` dialog itself probably won't appear on the test VM (no mail handler), so the React state change is the proof.

Other worth-recording sanity checks:

- Hero shows `DELOWAR` with the **lime green `O`** accent on a dark vignette, eyebrow `WEB DEVELOPER & AI ENTHUSIAST`, status `AVAILABLE - Q3 2026`.
- Hovering an interactive element (e.g. `Hire Me`) makes the green cursor ring expand and snap to the element. The OS cursor is hidden by `body.has-cursor { cursor: none }` set when `CustomCursor` mounts.
- Mobile emulation at 390px: top nav must collapse into a hamburger drawer, side nav must be hidden, projects must stack single-column.

## Browser quirks observed

- Chrome on the VM sometimes ignores keyboard input until the page has focus — click anywhere on the page first, then use `Ctrl+L` to focus the URL bar.
- DevTools device toolbar opens with `F12` then `Ctrl+Shift+M`. Set `390 × 844` for mobile breakpoint.
- `wmctrl` is not installed on the test VM; rely on Chrome already starting maximized rather than trying to maximize the active window.

## Devin Secrets Needed

None. All testing is local-only and no backend services are involved.
