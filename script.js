// Plani, Laidler, Fleishman, Sklaar & Associates — redesign interactions
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Current year in footer
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Reveal-on-scroll for cards and gallery
  var revealTargets = document.querySelectorAll(".card, .member, .gallery img, .practice, .about-media");
  if ("IntersectionObserver" in window) {
    revealTargets.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = "opacity .5s ease, transform .5s ease";
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  }
})();
