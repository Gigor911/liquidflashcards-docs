# GlassCard

Frosted content card: `.ultraThinMaterial` + `glassFill` + a 1px `glassEdge`, `shadow-glass` by day and no drop shadow by night.

- **Use** for every content block on the field: the Home momentum card (`radius-hero` 30), forecast and week strip (`radius-card` 26), grouped rows (`radius-group` 24), the study card (`radius-study` 34).
- **Do** keep content on material; system Liquid Glass (`glassEffect`) is reserved for floating controls (`glassControl(in:)`).
- **Don't** stack light glass on light glass, or put a glass card inside another.
- **Reduce Transparency**: the card becomes the solid `listCardBG` (`GlassCardSurface`). Web: `.lfc-glass.solid` or `prefers-reduced-transparency`.
- **Consumer provides** the content, padding and corner radius (`glassCard(cornerRadius:padding:)`, default 26).
- macOS: a light card with a 0.5px hairline and `shadow-mac-card`, corners at most 14. visionOS: a `.thinMaterial` platter.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
