// Mobile Navigation Toggle
const navLinks = document.querySelector(".nav__links");
const navToggle = document.createElement("div");
navToggle.innerHTML = `<i class="ri-menu-line"></i>`;
navToggle.classList.add("nav__toggle");
document.querySelector("nav").appendChild(navToggle);

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navToggle.innerHTML = navLinks.classList.contains("active")
    ? `<i class="ri-close-line"></i>`
    : `<i class="ri-menu-line"></i>`;
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll(".nav__links .link").forEach((link) => {
  link.addEventListener("click", () => {
    const sectionName = link.textContent.toLowerCase();
    const section = document.querySelector(`.${sectionName}__container`);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("active");
      navToggle.innerHTML = `<i class="ri-menu-line"></i>`;
    }
  });
});

// Read More Button Functionality
const readMoreBtn = document.querySelector(".header__content button");
const readMoreText = document.querySelector(".header__content p");

readMoreBtn.addEventListener("click", () => {
  if (readMoreText.classList.contains("expanded")) {
    readMoreText.style.maxHeight = "100px";
    readMoreText.classList.remove("expanded");
    readMoreBtn.textContent = "Read more";
  } else {
    readMoreText.style.maxHeight = "none";
    readMoreText.classList.add("expanded");
    readMoreBtn.textContent = "Read less";
  }
});

// Interactive Country Cards Hover Effect
document.querySelectorAll(".country__card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
