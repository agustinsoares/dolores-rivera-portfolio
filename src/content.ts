// All site copy lives here. Edit text in one place; each entry has en / no / es.
export type Lang = "en" | "no" | "es";
export const LANGS: { code: Lang; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "no", label: "NO", name: "Norsk" },
  { code: "es", label: "ES", name: "Español" },
];

type T = Record<Lang, string>;
type TList = Record<Lang, string[]>;

export const contact = {
  email: "doloresrivera4344@gmail.com",
  linkedin: "https://www.linkedin.com/in/doloresrivera4344/",
  linkedinLabel: "linkedin.com/in/doloresrivera4344",
  cv: "/CV_Maria_Dolores_Rivera.pdf",
};

export const ui = {
  nav: {
    about: { en: "About", no: "Om meg", es: "Perfil" },
    projects: { en: "Projects", no: "Prosjekter", es: "Proyectos" },
    experience: { en: "Experience", no: "Erfaring", es: "Experiencia" },
    education: { en: "Education", no: "Utdanning", es: "Formación" },
    skills: { en: "Skills", no: "Ferdigheter", es: "Habilidades" },
    contact: { en: "Contact", no: "Kontakt", es: "Contacto" },
  },
  menu: { en: "Menu", no: "Meny", es: "Menú" },
  language: { en: "Language", no: "Språk", es: "Idioma" },
  skip: { en: "Skip to content", no: "Hopp til innhold", es: "Ir al contenido" },
  downloadCv: { en: "Download CV", no: "Last ned CV", es: "Descargar CV" },
  getInTouch: { en: "Get in touch", no: "Ta kontakt", es: "Contactar" },
  cvNote: {
    en: "CV in English (PDF)",
    no: "CV på engelsk (PDF)",
    es: "CV en inglés (PDF)",
  },
} satisfies Record<string, T | Record<string, T>>;

export const hero = {
  firstName: "María Dolores",
  lastName: "Rivera",
  eyebrow: {
    en: "Open to new opportunities",
    no: "Åpen for nye muligheter",
    es: "Abierta a nuevas oportunidades",
  },
  // role and location lead the paragraph so both read first
  role: {
    en: "Food Engineer",
    no: "Næringsmiddelingeniør",
    es: "Ingeniera en Alimentos",
  },
  location: {
    en: "Bergen, Norway",
    no: "Bergen, Norge",
    es: "Bergen, Noruega",
  },
  lead: {
    en: "graduated in Argentina with an international academic background in lab research, product development and sustainable innovation.",
    no: "utdannet i Argentina, med internasjonal studiebakgrunn innen laboratorieforskning, produktutvikling og bærekraftig innovasjon.",
    es: "recibida en Argentina, con formación académica internacional en investigación de laboratorio, desarrollo de productos e innovación sustentable.",
  },
  basedIn: {
    en: "Based in",
    no: "Bosatt i",
    es: "Radicada en",
  },
  photoAlt: {
    en: "Portrait of María Dolores Rivera",
    no: "Portrett av María Dolores Rivera",
    es: "Retrato de María Dolores Rivera",
  },
  viewExperience: {
    en: "View experience",
    no: "Se erfaring",
    es: "Ver experiencia",
  },
  scroll: { en: "Scroll", no: "Rull", es: "Bajar" },
};

export const stats: { value: string; label: T }[] = [
  {
    value: "9.7",
    label: {
      en: "Thesis grade, Universitat de València",
      no: "Karakter på bacheloroppgaven, Universitat de València",
      es: "Nota de la tesis, Universitat de València",
    },
  },
  {
    value: "8.52",
    label: {
      en: "Final average, five-year degree (UCA)",
      no: "Snittkarakter, femårig grad (UCA)",
      es: "Promedio final, carrera de cinco años (UCA)",
    },
  },
  {
    value: "117",
    label: {
      en: "Respondents in a consumer survey I ran",
      no: "Respondenter i en forbrukerundersøkelse jeg gjennomførte",
      es: "Personas en una encuesta de consumidores que realicé",
    },
  },
  {
    value: "3",
    label: {
      en: "Countries lived and worked in",
      no: "Land jeg har bodd og jobbet i",
      es: "Países donde viví y trabajé",
    },
  },
];

