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
            <span class="pm-meta-value">maart 2025</span> <!--DATUM-->
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
       <article class="pm-page">

      <header class="pm-header">
        <h2 class="pm-title">Sól</h2>
        <p class="pm-subtitle">Merkidentiteit voor een drankje</p>
      </header>

      <!-- HERO -->
      <figure class="pm-hero">
        <img src="img/inhoud/Sol-flyervoor.png" alt="Sól - flyer">
      </figure>

      <!-- TEKST -->
      <section class="pm-text">

        <div class="pm-block">
          <h3>De opdracht</h3>
          <p>
            Ontwerp een merkidentiteit voor een zelfbedacht, organisch drankje gericht op jongvolwassenen.
          </p>
        </div>

        <div class="pm-block">
          <h3>Het ontwerp</h3>
          <p>
            De speelse, handgeschreven typografie en warme, natuurlijke kleuren geven het blikje een vriendelijke en organische uitstraling. Illustraties en vloeiende vormen versterken het frisse, 
            organische karakter en zorgen samen voor een herkenbare merkidentiteit rond 100% organic sparkling drink.
          </p>
        </div>

        <!-- META: datum + tools -->
        <div class="pm-meta">
          <div class="pm-meta-item">
            <span class="pm-meta-label">Datum</span>
            <span class="pm-meta-value">juni 2025</span> <!--DATUM-->
          </div>
          <div class="pm-meta-item">
            <span class="pm-meta-label">Tools</span>
            <span class="pm-meta-value"> Schetsen, Moodboard, Illustrator, Mockup</span>
          </div>
        </div>
      </section>

      <!-- AFBEELDINGEN -->
    <section class="pm-gallery pm-gallery--sol">
      <figure class="pm-card">
        <img src="img/inhoud/Sol-blikjes.jpg" alt="Sól blikjes">
      </figure>

       <figure class="pm-card">
          <img src="img/inhoud/Sol-insta.png" alt="Sól instagram story">
      </figure>
    </section>

        </article>
  `;
  } else if (project === 'thirteen') {
    content = `
      <article class="pm-page">

      <header class="pm-header">
        <h2 class="pm-title">Thirteen</h2>
        <p class="pm-subtitle">Persoonlijke platenhoes</p>
      </header>

      <!-- HERO -->
      <figure class="pm-hero">
        <img src="img/Thirteen-img1.png" alt="Thirteen voorkant">
      </figure>

      <!-- TEKST -->
      <section class="pm-text">

        <div class="pm-block">
          <h3>De opdracht</h3>
          <p> 
          Ontwerp een platenhoes die jouw persoonlijkheid en/of persoonlijke ervaringen weerspiegelt.
          </p>
        </div>

        <div class="pm-block">
          <h3>Het ontwerp</h3>
          <p>
            Voor deze platenhoes ben ik gaan nadenken over de vraag: wie ben ik en wat past bij mij? Al snel kwam ik uit bij het getal 13. Omdat ik jarig ben op de dertiende, heeft dit getal voor mij een speciale betekenis. Het staat voor tegen de stroom ingaan en doen wat je zelf wilt. Daarom speelt de 13 de hoofdrol in het ontwerp.</p>
<p>Rondom dit centrale element heb ik gekeken naar dingen die mij dagelijks omringen en bij mij passen. Mijn slaapkamer bleek een goede weerspiegeling van wie ik ben. De kleur van mijn muur en de planten en droogbloemen in mijn kamer heb ik verwerkt in de rustige, natuurlijke uitstraling van de platenhoes.</p>
<p>De vlinder is voor mij een belangrijk symbool. Ik draag deze elke dag in de vorm van een armbandje en zie het als een teken van groei en vrijheid. Door de vlinder door de 13 heen te laten lopen, komt mijn persoonlijke verhaal samen in één beeld.
          </p>
        </div>

        <!-- META: datum + tools -->
        <div class="pm-meta">
          <div class="pm-meta-item">
            <span class="pm-meta-label">Datum</span>
            <span class="pm-meta-value">november 2021</span> 
          </div>
          <div class="pm-meta-item">
            <span class="pm-meta-label">Tools</span>
            <span class="pm-meta-value">Pixlr</span>
          </div>
        </div>
      </section>

      <!-- AFBEELDINGEN -->
    <section class="pm-gallery">
      <figure class="pm-card">
        <img src="img/inhoud/Thirteen-voor.png" alt="Platenhoes voorkant">
      </figure>

       <figure class="pm-card">
          <img src="img/inhoud/Thirteen-achter.png" alt="Platenhoes achterkant">
      </figure>
    </section>

      <figure class="pm-card">
          <img src="img/inhoud/Thirteen-fysiek.jpg" alt="Platenhoes fysiek">
      </figure>
