# FloatingAddButton

A 60pt `ctaFill` circle with a `plus` glyph in `textOnAccent`, pinned bottom-trailing at the screen gutter.

- **Use** on list screens for the one create action (new card, new deck). With several create actions it opens a menu (`FloatingAddMenuButton`); in selection mode it becomes a delete button (`trash`).
- `shadow-cta` by day, none by night.
- **Consumer provides** `accessibilityLabel` and the action (or the menu actions).
- macOS: a neutral circle with a hairline; visionOS: a toolbar button instead.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
