# StandOut – visual preview

A clickable, front-end-only preview of the event marketplace. All data is fake
(see `js/data.js`) and no real payments happen.

## Pages
| File | What it shows |
|---|---|
| `index.html` | Discover events (search + filter) |
| `event.html?id=happy-place` | Event page: hero, key facts, packages |
| `book.html` | Floor plan with live stand picking and running total |
| `checkout.html` | Your details, boosts, payment choice |
| `confirmation.html` | Booking confirmed |
| `exhibitor.html` | Exhibitor checklist and "my stand" |
| `organiser.html` | Organiser dashboard, applications, promote builder |
| `revenue.html` | Revenue model with sliders (internal / pitch only) |
| `for-organisers.html` | Organiser landing page: how it works, features, pricing calculator, FAQ |
| `signup.html` | Sign up and onboarding, split for exhibitors and organisers (`?role=exhibitor` or `?role=organiser`) |
| `login.html` | Log in with an emailed link |
| `create-event.html` | Create an event: details, floor plan editor, review and publish |
| `exhibitors.html` | Exhibitor directory for organisers: filters, shortlist, profiles, invites |

## Put it online free with GitHub Pages
1. Create a new **public** repository on GitHub (e.g. `standout-preview`).
2. Upload everything in this folder to the root of the repo (keep the `css`, `js` and `fonts` folders).
3. Go to **Settings → Pages**, set Source to *Deploy from a branch*, branch `main`, folder `/ (root)`, and Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/standout-preview/`

Note: GitHub Pages on a free account needs a public repo. If you want the repo to stay private,
link it to Netlify instead (free) and it will deploy the same files.

## Fonts
Montserrat loads from Google Fonts automatically. Raging is a licensed font, so add your
`Raging.woff2` (or `.woff` / `.otf`) file into the `fonts/` folder and headlines will switch to it.
Until then a similar wide heavy font is used as a stand-in.

## Brand colours
Set once in `css/styles.css` under `:root`:
`#ff00b1` pink · `#3cb6ba` teal · `#be6cff` violet · `#fbc500` yellow
