# DeckRow

A deck in a glass group (`GlassGroup` + `GlassRowDivider`): icon tile, name and subtitle, mastery `MiniRing`, due badge.

- **Tile**: 38pt, `ringTrack` fill, `radius-tile`, the deck's Material Symbols Rounded glyph (22pt) in `accent`. Decks without an icon get a stable one from their name.
- **Title** `row-title` (16 semibold, natural case; macOS uses monospaced uppercase); **subtitle** `footnote` in `textSecondary`: "31 cards · 4% mastered".
- **Trailing**: `MiniRing` (30pt, 4pt stroke, `accent` on `ringTrack`) then `DueCountBadge`. Counts mean one thing only: cards due.
- Rows are separated by a 1pt `glassHairline`; row padding 12 vertical, group padding 16 horizontal, 4 vertical.
- Press: 0.97 scale on touch-down (`.pressable`).
- **Consumer provides** the deck (name, icon, card count, mastery, due count) and the tap action.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
