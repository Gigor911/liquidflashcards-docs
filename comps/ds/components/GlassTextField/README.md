# GlassTextField

A labelled field on a glass card (`radius-field` 20, 12×16 padding): an uppercase `field-label` above `body` text that grows up to 8 lines.

- Placeholder in `textSecondary`.
- **Error**: the label turns `destructive`, the card gets a 1.5pt `destructive` outline and a 13pt semibold message with an `exclamationmark.circle` glyph below the text. Never colour alone.
- **Consumer provides** `label`, the `text` binding, optional `prompt`, `minHeight`, `error`, focus binding.

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
