

// sticky header function

  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });


//Menu Toggle

function toggleMenu() {
  const menuToggle = document.querySelector('.menuToggle');
  const mobileNavigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  mobileNavigation.classList.toggle('mobile-active');
}

//swiper Js


