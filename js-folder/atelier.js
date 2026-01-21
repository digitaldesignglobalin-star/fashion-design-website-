// NAVBAR JS 



const nav = document.getElementById('main-nav');
const trigger = document.getElementById('nav-trigger');

// Helper: check if device is mobile size
function isMobile() {
    return window.innerWidth <= 768;
}

/* -------------------------
   DESKTOP: HOVER BEHAVIOR
-------------------------- */
trigger.addEventListener('mouseenter', () => {
    if (!isMobile()) {
        nav.classList.add('reveal');
        trigger.style.pointerEvents = 'none';
    }
});

nav.addEventListener('mouseleave', () => {
    if (!isMobile()) {
        nav.classList.remove('reveal');
        trigger.style.pointerEvents = 'auto';
    }
});

/* -------------------------
   MOBILE + DESKTOP: TAP
-------------------------- */
trigger.addEventListener('click', (e) => {
    nav.classList.toggle('reveal');

    if (nav.classList.contains('reveal')) {
        trigger.style.pointerEvents = 'none';
    } else {
        trigger.style.pointerEvents = 'auto';
    }

    e.stopPropagation();
});

// Prevent nav clicks from closing it
nav.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Click outside closes nav
document.addEventListener('click', () => {
    nav.classList.remove('reveal');
    trigger.style.pointerEvents = 'auto';
});

// Safety: reset trigger if screen is resized
window.addEventListener('resize', () => {
    nav.classList.remove('reveal');
    trigger.style.pointerEvents = 'auto';
});






// mouse navigation 
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("looks-section");

  if (!scrollBtn) return;

  scrollBtn.addEventListener("click", () => {
    const currentSection = scrollBtn.closest("section");
    const nextSection = currentSection?.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});











// atelier section 
function toggleNarrative(id) {
  const element = document.getElementById(id);
  
  // If clicking an already active item, close it
  if (element.classList.contains('active')) {
    element.classList.remove('active');
  } else {
    // Close any other open panels first for a clean experience
    document.querySelectorAll('.narrative-item').forEach(item => {
      item.classList.remove('active');
    });
    // Open the selected item
    element.classList.add('active');
  }
}



