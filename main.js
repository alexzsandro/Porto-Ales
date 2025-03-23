// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollTop = 0;
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in animation to sections
document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(20px)";
  section.style.transition = "all 0.5s ease-out";
  observer.observe(section);
});

// Active navigation highlight
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Parallax effect for profile image
const profilePic = document.getElementById("profile-pic");
window.addEventListener("scroll", () => {
  const offset = window.pageYOffset;
  profilePic.style.transform = `translateY(${offset * 0.3}px)`;
});

// Interactive skill items
document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.1) rotate(2deg)";
  });

  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1) rotate(0deg)";
  });
});

// carousel
