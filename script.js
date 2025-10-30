// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Project overlay
const projectDetail = document.getElementById('projectDetail');
const projectContent = document.getElementById('projectContent');
const closeBtn = document.querySelector('.close-btn');
const backBtn = document.querySelector('.back-btn');

function openProject(project) {
  let content = '';

  if (project === 'happyplants') {
    content = `
      <h2>HappyPlants</h2>
      <p>HappyPlants is een UX-designconcept voor een mobiele app die gebruikers helpt hun kamerplanten gezond te houden. De focus lag op intuïtieve navigatie, herkenbare iconen en een frisse, natuurlijke uitstraling.</p>
      <div class="placeholder light-green" style="height:300px; margin-top:20px;"></div>
    `;
  } else if (project === 'planmaatje') {
    content = `
      <h2>PlanMaatje</h2>
      <p>PlanMaatje is een dagstructuur-tool ontworpen voor ouderen met dementie. Het project richtte zich op eenvoud, herkenbaarheid en gebruiksgemak, met visuele ondersteuning voor dagelijkse routines.</p>
      <div class="placeholder beige" style="height:300px; margin-top:20px;"></div>
    `;
  }

  projectContent.innerHTML = content;
  projectDetail.classList.remove('hidden');
}

closeBtn.addEventListener('click', () => {
  projectDetail.classList.add('hidden');
});

backBtn.addEventListener('click', () => {
  projectDetail.classList.add('hidden');
  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Rotating words effect
const words = document.querySelectorAll('.rotating-words .word');
let currentWord = 0;

function rotateWords() {
  const current = words[currentWord];
  const nextWord = words[(currentWord + 1) % words.length];

  current.classList.remove('active');
  current.classList.add('exit');
  nextWord.classList.add('active');

  setTimeout(() => current.classList.remove('exit'), 800);
  currentWord = (currentWord + 1) % words.length;
}

// Start only if words exist
if (words.length > 0) {
  setInterval(rotateWords, 2500);
}
