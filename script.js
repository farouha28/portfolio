"use strict";

/* ===== Content (FR / EN). Edit the text here, nothing else needs to change. ===== */
const EMAIL = "bennasrfarah593@gmail.com";

const UI = {
  fr: {
    skip: "Aller au contenu", nav_about: "À propos", nav_exp: "Expérience", nav_projects: "Projets", nav_skills: "Compétences", nav_contact: "Contact",
    hero_eyebrow: "Ingénieure Data Science & IA", hero_hello: "Bonjour, je suis",
    hero_lead: "Je conçois des solutions d'IA générative concrètes : assistants RAG, agents et workflows, automatisation avec Power Platform. Du besoin métier à l'application que les équipes utilisent vraiment.",
    cta_projects: "Voir mes projets", cta_contact: "Me contacter",
    stat_intern: "Stages", stat_proj: "Projets", stat_lang: "Langues",
    seek: "Ingénieure IA & Data diplômée d'ESPRIT (octobre 2026). Ouverte aux opportunités en IA / Data.",
    proj_kicker: "Réalisations", about_kicker: "Profil", exp_kicker: "Parcours", skills_kicker: "Boîte à outils", edu_kicker: "Bagage",
    about_title: "À propos",
    about_p1: "Ingénieure en Informatique, spécialité Data Science & IA (ESPRIT, 2021 – 2026). J'aime transformer un besoin métier en solution d'IA fiable : prompts structurés, scores calculés en dehors du LLM, résultats comparés à un expert.",
    about_p2: "Habituée à structurer un projet de bout en bout (besoins, user stories, sprints, tests, documentation) et à travailler avec des équipes métier. À l'aise pour expliquer un sujet technique en français et en anglais.",
    facts: [["Domaine", "IA générative, RAG, agents IA"], ["Focus", "Fiabilité et évaluation des réponses"], ["Déploiement", "Docker, MLflow, FastAPI"], ["Automatisation", "Power Automate, Power Apps, n8n"], ["Langues", "Français C1 · Anglais courant · Arabe natif · Allemand (notions)"]],
    exp_title: "Expérience professionnelle",
    proj_title: "Projets", proj_sub: "11 projets, des assistants RAG aux chaînes MLOps, séparés entre ceux réalisés en entreprise et ceux de ma formation. Cliquez sur une carte pour voir le détail. Les projets d'entreprise sont décrits sans données ni documents confidentiels.",
    grp_pro_title: "Projets en entreprise", grp_pro_sub: "Réalisés pendant mes stages (PwC, Attijari bank, ContyFind, ATB).",
    grp_acad_title: "Projets académiques", grp_acad_sub: "Réalisés pendant ma formation d'ingénieur (ESPRIT).",
    all: "Tous", cats: { genai: "IA générative & agents", data: "Data & ML", mlops: "MLOps", automation: "Automatisation", web: "Développement web" },
    featured: "Projet phare", see: "Voir le détail →", result: "Résultat",
    skills_title: "Compétences",
    cert_kicker: "Preuves", cert_title: "Certifications", cert_hours: "durée", cert_issued: "Délivré le",
    edu_title: "Formation et engagement",
    contact_title: "Parlons-en", contact_sub: "Un projet, un stage ou un poste en IA / Data ? Écrivez-moi, je réponds volontiers.",
    contact_mail: "Envoyer un e-mail", contact_copy: "Copier l'adresse", copied: "Adresse copiée.", copy_fail: "Copie impossible : " + EMAIL,
    to_top: "Haut de page ↑", close: "Fermer", theme_to_dark: "Passer en thème sombre", theme_to_light: "Passer en thème clair", filter_label: "Filtrer les projets", title: "Farah Ben Nasr — Ingénieure Data & IA"
  },
  en: {
    skip: "Skip to content", nav_about: "About", nav_exp: "Experience", nav_projects: "Projects", nav_skills: "Skills", nav_contact: "Contact",
    hero_eyebrow: "Data Science & AI Engineer", hero_hello: "Hi, I'm",
    hero_lead: "I build practical generative AI solutions: RAG assistants, agents and workflows, automation with Power Platform. From a business need to an application teams actually use.",
    cta_projects: "See my projects", cta_contact: "Contact me",
    stat_intern: "Internships", stat_proj: "Projects", stat_lang: "Languages",
    seek: "AI & Data engineer, ESPRIT graduate (October 2026). Open to AI / Data opportunities.",
    proj_kicker: "Work", about_kicker: "Profile", exp_kicker: "Journey", skills_kicker: "Toolbox", edu_kicker: "Background",
    about_title: "About",
    about_p1: "Computer engineer specialised in Data Science & AI (ESPRIT, 2021 – 2026). I like turning a business need into a reliable AI solution: structured prompts, scores computed outside the LLM, results compared with an expert.",
    about_p2: "Used to running a project end to end (requirements, user stories, sprints, testing, documentation) and working with business teams. Comfortable explaining technical topics in French and English.",
    facts: [["Domain", "Generative AI, RAG, AI agents"], ["Focus", "Reliability and evaluation of answers"], ["Deployment", "Docker, MLflow, FastAPI"], ["Automation", "Power Automate, Power Apps, n8n"], ["Languages", "French C1 · English fluent · Arabic native · German (basics)"]],
    exp_title: "Professional experience",
    proj_title: "Projects", proj_sub: "11 projects, from RAG assistants to MLOps pipelines, split between company work and university work. Click a card for details. Company projects are described without confidential data or documents.",
    grp_pro_title: "Company projects", grp_pro_sub: "Built during my internships (PwC, Attijari bank, ContyFind, ATB).",
    grp_acad_title: "Academic projects", grp_acad_sub: "Built during my engineering studies (ESPRIT).",
    all: "All", cats: { genai: "Generative AI & agents", data: "Data & ML", mlops: "MLOps", automation: "Automation", web: "Web development" },
    featured: "Featured project", see: "See details →", result: "Result",
    skills_title: "Skills",
    cert_kicker: "Proof", cert_title: "Certifications", cert_hours: "duration", cert_issued: "Issued",
    edu_title: "Education and activities",
    contact_title: "Let's talk", contact_sub: "A project, an internship or an AI / Data role? Send me a message, I'm happy to reply.",
    contact_mail: "Send an email", contact_copy: "Copy address", copied: "Address copied.", copy_fail: "Could not copy: " + EMAIL,
    to_top: "Back to top ↑", close: "Close", theme_to_dark: "Switch to dark theme", theme_to_light: "Switch to light theme", filter_label: "Filter projects", title: "Farah Ben Nasr — Data & AI Engineer"
  }
};

