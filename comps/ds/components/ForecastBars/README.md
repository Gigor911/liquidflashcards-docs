# ForecastBars

"Coming up": cards due over the next seven days as 22pt bars (`radius-bar` 7, max 70pt tall).

- Today's bar is `accent`; later days `forecastDim`. Counts above the cap (80) draw full height and read "80+".
- Count above each bar and the day below, 12pt `textSecondary`; today's label bold.
- **Consumer provides** the `ForecastDay` list, optional `cap` and `maxBarHeight`.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
