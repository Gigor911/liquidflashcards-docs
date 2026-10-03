# RatingBar

Four tinted glass buttons (Again, Hard, Good, Easy) with the FSRS interval each rating would schedule.

- 68pt tall, `radius-group` 24, 8pt apart, 1px `glassEdge`. Fill `rating*Tint` (30% by day, 16% by night); label 16 bold and interval 12pt in `rating*Ink`.
- Colours keep their meaning in every palette (red, amber, green, blue) but shift where they would collide with the accent (Indigo's Easy is cyan). The word always carries the meaning.
- Hardware keyboard: 1–4 rate, with key hints shown only when a keyboard is attached.
- Accessibility label: "Good, next review in 10 minutes"; "—" when no preview exists.
- **Consumer provides** `previews` (intervals or nil), `onRate(value)`, `showsKeyHints`.
- macOS: 52pt at 14pt corners. visionOS: glass capsules with a coloured dot and label, no tinted fill.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
