# WeekStrip

Seven day markers under narrow weekday letters, on a glass card (`radius-card`).

- **Goal met**: filled `accent` with a `textOnAccent` check. **Today, before the goal**: `ringTrack` fill with a 2pt `accent` outline; its letter is bold `accent`. **Future**: dashed `forecastDim`. **Past with some reviews**: `accent` ring with a 5pt dot. **Past, empty**: faint `ringTrack` ring.
- Missing a day is shown quietly, never as a red mark.
- Each day's accessibility value is its review count.
- **Consumer provides** seven `WeekDayActivity` values (date, reviews, goalMet, isToday, isFuture).

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
