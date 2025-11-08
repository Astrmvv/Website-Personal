document.addEventListener("DOMContentLoaded", () => {
  const typewriterText = "I Am Web Developer";
  const typewriterElement = document.getElementById("typewriter");
  let index = 0;

  function typeWriter() {
    if (index < typewriterText.length) {
      typewriterElement.innerHTML += typewriterText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();

  // Menu Toggle
  const toggle = document.getElementById("menu-toggle");
  const navList = document.querySelector("nav ul");
  toggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  // Fade-in Animation on Scroll
  const sections = document.querySelectorAll("section");
  function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach((sec) => {
      const boxTop = sec.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        sec.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", revealSections);
  revealSections();

  // Scroll Spy (highlight menu aktif)
  const navLinks = document.querySelectorAll("nav ul li a");

  function activateMenu() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", () => {
    revealSections();
    activateMenu();
  });
});
