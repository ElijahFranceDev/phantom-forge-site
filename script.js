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
const navbarContainer = document.getElementById("site-navbar");

if (navbarContainer) {
    navbarContainer.innerHTML = `
        <nav class="navbar">
            <div class="nav-left">
                <a href="phantom-files.html">The Phantom Files</a>
            </div>

            <a href="index.html" class="logo">
                PHANTOM FORGE<span>®</span>
            </a>

            <div class="nav-right">
                <a href="index.html#projects">Projects</a>
                <a href="index.html#services">Services</a>
                <a href="index.html#contact">Contact</a>
            </div>
        </nav>
    `;
}
const portfolioProjects = [
  {
    file: "FILE 001",
    type: "FLAGSHIP SOFTWARE",
    title: "CineScribe",
    category: "AI / Product Concepts",
    image: "images/portfolio/cinescribe-mockup.png",
    description:
      "A cinematic AI writing platform concept built for authors, story development, manuscript editing, and immersive creative workflows."
  },
  {
    file: "FILE 002",
    type: "AI ENGINE CONCEPT",
    title: "PhantomSync",
    category: "AI / Product Concepts",
    image: "images/portfolio/phantomsync.png",
    description:
      "The AI engine concept behind story analysis, creative intelligence, smart rewriting, and connected workflow support."
  },
  {
    file: "FILE 003",
    type: "MOBILE AUTHOR EXPERIENCE",
    title: "Paris M. France Mobile",
    category: "Author / Creative Brand Concepts",
    image: "images/portfolio/paris-author-site-mockup.png",
    description:
      "A responsive mobile mockup showing how an author platform can feel polished, readable, and premium on smaller screens."
  },
  {
    file: "FILE 004",
    type: "BOOKSTORE CONCEPT",
    title: "Paris M. France Bookstore",
    category: "Author / Creative Brand Concepts",
    image: "images/portfolio/paris-bookstore.png",
    description:
      "A digital bookstore concept for featured books, reader discovery, pre-orders, and direct author-to-reader sales."
  },
  {
    file: "FILE 005",
    type: "EMAIL / SIGNUP FLOW",
    title: "Paris Author Signup",
    category: "Author / Creative Brand Concepts",
    image: "images/portfolio/paris-author-signup.jpeg",
    description:
      "A reader signup concept built to support updates, launches, pre-orders, and audience growth."
  },
  {
    file: "FILE 006",
    type: "BEFORE / AFTER STUDY",
    title: "Ki's World Before Concept",
    category: "Before / After Concepts",
    image: "images/portfolio/ki-world-mockup.png",
    description:
      "A before-and-after style concept showing how a simple author presence can evolve into a more polished digital brand."
  },
  {
    file: "FILE 007",
    type: "TATTOO CONCEPT",
    title: "Roxy Tattoo Studio",
    category: "Tattoo Concepts",
    image: "images/portfolio/roxy-mockup-a.png",
    description:
      "A cinematic tattoo studio concept focused on atmosphere, artist identity, mobile booking, and premium presentation."
  },
  {
    file: "FILE 008",
    type: "TATTOO CONCEPT",
    title: "Liberty Tattooz",
    category: "Tattoo Concepts",
    image: "images/portfolio/liberty-tattooz-mockup-a.png",
    description:
      "A moody tattoo concept shaped around feminine detail, intentional artistry, and a cleaner path from discovery to booking."
  },
  {
    file: "FILE 009",
    type: "AI SALON EXPERIENCE",
    title: "Hair By Leila",
    category: "Lifestyle & Beauty Concepts",
    image: "images/portfolio/Hair-by-leila-mockup-a.png",
    description:
      "A luxury salon concept exploring AI-personalized beauty, elevated booking, and editorial visual direction."
  },
  {
    file: "FILE 010",
    type: "MULTI-SERVICE BRAND",
    title: "Versa-Ti Hands",
    category: "Lifestyle & Beauty Concepts",
    image: "images/portfolio/versa-ti-hands-mockup-a.png",
    description:
      "A warm, cinematic redesign for a multi-service lifestyle brand blending beauty, catering, treats, and childcare."
  },
  {
    file: "FILE 011",
    type: "BRAND SYSTEM",
    title: "PhantomOS",
    category: "AI / Product Concepts",
    image: "images/portfolio/phantomos.png",
    description:
      "A private AI command interface concept designed for personal productivity, project control, automation, and cinematic assistant workflows."
  }
];

const portfolioGrid = document.getElementById("portfolio-grid");

if (portfolioGrid) {
  portfolioGrid.innerHTML = portfolioProjects
    .map((project, index) => {
      const largeClass = index === 0 ? "large-card" : "";

      return `
        <article class="archive-card ${largeClass}">
          <div class="archive-image">
            <img src="${project.image}" alt="${project.title} mockup">
          </div>

          <div class="archive-content">
            <p class="file-label">${project.file} · ${project.type}</p>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
        </article>
      `;
    })
    .join("");
}