const EXPERIENCE = [
  {
    org: "PwC Technology Acceleration Center Tunisia", logo: "pwc", short: "PwC", place: "Tunis",
    fr: { role: "Stagiaire Data & Power Platform (PFE)", date: "Fév. 2026 – Sept. 2026", pts: [
      "Création de TalentPulse, une plateforme qui génère des quiz à partir de supports de formation SAP pour évaluer les consultants de la practice SAP (RAG, FAISS, Azure OpenAI, FastAPI, Next.js).",
      "Automatisation du traitement de réclamations clients avec Power Automate, Dataverse et Power Apps, avec analyse du contenu par LLM et staffing des missions selon la disponibilité (fichier Excel à macros VBA appliquant une règle métier).",
      "Pilotage du projet en 4 sprints, documentation complète et rapport de projet.",
      "Dashboard Power BI de suivi du staffing de la practice SAP, alimenté par un ETL Power Query, avec préparation des données par macros VBA."] },
    en: { role: "Data & Power Platform Intern (final-year project)", date: "Feb 2026 – Sep 2026", pts: [
      "Built TalentPulse, a platform that generates quizzes from SAP training materials to assess consultants in the SAP practice (RAG, FAISS, Azure OpenAI, FastAPI, Next.js).",
      "Automated customer-complaint handling with Power Automate, Dataverse and Power Apps, with LLM-based content analysis and mission staffing by availability (Excel file with VBA macros applying a business rule).",
      "Led the project in 4 sprints, with full documentation and project report.",
      "Power BI staffing dashboard for the SAP practice, fed by a Power Query ETL, with data preparation through VBA macros."] }
  },
  {
    org: "Attijari bank Tunisie", logo: "attijari", short: "AB", place: "Tunis",
    fr: { role: "Stagiaire Data Scientist", date: "Août 2025 – Oct. 2025", pts: [
      "Pipeline de déploiement et de suivi de modèles de machine learning (Docker, MLflow, FastAPI, Elasticsearch).",
      "Segmentation de la clientèle (KMeans, PCA, données KYC) pour repérer les segments à fort potentiel."] },
    en: { role: "Data Scientist Intern", date: "Aug 2025 – Oct 2025", pts: [
      "Pipeline to deploy and monitor machine learning models (Docker, MLflow, FastAPI, Elasticsearch).",
      "Customer segmentation (KMeans, PCA, KYC data) to identify high-potential segments."] }
  },
  {
    org: "ContyFind", logo: "contyfind", short: "CF", place: "Tunis",
    fr: { role: "Stagiaire Ingénieure IA", date: "Juin 2025 – Août 2025", pts: [
      "Chatbot basé sur un LLM, avec des techniques de NLP pour améliorer la pertinence des réponses.",
      "Automatisation du scraping de données du marché maritime avec Crawl4AI, puis nettoyage et analyse."] },
    en: { role: "AI Engineer Intern", date: "Jun 2025 – Aug 2025", pts: [
      "LLM-based chatbot, with NLP techniques to improve answer relevance.",
      "Automated maritime market data scraping with Crawl4AI, then cleaning and analysis."] }
  },
  {
    org: "Arab Tunisian Bank (ATB)", logo: "atb", short: "ATB", place: "Tunis",
    fr: { role: "Stagiaire Développeuse", date: "Juin 2024 – Août 2024", pts: [
      "Développement et mise en production d'une plateforme de gestion des stages (Angular, Node.js), du recueil des besoins à la mise en ligne."] },
    en: { role: "Developer Intern", date: "Jun 2024 – Aug 2024", pts: [
      "Built and deployed an internship management platform (Angular, Node.js), from requirements to go-live."] }
  }
];

