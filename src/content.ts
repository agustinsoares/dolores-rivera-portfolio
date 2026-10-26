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
    research: { en: "Research", no: "Forskning", es: "Investigación" },
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
  eyebrow: {
    en: "Food Engineer · Bergen, Norway",
    no: "Næringsmiddelingeniør · Bergen",
    es: "Ingeniera en Alimentos · Bergen, Noruega",
  },
  title: {
    en: "From by-products to better food.",
    no: "Fra biprodukter til bedre mat.",
    es: "De subproductos a mejores alimentos.",
  },
  lead: {
    en: "I'm María Dolores Rivera, a food engineer from Argentina now living in Bergen. My work sits between the lab and the market: green extraction of natural antioxidants, sustainable product development and the practical side of getting things done.",
    no: "Jeg heter María Dolores Rivera og er næringsmiddelingeniør fra Argentina, nå bosatt i Bergen. Arbeidet mitt ligger mellom laboratoriet og markedet: grønn ekstraksjon av naturlige antioksidanter, bærekraftig produktutvikling og det praktiske arbeidet med å få ting gjort.",
    es: "Soy María Dolores Rivera, ingeniera en alimentos argentina, hoy en Bergen. Mi trabajo está entre el laboratorio y el mercado: extracción verde de antioxidantes naturales, desarrollo sustentable de productos y el lado práctico de llevar las cosas adelante.",
  },
  status: {
    en: "Open to junior roles in R&D, quality and production",
    no: "Åpen for juniorstillinger innen FoU, kvalitet og produksjon",
    es: "Disponible para puestos junior en I+D, calidad y producción",
  },
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
    en: "Engineering, lab work and people",
    no: "Ingeniørfag, laboratoriearbeid og mennesker",
    es: "Ingeniería, laboratorio y personas",
  },
  body: {
    en: [
      "I graduated in 2026 from a five-year Food Engineering degree at the Pontificia Universidad Católica Argentina in Buenos Aires. My background covers process engineering, food analysis and quality, plus laboratory research on bioactive compounds.",
      "I wrote my thesis at the Universitat de València on turning agro-food by-products into natural antioxidants. I also led a sustainable product concept with ImpactTaste and Estrella Galicia that used spent brewing grain.",
      "Alongside my studies I've worked in event operations, logistics, customer service and hospitality in Argentina, Spain and Norway. In Bergen I was working within two weeks of arriving. I adapt fast, take initiative and like learning on the job.",
    ],
    no: [
      "Jeg ble uteksaminert i 2026 fra et femårig studium i næringsmiddelteknologi ved Pontificia Universidad Católica Argentina i Buenos Aires. Bakgrunnen min dekker prosessteknikk, næringsmiddelanalyse og kvalitet, i tillegg til laboratorieforskning på bioaktive forbindelser.",
      "Bacheloroppgaven skrev jeg ved Universitat de València, om å gjøre biprodukter fra matindustrien om til naturlige antioksidanter. Jeg ledet også et bærekraftig produktkonsept med ImpactTaste og Estrella Galicia basert på mask fra ølbrygging.",
      "Ved siden av studiene har jeg jobbet med arrangementer, logistikk, kundeservice og servering i Argentina, Spania og Norge. I Bergen var jeg i jobb innen to uker etter at jeg kom. Jeg tilpasser meg raskt, tar initiativ og liker å lære i jobben.",
    ],
    es: [
      "Me recibí en 2026 de Ingeniería en Alimentos (carrera de cinco años) en la Pontificia Universidad Católica Argentina, en Buenos Aires. Mi formación abarca ingeniería de procesos, análisis y calidad de alimentos, e investigación de laboratorio sobre compuestos bioactivos.",
      "Hice mi tesis en la Universitat de València sobre la valorización de subproductos agroalimentarios como antioxidantes naturales. También lideré un concepto de producto sustentable con ImpactTaste y Estrella Galicia a partir de bagazo de cervecería.",
      "En paralelo a la carrera trabajé en operaciones de eventos, logística, atención al cliente y gastronomía en Argentina, España y Noruega. En Bergen empecé a trabajar a las dos semanas de llegar. Me adapto rápido, tomo la iniciativa y me gusta aprender trabajando.",
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

export const research = {
  heading: {
    en: "Research and product development",
    no: "Forskning og produktutvikling",
    es: "Investigación y desarrollo de productos",
  },
  thesis: {
    kicker: {
      en: "Bachelor's thesis · graded 9.7/10",
      no: "Bacheloroppgave · karakter 9,7/10",
      es: "Tesis de grado · nota 9,7/10",
    },
    place: "Universitat de València, Spain",
    date: { en: "Sep 2025 – Feb 2026", no: "sep. 2025 – feb. 2026", es: "sep. 2025 – feb. 2026" },
    title: {
      en: "Agro-food by-products as natural antioxidants in a hamburger",
      no: "Biprodukter fra matindustrien som naturlige antioksidanter i hamburger",
      es: "Subproductos agroalimentarios como antioxidantes naturales en hamburguesas",
    },
    sourcesLabel: { en: "Sources studied", no: "Råstoffer undersøkt", es: "Materias primas estudiadas" },
    sources: [
      {
        name: { en: "Sweet potato peel", no: "Søtpotetskall", es: "Cáscara de batata" },
        latin: "Ipomoea batatas",
        tone: "batata",
      },
      {
        name: { en: "Orange peel", no: "Appelsinskall", es: "Cáscara de naranja" },
        latin: "Citrus sinensis",
        tone: "orange",
      },
      {
        name: { en: "Spirulina", no: "Spirulina", es: "Espirulina" },
        latin: "Arthrospira platensis",
        tone: "spirulina",
      },
    ],
    steps: [
      {
        label: { en: "Extraction", no: "Ekstraksjon", es: "Extracción" },
        text: {
          en: "Compared Pulsed Electric Fields (PEF) with Pressurised Liquid Extraction (PLE/ASE): two green technologies that use only water as the solvent.",
          no: "Sammenlignet pulserende elektriske felt (PEF) med trykksatt væskeekstraksjon (PLE/ASE): to grønne teknologier som kun bruker vann som løsemiddel.",
          es: "Comparé Campos Eléctricos Pulsados (PEF) con Extracción con Líquidos Presurizados (PLE/ASE): dos tecnologías verdes que usan solo agua como solvente.",
        },
      },
      {
        label: { en: "Analysis", no: "Analyse", es: "Análisis" },
        text: {
          en: "Measured total phenolics (Folin–Ciocalteu), antioxidant capacity (ABTS, ORAC) and protein. Spirulina had the highest bioactive content. ASE gave higher yields; PEF better preserved heat-sensitive compounds.",
          no: "Målte totale fenoler (Folin–Ciocalteu), antioksidantkapasitet (ABTS, ORAC) og protein. Spirulina hadde høyest innhold av bioaktive stoffer. ASE ga høyere utbytte; PEF bevarte varmesensitive forbindelser bedre.",
          es: "Medí fenoles totales (Folin–Ciocalteu), capacidad antioxidante (ABTS, ORAC) y proteína. La espirulina tuvo el mayor contenido bioactivo. ASE dio mayores rendimientos; PEF preservó mejor los compuestos sensibles al calor.",
        },
      },
      {
        label: { en: "Application", no: "Anvendelse", es: "Aplicación" },
        text: {
          en: "Added freeze-dried spirulina extracts to beef burgers as a natural antioxidant and colourant, tracking pH and colour over 5 days of refrigerated storage. The PEF extract gave the best stability against proteolytic deterioration.",
          no: "Tilsatte frysetørkede spirulinaekstrakter i hamburgere av storfekjøtt som naturlig antioksidant og fargestoff, og fulgte pH og farge gjennom 5 dager kjølelagring. PEF-ekstraktet ga best stabilitet mot proteolytisk nedbrytning.",
          es: "Incorporé extractos liofilizados de espirulina a hamburguesas de carne vacuna como antioxidante y colorante natural, con seguimiento de pH y color durante 5 días de refrigeración. El extracto por PEF mostró la mejor estabilidad frente al deterioro proteolítico.",
        },
      },
      {
        label: { en: "Data", no: "Data", es: "Datos" },
        text: {
          en: "Organised, analysed and interpreted the experimental data to compare extraction methods and judge how each ingredient performed.",
          no: "Organiserte, analyserte og tolket forsøksdataene for å sammenligne ekstraksjonsmetodene og vurdere hvordan hver ingrediens fungerte.",
          es: "Organicé, analicé e interpreté los datos experimentales para comparar los métodos de extracción y evaluar el desempeño de cada ingrediente.",
        },
      },
    ],
  },
  projects: [
    {
      kicker: {
        en: "Product development",
        no: "Produktutvikling",
        es: "Desarrollo de producto",
      },
      title: "ImpactTaste × Estrella Galicia",
      place: { en: "Spain", no: "Spania", es: "España" },
      date: { en: "2025", no: "2025", es: "2025" },
      summary: {
        en: "An alfajor, Argentina's flagship sweet, made with spent brewing grain, a by-product of the brewing industry. The product idea was my own.",
        no: "En alfajor, Argentinas mest kjente søtsak, laget med mask, et biprodukt fra ølbrygging. Produktideen var min egen.",
        es: "Un alfajor, producto emblema argentino, elaborado con bagazo de cervecería, un subproducto de la industria cervecera. La idea del producto fue propia.",
      },
      points: {
        en: [
          "Product concept, target consumers, naming, value proposition and communication",
          "Consumer research with 117 respondents on acceptance and market positioning",
          "Linked sustainability and the circular economy to commercial value",
        ],
        no: [
          "Produktkonsept, målgruppe, navn, verdiforslag og kommunikasjon",
          "Forbrukerundersøkelse med 117 respondenter om aksept og markedsposisjon",
          "Koblet bærekraft og sirkulærøkonomi til kommersiell verdi",
        ],
        es: [
          "Concepto de producto, público objetivo, nombre, propuesta de valor y comunicación",
          "Investigación de consumidores con 117 respuestas sobre aceptación y posicionamiento",
          "Vinculé sustentabilidad y economía circular con valor comercial",
        ],
      } satisfies TList,
    },
    {
      kicker: {
        en: "Research laboratory intern",
        no: "Forskningspraktikant, laboratorium",
        es: "Pasante de laboratorio de investigación",
      },
      title: "Universidad Católica Argentina (UCA)",
      place: { en: "Buenos Aires", no: "Buenos Aires", es: "Buenos Aires" },
      date: { en: "May 2023 – Dec 2024", no: "mai 2023 – des. 2024", es: "may. 2023 – dic. 2024" },
      summary: {
        en: "Research on anthocyanins and the antioxidant properties of elderberry juice.",
        no: "Forskning på antocyaniner og antioksidantegenskapene i hyllebærsaft.",
        es: "Investigación sobre antocianinas y propiedades antioxidantes del jugo de saúco.",
      },
      points: {
        en: [
          "pH and colour measurements",
          "Helped evaluate different formulations",
          "Recorded and analysed data in Excel and helped interpret results",
        ],
        no: [
          "Målinger av pH og farge",
          "Bidro i vurderingen av ulike formuleringer",
          "Registrerte og analyserte data i Excel og bidro til å tolke resultatene",
        ],
        es: [
          "Mediciones de pH y color",
          "Colaboré en la evaluación de distintas formulaciones",
          "Registré y analicé datos en Excel y ayudé a interpretar resultados",
        ],
      } satisfies TList,
    },
  ],
};

export const experience = {
  heading: { en: "Work experience", no: "Arbeidserfaring", es: "Experiencia laboral" },
  intro: {
    en: "Fast-paced, customer-facing work in three countries and three languages.",
    no: "Travelt arbeid med kundekontakt i tre land og på tre språk.",
    es: "Trabajo dinámico y de cara al cliente en tres países y tres idiomas.",
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
      en: "Five-year degree · final average 8.52/10",
      no: "Femårig grad · snittkarakter 8,52/10",
      es: "Carrera de cinco años · promedio final 8,52/10",
    },
    courseworkLabel: { en: "Coursework", no: "Fag", es: "Materias" },
    coursework: {
      en: [
        "Process Engineering",
        "Automation and Control",
        "Electrical Installations",
        "Food Analysis",
        "Analytical Chemistry",
        "Quality Management",
        "Applied Statistics",
        "Food Product Development",
      ],
      no: [
        "Prosessteknikk",
        "Automatisering og regulering",
        "Elektriske installasjoner",
        "Næringsmiddelanalyse",
        "Analytisk kjemi",
        "Kvalitetsledelse",
        "Anvendt statistikk",
        "Produktutvikling av næringsmidler",
      ],
      es: [
        "Ingeniería de Procesos",
        "Automatización y Control",
        "Instalaciones Eléctricas",
        "Análisis de Alimentos",
        "Química Analítica",
        "Gestión de la Calidad",
        "Estadística Aplicada",
        "Desarrollo de Productos Alimenticios",
      ],
    } satisfies TList,
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
