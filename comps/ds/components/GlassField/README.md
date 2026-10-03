# GlassField

The soft three-glow background behind every iPhone and iPad screen: `glassFieldBase` with `glassGlowA`, `glassGlowB` and `glassGlowC` as radial glows.

- **Use** behind every screen root (`.abstractBackground()` draws it on iOS). Never behind a single card.
- **Geometry** (fractions of the screen's longer side): glow A at (10%, 6%) radius 55%; glow B at (95%, 32%) radius 50%; glow C at (25%, 96%) radius 60%. Each fades to 0.
- **Night** is the same field with faint aubergine / indigo / wine glows close to the base, so glass reads as a gentle lift.
- **Consumer provides** nothing; it ignores safe areas and is hidden from accessibility.
- Web: the `.lfc-field` class. macOS keeps native window backgrounds; visionOS draws no field (window glass).

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
