Glass Momentum is the design language of Liquid Flash Cards, a spaced-repetition flashcard app for iPhone, iPad, Mac and Apple Vision Pro. Frosted glass sits on a soft, living plum field; rings, a week strip and a forecast turn the study habit into visible momentum. Day is **Refined plum**, Night is **Night plum**; five more palettes remap every colour.

## Voice and content

- **One clear next step.** Headlines count down what's left, not the backlog: "Review 8 more to hit your goal", then a quiet "or study all 362 due". Progress already made is shown first ("12 / 20 cards").
- **Sentence case everywhere**: buttons, titles, sheet bars ("Start session", "New card"). Uppercase only through the `section-label`, `side-label` and `field-label` styles.
- **Second person, plain verbs, no exclamation marks.** "Hi, Ihor" on Today; "4 to goal" in study; empty states say what's missing and the one thing to do ("Create a deck, or import cards to start your first session").
- **No emoji** in UI copy. Glyphs come from SF Symbols (app chrome) and Material Symbols Rounded (deck icons).
- **Counts mean one thing**: an accent badge is always cards due. Numbers use locale grouping ("3,016 cards") and tabular digits.
- **Same thing, same name on every platform**: the first tab is **Today**.
- **Evidence-based framing**: if–then study cues ("When X, I will Y"), retrieval before reveal, and a session that ends on a high with progress in words ("Memories strengthened", "Moved to long-term").
- All strings go through `L10n` / `Localizable.xcstrings` (English + 17 languages); plurals use catalog variants ("1 day", "2 days").

## Colour

- Build every screen on the field: `glassFieldBase` with `glassGlowA`, `glassGlowB`, `glassGlowC` (see GlassField). `canvasBG` is the solid fallback and the launch screen.
- Put content on glass cards: `glassFill` + `glassEdge` + `shadow-glass`. With Reduce Transparency, cards become `listCardBG`.
- Text: `textPrimary` for titles, row titles, card faces and figures; `textSecondary` for subtitles, units, dates, section labels and placeholders. There is no tertiary text colour; show a disabled control at `opacity-disabled`.
- `accent` (plum by day, pink by night) is the one brand hue: the goal ring, today, links, the selected tab, due badges, icon-tile glyphs. On accent fills and `ctaFill` always use `textOnAccent` (white by day, deep plum `#1A1016` by night), never literal white.
- `recallAccent` (blue) is the only second hue, for recall and memory strength. Never use it for actions.
- Rating colours keep their meaning: Again red, Hard amber, Good green, Easy blue. Buttons and pills are `rating*Tint` fills with `rating*Ink` labels; solid `rating*` colours are for dots and charts. Always show the word too.
- Status: `destructive` for delete and validation, `success` for review, `warning` for due and relearning.
- Contrast holds in every theme on the grounds text really sits on: the bare field with each glow at full strength, glass over the field and glows, and `listCardBG`. `textPrimary` reaches 7:1; `textSecondary` and `accent` 4.5:1 even straight on the field; `recallAccent`, `destructive` and the `rating*Ink` labels 4.5:1 inside cards. Put `recallAccent` and `destructive` text on cards, not on the bare field. The app's palette script and tests enforce the same floors.
- Views never hard-code hex: every colour is an `AppColors` token (Swift) or its variable here.

### Palettes

Plum is the source palette. `AppColors` is written in plum and a generated table (`AppPaletteTable`) maps each hex to the chosen palette at run time, day and night (ADR 0009). The Indigo ink, Forest and Terracotta themes in this system are that table applied to every token; Saffron and Lagoon are listed here only (the system holds at most eight themes).

| Palette | Mood | Accent day / night | Recall day / night |
| --- | --- | --- | --- |
| Plum (default) | Refined plum / Night plum | `#7D3B64` / `#DB93B6` | `#416AA0` / `#86A8D8` |
| Indigo ink | Ink on warm paper, apricot counterpoint | `#3B4694` / `#A9B3F6` | `#A4512C` / `#F0A47F` |
| Forest | Deep pine on moss paper, straw-gold | `#2E5D3E` / `#93CFA2` | `#8A5C0C` / `#E3BA68` |
| Terracotta | Sunbaked clay on cream, deep teal | `#9A4128` / `#EFA285` | `#1D6868` / `#7FC9C2` |
| Saffron & graphite | Graphite on stone, lit by saffron | `#835A00` / `#F2C24F` | `#3E5E8E` / `#91B4E8` |
| Lagoon | Lagoon teal on sea mist, warmed by coral | `#0E6776` / `#72D0DB` | `#A8483A` / `#F3A392` |

Mode is Light, Dark or Auto (default, follows the system). The launch screen and app icon stay plum in every palette.

