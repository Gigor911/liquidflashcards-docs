# SegmentedFilterTabs

A glass capsule track (44pt, `radius-control`) with the selected option as an `accent` capsule and a `textOnAccent` label.

- **Use** for 2–4 mutually exclusive filters over a list (All / Due / New).
- Labels 16pt: selected bold, others semibold in `textPrimary`; they shrink to 75% before truncating.
- Selection animates with a 0.3s spring.
- **Consumer provides** the `selection` binding over a `CaseIterable` option type, its label key path and an accessibility label.
- visionOS: the native segmented picker.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