/* featured = shown first with a "Featured" label. */
const PROJECTS = [
  { id: "talentpulse", kind: "pro", org: "PwC", featured: true, cats: ["genai"], stack: ["Python", "FastAPI", "Next.js", "FAISS", "Azure OpenAI", "RAG"],
    fr: { ctx: "PFE · PwC TAC Tunisia, practice SAP · 2026", title: "TalentPulse : des quiz générés par RAG", desc: "Plateforme qui génère des quiz à partir de supports de formation SAP pour évaluer les compétences des consultants de la practice SAP.",
      pts: ["Pipeline RAG alimenté par des supports de formation SAP : embeddings, base vectorielle FAISS, Azure OpenAI.", "Exposé via une API FastAPI et une interface web Next.js avec authentification SSO.", "Démonstration présentée à l'équipe encadrante."], result: "" },
    en: { ctx: "Final-year project · PwC TAC Tunisia, SAP practice · 2026", title: "TalentPulse: quizzes generated with RAG", desc: "Platform that generates quizzes from SAP training materials to assess the skills of consultants in the SAP practice.",
      pts: ["RAG pipeline fed with SAP training materials: embeddings, FAISS vector store, Azure OpenAI.", "Exposed through a FastAPI API and a Next.js web app with SSO authentication.", "Demo presented to the supervising team."], result: "" } },
  { id: "claims", kind: "pro", org: "PwC", featured: true, cats: ["genai", "automation"], stack: ["Power Automate", "Dataverse", "Power Apps", "LLM", "Excel VBA"],
    fr: { ctx: "PwC TAC Tunisia · 2026", title: "Automatisation des réclamations clients", desc: "Traitement des réclamations de bout en bout : analyse du contenu des courriels par un LLM, puis affectation des missions selon la disponibilité.",
      pts: ["Flux Power Automate, données dans Dataverse, application Power Apps.", "Staffing des missions de traitement des réclamations selon la disponibilité des consultants, calculée par un fichier Excel développé avec des macros VBA selon une règle métier.", "Prompt structuré et réutilisable.", "Score calculé séparément du LLM pour limiter les erreurs.", "Résultats comparés à un expert sur 20 courriels."], result: "85 % à 95 % de concordance avec l'expert (20 courriels)" },
    en: { ctx: "PwC TAC Tunisia · 2026", title: "Customer-complaint automation", desc: "End-to-end complaint handling: LLM analysis of the email content, then assignment of missions according to availability.",
      pts: ["Power Automate flows, data in Dataverse, Power Apps front end.", "Staffing of complaint-handling missions according to consultant availability, computed by an Excel file built with VBA macros following a business rule.", "Structured, reusable prompt.", "Score computed separately from the LLM to limit errors.", "Results compared with an expert on 20 emails."], result: "85% to 95% agreement with the expert (20 emails)" } },
  { id: "multiagent", kind: "acad", featured: true, cats: ["genai"], stack: ["Python", "LangChain", "NLP", "FastAPI", "Flask"],
    fr: { ctx: "Projet · sept. – nov. 2025", title: "Système multi-agents d'analyse de candidats", desc: "Architecture multi-agents qui automatise la recherche et l'évaluation de candidats.",
      pts: ["Agents LLM pour l'extraction de données, le scoring et la recommandation.", "Workflow adaptatif où des modules autonomes collaborent pour aider à la décision."], result: "" },
    en: { ctx: "Project · Sep – Nov 2025", title: "Multi-agent candidate analysis system", desc: "Multi-agent architecture that automates candidate search and evaluation.",
      pts: ["LLM agents for data extraction, scoring and recommendation.", "Adaptive workflow where autonomous modules collaborate to support decisions."], result: "" } },
  { id: "chatbot", kind: "pro", org: "ContyFind", cats: ["genai", "data"], stack: ["Python", "Web scraping", "Crawl4AI", "LLM", "NLP", "scikit-learn"],
    fr: { ctx: "ContyFind · 2025", title: "Chatbot et données du marché maritime", desc: "Chatbot basé sur un LLM pour répondre aux questions sur des données maritimes collectées par scraping.",
      pts: ["Scraping automatisé des données maritimes avec Crawl4AI, puis nettoyage et structuration des données.", "Analyse de trajectoires et classification de comportements de navires.", "Techniques de NLP pour améliorer la pertinence des réponses."], result: "" },
    en: { ctx: "ContyFind · 2025", title: "Chatbot and maritime market data", desc: "LLM-based chatbot answering questions on maritime data collected by web scraping.",
      pts: ["Automated maritime data scraping with Crawl4AI, then data cleaning and structuring.", "Trajectory analysis and vessel behaviour classification.", "NLP techniques to improve answer relevance."], result: "" } },
  { id: "segmentation", kind: "pro", org: "Attijari bank", cats: ["mlops", "data"], stack: ["Python", "KMeans", "PCA", "Docker", "MLflow", "FastAPI", "Elasticsearch"],
    fr: { ctx: "Attijari bank · 2025", title: "Segmentation client et pipeline MLOps", desc: "Segmentation de la clientèle à partir de données KYC, déployée et suivie par une chaîne MLOps.",
      pts: ["Clustering KMeans avec PCA pour repérer les segments à fort potentiel.", "Déploiement et suivi des modèles : Docker, MLflow, FastAPI, Elasticsearch.", "Reproductibilité et traçabilité des modèles en production."], result: "" },
    en: { ctx: "Attijari bank · 2025", title: "Customer segmentation and MLOps pipeline", desc: "Customer segmentation from KYC data, deployed and monitored through an MLOps chain.",
      pts: ["KMeans clustering with PCA to identify high-potential segments.", "Model deployment and monitoring: Docker, MLflow, FastAPI, Elasticsearch.", "Reproducibility and traceability of models in production."], result: "" } },
  { id: "churn", kind: "acad", cats: ["mlops", "data"], stack: ["Docker", "MLflow", "FastAPI", "Airflow", "Elasticsearch", "Kibana"],
    fr: { ctx: "Projet · nov. 2024 – mars 2025", title: "Prédiction du churn en télécommunications", desc: "Modèles de classification suivis avec MLflow, avec un suivi en temps réel de la performance.",
      pts: ["Modèles de classification suivis avec MLflow.", "Automatisation avec Docker et Airflow.", "Suivi en temps réel avec Elasticsearch et Kibana."], result: "20 % de réduction du temps de traitement des données" },
    en: { ctx: "Project · Nov 2024 – Mar 2025", title: "Customer churn prediction in telecoms", desc: "Classification models tracked with MLflow, with real-time performance monitoring.",
      pts: ["Classification models tracked with MLflow.", "Automation with Docker and Airflow.", "Real-time monitoring with Elasticsearch and Kibana."], result: "20% reduction in data processing time" } },
  { id: "staffing", kind: "pro", org: "PwC", cats: ["data", "automation"], stack: ["Power BI", "Power Query", "ETL", "Excel VBA"],
    fr: { ctx: "PwC TAC Tunisia, practice SAP · 2026", title: "Dashboard de suivi du staffing", desc: "Tableau de bord pour suivre les ressources de la practice SAP et mieux répartir les consultants sur les missions, alimenté par un ETL Power Query.",
      pts: ["Processus ETL construit avec Power Query pour extraire, transformer et charger les données de staffing.", "Préparation des données automatisée par des macros VBA.", "Dashboard Power BI de suivi des ressources et de l'allocation des consultants."], result: "" },
    en: { ctx: "PwC TAC Tunisia, SAP practice · 2026", title: "Staffing tracking dashboard", desc: "Dashboard to follow the SAP practice's resources and allocate consultants to missions more effectively, fed by a Power Query ETL.",
      pts: ["ETL process built with Power Query to extract, transform and load the staffing data.", "Data preparation automated with VBA macros.", "Power BI dashboard tracking resources and consultant allocation."], result: "" } },
  { id: "football", kind: "acad", cats: ["data"], stack: ["Python", "scikit-learn", "TensorFlow", "Keras", "NLP", "Django", "Flask"],
    fr: { ctx: "Projet · 2025", title: "Recommandation de recrutement de joueurs (football)", desc: "Plateforme de recommandation qui aide à recruter des joueurs, reliant agents, clubs et sponsors.",
      pts: ["Modèle d'évaluation transparent : scores de confiance, retours des utilisateurs, métriques d'IA explicable.", "Analyse prédictive intégrée dans une plateforme web."], result: "" },
    en: { ctx: "Project · 2025", title: "Player recruitment recommendation (football)", desc: "Recommendation platform that supports player recruitment, connecting agents, clubs and sponsors.",
      pts: ["Transparent evaluation model: confidence scores, user feedback, explainable-AI metrics.", "Predictive analytics integrated in a web platform."], result: "" } },
  { id: "covid", kind: "acad", cats: ["data"], stack: ["Python", "Statsmodels", "scikit-learn", "Pandas", "Matplotlib"],
    fr: { ctx: "Projet · 2025", title: "COVID-19 : analyse statistique de séries temporelles", desc: "Analyse de la mortalité par décomposition de séries temporelles et modèles SARIMA.",
      pts: ["Nettoyage et décomposition additive des données.", "Tendance modélisée par régression linéaire, saisonnalité par régression harmonique.", "Stationnarisation par différenciation, modèles SARIMA validés (ACF/PACF, ADF, AIC/BIC, Ljung-Box)."], result: "R² = 0,97 sur la tendance" },
    en: { ctx: "Project · 2025", title: "COVID-19: time-series statistical analysis", desc: "Mortality analysis using time-series decomposition and SARIMA models.",
      pts: ["Data cleaning and additive decomposition.", "Trend modelled with linear regression, seasonality with harmonic regression.", "Stationarity via differencing, SARIMA models validated (ACF/PACF, ADF, AIC/BIC, Ljung-Box)."], result: "R² = 0.97 on the trend" } },
  { id: "cnn", kind: "acad", cats: ["data"], stack: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas"],
    fr: { ctx: "Projet · 2025", title: "Détection de tumeurs cérébrales par CNN", desc: "Réseau de neurones convolutif pour détecter des tumeurs sur des images IRM.",
      pts: ["Prétraitement des images et conception de l'architecture (ReLU, batch normalization).", "Optimisation avec Adam, SGD, régularisation L2 et Dropout."], result: "" },
    en: { ctx: "Project · 2025", title: "Brain tumour detection with a CNN", desc: "Convolutional neural network to detect tumours on MRI images.",
      pts: ["Image preprocessing and architecture design (ReLU, batch normalization).", "Optimisation with Adam, SGD, L2 regularisation and Dropout."], result: "" } },
  { id: "atb", kind: "pro", org: "ATB", cats: ["web"], stack: ["Angular", "Node.js"],
    fr: { ctx: "Arab Tunisian Bank · 2024", title: "Plateforme de gestion des stages", desc: "Plateforme qui numérise le suivi et le traitement des candidatures de stage.",
      pts: ["Interface Angular et services Node.js.", "Du recueil des besoins à la mise en production, en lien avec les utilisateurs."], result: "" },
    en: { ctx: "Arab Tunisian Bank · 2024", title: "Internship management platform", desc: "Platform that digitises the tracking and processing of internship applications.",
      pts: ["Angular front end and Node.js services.", "From requirements gathering to production, working with the end users."], result: "" } }
];

