// Hide Preloader when page fully loads
window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling after preloader disappears
  }, 800);
});
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden, .slide-left, .slide-right, .slide-up, .zoom-rotate, .parallax");

    function revealOnScroll() {
        let scrollPosition = window.scrollY + window.innerHeight - 100;

        elements.forEach((element) => {
            let elementTop = element.offsetTop;

            if (scrollPosition > elementTop) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on load
});
// Create Back to Top Button
const backToTopBtn = document.createElement("button");
backToTopBtn.id = "backToTop";
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopBtn);

// Show Button on Scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// Smooth Scroll to Top
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a");
  const loader = document.createElement("div");
  loader.id = "top-loader";
  document.body.prepend(loader);

  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Stop page reload
      loader.style.width = "0%";
      loader.style.transition = "none";
      loader.style.animation = "crazyGlow 0.5s infinite alternate"; // Start glowing effect

      setTimeout(() => {
        loader.style.transition = "width 0.7s ease-in-out";
        loader.style.width = "30%";
      }, 50);

      setTimeout(() => {
        loader.style.transition = "width 0.5s ease-in-out";
        loader.style.width = "70%";
      }, 400);

      setTimeout(() => {
        loader.style.transition = "width 0.3s ease-out";
        loader.style.width = "100%";
      }, 900);

      setTimeout(() => {
        loader.style.width = "0%";
        loader.style.animation = "none"; // Stop glowing
      }, 1300);
    });
  });
});
document.querySelectorAll('.match-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = "0 10px 30px rgba(255, 0, 0, 0.4)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
    });
});