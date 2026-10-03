# GlassSheetBar

The top bar of editor sheets: a glass Cancel pill, a centred 17pt bold title and an accent confirm capsule.

- Pills 40pt tall; Cancel 16 semibold `textPrimary`, confirm 16 bold `textOnAccent` on `ctaFill` (`shadow-cta`), disabled at 0.45.
- Esc triggers Cancel, Return triggers confirm.
- **Consumer provides** `title`, `confirmTitle`, `confirmDisabled`, `onCancel`, `onConfirm`.
- macOS sheets put buttons bottom-right, primary on the right.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
