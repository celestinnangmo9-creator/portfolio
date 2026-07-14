/* =========================================================
   TRANSLATIONS
========================================================= */
const translations = {
  fr: {
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.path': 'Parcours',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Dossier professionnel',
    'hero.role': 'Étudiant en Software Engineering (HND)',
    'hero.pitch': "Je conçois des applications web pensées pour des besoins concrets et locaux — livraison, réservation, gestion — avec la rigueur d'un ingénieur logiciel en formation.",
    'hero.ctaProjects': 'Voir mes projets',
    'hero.ctaCv': 'Télécharger le CV',

    'dossier.tag': 'FICHE — 01',
    'dossier.status': 'Disponible pour un stage',
    'dossier.name': 'Nom',
    'dossier.location': 'Localisation',
    'dossier.formation': 'Formation',
    'dossier.internship': 'Stage actuel',

    'about.title': 'À propos',
    'about.text': "Étudiant en Software Engineering, je pose actuellement les bases solides de mon parcours d'ingénieur logiciel. Je suis en formation continue sur Django, Laravel et PHP, et j'apprends en construisant : chacun de mes projets personnels reproduit un besoin réel du contexte camerounais — livraison de repas, livraison de gaz, réservation de salles — avec une attention particulière à l'expérience utilisateur, à la structure du code et aux moyens de paiement locaux (Orange Money, MTN MoMo).",
    'about.stat1': 'applications web construites',
    'about.stat2': 'stage académique en cours',
    'about.stat3': 'interfaces bilingues',

    'skills.title': 'Compétences',
    'skills.core': 'Langages & base',
    'skills.tools': 'Frameworks & outils',
    'skills.learning': 'En apprentissage',

    'projects.title': 'Projets',
    'proj1.title': "Location d'espaces événementiels",
    'proj1.tag': "Projet de fin d'études — en cours",
    'proj1.desc': "Plateforme web permettant de rechercher, comparer et réserver des salles de fête et des espaces verts pour des événements. Gestion des disponibilités, des profils propriétaires et du parcours de réservation de bout en bout.",
    'proj2.tag': 'Application de livraison de gaz',
    'proj2.desc': "Application de livraison de bouteilles de gaz avec authentification multi-rôles (client, vendeur, livreur, admin), moteur de tarification basé sur la formule de Haversine et cycle de vie complet des commandes.",
    'proj3.title': 'Manger Facilement Chez Vous',
    'proj3.tag': 'Application de livraison de repas',
    'proj3.desc': "Application de commande et livraison de repas avec panier, suivi de commande, portail partenaire restaurant et paiement mobile money, en interface bilingue français / anglais.",

    'path.title': 'Parcours',
    'path.item1.title': 'Stage académique — Digital by Wasilink',
    'path.item1.desc': "Construction d'applications web, juin – août 2026.",
    'path.item2.date': 'En cours',
    'path.item2.title': 'HND Software Engineering',

    'contact.title': 'Contact',
    'contact.lede': "Ouvert aux opportunités de stage et aux collaborations. N'hésitez pas à me contacter.",
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.githubValue': 'Lien à venir',
    'contact.location': 'Localisation',

    'footer.built': 'Construit avec HTML, CSS & JavaScript'
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.path': 'Journey',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Professional profile',
    'hero.role': 'Software Engineering Student (HND)',
    'hero.pitch': "I build web applications designed around real, local needs — delivery, booking, management — with the discipline of a software engineer in training.",
    'hero.ctaProjects': 'View my projects',
    'hero.ctaCv': 'Download CV',

    'dossier.tag': 'FILE — 01',
    'dossier.status': 'Available for an internship',
    'dossier.name': 'Name',
    'dossier.location': 'Location',
    'dossier.formation': 'Education',
    'dossier.internship': 'Current internship',

    'about.title': 'About',
    'about.text': "As a Software Engineering student, I'm currently building the solid foundations of my career as a software engineer. I'm continuously training in Django, Laravel and PHP, and I learn by building: each of my personal projects addresses a real need from the Cameroonian context — food delivery, gas delivery, venue booking — with close attention to user experience, code structure, and local payment methods (Orange Money, MTN MoMo).",
    'about.stat1': 'web applications built',
    'about.stat2': 'academic internship ongoing',
    'about.stat3': 'bilingual interfaces',

    'skills.title': 'Skills',
    'skills.core': 'Core languages',
    'skills.tools': 'Frameworks & tools',
    'skills.learning': 'Currently learning',

    'projects.title': 'Projects',
    'proj1.title': 'Event Venue Booking Platform',
    'proj1.tag': 'Final-year project — in progress',
    'proj1.desc': "A web platform to search, compare and book event halls and green spaces for events. Handles availability management, owner profiles, and the full booking journey end to end.",
    'proj2.tag': 'Gas bottle delivery application',
    'proj2.desc': "A gas bottle delivery application with multi-role authentication (customer, vendor, driver, admin), a delivery pricing engine based on the Haversine formula, and a complete order lifecycle.",
    'proj3.title': 'Manger Facilement Chez Vous',
    'proj3.tag': 'Food delivery application',
    'proj3.desc': "A meal ordering and delivery application with a shopping cart, order tracking, a restaurant partner portal, and mobile money payment, in a bilingual French / English interface.",

    'path.title': 'Journey',
    'path.item1.title': 'Academic internship — Digital by Wasilink',
    'path.item1.desc': 'Building web applications, June – August 2026.',
    'path.item2.date': 'Ongoing',
    'path.item2.title': 'HND Software Engineering',

    'contact.title': 'Contact',
    'contact.lede': "Open to internship opportunities and collaborations. Feel free to reach out.",
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.githubValue': 'Link coming soon',
    'contact.location': 'Location',

    'footer.built': 'Built with HTML, CSS & JavaScript'
  }
};

/* =========================================================
   LANGUAGE TOGGLE
========================================================= */
function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const dict = translations[lang];
    if (dict && dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-toggle__opt').forEach(opt => {
    opt.classList.toggle('is-active', opt.getAttribute('data-lang') === lang);
  });
  localStorage.setItem('portfolio-lang', lang);
}

function initLangToggle() {
  const toggle = document.getElementById('langToggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const current = document.documentElement.lang === 'en' ? 'en' : 'fr';
    const next = current === 'fr' ? 'en' : 'fr';
    applyLanguage(next);
  });
  const saved = localStorage.getItem('portfolio-lang');
  if (saved && translations[saved]) applyLanguage(saved);
}

/* =========================================================
   MOBILE NAV
========================================================= */
function initMobileNav() {
  const burger = document.getElementById('navBurger');
  const mobile = document.getElementById('navMobile');
  if (!burger || !mobile) return;
  burger.addEventListener('click', () => {
    const isOpen = mobile.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
  mobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobile.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* =========================================================
   SCROLL REVEAL
========================================================= */
function initReveal() {
  const targets = document.querySelectorAll('.section__head, .about__text, .about__stats, .project, .timeline__item, .contact__card, .skills__col');
  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
}

/* =========================================================
   INIT
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  initLangToggle();
  initMobileNav();
  initReveal();
});
