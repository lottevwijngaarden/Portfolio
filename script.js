// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Project overlay
const projectDetail = document.getElementById('projectDetail');
const projectContent = document.getElementById('projectContent');
const closeBtn = document.querySelector('.close-btn');

// Opent projecten wanneer je op card klikt
function openProject(project) {
  let content = '';

 if (project === 'planmaatje') {
  content = `
    <article class="pm-page">

      <header class="pm-header">
        <h2 class="pm-title">PlanMaatje</h2>
        <p class="pm-subtitle">Dagstructuur-tool voor ouderen met dementie</p>
      </header>

      <!-- HERO -->
      <figure class="pm-hero">
        <img src="img/inhoud/PlanMaatje-expocropped.jpg" alt="PlanMaatje - Expo">
      </figure>

      <!-- TEKST -->
      <section class="pm-text">
        <div class="pm-block">
          <h3>Opdrachtgevers</h3>
          <p>
            <strong>Maartje Vermeer &amp; Katie Verschueren</strong><br>
            Uitgevoerd door het Centre of Expertise Perspectief in Gezondheid in samenwerking met Urban Living Lab Breda,
            als onderdeel van Werkplaats Sociaal Domein Ouderen
          </p>
        </div>

        <div class="pm-block">
          <h3>De opdracht</h3>
          <p>
            De doelstelling voor (t)huis van de toekomst was het ontwerpen van interactieve technologie die mensen met dementie
            en hun mantelzorgers helpt meer regie te houden en langer zelfstandig thuis te wonen.
          </p>
        </div>

        <div class="pm-block">
          <h3>Het ontwerp</h3>
          <p>
            PlanMaatje helpt ouderen met dementie (en hun mantelzorgers) om meer structuur in hun dag te brengen.
            Door middel van magneetjes en een ronddraaiend mechanisme ziet de doelgroep welke taak er op dat moment uitgevoerd moet worden.
          </p>
          <p>
            Om prikkels te beperken zijn er verschillende inschuifbare voorkanten gemaakt,
            om meer of minder uur op een dag te kunnen zien.
          </p>
        </div>

        <div class="pm-block">
          <h3>Mijn rol</h3>
          <p>
            Ik bracht de behoeften van de doelgroep in kaart, legde verbanden en vertaalde die naar een helder concept
            en schetsen voor een werkend ontwerp. Verder focuste ik me op een nette afwerking van het prototype.
          </p>
        </div>

        <!-- META: datum + tools -->
        <div class="pm-meta">
          <div class="pm-meta-item">
            <span class="pm-meta-label">Datum</span>
            <span class="pm-meta-value">Maart 2025</span> <!--DATUM-->
          </div>
          <div class="pm-meta-item">
            <span class="pm-meta-label">Tools</span>
            <span class="pm-meta-value"> Schetsen, Prototyping, Illustrator, Lasersnijder</span>
          </div>
        </div>
      </section>

      <!-- AFBEELDINGEN NAAST ELKAAR -->
      <section class="pm-gallery">
        <figure class="pm-card">
          <img src="img/inhoud/PlanMaatje-eindprototype.jpg" alt="PlanMaatje eindprototype">
        </figure>

        <figure class="pm-card">
          <img src="img/inhoud/PlanMaatje-prototypes.jpg" alt="PlanMaatje prototypes">
        </figure>
      </section>

    </article>
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

  document.body.classList.add('no-scroll');  
  projectDetail.scrollTo(0, 0);              
}


closeBtn.addEventListener('click', () => {
  projectDetail.classList.add('hidden');
  document.body.classList.remove('no-scroll');
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

//copyright jaartal
document.getElementById("year").textContent = new Date().getFullYear();



