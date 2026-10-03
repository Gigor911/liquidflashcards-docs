# GlassPageHeader

The tab-root title row: a 34pt bold title (`page-title`), or 30pt (`greeting-title`) under a 14pt `eyebrow` line such as the date, with glass circle buttons or a chip trailing.

- Replaces the navigation bar's large title on iOS so actions sit on the title's row.
- Title in `textPrimary`, up to 2 lines, scaling down to 70% before truncating. Eyebrow in `textSecondary`.
- **Consumer provides** `title`, optional `eyebrow`, trailing views (`GlassHeaderActions`, `StreakChip`).
- The first tab is called **Today** on every platform.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