export const about = {
  heading: {
    en: "About me",
    no: "Om meg",
    es: "Sobre mí",
  },
  body: {
    en: [
      "I'm a recently graduated Food Engineer from Argentina, now based in Bergen, Norway, with an international academic background and a strong interest in the food industry.",
      "My studies and projects have taken me from laboratory research and food analysis to product development, consumer insights and sustainable innovation. My thesis at the University of Valencia looked at agro-food by-products as sources of natural antioxidants, and ImpactTaste, a project with Estrella Galicia, showed me how sustainability can become new food products and value propositions.",
      "Working in hospitality, customer service and event operations in three countries has strengthened my communication, adaptability, teamwork and problem-solving.",
      "I'm curious, proactive and eager to keep learning. My goal is to contribute, learn and help turn ideas into practical solutions that create value.",
    ],
    no: [
      "Jeg er nyutdannet næringsmiddelingeniør fra Argentina, nå bosatt i Bergen, med internasjonal studiebakgrunn og stor interesse for næringsmiddelindustrien.",
      "Studiene og prosjektene mine har tatt meg fra laboratorieforskning og næringsmiddelanalyse til produktutvikling, forbrukerinnsikt og bærekraftig innovasjon. Bacheloroppgaven ved Universitetet i Valencia handlet om biprodukter fra matindustrien som kilder til naturlige antioksidanter, og ImpactTaste, et prosjekt med Estrella Galicia, viste meg hvordan bærekraft kan bli til nye matprodukter og verdiforslag.",
      "Arbeid innen servering, kundeservice og arrangementer i tre land har styrket kommunikasjonsevnen, tilpasningsevnen, samarbeidet og problemløsningen min.",
      "Jeg er nysgjerrig, proaktiv og lærevillig. Målet mitt er å bidra, lære og hjelpe til med å gjøre ideer om til praktiske løsninger som skaper verdi.",
    ],
    es: [
      "Soy Ingeniera en Alimentos recién recibida, de Argentina, hoy en Bergen, Noruega, con formación académica internacional y un fuerte interés por la industria alimentaria.",
      "Mis estudios y proyectos me llevaron desde la investigación de laboratorio y el análisis de alimentos hasta el desarrollo de productos, la investigación de consumidores y la innovación sustentable. Mi tesis en la Universidad de Valencia estudió subproductos agroalimentarios como fuente de antioxidantes naturales, y ImpactTaste, un proyecto con Estrella Galicia, me mostró cómo la sustentabilidad puede convertirse en nuevos productos y propuestas de valor.",
      "Trabajar en gastronomía, atención al cliente y operaciones de eventos en tres países fortaleció mi comunicación, adaptabilidad, trabajo en equipo y resolución de problemas.",
      "Soy curiosa, proactiva y tengo muchas ganas de seguir aprendiendo. Mi objetivo es aportar, aprender y ayudar a convertir ideas en soluciones prácticas que generen valor.",
    ],
  } satisfies TList,
  openToHeading: {
    en: "Areas I'd like to work in",
    no: "Områder jeg ønsker å jobbe innen",
    es: "Áreas en las que me gustaría trabajar",
  },
  openTo: {
    en: [
      "R&D and product development",
      "Laboratory and food analysis",
      "Quality assurance and control",
      "Production and process engineering",
      "Process improvement and operations",
      "Technical sales and business development",
      "Supply chain and logistics",
      "Project coordination and technical support",
      "Sustainability and by-product valorisation",
    ],
    no: [
      "FoU og produktutvikling",
      "Laboratorie- og næringsmiddelanalyse",
      "Kvalitetssikring og -kontroll",
      "Produksjon og prosessteknikk",
      "Prosessforbedring og drift",
      "Teknisk salg og forretningsutvikling",
      "Forsyningskjede og logistikk",
      "Prosjektkoordinering og teknisk støtte",
      "Bærekraft og utnyttelse av biprodukter",
    ],
    es: [
      "I+D y desarrollo de productos",
      "Laboratorio y análisis de alimentos",
      "Aseguramiento y control de calidad",
      "Producción e ingeniería de procesos",
      "Mejora de procesos y operaciones",
      "Ventas técnicas y desarrollo de negocios",
      "Cadena de suministro y logística",
      "Coordinación de proyectos y soporte técnico",
      "Sustentabilidad y valorización de subproductos",
    ],
  } satisfies TList,
};

