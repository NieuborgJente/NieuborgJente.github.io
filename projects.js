// =====================================================================
//  JOUW PROJECTEN
//  Een project toevoegen? Kopieer een blok { ... }, plak het bovenaan
//  de lijst en pas de tekst aan. Vergeet de komma tussen blokken niet.
//
//  titel        (verplicht) naam van het project
//  beschrijving (verplicht) 1-3 zinnen over wat het is / wat je deed
//  afbeelding   (optioneel) pad naar screenshot, bv. "images/mijnproject.png"
//  tags         (optioneel) technologieën, worden ook filterknoppen
//  github       (optioneel) link naar de code
//  demo         (optioneel) link naar een live versie
//  instructables (optioneel) link naar je Instructables-handleiding
//  notitie      (optioneel) korte opmerking in kleine tekst onderaan de kaart,
//               bv. waarom er geen code of demo te zien is
// =====================================================================

const projects = [
  {
    titel: 'Smart Modeltrain Protection System',
    beschrijving: 'A signaling system for model trains with a web interface.',
    afbeelding: 'images/SMPS.jpg',
    tags: ['raspberrypi', 'IoT'],
    github:
      'https://github.com/NieuborgJente/Smart-Modeltrain-Protection-System',
    demo: 'https://youtu.be/OQ7rgBTCoQM?si=1hCgH2Zfri4KSu9a',
    instructables:
      'https://www.instructables.com/Smart-Modeltrain-Protection-System',
  },
  {
    titel: 'Project Rainbow Road',
    beschrijving: 'An RC car controlled with a gaming controller via an ESP-32',
    afbeelding: 'images/rainbow.jpg',
    tags: ['IoT', 'ESP-32'],
    github: 'https://github.com/NieuborgJente/Project-Rainbow-Road',
    demo: 'https://youtu.be/GJhjxcU9Xr0?si=wrYTx7qVdp9LoXs2',
    instructables:
      'https://www.instructables.com/How-to-Control-Your-RC-Car-With-a-Gaming-Console-C',
  },
  {
    titel: "Project witch's hat",
    beschrijving: 'a mobile-phone-controllable lamp for stone hats',
    afbeelding: 'images/heksenhoed.jpg',
    tags: ['ESP-32', 'IoT'],
    github: '',
    demo: '',
    instructables: '',
  },
  {
    titel: 'Medibot',
    beschrijving:
      'Medibot is a support tool for people with disabilities in their daily lives.',
    afbeelding: '',
    tags: ['UI'],
    github: '',
    demo: '',
    instructables: '',
    notitie: 'Code and demo are not public for privacy reasons.',
  },
  // {
  //   titel: 'Example project',
  //   beschrijving:
  //     'A school project in which I built an API and connected it to a database.',
  //   afbeelding: '',
  //   tags: ['Python', 'SQL'],
  //   github: '',
  //   demo: '',
  //   instructables: '',
  // },
];
