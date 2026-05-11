// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
  ".section, .portfolio-section, .responsive-section, .case-study, .card"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  revealOnScroll.observe(element);
});