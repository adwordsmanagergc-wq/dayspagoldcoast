---
version: 1
name: day-spa-gold-coast-design
description: >
  "Salt and lagoon." A light, coastal editorial system for an independent
  Gold Coast day spa guide. Cool salt-white paper, deep kelp ink and a single
  lagoon-teal accent (a desaturated nod to the featured spa's brand). A light,
  high-contrast editorial serif (Newsreader 300) at very large sizes carries
  the voice; a quiet grotesque (Geist) carries everything functional. Photo-led,
  airy, asymmetric. Motion is slow on arrival and quick on interaction, like water
  settling: things materialise from a soft blur, drift a few pixels and stop.
colors:
  canvas: "#F3F1EC"       # salt (page background)
  canvas-soft: "#EAE7E0"  # sand-shade bands
  surface: "#FBFAF7"      # raised surfaces (off-white, never #fff)
  ink: "#16231F"          # deep kelp, main text (14.4:1 on canvas)
  ink-mute: "#56625D"     # secondary text (5.6:1 on canvas)
  hairline: "#D9D6CE"
  lagoon: "#1E6F66"       # THE accent: links, primary buttons, focus (5.3:1)
  lagoon-press: "#175A53"
  lagoon-wash: "#DCE8E3"  # tinted fills behind accent content
  lagoon-mark: "#0F8F80"  # chart marks only (passes dataviz chroma floor)
typography:
  display-xl: { fontFamily: "Newsreader", fontSize: clamp(56px, 9vw, 132px), fontWeight: 300, lineHeight: 0.95, letterSpacing: -2px }
  display-lg: { fontFamily: "Newsreader", fontSize: clamp(40px, 5.5vw, 76px), fontWeight: 300, lineHeight: 1.02, letterSpacing: -1px }
  heading:    { fontFamily: "Newsreader", fontSize: 32px, fontWeight: 400, lineHeight: 1.15 }
  lead:       { fontFamily: "Newsreader", fontSize: 24px, fontWeight: 300, lineHeight: 1.35 }
  body:       { fontFamily: "Geist", fontSize: 17px, fontWeight: 400, lineHeight: 1.6 }
  small:      { fontFamily: "Geist", fontSize: 14px, fontWeight: 400, lineHeight: 1.5 }
  label:      { fontFamily: "Geist", fontSize: 12px, fontWeight: 500, letterSpacing: 1.6px, textTransform: uppercase }
  button:     { fontFamily: "Geist", fontSize: 15px, fontWeight: 500 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]
radius: { control: 9999px, surface: 20px, image: 20px, arch: "999px 999px 20px 20px" }
shadow:
  card: "0 1px 2px rgba(22,35,31,0.05), 0 18px 40px -24px rgba(22,35,31,0.28)"
  raised: "0 2px 4px rgba(22,35,31,0.06), 0 28px 60px -28px rgba(22,35,31,0.35)"
motion:
  ease-out: "cubic-bezier(0.16, 1, 0.3, 1)"
  ease-in: "cubic-bezier(0.7, 0, 0.84, 0)"
  duration-press: 120ms
  duration-fast: 180ms
  duration-base: 320ms
  duration-arrive: 900ms
---

## Mission
Be the most useful and the most beautiful answer to "day spa Gold Coast". The design has to feel like a spa day (calm, unhurried, sensory) while staying fast to scan: a reader should find the right spa for their occasion in under a minute.

## Brand
Independent editorial guide. Audience: Gold Coast locals, Brisbane day-trippers, couples, hens groups and visitors. Tone: warm, knowledgeable, plain-spoken. RejoovMe (Surfers Paradise) is the featured Day Spa of the Month partner and must be disclosed.

Sources: library system `oura` (warm editorial serif + quiet grotesque, photo-led, one decisive accent) as the structural reference; palette rotated away from beige/brass to cool salt + kelp + lagoon; UI UX Pro Max query "luxury day spa wellness editorial" for mood (its pink/purple + Playfair/Inter output overridden per Taste rules).

## Style Foundations
- Colour ratio: ~80% salt/surface, ~17% kelp ink, ~3% lagoon. Lagoon only for the primary action, links, focus, active filter and chart marks.
- Type: Newsreader 300 for display (editorial guide, so a serif is justified); emphasis uses Newsreader italic of the same family. Geist for UI and body. Never a third family.
- Grid: 12 columns, max-width 1320px, 20px gutters on mobile, 40px desktop. Asymmetric splits (7/5, 5/7, 4/8).
- Shape: pill controls, 20px surfaces and images, one arch-topped hero image as the signature shape.
- Imagery: real photography only (site's hero photo + RejoovMe photos). Images reveal with a clip-path wipe. No illustrations, no fake UI.
- Icons: Phosphor, regular weight, 20px. No emoji as icons.
- One light theme for the whole page, footer included.

## Components
- Primary button: lagoon fill, salt text, pill, 48px tall. Hover: lagoon-press. Active: scale(0.97). Focus: 2px lagoon ring offset 3px.
- Secondary button: transparent, kelp text, 1px hairline border; hover fills canvas-soft.
- Filter chip: pill, hairline border; selected = kelp fill + salt text. Changing filter animates the list with layout transitions (fast).
- Cards: surface + card shadow, 20px radius, no borders. Hover lifts 2px and deepens the shadow.
- Nav: single line, 72px, salt with backdrop blur after scroll; tide-line progress bar under it.
- Footer: canvas-soft, giant display wordmark, link columns.

## Accessibility
WCAG 2.2 AA. Pairs: ink/canvas 14.4, ink-mute/canvas 5.6, lagoon/canvas 5.3, salt/lagoon 5.3. Focus always visible. Targets >= 44px. `prefers-reduced-motion`: reveals, wipes, marquee and the horizontal ritual collapse to static; the ritual becomes a normal vertical stack.

## Writing Tone
Headlines short (<= 8 words), concrete, no hype. Body in plain Australian English. CTA labels: "Book RejoovMe" (booking), "See the ranking" (explore). No em or en dashes in visible copy.

## Rules: Do
- Lead with the answer, then the detail.
- Let photos breathe; use whitespace as the luxury signal.
- Animate only transform, opacity, filter, clip-path.

## Rules: Don't
- No purple/blue glows, neon, pure black/white, pulsing CTAs.
- No three identical cards in a row, no "Step 01" numbering, no invented reviews or stats.
- No more than one eyebrow per three sections, one marquee per page.

## Quality Gates
- Hero fits 100dvh at 1440x900 and 375x812 with CTA visible.
- Zero em/en dashes in rendered text of redesigned pages.
- Lighthouse a11y >= 95; CLS < 0.05; no horizontal scroll at 375/768/1024/1440.
- Reduced-motion run shows every piece of content.
