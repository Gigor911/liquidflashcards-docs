# StudyCard

The study screen's card (`GlassStudyCard`): Side A (question) and, once revealed, Side B (answer) on one glass card (`radius-study` 34, padding 30) with the next card peeking behind at 55% opacity.

- **Question** `card-question` (32 bold, 1.15 leading); **answer** `card-answer` (26 bold) under an accent "SIDE B" label and a `glassHairline` divider; an optional note in `subheadline` `textSecondary`.
- **Above**: a glass close circle and a segmented session progress (one 5pt segment per card, `accent` done, `ringTrack` left), then "Anatomy · 9 of 20 · 4 to goal".
- **Retrieve before you see**: the answer stays hidden until tapped or Space. Reveal at once or with a ≤200ms ease-out, never a slow 3D flip.
- Rating swaps to the next card instantly; keyboard ratings never animate.
- **Consumer provides** the card faces (text, optional image), deck name, position and the goal remainder.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
