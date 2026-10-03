# Button

Full-width sentence-case capsules: `PrimaryCTAButton` (solid `ctaFill`, `textOnAccent` label, `shadow-cta`) and `SecondaryCTAButton` (frosted glass capsule with an `accent` label).

- **Primary**: 56pt tall, `cta-label` (17 bold). One per view: the next step ("Review 8 more to hit your goal", "Start session", "Get started").
- **Secondary**: 52pt tall, `cta-secondary-label` (16 bold). Alternatives beside or below the primary.
- **Copy** is sentence case and says what happens, counting down what is left rather than the backlog. A quieter alternative can sit under the primary as a 14pt accent link ("or study all 362 due").
- **Icon** optional, leading or trailing (`arrow.forward` trails "Get started"). **Key hint** chip ("Space") only with a hardware keyboard attached.
- **States**: press scales to 0.97 (0.16s ease-out); disabled at `opacity-disabled` (0.45).
- **Consumer provides** `title`, optional `systemImage` + placement, `isDisabled`, `keyHint`, `action`.
- macOS / visionOS use native `.borderedProminent` / `.bordered` at `.large` (Mac capsules; visionOS tinted `#8C4A73`).

_Static web rendition, hand-written from the SwiftUI source; the app component is SwiftUI._