export const projects = {
  heading: {
    en: "Research and product projects",
    no: "Forsknings- og produktprosjekter",
    es: "Proyectos de investigación y producto",
  },
  viewPhoto: { en: "Open photo", no: "Åpne bilde", es: "Abrir foto" },
  close: { en: "Close", no: "Lukk", es: "Cerrar" },
  thesis: {
    kicker: {
      en: "Bachelor's thesis · graded 9.7/10",
      no: "Bacheloroppgave · karakter 9,7/10",
      es: "Tesis de grado · nota 9,7/10",
    },
    place: { en: "Universitat de València, Spain", no: "Universitat de València, Spania", es: "Universitat de València, España" },
    date: { en: "Defended Jan 2026", no: "Forsvart jan. 2026", es: "Defendida en ene. 2026" },
    title: {
      en: "Obtaining and characterising antioxidant extracts from plant by-products and spirulina",
      no: "Framstilling og karakterisering av antioksidantekstrakter fra plantebiprodukter og spirulina",
      es: "Obtención y caracterización de extractos antioxidantes de subproductos vegetales y espirulina",
    },
    summary: {
      en: "A third of the world's food is lost or wasted, yet agro-food waste is rich in bioactive compounds. I obtained and characterised water-based extracts from sweet potato peel, orange peel and spirulina with two green technologies, then tested spirulina extract as a natural antioxidant and colourant in beef burgers.",
      no: "En tredjedel av verdens mat går tapt eller kastes, men avfall fra matindustrien er rikt på bioaktive forbindelser. Jeg framstilte og karakteriserte vannbaserte ekstrakter fra søtpotetskall, appelsinskall og spirulina med to grønne teknologier, og testet spirulinaekstrakt som naturlig antioksidant og fargestoff i hamburgere av storfekjøtt.",
      es: "Un tercio de los alimentos del mundo se pierde o desperdicia, pero los residuos agroalimentarios son ricos en compuestos bioactivos. Obtuve y caractericé extractos acuosos de cáscara de batata, cáscara de naranja y espirulina con dos tecnologías verdes, y probé el extracto de espirulina como antioxidante y colorante natural en hamburguesas de carne vacuna.",
    },
    supervisor: {
      en: "Supervisor: Francisco J. Barba Orellano · Food Science and Technology",
      no: "Veileder: Francisco J. Barba Orellano · Næringsmiddelvitenskap og -teknologi",
      es: "Tutor: Francisco J. Barba Orellano · Ciencia y Tecnología de los Alimentos",
    },
    challenge: {
      label: { en: "The challenge", no: "Utfordringen", es: "El desafío" },
      heading: { en: "Why not use food waste?", no: "Hvorfor ikke bruke matavfall?", es: "¿Por qué no aprovechar los residuos?" },
      problem: { en: "The problem", no: "Problemet", es: "El problema" },
      idea: { en: "The idea: valorisation", no: "Ideen: verdiskaping", es: "La idea: valorización" },
      cards: [
        {
          title: { en: "1/3 wasted", no: "1/3 kastes", es: "1/3 se desperdicia" },
          text: {
            en: "of the food produced worldwide is lost or wasted (FAO)",
            no: "av maten som produseres i verden går tapt eller kastes (FAO)",
            es: "de los alimentos producidos en el mundo se pierde o desperdicia (FAO)",
          },
        },
        {
          title: { en: "Bioactive", no: "Bioaktive", es: "Bioactivos" },
          text: {
            en: "By-products are rich in polyphenols and carotenoids",
            no: "Biprodukter er rike på polyfenoler og karotenoider",
            es: "Los subproductos son ricos en polifenoles y carotenoides",
          },
        },
        {
          title: { en: "Natural", no: "Naturlig", es: "Naturales" },
          text: {
            en: "Clean-label antioxidants instead of synthetic additives",
            no: "«Clean label»-antioksidanter i stedet for syntetiske tilsetningsstoffer",
            es: "Antioxidantes clean label en lugar de aditivos sintéticos",
          },
        },
      ],
    },
    sourcesLabel: { en: "The raw materials", no: "Råstoffene", es: "Las materias primas" },
    sources: [
      {
        name: { en: "Sweet potato peel", no: "Søtpotetskall", es: "Cáscara de batata" },
        latin: "Ipomoea batatas",
        tone: "batata",
        img: "sweetpotato",
        points: {
          en: ["Agro-industrial by-product", "Polyphenols, anthocyanins"],
          no: ["Agroindustrielt biprodukt", "Polyfenoler, antocyaniner"],
          es: ["Subproducto agroindustrial", "Polifenoles, antocianinas"],
        } satisfies TList,
      },
      {
        name: { en: "Orange peel", no: "Appelsinskall", es: "Cáscara de naranja" },
        latin: "Citrus sinensis",
        tone: "orange",
        img: "orange",
        points: {
          en: ["Waste from the juice industry", "Flavonoids and polyphenols"],
          no: ["Avfall fra juiceindustrien", "Flavonoider og polyfenoler"],
          es: ["Residuo de la industria del jugo", "Flavonoides y polifenoles"],
        } satisfies TList,
      },
      {
        name: { en: "Spirulina", no: "Spirulina", es: "Espirulina" },
        latin: "Arthrospira platensis",
        tone: "spirulina",
        img: "spirulina",
        points: {
          en: ["Microalga, about 60% protein", "Pigments: phycocyanin, chlorophylls"],
          no: ["Mikroalge, omtrent 60 % protein", "Pigmenter: fykocyanin, klorofyll"],
          es: ["Microalga, cerca de 60 % proteína", "Pigmentos: ficocianina, clorofilas"],
        } satisfies TList,
      },
    ],
    results: {
      label: { en: "Results", no: "Resultater", es: "Resultados" },
      heading: { en: "What the extracts showed", no: "Hva ekstraktene viste", es: "Qué mostraron los extractos" },
      note: {
        en: "Charts from the thesis; legend in Spanish (Naranja = orange, Boniato = sweet potato, Espirulina = spirulina).",
        no: "Diagrammer fra oppgaven; forklaring på spansk (Naranja = appelsin, Boniato = søtpotet, Espirulina = spirulina).",
        es: "Gráficos de la tesis (Naranja, Boniato = batata, Espirulina).",
      },
      charts: [
        { src: "phenolics", title: { en: "Total phenolics", no: "Totale fenoler", es: "Polifenoles totales" } },
        { src: "abts", title: { en: "Antioxidant capacity, ABTS", no: "Antioksidantkapasitet, ABTS", es: "Capacidad antioxidante, ABTS" } },
        { src: "orac", title: { en: "Antioxidant capacity, ORAC", no: "Antioksidantkapasitet, ORAC", es: "Capacidad antioxidante, ORAC" } },
        { src: "protein", title: { en: "Protein", no: "Protein", es: "Proteínas" } },
      ],
      takeaways: [
        {
          title: { en: "ASE", no: "ASE", es: "ASE" },
          text: {
            en: "Higher values and higher extraction yields overall",
            no: "Høyere verdier og høyere ekstraksjonsutbytte totalt sett",
            es: "Valores y rendimientos de extracción más altos en general",
          },
        },
        {
          title: { en: "PEF", no: "PEF", es: "PEF" },
          text: {
            en: "Better at preserving heat-sensitive compounds in the microalga",
            no: "Bedre til å bevare varmesensitive forbindelser i mikroalgen",
            es: "Mejor para preservar compuestos sensibles al calor en la microalga",
          },
        },
        {
          title: { en: "Spirulina", no: "Spirulina", es: "Espirulina" },
          text: {
            en: "Best overall bioactive profile, chosen for the food test",
            no: "Best bioaktiv profil totalt, valgt til mattesten",
            es: "Mejor perfil bioactivo general, elegida para la prueba en alimentos",
          },
        },
      ],
    },
    foodTest: {
      label: { en: "The food test", no: "Mattesten", es: "La prueba en alimentos" },
      heading: { en: "Burger test: 5 steps", no: "Hamburgertest: 5 steg", es: "Prueba en hamburguesas: 5 pasos" },
      steps: [
        {
          title: { en: "Make the powder", no: "Lag pulveret", es: "Hacer el polvo" },
          text: {
            en: "Freeze-dry the extract into a green powder",
            no: "Frysetørk ekstraktet til et grønt pulver",
            es: "Liofilizar el extracto hasta obtener un polvo verde",
          },
        },
        {
          title: { en: "Mix in at 1%", no: "Bland inn 1 %", es: "Mezclar al 1 %" },
          text: {
            en: "Add 1% (w/w) of the powder to ground beef",
            no: "Tilsett 1 % (vekt/vekt) pulver i kjøttdeig",
            es: "Agregar 1 % (p/p) del polvo a la carne picada",
          },
        },
        {
          title: { en: "Make the control", no: "Lag kontrollen", es: "Hacer el control" },
          text: {
            en: "Same burger without extract, as the reference",
            no: "Samme hamburger uten ekstrakt, som referanse",
            es: "La misma hamburguesa sin extracto, como referencia",
          },
        },
        {
          title: { en: "Refrigerate at 4 °C", no: "Kjøl ved 4 °C", es: "Refrigerar a 4 °C" },
          text: {
            en: "Store all the burgers in the fridge",
            no: "Oppbevar alle hamburgerne i kjøleskapet",
            es: "Guardar todas las hamburguesas en la heladera",
          },
        },
        {
          title: { en: "Monitor for 5 days", no: "Følg med i 5 dager", es: "Seguir durante 5 días" },
          text: {
            en: "Check pH and colour every day",
            no: "Mål pH og farge hver dag",
            es: "Medir pH y color todos los días",
          },
        },
      ],
      goalLabel: { en: "Goal", no: "Mål", es: "Objetivo" },
      goal: {
        en: "evaluate stability over 5 days of refrigeration (pH and colour)",
        no: "vurdere stabiliteten over 5 dager i kjøleskap (pH og farge)",
        es: "evaluar la estabilidad durante 5 días de refrigeración (pH y color)",
      },
      burgersCaption: {
        en: "Control, spirulina-PEF and spirulina-ASE burgers",
        no: "Kontroll, spirulina-PEF og spirulina-ASE",
        es: "Hamburguesas control, espirulina-PEF y espirulina-ASE",
      },
    },
    specsLabel: { en: "Lab conditions", no: "Forsøksbetingelser", es: "Condiciones de laboratorio" },
    specs: [
      { label: { en: "PEF", no: "PEF", es: "PEF" }, value: { en: "3 kV/cm · 200 kJ/kg", no: "3 kV/cm · 200 kJ/kg", es: "3 kV/cm · 200 kJ/kg" } },
      { label: { en: "ASE", no: "ASE", es: "ASE" }, value: { en: "40 °C · 103.4 bar", no: "40 °C · 103,4 bar", es: "40 °C · 103,4 bar" } },
      { label: { en: "Dose", no: "Dose", es: "Dosis" }, value: { en: "1% w/w", no: "1 % vekt/vekt", es: "1 % p/p" } },
      { label: { en: "Shelf life", no: "Holdbarhet", es: "Vida útil" }, value: { en: "5 days · 4 °C", no: "5 dager · 4 °C", es: "5 días · 4 °C" } },
    ],
    findingsLabel: { en: "Key findings", no: "Hovedfunn", es: "Conclusiones clave" },
    findings: {
      en: [
        "Spirulina had the highest polyphenols, protein and antioxidant capacity (ABTS and ORAC).",
        "Spirulina extract blended into burgers at 1% with no formulation problems and kept pH and appearance more stable than the control.",
        "The PEF extract preserved meat quality best. The blue-green colour is stable, so it suits clean-label niches or a lower dose.",
      ],
      no: [
        "Spirulina hadde høyest innhold av polyfenoler og protein og høyest antioksidantkapasitet (ABTS og ORAC).",
        "Spirulinaekstraktet kunne tilsettes hamburgerne med 1 % uten problemer, og holdt pH og utseende mer stabilt enn kontrollen.",
        "PEF-ekstraktet bevarte kjøttkvaliteten best. Den blågrønne fargen er stabil og passer for «clean label»-nisjer eller lavere dose.",
      ],
      es: [
        "La espirulina tuvo el mayor contenido de polifenoles y proteínas y la mayor capacidad antioxidante (ABTS y ORAC).",
        "El extracto de espirulina se incorporó al 1 % sin problemas de formulación y mantuvo el pH y la apariencia más estables que el control.",
        "El extracto por PEF conservó mejor la calidad de la carne. El color verde azulado es estable, ideal para nichos clean label o una dosis menor.",
      ],
    } satisfies TList,
    gallery: [
      {
        src: "burgers",
        caption: {
          en: "Control burgers (top) and burgers with spirulina extract",
          no: "Kontrollhamburgere (øverst) og hamburgere med spirulinaekstrakt",
          es: "Hamburguesas control (arriba) y con extracto de espirulina",
        },
      },
      {
        src: "colourDays",
        caption: {
          en: "Colour over 5 days at 4 °C: control, ASE and PEF",
          no: "Farge over 5 dager ved 4 °C: kontroll, ASE og PEF",
          es: "Color durante 5 días a 4 °C: control, ASE y PEF",
        },
      },
      {
        src: "ase",
        caption: {
          en: "ASE-200 pressurised liquid extractor",
          no: "ASE-200 for trykksatt væskeekstraksjon",
          es: "Equipo ASE-200 de líquidos presurizados",
        },
      },
      {
        src: "samples",
        caption: {
          en: "Freeze-dried and stored samples",
          no: "Frysetørkede og lagrede prøver",
          es: "Muestras liofilizadas y almacenadas",
        },
      },
    ],
  },
  alfarajote: {
    kicker: {
      en: "Product development · ImpactTaste × Estrella Galicia",
      no: "Produktutvikling · ImpactTaste × Estrella Galicia",
      es: "Desarrollo de producto · ImpactTaste × Estrella Galicia",
    },
    title: "Alfarajote",
    tagline: {
      en: "One bite, two cultures",
      no: "Én bit, to kulturer",
      es: "Un bocado, dos culturas",
    },
    place: { en: "Spain", no: "Spania", es: "España" },
    date: { en: "2025", no: "2025", es: "2025" },
    summary: {
      en: "An Argentine alfajor made with flour from brewer's spent grain, a by-product of beer production, that brings Spanish and Argentine food cultures together. The product idea was mine, and I developed it with my team from recipe to business plan.",
      no: "En argentinsk alfajor laget med mel av mask fra ølbrygging, et biprodukt fra ølproduksjon, som forener spansk og argentinsk matkultur. Produktideen var min, og jeg utviklet den sammen med teamet mitt fra oppskrift til forretningsplan.",
      es: "Un alfajor argentino elaborado con harina de bagazo de cervecería, un subproducto de la producción de cerveza, que une la cultura gastronómica española y la argentina. La idea del producto fue mía y la desarrollé con mi equipo, desde la receta hasta el plan de negocio.",
    },
    claims: {
      en: ["Source of fibre", "No additives", "Local ingredients", "55 g"],
      no: ["Kilde til fiber", "Uten tilsetningsstoffer", "Lokale råvarer", "55 g"],
      es: ["Fuente de fibra", "Sin aditivos", "Ingredientes locales", "55 g"],
    } satisfies TList,
    surveyLabel: {
      en: "Consumer survey · 117 respondents",
      no: "Forbrukerundersøkelse · 117 respondenter",
      es: "Encuesta a consumidores · 117 respuestas",
    },
    survey: [
      { value: 96, label: { en: "Interested in the product", no: "Interessert i produktet", es: "Interés en el producto" } },
      { value: 75, label: { en: "Value the flavour", no: "Verdsetter smaken", es: "Valoran el sabor" } },
      { value: 67, label: { en: "Value the use of spent grain", no: "Verdsetter bruken av mask", es: "Valoran el uso de bagazo" } },
      { value: 65, label: { en: "Drawn to the cultural fusion", no: "Tiltrukket av kulturmøtet", es: "Les atrae la fusión cultural" } },
    ],
    businessLabel: { en: "Business case", no: "Forretningsmodell", es: "Modelo de negocio" },
    business: [
      { value: { en: "€1.12", no: "1,12 €", es: "1,12 €" }, label: { en: "Unit cost", no: "Enhetskostnad", es: "Costo unitario" } },
      { value: { en: "€2.50", no: "2,50 €", es: "2,50 €" }, label: { en: "Retail price", no: "Utsalgspris", es: "Precio de venta" } },
      { value: { en: "250k", no: "250 000", es: "250.000" }, label: { en: "Units per year", no: "Enheter per år", es: "Unidades por año" } },
      { value: { en: "€625k", no: "625 000 €", es: "625.000 €" }, label: { en: "Annual revenue", no: "Årlig omsetning", es: "Facturación anual" } },
      { value: { en: "51%", no: "51 %", es: "51 %" }, label: { en: "IRR", no: "Internrente", es: "TIR" } },
      { value: { en: "1.5 yr", no: "1,5 år", es: "1,5 años" }, label: { en: "Discounted payback", no: "Diskontert tilbakebetaling", es: "Payback descontado" } },
    ],
    quote: {
      en: "Viable, sensorially irresistible, culturally powerful and environmentally essential.",
      no: "Levedyktig, sensorisk uimotståelig, kulturelt sterk og miljømessig avgjørende.",
      es: "Viable, sensorialmente irresistible, culturalmente potente y ambientalmente esencial.",
    },
    quoteSource: {
      en: "Feedback from experts in food engineering, by-products and consumer behaviour",
      no: "Tilbakemelding fra eksperter innen næringsmiddelteknologi, biprodukter og forbrukeratferd",
      es: "Devolución de expertos en ingeniería en alimentos, subproductos y comportamiento del consumidor",
    },
    gallery: [
      {
        src: "product",
        caption: {
          en: "Final product and packaging",
          no: "Ferdig produkt og emballasje",
          es: "Producto final y packaging",
        },
      },
      {
        src: "kitchen",
        caption: {
          en: "Developing the dough with spent-grain flour",
          no: "Utvikling av deigen med maskmel",
          es: "Desarrollo de la masa con harina de bagazo",
        },
      },
      {
        src: "filling",
        caption: { en: "Filling with dulce de leche", no: "Fylling med dulce de leche", es: "Relleno con dulce de leche" },
      },
      {
        src: "coating",
        caption: { en: "Coating in 85% cocoa chocolate", no: "Dekking med 85 % kakaosjokolade", es: "Baño de chocolate 85 % cacao" },
      },
      {
        src: "finished",
        caption: { en: "Finished prototypes", no: "Ferdige prototyper", es: "Prototipos terminados" },
      },
      {
        src: "box",
        caption: {
          en: "Gift box with regional flavours",
          no: "Gaveeske med regionale smaker",
          es: "Caja con sabores regionales",
        },
      },
    ],
  },
};

