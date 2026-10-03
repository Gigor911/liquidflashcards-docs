# GlassCircleButton

A 44pt glass circle with one glyph: header actions, the study close button and sheet-bar buttons.

- **Use** in the title row (`GlassHeaderActions`: one primary action as its own circle, the rest in a "⋯" menu) and to end a study session.
- Glyph 17pt medium in `textPrimary` (or `accent` for a primary action).
- Press: scale 0.94, opacity 0.85 (`GlassPressStyle`).
- **Consumer provides** `systemImage`, `accessibilityLabel` (required: the button has no visible text), optional `tint`, `action`.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
