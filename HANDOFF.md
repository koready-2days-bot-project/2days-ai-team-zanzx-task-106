**Test link:** https://koready-lieferoo.vercel.app
**Repository:** https://github.com/lieferoo/address-to-rider-flow
**Commit / tag:** v1.0.0
**Tested on:** Mobile Chrome 390x844 view, Safari iOS

## How to test the core flow

1. Open `index.html` on a 390px mobile view.
2. Search or select address "10, Donggyo-ro 51-gil, Mapo-gu, Seoul" (`ADR-002`).
3. Input building details "Bldg 101 Rm 402" and tap "Continue to Checkout".
4. Select a request preset or choose "Custom request" to enter untranslated text.
5. Tap "Place Order", then tap "Open Rider Screen (Korean View)".
6. Verify the rider card shows Korean address ("서울특별시 마포구 동교로51길 10 101동 402호") with English original text underneath and request box in Korean or amber fallback state.

## Built

- Connected 5-screen flow — `index.html`, `details.html`, `checkout.html`, `confirmation.html`, `rider.html`
- Dual-language display — English user view connected to Korean rider view
- Fallback error state handling — Untranslatable text is shown in warning box with original English

## Not built (and why)

- Live Payment & Maps — Excluded per brief scope

## States handled

| State | Where | How to see it |
| --- | --- | --- |
| Empty field | Address Details (`details.html`) | Click Continue without typing unit number |
| No search results | Address Search (`index.html`) | Type "xyz123" into search input |
| Wrong or incomplete address | Address Search (`index.html`) | Type special characters like `<script>` |

## Known bugs

- None

## Changes since the last version

- Initial release for PM review