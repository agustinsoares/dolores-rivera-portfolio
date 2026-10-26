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
  visualNote: {
    en: "Illustration",
    no: "Illustrasjon",
    es: "Ilustración",
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
    visualAlt: {
      en: "Illustration of the three by-products studied: sweet potato peel, orange peel and spirulina",
      no: "Illustrasjon av de tre biproduktene: søtpotetskall, appelsinskall og spirulina",
      es: "Ilustración de los tres subproductos estudiados: cáscara de batata, cáscara de naranja y espirulina",
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
  impact: {
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
        "Consumer research on acceptance and market positioning",
        "Linked sustainability and the circular economy to commercial value",
      ],
      no: [
        "Produktkonsept, målgruppe, navn, verdiforslag og kommunikasjon",
        "Forbrukerundersøkelse om aksept og markedsposisjon",
        "Koblet bærekraft og sirkulærøkonomi til kommersiell verdi",
      ],
      es: [
        "Concepto de producto, público objetivo, nombre, propuesta de valor y comunicación",
        "Investigación de consumidores sobre aceptación y posicionamiento",
        "Vinculé sustentabilidad y economía circular con valor comercial",
      ],
    } satisfies TList,
    statValue: "117",
    statLabel: {
      en: "consumers surveyed",
      no: "forbrukere spurt",
      es: "consumidores encuestados",
    },
    visualAlt: {
      en: "Illustration of an alfajor made with spent brewing grain",
      no: "Illustrasjon av en alfajor laget med mask fra ølbrygging",
      es: "Ilustración de un alfajor elaborado con bagazo de cervecería",
    },
    grainLabel: { en: "Spent grain", no: "Mask", es: "Bagazo" },
    fillingLabel: { en: "Dulce de leche", no: "Dulce de leche", es: "Dulce de leche" },
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