</section>
        </article>
    `;
  } else if (project === 'happyplants') {
    content = `
    <article class="pm-page">

      <header class="pm-header">
        <h2 class="pm-title">HappyPlants</h2>
        <p class="pm-subtitle">UX-design mobiele app</p>
      </header>

      <!-- HERO -->
      <figure class="pm-hero">
        <img src="img/inhoud/HP-Startcropped.png" alt="HappyPlants startpagina">
      </figure>

      <!-- TEKST -->
      <section class="pm-text">

        <div class="pm-block">
          <h3>De opdracht</h3>
          <p> 
          Ontwerp een digitale interface voor een fictieve mobiele app. De focus ligt op hoe kleur wordt gebruikt voor: Contrast, leesbaarheid, hiërarchie, consistentie en toegankelijkheid.
          </p>
        </div>

        <div class="pm-block">
          <h3>Het ontwerp</h3>
          <p> Voor mijn plantenwatergeefapp heb ik gewerkt met de 60-30-10 regel. Wit vormt de basis als rustige achtergrond, lichtgroen gebruik ik voor grotere elementen zoals de navigatie en terracotta zet ik in als accentkleur om belangrijke acties extra aandacht te geven. Zo blijft het ontwerp rustig, maar toch levendig en gebruiksvriendelijk.</p>

<p>De kleuren heb ik gekozen op basis van de afbeelding op het welkomstscherm, zodat alles goed bij elkaar past en de app een natuurlijke, speelse en warme sfeer uitstraalt.</p>

<p>Door dezelfde kleuren te gebruiken voor vergelijkbare functies, zoals navigatie en invoervelden, wordt het voor de gebruiker duidelijk hoe de app werkt. Minder belangrijke opties zitten in een hamburgermenu, zodat de focus ligt op de belangrijkste acties. Klikbare teksten zijn onderstreept, zodat het meteen duidelijk is waar je op kunt klikken.
            
          </p>
        </div>

        <!-- META: datum + tools -->
        <div class="pm-meta">
          <div class="pm-meta-item">
            <span class="pm-meta-label">Datum</span>
            <span class="pm-meta-value">januari 2025</span> 
          </div>
          <div class="pm-meta-item">
            <span class="pm-meta-label">Tools</span>
            <span class="pm-meta-value">Figma</span>
          </div>
        </div>
      </section>

      <!-- AFBEELDINGEN -->
    <section class="pm-gallery">
      <figure class="pm-card">
        <img src="img/inhoud/HP-Home.png" alt="HappyPlants app">
      </figure>

      <figure class="pm-card">
        <img src="img/inhoud/HP-My Plants.png" alt="HappyPlants app">
      </figure>

      <figure class="pm-card">
        <img src="img/inhoud/HP-HamburgerMenu.png" alt="HappyPlants app">
      </figure>

      <figure class="pm-card">
        <img src="img/inhoud/HP-Calender.png" alt="HappyPlants app">
      </figure>

  
</section>
        </article>
    `;

  } else if (project === 'quietSleutel') {
      content = `
      <article class="pm-page">

      <header class="pm-header">
        <h2 class="pm-title">Quiet Sleutel</h2>
        <p class="pm-subtitle">Campagne voor naamsbekendheid van Stichting Quiet</p>
      </header>

      <!-- HERO -->
      <figure class="pm-hero">
        <img src="img/inhoud/Quiet-pitch.jpeg" alt="Quiet sleutel">
      </figure>

      <!-- TEKST -->
      <section class="pm-text">
        <div class="pm-block">
          <h3>Opdrachtgever</h3>
          <p>Creatief bureau WARS</p>
        </div>

        <div class="pm-block">
          <h3>De opdracht</h3>
          <p> 
          Bedenk een manier om lawaai te maken voor stille armoede en stichting Quiet meer naamsbekendheid te geven.
          </p>
        </div>

        <div class="pm-block">
          <h3>Het ontwerp</h3>
          <p> Voor dit concept heb ik onderzocht wat Quiet écht betekent voor mensen. Ik dook in alles wat online te vinden was over Stichting Quiet en sprak met vrijwilligers, medewerkers en members bij de locatie in Breda. Door hun persoonlijke verhalen en de plek waar zij elkaar ontmoeten, kreeg ik een goed beeld van wat belangrijk is: vertrouwen, openheid en het gevoel dat je welkom bent.</p>
