  // JavaScript to handle the menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    // Toggle the 'hidden' class on the mobile menu
    mobileMenu.classList.toggle("hidden");

    // Toggle the 'aria-expanded' attribute for accessibility
    const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
    menuToggle.setAttribute("aria-expanded", !expanded);
  });