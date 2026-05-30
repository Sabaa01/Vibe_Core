// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  });
});

// ==========================
// TRACK PLAY / PAUSE
// ==========================

const playButtons = document.querySelectorAll(".playBtn");

playButtons.forEach(button => {
  button.addEventListener("click", () => {

    const currentTrack = button.closest(".track");
    const isPlaying = currentTrack.classList.contains("playing");

    document.querySelectorAll(".track").forEach(track => {
      track.classList.remove("playing");

      const btn = track.querySelector(".playBtn");
      if (btn) {
        btn.innerHTML = "▶";
      }
    });

    if (!isPlaying) {
      currentTrack.classList.add("playing");
      button.innerHTML = "❚❚";
    }
  });
});

// ==========================
// STATS COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll("[data-counter]");

function animateCounter(counter) {

  const target = Number(counter.dataset.counter);

  let current = 0;

  const increment = target / 100;

  const updateCounter = () => {

    if (current < target) {

      current += increment;

      counter.textContent =
        Math.floor(current).toLocaleString();

      requestAnimationFrame(updateCounter);

    } else {

      counter.textContent =
        target.toLocaleString();

    }
  };

  updateCounter();
}

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        animateCounter(entry.target);

        observer.unobserve(entry.target);

      }

    });

  },
  { threshold: 0.5 }
);

counters.forEach(counter => {
  observer.observe(counter);
});

// ==========================
// HEADER BLUR ON SCROLL
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 50) {

    header.style.background =
      "rgba(5,5,10,0.85)";

    header.style.backdropFilter =
      "blur(25px)";

  } else {

    header.style.background =
      "rgba(255,255,255,0.05)";

  }

});

// ==========================
// HERO PARALLAX
// ==========================

const hero = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

  if (!hero) return;

  const offset = window.pageYOffset;

  hero.style.backgroundPositionY =
    offset * 0.5 + "px";

});

// ==========================
// BUTTON GLOW EFFECT
// ==========================

const neonButtons =
document.querySelectorAll(".neon-btn");

neonButtons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.boxShadow =
      "0 0 20px #8B5CF6, 0 0 40px #EC4899";

  });

  button.addEventListener("mouseleave", () => {

    button.style.boxShadow =
      "0 0 15px #8B5CF6";

  });

});

// ==========================
// RANDOM LIVE LISTENER COUNT
// ==========================

const liveCounter =
document.getElementById("liveListeners");

if (liveCounter) {

  let listeners = 1200;

  setInterval(() => {

    listeners +=
      Math.floor(Math.random() * 20) - 10;

    if (listeners < 1000) {
      listeners = 1000;
    }

    liveCounter.textContent =
      listeners.toLocaleString();

  }, 2000);

}

// ==========================
// FADE IN ANIMATIONS
// ==========================

const fadeElements =
document.querySelectorAll(".fade-up");

const fadeObserver =
new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add(
        "opacity-100",
        "translate-y-0"
      );

    }

  });

}, {
  threshold: 0.2
});

fadeElements.forEach(element => {
  fadeObserver.observe(element);
});

// ==========================
// CURRENT YEAR IN FOOTER
// ==========================

const yearElement =
document.getElementById("year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}

console.log(
  "%cVIBE_CORE ONLINE",
  "color:#06B6D4;font-size:20px;font-weight:bold;"
);