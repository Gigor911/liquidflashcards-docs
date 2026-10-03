# MomentumRings

Two concentric rings: the outer one is today's goal (`accent` on `ringTrack`), the inner one recall (`recallAccent` on `recallTrack`), hidden when there is no recall data yet. `MiniRing` is the 30pt single ring for deck mastery.

- Size 124 on Home; outer stroke 11.3% of the size, inner 8%, gap 7%. Round caps; no arc at 0% (a zero-length capped arc would draw a dot).
- Pair with `ValueWithUnit` figures: "12 / 20 cards · Daily goal" and "87% recall rate · This week".
- Progress animates with a spring (0.8s, bounce 0.15); with Reduce Motion, a cross-fade.
- Decorative: hidden from accessibility; the figures carry the values.
- **Consumer provides** `goalProgress` (0–1), optional `recall` (0–1), `size`.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