## Typography

- One family: **Instrument Sans** (SIL OFL), 400 / 500 / 600 / 700 and italic, through `Font.app(_:_:)`, which mirrors the iOS text styles and scales with Dynamic Type.
- Page titles `page-title` (34 bold, −0.5 tracking); under an eyebrow date, `greeting-title` (30 bold).
- Card faces: `card-question` (32 bold) and `card-answer` (26 bold). Figures: `figure` (26 bold) followed by a 16pt medium unit in `textSecondary` ("87% recall rate").
- Rows: `row-title` (16 semibold) over `footnote` (13) in `textSecondary`.
- Capsule labels: `cta-label` (17 bold), `cta-secondary-label` (16 bold).
- Section labels: `section-label` (13 bold, uppercase, 0.5 tracking).
- Mac: Instrument Sans only for large titles, card faces and figures; everything else SF Pro at Mac sizes (13 body, 11 captions). visionOS: system styles.

## Space, shape and layout

- Screen gutter `screenHorizontalPadding` 20 (visionOS 24, Mac 16). Rows: 16 horizontal, 12 vertical, 12 between tile, text and trailing items. Cards stack 12 apart; sections open 18–20 below the previous card.
- Radii are generous and continuous: `radius-card` 26, `radius-hero` 30, `radius-group` 24, `radius-study` 34, `radius-field` 20, `radius-tile` 12. Buttons, badges and selections are capsules (`radius-pill`).
- Mac keeps radii concentric: window 22, panels inset 8 at 14, cards at most 14.
- Every control is at least `minTapTarget` 44. Primary capsules 56, secondary 52, rating buttons 68, floating add 60.
- iPad: a 12-column grid inside the sidebar gutter, cards fill the width; Decks, Card and Settings use sidebar / list / detail; Stats is a bento grid. Regular-width reading columns max out at 700, the study card at 560.

## Depth

- By day, glass lifts with a soft plum shadow (`shadow-glass`, radius 15, y 10) and primaries with `shadow-cta`. By night there are no drop shadows: glass is a 4–5% lift with hairline edges.
- Separators are 1pt `glassHairline`, never heavy rules.
- System Liquid Glass (`glassEffect`) is for floating controls only (tab bar, toolbar, the study close button); content stays on material.

## Motion and states

- Press: every button and row scales to 0.97 on touch-down, 0.16s ease-out (glass circles 0.94 + 0.85 opacity). With Reduce Motion, a light dim instead.
- Card reveal: tap or Space shows the answer at once or with a ≤200ms ease-out; never a slow 3D flip. Rating swaps to the next card instantly; keyboard actions never animate.
- Numbers that change after a review (rings, counts, streak) tick with a short ease-out; Reduce Motion turns it into a cross-fade. Rings spring (0.8s, bounce 0.15).
- Sheets, windows and popovers use the system transitions.
- Disabled: `opacity-disabled` 0.45. Focus (web renditions): a 2px `accent` ring.

## Iconography

- App chrome uses **SF Symbols** (medium weight, `chevron.forward` / `arrow.forward` so they mirror in right-to-left languages). They aren't redistributable, so this system's previews use the comps' stand-in line icons (24 grid, 1.8 stroke, round caps).
- Deck icons are **Material Symbols Rounded** (about 4,267 glyphs, searchable) on a 38pt `ringTrack` tile in `accent`; a deck without one gets a stable fallback from its name.
- The mark is a fanned two-card stack, the front card with two text bars (Logos). Use the supplied files; never redraw it.

## Platforms

- **iPhone / iPad**: everything above.
- **Mac**: native in soul, Glass Momentum in character: native window backgrounds and label colours, a blush window tint with light cards, plum for selection, prominent buttons, sidebar icons and due badges; `controlTint` `#A9557F` by night keeps AppKit's white labels readable. Study opens its own window (Space flips, 1–4 rate, Esc ends).
- **Apple Vision Pro**: system glass, vibrant text and ornaments; brand colour only for the goal pink `#E7A3C4`, recall blue `#8FB4E8`, rating labels and the plum fill `#8C4A73` on primary actions. No light/dark.
- **Widgets** follow the chosen palette through the App Group.

## Not synced

- Colour tokens are the iPhone/iPad set; Mac and visionOS values appear above only where they differ in role. The pre-Glass Momentum header-card family (`headerCard*`, header decorations) is left out: it is gone on iOS.
- Saffron and Lagoon are listed by accent and recall only (the eight-theme limit); their full token sets come from `AppPaletteTable`.
- Material Symbols Rounded (the deck icon font) isn't included; nor are SF Symbols.
- Components are static web renditions, hand-written from the SwiftUI views (no web component library exists).
