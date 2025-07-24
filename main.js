const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
ScrollReveal().reveal("#Tarjetas .section__header", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 0,
});

ScrollReveal().reveal("#Tarjetas .section__description", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 200,
});

ScrollReveal().reveal("#Tarjetas .special__card", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  interval: 200,
});
// BLOQUEO TEMPORAL CON CUENTA REGRESIVA ESTILO LINKEO
const overlay = document.createElement("div");
overlay.id = "bloqueoOverlay";
overlay.style.cssText = `
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 9999;
  font-family: 'Segoe UI', sans-serif;
`;

overlay.innerHTML = `
  <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">🚧 Linkeo está preparando algo increíble</h1>
  <p style="font-size: 1.2rem;">Muy pronto podrás conectar con un solo toque</p>
  <p style="margin-top: 1rem;">🕒 Falta poco para empezar la aventura</p>
  <div class="countdown-box" style="display: flex; gap: 1rem; margin-top: 1rem;">
    <div class="countdown-item">
      <h2 id="cd-days">0</h2>
      <span>Días</span>
    </div>
    <div class="countdown-item">
      <h2 id="cd-hours">0</h2>
      <span>Horas</span>
    </div>
    <div class="countdown-item">
      <h2 id="cd-minutes">0</h2>
      <span>Minutos</span>
    </div>
    <div class="countdown-item">
      <h2 id="cd-seconds">0</h2>
      <span>Segundos</span>
    </div>
  </div>
  <p style="margin-top: 2rem; font-size: 0.9rem; color: #ccc;">powered by <strong>Linkeo</strong></p>
`;

document.body.appendChild(overlay);

// Fecha fin: 1 de agosto a las 12:00 p.m. (hora local)
const endDate = new Date("2025-08-01T12:00:00");

// Función para actualizar cuenta regresiva
function updateCountdownStyled() {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    document.getElementById("bloqueoOverlay")?.remove();
    window.location.href = "/"; // Redirige al home
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("cd-days").textContent = days;
  document.getElementById("cd-hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("cd-minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("cd-seconds").textContent = seconds.toString().padStart(2, '0');

  requestAnimationFrame(updateCountdownStyled);
}

updateCountdownStyled();
