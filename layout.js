/* Shared header, footer and small helpers used on every page. */

const money = (n) =>
  "£" + Number(n).toLocaleString("en-GB", {
    minimumFractionDigits: n % 1 ? 2 : 0,
    maximumFractionDigits: 2
  });

const qs = (key) => new URLSearchParams(location.search).get(key);

const LOGO = (light) =>
  `<a class="logo${light ? " logo--light" : ""}" href="index.html" aria-label="StandOut home">Stand<span>Out</span></a>`;

function renderHeader(kind = "public", active = "") {
  const el = document.getElementById("site-header");
  if (!el) return;
  const cur = (name) => (name === active ? ' aria-current="page"' : "");

  let right = "";
  if (kind === "public") {
    right = `
      <nav class="nav" aria-label="Main">
        <a href="index.html"${cur("discover")}>Discover events</a>
        <a href="for-organisers.html"${cur("for-organisers")}>For organisers</a>
        <a href="exhibitor.html"${cur("exhibitor")}>For exhibitors</a>
        <a href="login.html"${cur("login")}>Log in</a>
        <a class="btn btn--yellow btn--sm" href="signup.html?role=organiser">List your event</a>
      </nav>`;
  } else if (kind === "auth") {
    right = active === "login"
      ? `<p class="small" style="margin:0">New here? <a href="signup.html"><strong>Create an account</strong></a></p>`
      : `<p class="small" style="margin:0">Already have an account? <a href="login.html"><strong>Log in</strong></a></p>`;
  } else if (kind.startsWith("step")) {
    const n = Number(kind.slice(4));
    const s = (i, label) =>
      `<li${i < n ? ' class="is-done"' : ""}${i === n ? ' aria-current="step"' : ""}>${i} · ${label}</li>`;
    right = `<ol class="steps" aria-label="Booking progress">${s(1, "Pick a stand")}${s(2, "Your details")}${s(3, "Pay")}</ol>`;
  } else if (kind === "organiser") {
    right = `
      <nav class="nav" aria-label="Organiser">
        <a href="organiser.html"${cur("dashboard")}>Dashboard</a>
        <a href="create-event.html"${cur("create")}>Create event</a>
        <a href="exhibitors.html"${cur("find")}>Find exhibitors</a>
        <a href="organiser.html#applications">Applications</a>
        <a href="organiser.html#promote">Promote</a>
      </nav>`;
  } else if (kind === "exhibitor") {
    right = `
      <nav class="nav" aria-label="Exhibitor">
        <a href="exhibitor.html"${cur("hub")}>My stand</a>
        <a href="index.html">Discover events</a>
      </nav>`;
  }

  const tag = kind === "organiser" ? '<span class="role-tag">Organiser</span>'
            : kind === "exhibitor" ? '<span class="role-tag">Exhibitor</span>' : "";

  el.className = "site-header";
  el.innerHTML = `<div class="wrap"><div>${LOGO()}${tag}</div>${right}</div>`;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `
    <div class="wrap">
      ${LOGO(true)}
      <nav aria-label="Footer">
        <a href="index.html">Discover</a>
        <a href="event.html?id=happy-place">Example event</a>
        <a href="exhibitor.html">Exhibitor hub</a>
        <a href="for-organisers.html">For organisers</a>
        <a href="signup.html">Sign up</a>
        <a href="organiser.html">Organiser dashboard</a>
        <a href="create-event.html">Create event</a>
        <a href="exhibitors.html">Find exhibitors</a>
        <a href="revenue.html">Revenue model</a>
      </nav>
      <span>Preview concept · event details shown for illustration only</span>
    </div>`;
}

function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("is-on");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("is-on"), 2600);
}

/* Decorative circles that stand in for event photos */
function blobArt(colour) {
  const sets = {
    pink:   ["#fbc500", [["#be6cff", 38, 62, -8], ["#3cb6ba", 46, -10, 58], ["#fff", 18, 46, 52]]],
    teal:   ["#3cb6ba", [["#fbc500", 44, 58, -14], ["#ff00b1", 30, -6, 50], ["#fff", 14, 34, 22]]],
    yellow: ["#fbc500", [["#ff00b1", 40, -8, -12], ["#3cb6ba", 36, 60, 46], ["#fff", 16, 40, 58]]],
    violet: ["#be6cff", [["#3cb6ba", 42, 56, 40], ["#fbc500", 34, -8, -6], ["#fff", 16, 30, 54]]]
  };
  const [bg, circles] = sets[colour] || sets.pink;
  return { bg, html: circles.map(([c, size, left, top]) =>
    `<span class="blob" style="background:${c};width:${size}%;aspect-ratio:1;left:${left}%;top:${top}%"></span>`).join("") };
}
