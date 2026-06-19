// =====================
// TYPEWRITER EFFECT
// =====================
const text = "TACTICAL LUXURY HEADWEAR";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

typeWriter();


// =====================
// SMOOTH SCROLL
// =====================
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}


// =====================
// SCROLL REVEAL (cards)
// =====================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const pos = card.getBoundingClientRect().top;

    if (pos < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