export const experience = {
  heading: { en: "Experience", no: "Erfaring", es: "Experiencia" },
  intro: {
    en: "Lab research plus fast-paced, customer-facing work in three countries and three languages.",
    no: "Laboratorieforskning og travelt arbeid med kundekontakt i tre land og på tre språk.",
    es: "Investigación de laboratorio y trabajo dinámico de cara al cliente en tres países y tres idiomas.",
  },
  items: [
    {
      role: {
        en: "Hospitality and customer service",
        no: "Servering og kundeservice",
        es: "Hotelería y atención al cliente",
      },
      org: "Thon Hotel, Scandic, Café & Restaurant Special, MM Café",
      place: { en: "Bergen, Norway", no: "Bergen", es: "Bergen, Noruega" },
      date: { en: "Oct 2026 – present", no: "okt. 2026 – nå", es: "oct. 2026 – actualidad" },
      text: {
        en: "Started at four hotels, cafés and restaurants within two weeks of arriving in Norway, adapting quickly to new teams, routines and a Norwegian-speaking workplace.",
        no: "Begynte å jobbe for fire hoteller, kafeer og restauranter innen to uker etter ankomst til Norge, og tilpasset meg raskt nye team, rutiner og et norsktalende arbeidsmiljø.",
        es: "Empecé a trabajar en cuatro hoteles, cafés y restaurantes a las dos semanas de llegar a Noruega, adaptándome rápido a equipos, rutinas y un entorno de trabajo en noruego.",
      },
    },
    {
      role: {
        en: "Customer service and sales",
        no: "Kundeservice og salg",
        es: "Atención al cliente y ventas",
      },
      org: "Yerba Mate Cósmico · Expo Nuestros Caballos",
      place: { en: "Buenos Aires", no: "Buenos Aires", es: "Buenos Aires" },
      date: { en: "Mar 2026", no: "mars 2026", es: "mar. 2026" },
      text: {
        en: "Explained and sold mates, yerba and games at a large public expo, handling cash and card payments, adapting the pitch to each customer and collecting informal feedback.",
        no: "Forklarte og solgte mate, yerba og spill på en stor publikumsmesse, håndterte kontant- og kortbetaling, tilpasset salget til hver kunde og samlet uformelle tilbakemeldinger.",
        es: "Expliqué y vendí mates, yerba y juegos en una exposición masiva, con manejo de caja y posnet, adaptando la propuesta a cada cliente y recogiendo comentarios informales.",
      },
    },
    {
      role: {
        en: "Bar and restaurant service",
        no: "Bar- og restaurantservering",
        es: "Servicio de bar y restaurante",
      },
      org: "Moby Dick",
      place: { en: "Valencia, Spain", no: "Valencia, Spania", es: "Valencia, España" },
      date: { en: "Sep 2025 – Feb 2026", no: "sep. 2025 – feb. 2026", es: "sep. 2025 – feb. 2026" },
      text: {
        en: "Customer service in a restaurant and bar: cocktails, coffee and draught beer.",
        no: "Kundeservice i restaurant og bar: cocktailer, kaffe og fatøl.",
        es: "Atención al cliente en restaurante y bar: cócteles, café y cerveza tirada.",
      },
    },
    {
      role: {
        en: "Research laboratory intern",
        no: "Forskningspraktikant, laboratorium",
        es: "Pasante de laboratorio de investigación",
      },
      org: "Universidad Católica Argentina (UCA)",
      place: { en: "Buenos Aires", no: "Buenos Aires", es: "Buenos Aires" },
      date: { en: "May 2023 – Dec 2024", no: "mai 2023 – des. 2024", es: "may. 2023 – dic. 2024" },
      text: {
        en: "Research on anthocyanins and the antioxidant properties of elderberry juice: pH and colour measurements, evaluating formulations, and recording, analysing and interpreting data in Excel.",
        no: "Forskning på antocyaniner og antioksidantegenskapene i hyllebærsaft: målinger av pH og farge, vurdering av formuleringer og registrering, analyse og tolkning av data i Excel.",
        es: "Investigación sobre antocianinas y propiedades antioxidantes del jugo de saúco: mediciones de pH y color, evaluación de formulaciones y registro, análisis e interpretación de datos en Excel.",
      },
    },
    {
      role: {
        en: "Event operations and logistics support",
        no: "Arrangementsdrift og logistikkstøtte",
        es: "Operaciones y logística de eventos",
      },
      org: "Btlandia · ExpoAgro · Exposición Rural",
      place: { en: "Argentina", no: "Argentina", es: "Argentina" },
      date: { en: "2022 – 2023", no: "2022 – 2023", es: "2022 – 2023" },
      text: {
        en: "Supported operations and logistics at major agricultural exhibitions (clients including YPF Agro and New Holland). Coordinated with exhibitors, suppliers and service providers, helped with schedules and solved problems on the spot.",
        no: "Støttet drift og logistikk på store landbruksmesser (kunder blant annet YPF Agro og New Holland). Koordinerte med utstillere, leverandører og tjenesteytere, hjalp til med tidsplaner og løste uforutsette problemer fortløpende.",
        es: "Apoyo en operaciones y logística en grandes exposiciones agropecuarias (clientes como YPF Agro y New Holland). Coordiné con expositores, proveedores y prestadores, ayudé con cronogramas y resolví imprevistos en el momento.",
      },
    },
  ],
};

