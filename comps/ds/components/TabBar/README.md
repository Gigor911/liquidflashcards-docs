# TabBar

The floating glass tab bar with the search tab as its own circle (iOS 26 `.sidebarAdaptable` + search role). In the app it is the system tab bar; this card records how the comps draw it.

- Tabs: **Today**, **Decks**, **Stats**, **Settings**, then **Search** as a separate 60pt circle.
- Selected tab: `accent` glyph and label on a `ringTrack` capsule; others `textSecondary`. Labels 10pt semibold (`tab-label`).
- iPad landscape: a floating glass sidebar with a Decks section listing due counts; iPad portrait / 2⁄3 split: the floating top tab bar; compact width: this bar.
- **Consumer provides** nothing in the app (system component); tint comes from the palette accent.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