const SKILLS = [
  { fr: "IA générative & agents", en: "Generative AI & agents", items: ["Azure OpenAI (GPT-4, GPT-4.1)", "RAG, FAISS, embeddings, OCR", "LangChain, LangGraph, CrewAI", "Prompts structurés", "Copilot Studio, n8n"] },
  { fr: "Data & machine learning", en: "Data & machine learning", items: ["Python, R, SQL", "scikit-learn, PyTorch, TensorFlow", "Séries temporelles, statistiques", "NLP, deep learning", "Web scraping (Crawl4AI)"] },
  { fr: "MLOps & déploiement", en: "MLOps & deployment", items: ["Docker, Kubernetes", "MLflow, Airflow", "CI/CD, Git", "Elasticsearch, Kibana"] },
  { fr: "Développement", en: "Development", items: ["FastAPI, SQLAlchemy", "Next.js, Angular, Node.js", "Django, Flask", "API REST"] },
  { fr: "Power Platform & BI", en: "Power Platform & BI", items: ["Power Automate, Power Apps", "Dataverse", "Power BI", "Power Query (ETL)", "Excel (VBA)"] },
  { fr: "Méthodes", en: "Methods", items: ["Agile, sprints, user stories", "Tests et documentation", "Collaboration avec les équipes métier"] }
];

