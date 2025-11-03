// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Project overlay
const projectDetail = document.getElementById('projectDetail');
const projectContent = document.getElementById('projectContent');
const closeBtn = document.querySelector('.close-btn');
const backBtn = document.querySelector('.back-btn');

// Opent projecten wanneer je op card klikt
function openProject(project) {
  let content = '';

  if (project === 'planmaatje') {
    content = `
      <h2>PlanMaatje</h2>
      <p>Opdrachtgevers:
Maartje Vermeer & Katie Verschueren
Uitgevoerd door het Centre of Expertise Perspectief in Gezondheid in samenwerking met Urban Living Lab Breda, als onderdeel van Werkplaats Sociaal Domein Ouderen

De opdracht:
De doelstelling voor (t)huis van de toekomst was het ontwerpen van interactieve technologie die aangepast is naar de behoeften van mensen met dementie én hun mantelzorgers, zodat de eigen regie van beiden in huis bevorderd wordt. Het doel is om mensen met dementie in staat te stellen langer zelfstandig thuis te wonen.

Het ontwerp:
PlanMaatje helpt ouderen met dementie (en hun mantelzorgers) om meer structuur in hun dag te brengen.
Door middel van magneetjes en een ronddraaiend meganisme ziet de doelgroep welke taak er op dat moment uitgevoerd moet worden.
Om prikkels te beperken zijn er verschillende inschuifbare voorkanten gemaakt, om meer of minder uur op een dag te kunnen zien.

Mijn inzichten:
Een ontwerp aangepast aan de behoeften van de doelgroep dmv problemen in kaart brengen en verbanden leggen. 
Concept bedacht en de vormgeving
Prototype gemaakt mbv fysieke materialen (+lasersnijder)</p>
      <div class="placeholder light-green" style="height:300px; margin-top:20px;"></div>
    `;
  } else if (project === 'sol') {
    content = `
      <h2>Sól</h2>
      <p>WIP</p>
      <div class="placeholder light-green" style="height:300px; margin-top:20px;"></div>
    `;
  } else if (project === 'thirteen') {
    content = `
      <h2>Thirteen</h2>
      <p>WIP</p>
      <div class="placeholder light-green" style="height:300px; margin-top:20px;"></div>
    `;
  } else if (project === 'happyplants') {
    content = `
      <h2>HappyPlants</h2>
      <p>WIP</p>
      <div class="placeholder light-green" style="height:300px; margin-top:20px;"></div>
    `;
  } else if (project === 'miniKathedraal') {
    content = `
      <h2>Mijn mini Groene Kathedraal</h2>
      <p>WIP</p>
      <div class="placeholder light-green" style="height:300px; margin-top:20px;"></div>
    `;
  } else if (project === 'quietSleutel') {
    content = `
      <h2>Quiet Sleutel</h2>
      <p>WIP</p>
      <div class="placeholder light-green" style="height:300px; margin-top:20px;"></div>
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