<p>Mijn ontwerpdoel was om de drempel te verlagen voor mensen die in (stille) armoede leven om zich aan te sluiten bij Quiet. Dit heb ik vertaald naar een houten sleutel als sleutelhanger, die staat voor toegang tot vertrouwen en kleine geluksmomentjes. De sleutel wordt gecombineerd met een kaartje dat Quiet uitlegt en mensen activeert om het door te geven.</p>
<p>De verspreiding loopt via huidige members, hun sociale kring en voedselbankpakketten, met de focus op lokaal en persoonlijk contact. Zo blijft het concept dichtbij en veilig voor een kwetsbare doelgroep. Elke Quiet-community krijgt een eigen ontwerp, en members kunnen hun sleutels beschilderen om er een persoonlijk en gezamenlijk symbool van te maken.  
          </p>
        </div>

        <!-- META: datum + tools -->
        <div class="pm-meta">
          <div class="pm-meta-item">
            <span class="pm-meta-label">Datum</span>
            <span class="pm-meta-value">oktober 2025</span> 
          </div>
          <div class="pm-meta-item">
            <span class="pm-meta-label">Tools</span>
            <span class="pm-meta-value">Interviewen, Illustrator, Photoshop, Lasersnijder</span>
          </div>
        </div>
      </section>

      <!-- AFBEELDINGEN -->
    <section class="pm-gallery">
      <figure class="pm-card">
        <img src="img/inhoud/Quiet-sleutelkaartje.png" alt="Quiet">
      </figure>

       <figure class="pm-card">
          <img src="img/inhoud/Quiet-kaartjeachter.png" alt="Quiet">
      </figure>

      <figure class="pm-card">
          <img src="img/inhoud/Quiet-steden.png" alt="Quiet">
      </figure>

       <figure class="pm-card">
          <img src="img/inhoud/Quiet-pp1.jpg" alt="Quiet">
      </figure>


    </section>
        </article>
    `;

  } else if (project === 'DoktertjeAI') {
      content = `
      <article class="pm-page">

      <header class="pm-header">
        <h2 class="pm-title">Doktertje AI</h2>
        <p class="pm-subtitle">Speculatief speelgoed dat zichtbaar maakt hoe kinderen spelenderwijs leren leven met vooroordelen in medische AI.</p>
      </header>

      <!-- HERO -->
      <figure class="pm-hero">
        <img src="img/inhoud/AI-Productfoto wit.png" alt="Doktertje AI productfoto">
      </figure>

  <!-- TEKST -->
      <section class="pm-text">
      <div class="pm-block">
          <h3>Opdrachtgever</h3>
          <p> Amphia Ziekenhuis
          </p>
        </div>

        <div class="pm-block">
          <h3>De opdracht</h3>
          <p> 
          Ontwerp een speculatief product binnen de bio-medische zorgcontext dat een relevante ontwikkeling verbeeldt
           en aanzet tot reflectie en debat over hedendaagse en toekomstige maatschappelijke, technologische en filosofische vraagstukken.
          </p>
        </div>

        <div class="pm-block">
          <h3>Het ontwerp</h3>
          <p> Voor Doktertje AI staat de vraag “Wat gebeurt er als kinderen opgroeien in een wereld waarin AI een steeds grotere rol speelt in de zorg? centraal.
Het thema wat bij mijn groepje centraal stond was AI in de zorg. Al snel kwam ik uit bij het thema AI-bias en de gevolgen daarvan voor diagnoses en gelijke behandeling.</p>
<p>Om dit onderwerp te doorgronden heb ik uitgebreid brononderzoek gedaan en gewerkt met what-if statements, een future wheel en verschillende scenario’s. Deze onderzoeksmethodes hielpen mij om mogelijke toekomsten te verkennen en mijn concept scherper te maken.</p>
<p>Vanuit deze inzichten heb ik een speelgoedset ontworpen waarin kinderen elkaar kunnen “scannen” en diagnosticeren. De scanner heb ik zelf gemaakt met de lasersnijder. Zo ervaren kinderen spelenderwijs hoe technologie tot een oordeel komt en hoe dat oordeel soms niet klopt.</p>
<p>Het ontwerp stelt de vraag of we kinderen moeten leren zich aan te passen aan gebrekkige systemen, of dat we technologie beter moeten ontwerpen zodat deze iedereen eerlijk en gelijkwaardig begrijpt.
          </p>
        </div>

        <!-- META: datum + tools -->
        <div class="pm-meta">
          <div class="pm-meta-item">
            <span class="pm-meta-label">Datum</span>
            <span class="pm-meta-value">januari 2026</span> 
          </div>
          <div class="pm-meta-item">
            <span class="pm-meta-label">Tools</span>
            <span class="pm-meta-value">Figma, Prototyping, Illustrator, Lasersnijder, Photoshop</span>
          </div>
        </div>
      </section>

      <!-- AFBEELDINGEN -->
    <section class="pm-gallery">
      <figure class="pm-card">
        <img src="img/inhoud/AI-scanner in houder.jpg" alt="Doktertje AI">
      </figure>

      <figure class="pm-card">
          <img src="img/inhoud/AI-achterkant koffertje.jpg" alt="Doktertje AI">
      </figure>

      <figure class="pm-card">
          <img src="img/inhoud/AI-scannerschets.jpg" alt="Doktertje AI">
      </figure>

       <figure class="pm-card">
          <img src="img/inhoud/AI-eindschets.jpg" alt="Doktertje AI">
      </figure>

      <figure class="pm-card">
          <img src="img/inhoud/AI-handen.jpg" alt="Doktertje AI">
      </figure>

    </section>
        </article>
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