const EDU = {
  fr: [
    { h: "Formation", items: ["ESPRIT, École d'Ingénieurs, Tunis (2021 – 2026)", "Diplôme d'ingénieur en Informatique, spécialité Data Science & IA"] },
    { h: "Engagement", items: ["Rotaract Club Didon Tunis", "RYLA (Rotary Youth Leadership Awards, 2023)", "IEEE Computer Society ESPRIT", "Lions Club ESPRIT"] }
  ],
  en: [
    { h: "Education", items: ["ESPRIT, School of Engineering, Tunis (2021 – 2026)", "Engineering degree in Computer Science, Data Science & AI track"] },
    { h: "Activities", items: ["Rotaract Club Didon Tunis", "RYLA (Rotary Youth Leadership Awards, 2023)", "IEEE Computer Society ESPRIT", "Lions Club ESPRIT"] }
  ]
};

/* Certificates: details copied from the certificates themselves. */
const CERTS = [
  { issuer: "NVIDIA", title: "Building Transformer-Based Natural Language Processing Applications",
    fr: { kind: "Certificate of Competency", date: "11 octobre 2025" }, en: { kind: "Certificate of Competency", date: "October 11, 2025" } },
  { issuer: "NVIDIA", title: "Applications of AI for Anomaly Detection",
    fr: { kind: "Certificate of Competency", date: "10 mai 2025" }, en: { kind: "Certificate of Competency", date: "May 10, 2025" } },
  { issuer: "AWS Academy", title: "Cloud Foundations (AWS Academy Graduate, Training Badge)", hours: "20 h",
    fr: { kind: "Certificate of Completion", date: "20 octobre 2025" }, en: { kind: "Certificate of Completion", date: "October 20, 2025" } }
];

