document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".page-section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);

      sections.forEach((sec) => sec.classList.remove("active"));
      navLinks.forEach((item) => item.classList.remove("active"));

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
      }

      navLinks.forEach((item) => {
        if (item.getAttribute("href") === `#${targetId}`) {
          item.classList.add("active");
        }
      });
    });
  });
});