export const education = {
  heading: { en: "Education", no: "Utdanning", es: "Formación" },
  degree: {
    title: {
      en: "Food Engineering",
      no: "Næringsmiddelteknologi (sivilingeniør)",
      es: "Ingeniería en Alimentos",
    },
    org: "Pontificia Universidad Católica Argentina (UCA)",
    place: "Buenos Aires",
    date: "2026",
    detail: {
      en: "Five-year degree, 2020–2026",
      no: "Femårig grad, 2020–2026",
      es: "Carrera de cinco años, 2020–2026",
    },
    official: {
      en: "Officially recognised degree with national validity in Argentina (Ministerial Resolution 1231/2015).",
      no: "Offisielt godkjent grad med nasjonal gyldighet i Argentina (departementsvedtak 1231/2015).",
      es: "Título con reconocimiento oficial y validez nacional (Resolución Ministerial 1231/2015).",
    },
    facts: [
      {
        value: "66",
        label: { en: "Subjects passed", no: "Fag bestått", es: "Materias aprobadas" },
      },
      {
        value: "8.52",
        label: { en: "Overall average (out of 10)", no: "Snittkarakter (av 10)", es: "Promedio general (sobre 10)" },
      },
      {
        value: "14",
        label: { en: "Subjects with 10/10", no: "Fag med 10/10", es: "Materias con 10" },
      },
      {
        value: "5",
        label: { en: "Years of study", no: "Studieår", es: "Años de carrera" },
      },
    ],
    areasLabel: {
      en: "What the degree covers",
      no: "Hva graden omfatter",
      es: "Qué incluye el título",
    },
    areas: [
      {
        name: { en: "Food science", no: "Næringsmiddelvitenskap", es: "Ciencia de los alimentos" },
        items: {
          en: ["Food Chemistry I and II", "Food Microbiology", "Industrial Microbiology", "Food Preservation", "Nutrition", "Fruit and Vegetable Industry"],
          no: ["Næringsmiddelkjemi I og II", "Næringsmiddelmikrobiologi", "Industriell mikrobiologi", "Konservering av næringsmidler", "Ernæring", "Frukt- og grønnsaksindustri"],
          es: ["Química de los Alimentos I y II", "Microbiología de los Alimentos", "Microbiología Industrial", "Preservación de Alimentos", "Nutrición", "Industria Frutihortícola"],
        } satisfies TList,
      },
      {
        name: { en: "Process engineering", no: "Prosessteknikk", es: "Ingeniería de procesos" },
        items: {
          en: ["Unit Operations I and II", "Transport Phenomena", "Applied Thermodynamics", "Process Engineering", "Facilities Engineering", "Automation and Control", "Electrical Engineering", "Plant Design Project"],
          no: ["Enhetsoperasjoner I og II", "Transportfenomener", "Anvendt termodynamikk", "Prosessteknikk", "Anleggsteknikk", "Automatisering og regulering", "Elektroteknikk", "Prosjektering av anlegg"],
          es: ["Operaciones Unitarias I y II", "Fenómenos de Transporte", "Termodinámica Aplicada", "Ingeniería de Procesos", "Ingeniería de las Instalaciones", "Automatización y Control", "Electrotecnia", "Proyecto de Planta"],
        } satisfies TList,
      },
      {
        name: { en: "Chemistry and biology", no: "Kjemi og biologi", es: "Química y biología" },
        items: {
          en: ["Analytical and Instrumental Chemistry", "Organic Chemistry", "Biological Chemistry", "Physical Chemistry", "Microbiology", "Biology"],
          no: ["Analytisk og instrumentell kjemi", "Organisk kjemi", "Biokjemi", "Fysikalsk kjemi", "Mikrobiologi", "Biologi"],
          es: ["Química Analítica e Instrumental", "Química Orgánica", "Química Biológica", "Fisicoquímica", "Microbiología", "Biología"],
        } satisfies TList,
      },
      {
        name: { en: "Quality, safety and environment", no: "Kvalitet, sikkerhet og miljø", es: "Calidad, seguridad y ambiente" },
        items: {
          en: ["Quality Management", "Sanitation, Hygiene and Industrial Safety", "Ecology and Environmental Management", "Packaging", "Food Law"],
          no: ["Kvalitetsledelse", "Sanitær, hygiene og industriell sikkerhet", "Økologi og miljøledelse", "Emballasje", "Lovgivning"],
          es: ["Gestión de la Calidad", "Saneamiento, Higiene y Seguridad Industrial", "Ecología y Gestión Ambiental", "Envases y Embalajes", "Legislación"],
        } satisfies TList,
      },
      {
        name: { en: "Product and business", no: "Produkt og forretning", es: "Producto y negocio" },
        items: {
          en: ["Product Development", "Project Development and Analysis", "Business Organisation", "Economics", "Entrepreneurship", "Triple-Impact Business"],
          no: ["Produktutvikling", "Prosjektutvikling og -analyse", "Bedriftsorganisasjon", "Økonomi", "Entreprenørskap", "Bedrifter med trippel effekt"],
          es: ["Desarrollo de Productos", "Desarrollo y Análisis de Proyectos", "Organización Empresarial", "Economía", "Taller de Emprendedorismo", "Empresas de Triple Impacto"],
        } satisfies TList,
      },
      {
        name: { en: "Maths, physics and computing", no: "Matematikk, fysikk og databehandling", es: "Matemática, física y computación" },
        items: {
          en: ["Mathematics I–III and Advanced", "Algebra and Analytic Geometry", "Physics I–III", "Statistics and Applied Statistics", "Computing I and II", "Engineering Graphics"],
          no: ["Matematikk I–III og videregående", "Algebra og analytisk geometri", "Fysikk I–III", "Statistikk og anvendt statistikk", "Databehandling I og II", "Teknisk tegning"],
          es: ["Matemática I–III y Avanzada", "Álgebra y Geometría Analítica", "Física I–III", "Estadística y Estadística Aplicada", "Computación I y II", "Sistemas de Representación"],
        } satisfies TList,
      },
    ],
    extra: {
      en: "Also includes a supervised professional internship, technical English and a humanities and ethics programme.",
      no: "Omfatter også veiledet yrkespraksis, teknisk engelsk og et program i humaniora og etikk.",
      es: "Incluye además la Práctica Profesional Supervisada, inglés técnico y un ciclo de humanidades y ética.",
    },
    topMarksLabel: {
      en: "Top marks (10/10) include",
      no: "Toppkarakter (10/10) blant annet i",
      es: "Algunas materias con 10",
    },
    topMarks: {
      en: ["Nutrition", "Biological Chemistry", "Applied Statistics", "Engineering Graphics", "Mathematics I", "Physics I"],
      no: ["Ernæring", "Biokjemi", "Anvendt statistikk", "Teknisk tegning", "Matematikk I", "Fysikk I"],
      es: ["Nutrición", "Química Biológica", "Estadística Aplicada", "Sistemas de Representación", "Matemática I", "Física I"],
    } satisfies TList,
    diplomaLabel: { en: "Degree certificate", no: "Vitnemål", es: "Título" },
    diplomaAlt: {
      en: "Food Engineering degree certificate from the Pontificia Universidad Católica Argentina, issued to María Dolores Rivera on 2 September 2026",
      no: "Vitnemål i næringsmiddelteknologi fra Pontificia Universidad Católica Argentina, utstedt til María Dolores Rivera 2. september 2026",
      es: "Título de Ingeniera en Alimentos de la Pontificia Universidad Católica Argentina, otorgado a María Dolores Rivera el 2 de septiembre de 2026",
    },
    diplomaCaption: {
      en: "Issued 2 September 2026 · ID number hidden",
      no: "Utstedt 2. september 2026 · ID-nummer skjult",
      es: "Emitido el 2 de septiembre de 2026 · DNI oculto",
    },
    diplomaOpen: { en: "View full size", no: "Vis i full størrelse", es: "Ver en tamaño completo" },
  },
  exchangesLabel: { en: "Exchange semesters", no: "Utvekslingssemestre", es: "Intercambios" },
  exchanges: [
    {
      org: "Universitat de València",
      place: { en: "Spain", no: "Spania", es: "España" },
      date: { en: "Sep 2025 – Feb 2026", no: "sep. 2025 – feb. 2026", es: "sep. 2025 – feb. 2026" },
      text: {
        en: "Food Biotechnology, Novel Foods, Business Creation and thesis.",
        no: "Næringsmiddelbioteknologi, nye matvarer, forretningsetablering og bacheloroppgave.",
        es: "Biotecnología Alimentaria, Nuevos Alimentos, Creación de Empresas y tesis.",
      },
    },
    {
      org: "Universidad Católica de Murcia",
      place: { en: "Spain", no: "Spania", es: "España" },
      date: { en: "Jan – Jul 2025", no: "jan. – juli 2025", es: "ene. – jul. 2025" },
      text: {
        en: "Water and effluent treatment, environmental management, by-product utilisation, a plant-design project and sustainability.",
        no: "Vann- og avløpsbehandling, miljøledelse, utnyttelse av biprodukter, et anleggsprosjekteringsprosjekt og bærekraft.",
        es: "Tratamiento de aguas y efluentes, gestión ambiental, aprovechamiento de subproductos, proyecto de diseño de planta y sustentabilidad.",
      },
    },
  ],
};