/* ===== Helpers ===== */
const $ = (id) => document.getElementById(id);
let lang = "fr";
let filter = "all";
try { const s = localStorage.getItem("lang"); if (s === "fr" || s === "en") lang = s; } catch (e) { /* storage blocked */ }

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}
/* Company logo tile: shows assets/logos/<key>.png|svg|jpg if present, otherwise initials. */
function logoNode(key, short) {
  const box = el("span", "org-logo");
  box.setAttribute("aria-hidden", "true");
  const ini = el("span", "ini", short);
  box.appendChild(ini);
  const exts = ["png", "svg", "jpg"];
  let i = 0;
  const img = new Image();
  img.alt = "";
  img.onload = () => { ini.style.display = "none"; box.appendChild(img); };
  img.onerror = () => { if (i < exts.length) img.src = "assets/logos/" + key + "." + exts[i++]; };
  img.onerror();
  return box;
}
function tagList(items) {
  const ul = el("ul", "tags");
  items.forEach((t) => ul.appendChild(el("li", "", t)));
  return ul;
}

/* ===== Rendering ===== */
function renderStatic() {
  const u = UI[lang];
  document.documentElement.lang = lang;
  document.title = u.title;
  document.querySelectorAll("[data-i18n]").forEach((n) => {
    const v = u[n.dataset.i18n];
    if (typeof v === "string") n.textContent = v;
  });
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  $("mClose").setAttribute("aria-label", u.close);
  $("chips").setAttribute("aria-label", u.filter_label);
  updateThemeButton();

  const facts = $("facts");
  facts.replaceChildren();
  u.facts.forEach(([k, v]) => {
    const li = el("li");
    li.appendChild(el("b", "", k));
    li.appendChild(document.createTextNode(v));
    facts.appendChild(li);
  });

  const tl = $("timeline");
  tl.replaceChildren();
  EXPERIENCE.forEach((x) => {
    const d = x[lang];
    const li = el("li", "tl");
    const head = el("div", "tl-head");
    head.appendChild(logoNode(x.logo, x.short));
    const txt = el("div");
    txt.appendChild(el("h3", "", d.role + " · " + x.org));
    txt.appendChild(el("p", "meta", d.date + " · " + x.place));
    head.appendChild(txt);
    li.appendChild(head);
    const ul = el("ul");
    d.pts.forEach((p) => ul.appendChild(el("li", "", p)));
    li.appendChild(ul);
    tl.appendChild(li);
  });

  const sg = $("skillsGrid");
  sg.replaceChildren();
  SKILLS.forEach((s) => {
    const box = el("div", "sk");
    box.appendChild(el("h3", "", s[lang]));
    box.appendChild(tagList(s.items));
    sg.appendChild(box);
  });

  const cg = $("certGrid");
  cg.replaceChildren();
  CERTS.forEach((c) => {
    const d = c[lang];
    const box = el("div", "cert");
    box.appendChild(el("span", "issuer", c.issuer));
    box.appendChild(el("h3", "", c.title));
    box.appendChild(el("p", "meta", d.kind + " · " + u.cert_issued + " " + d.date + (c.hours ? " · " + u.cert_hours + " " + c.hours : "")));
    cg.appendChild(box);
  });

  const eg = $("eduGrid");
  eg.replaceChildren();
  EDU[lang].forEach((b) => {
    const box = el("div", "box");
    box.appendChild(el("h3", "", b.h));
    const ul = el("ul");
    b.items.forEach((t) => ul.appendChild(el("li", "", t)));
    box.appendChild(ul);
    eg.appendChild(box);
  });
}

function renderChips() {
  const u = UI[lang];
  const box = $("chips");
  box.replaceChildren();
  ["all", "genai", "data", "mlops", "automation", "web"].forEach((k) => {
    const n = k === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cats.includes(k)).length;
    const b = el("button", "chip", (k === "all" ? u.all : u.cats[k]) + " (" + n + ")");
    b.type = "button";
    b.setAttribute("aria-pressed", String(filter === k));
    b.addEventListener("click", () => { filter = k; renderChips(); renderGrid(); });
    box.appendChild(b);
  });
}

function renderGrid() {
  const u = UI[lang];
  [["pro", "gridPro", "groupPro"], ["acad", "gridAcad", "groupAcad"]].forEach(([kind, gridId, groupId]) => {
    const grid = $(gridId);
    grid.replaceChildren();
    const list = PROJECTS.filter((p) => p.kind === kind && (filter === "all" || p.cats.includes(filter)));
    $(groupId).hidden = list.length === 0;
    fillGrid(grid, list, u);
  });
}

function fillGrid(grid, list, u) {
  list.forEach((p) => {
    const d = p[lang];
    const feat = p.featured && filter === "all";
    const card = el("div", "card" + (feat ? " feat" : ""));
    card.dataset.cat = p.cats[0];
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", d.title);

    card.appendChild(el("span", "cat", (feat ? u.featured + " · " : "") + u.cats[p.cats[0]]));
    const titleRow = el("div", "title-row");
    titleRow.appendChild(el("h3", "", d.title));
    if (p.org) titleRow.appendChild(el("span", "org", p.org));
    card.appendChild(titleRow);
    card.appendChild(el("p", "", d.desc));
    if (d.result) card.appendChild(el("span", "res", d.result));
    card.appendChild(tagList(p.stack.slice(0, feat ? 6 : 4)));
    card.appendChild(el("span", "more", u.see));

    card.addEventListener("click", () => openModal(p));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(p); }
    });
    grid.appendChild(card);
  });
}