export const skills = {
  heading: { en: "Skills and languages", no: "Ferdigheter og språk", es: "Habilidades e idiomas" },
  groups: [
    {
      label: { en: "Laboratory", no: "Laboratorium", es: "Laboratorio" },
      items: {
        en: ["PEF and PLE/ASE extraction", "Total phenolics", "ABTS", "ORAC", "Protein", "pH", "Colour", "Anthocyanins", "Experimental data analysis"],
        no: ["PEF- og PLE/ASE-ekstraksjon", "Totale fenoler", "ABTS", "ORAC", "Protein", "pH", "Farge", "Antocyaniner", "Analyse av forsøksdata"],
        es: ["Extracción PEF y PLE/ASE", "Fenoles totales", "ABTS", "ORAC", "Proteína", "pH", "Color", "Antocianinas", "Análisis de datos experimentales"],
      } satisfies TList,
    },
    {
      label: { en: "Tools", no: "Verktøy", es: "Herramientas" },
      items: {
        en: ["Excel (data analysis)", "Word", "PowerPoint", "AutoCAD", "Power BI (basic)", "C++ (basic)"],
        no: ["Excel (dataanalyse)", "Word", "PowerPoint", "AutoCAD", "Power BI (grunnleggende)", "C++ (grunnleggende)"],
        es: ["Excel (análisis de datos)", "Word", "PowerPoint", "AutoCAD", "Power BI (básico)", "C++ (básico)"],
      } satisfies TList,
    },
  ],
  languagesLabel: { en: "Languages", no: "Språk", es: "Idiomas" },
  // level: 0–4 dots, used for the small meter
  languages: [
    { name: { en: "Spanish", no: "Spansk", es: "Español" }, level: 4, note: { en: "Native", no: "Morsmål", es: "Nativo" } },
    { name: { en: "English", no: "Engelsk", es: "Inglés" }, level: 3, note: { en: "B2 · Cambridge First", no: "B2 · Cambridge First", es: "B2 · Cambridge First" } },
    { name: { en: "Italian", no: "Italiensk", es: "Italiano" }, level: 2, note: { en: "Understanding", no: "Forståelse", es: "Comprensión" } },
    { name: { en: "Norwegian", no: "Norsk", es: "Noruego" }, level: 1, note: { en: "Beginner, learning", no: "Nybegynner, lærer", es: "Inicial, en aprendizaje" } },
  ],
};

export const contactSection = {
  heading: {
    en: "Let's talk",
    no: "La oss snakke sammen",
    es: "Hablemos",
  },
  text: {
    en: "I'm looking for junior roles in Bergen and across Norway where engineering, lab and hands-on skills count. Email is the best way to reach me.",
    no: "Jeg ser etter juniorstillinger i Bergen og ellers i Norge der ingeniørkunnskap, laboratorieerfaring og praktiske ferdigheter teller. E-post er den beste måten å nå meg på.",
    es: "Busco puestos junior en Bergen y el resto de Noruega donde cuenten la ingeniería, el laboratorio y lo práctico. El correo electrónico es la mejor forma de contactarme.",
  },
  footer: {
    en: "Bergen, Norway",
    no: "Bergen, Norge",
    es: "Bergen, Noruega",
  },
};