/* ===== Modal ===== */
const modal = $("modal");
let lastFocus = null;
function openModal(p) {
  const u = UI[lang], d = p[lang];
  lastFocus = document.activeElement;
  $("mCat").textContent = p.cats.map((c) => u.cats[c]).join(" · ");
  $("mTitle").textContent = d.title;
  $("mCtx").textContent = d.ctx;
  $("mDesc").textContent = d.desc;
  const pts = $("mPoints");
  pts.replaceChildren();
  d.pts.forEach((t) => pts.appendChild(el("li", "", t)));
  const r = $("mResult");
  r.hidden = !d.result;
  r.textContent = d.result ? u.result + " : " + d.result : "";
  const tags = $("mTags");
  tags.replaceChildren();
  p.stack.forEach((t) => tags.appendChild(el("li", "", t)));
  if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
}
function closeModal() {
  if (typeof modal.close === "function") modal.close(); else modal.removeAttribute("open");
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
$("mClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

/* ===== Header: language, burger, active section ===== */
document.querySelectorAll(".lang button").forEach((b) => {
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
    renderStatic(); renderChips(); renderGrid();
  });
});
/* Theme: light by default, choice remembered. */
function currentTheme() { return document.documentElement.dataset.theme === "dark" ? "dark" : "light"; }
function updateThemeButton() {
  const btn = $("theme");
  const label = currentTheme() === "dark" ? UI[lang].theme_to_light : UI[lang].theme_to_dark;
  btn.setAttribute("aria-label", label);
  btn.title = label;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", currentTheme() === "dark" ? "#0f1115" : "#fafaf8");
}
$("theme").addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
  updateThemeButton();
});

const burger = $("burger"), nav = $("nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
});
if ("IntersectionObserver" in window) {
  const links = [...nav.querySelectorAll("a")];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["projects", "about", "experience", "skills", "contact"].forEach((id) => { const s = $(id); if (s) spy.observe(s); });
}

/* ===== Contact: copy e-mail ===== */
$("copy").addEventListener("click", async () => {
  const out = $("copied");
  try {
    await navigator.clipboard.writeText(EMAIL);
    out.textContent = UI[lang].copied;
  } catch (e) {
    out.textContent = UI[lang].copy_fail;
  }
});

/* ===== Photo: use assets/photo.jpg if present, otherwise initials ===== */
const photo = $("photo");
photo.addEventListener("error", () => { photo.style.display = "none"; });
photo.addEventListener("load", () => { $("initials").style.display = "none"; });
if (photo.complete && photo.naturalWidth > 0) $("initials").style.display = "none";

$("year").textContent = new Date().getFullYear();
renderStatic(); renderChips(); renderGrid();
