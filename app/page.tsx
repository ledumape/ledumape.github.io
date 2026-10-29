"use client";

import { useEffect, useState } from "react";


type Language = "pt" | "en";

const content = {
  pt: {
    nav: { work: "Trabalho", about: "Sobre", contact: "Contato", talk: "Vamos conversar" },
    language: { pt: "Português", en: "English", label: "Idioma do portfólio" },
    location: "Brasília, DF · disponível para desafios em tecnologia",
    hero: "AI Engineer Júnior | Engenharia de Software e Inteligência Artificial Generativa\nDesenvolvo aplicações com IA, LLMs e APIs para transformar problemas reais em soluções funcionais.",
    movement: "em movimento", seeProjects: "ver projetos", workTitle: "Projetos que mostram como eu penso.",
    workLead: "Da busca por oportunidades à experiência no dispositivo: cada projeto nasce de um problema prático e vira uma ferramenta que alguém pode usar.",
    repository: "Repositório público", viewProject: "Conhecer o projeto", liveDemo: "Demo ao vivo", sourceCode: "Código-fonte",
    projects: [
      { label: "Engenharia de Produto com IA / Ferramenta para desenvolvedores · Destaque", title: "Prompt2Project", description: "Copiloto de planejamento de software com IA que transforma ideias vagas em especificações estruturadas e prontas para agentes de código.", highlights: ["Discovery adaptativa", "Structured Outputs", "Validação semântica", "Limite de uso", "Português e inglês", "Em produção"], details: ["Next.js", "TypeScript", "OpenRouter", "Zod", "Upstash Redis", "Vercel"], accent: "lime", repositoryUrl: "https://github.com/ledumape/prompt2project", demoUrl: "https://prompt2project.vercel.app", previewImage: "/projects/prompt2project/01-new-idea.png", imageAlt: "Tela de nova ideia do Prompt2Project com exemplo de priorização de feedback de clientes", isFeatured: true },
      { label: "Agente de vagas", title: "Signal", description: "Um radar pessoal que cruza preferências, currículo e oportunidades para explicar onde vale concentrar energia.", details: ["Next.js", "TypeScript", "APIs", "Análise explicável"], accent: "lime", repositoryUrl: "https://github.com/ledumape/signal-job-radar", demoUrl: null, previewImage: "/projects/signal/cover.png", imageAlt: "Captura real da tela inicial do Signal", isFeatured: false, highlights: [] },
      { label: "Amazfit Bip 6", title: "bip6tohevy", description: "Mini Program para Zepp OS que conecta o relógio ao Hevy e transforma a rotina de treino em informação acessível no pulso.", details: ["Zepp OS", "JavaScript", "Bluetooth", "API Hevy"], accent: "orange", repositoryUrl: "https://github.com/ledumape/bip6tohevy", demoUrl: null, previewImage: "/projects/bip6tohevy/cover.png", imageAlt: "Imagem conceitual do bip6tohevy com smartwatch em ambiente de treino", isFeatured: false, highlights: [] },
    ],
    profile: "Perfil", aboutTitle: "Tecnologia só faz sentido quando deixa o caminho mais claro.",
    about: ["Sou Engenheiro de Computação formado pelo CEUB e construo aplicações, integrações e automações. Gosto de entender o problema antes de escolher a ferramenta.", "Minha experiência passa por inovação, análise de dados, suporte técnico, integração de APIs e projetos com IA generativa, sempre com atenção ao que é útil, seguro e sustentável."],
    linkedin: "Ver trajetória no LinkedIn", capabilitiesLabel: "Ferramentas de trabalho", capabilitiesTitle: "Uma base técnica para explorar, construir e melhorar.",
    skills: ["Python", "SQL", "Power BI", "Power Automate", "FastAPI", "Flask", "APIs", "Git/GitHub", "HTML/CSS", "IA generativa"],
    credentialsLabel: "Formação contínua", credentialsTitle: "Certificações e estudo em andamento.",
    credentials: [["Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", "Oracle"], ["Prompt Engineering for ChatGPT", "Vanderbilt University / Coursera"], ["Gemini for Developers", "Google DeepMind / Coursera"], ["Python 3: Mundo 3", "Curso em Vídeo · 40h"]],
    next: "Próxima conversa", contactTitle: "Tem uma ideia,\nvaga ou projeto?",
  },
  en: {
    nav: { work: "Work", about: "About", contact: "Contact", talk: "Let's talk" },
    language: { pt: "Português", en: "English", label: "Portfolio language" },
    location: "Brasília, Brazil · open to technology opportunities",
    hero: "Junior AI Engineer | Software Engineering and Generative AI\nI build AI applications, LLM integrations, and APIs that turn real problems into functional solutions.",
    movement: "in motion", seeProjects: "view projects", workTitle: "Projects that show how I think.",
    workLead: "From opportunity discovery to an on device experience, each project starts with a practical problem and becomes a tool people can use.",
    repository: "Public repository", viewProject: "View project", liveDemo: "Live Demo", sourceCode: "Source Code",
    projects: [
      { label: "AI Product Engineering / Developer Tool · Featured", title: "Prompt2Project", description: "AI-powered software planning copilot that transforms vague ideas into structured, buildable project specifications and coding-agent-ready prompts.", highlights: ["Adaptive AI discovery", "Structured Outputs", "Semantic validation", "Rate limiting", "English and Portuguese", "Production deployment"], details: ["Next.js", "TypeScript", "OpenRouter", "Zod", "Upstash Redis", "Vercel"], accent: "lime", repositoryUrl: "https://github.com/ledumape/prompt2project", demoUrl: "https://prompt2project.vercel.app", previewImage: "/projects/prompt2project/01-new-idea.png", imageAlt: "Prompt2Project new idea screen with a customer feedback prioritization example", isFeatured: true },
      { label: "Job opportunities agent", title: "Signal", description: "A personal radar that connects preferences, résumé, and opportunities to clarify where to focus energy.", details: ["Next.js", "TypeScript", "APIs", "Explainable analysis"], accent: "lime", repositoryUrl: "https://github.com/ledumape/signal-job-radar", demoUrl: null, previewImage: "/projects/signal/cover.png", imageAlt: "Real screenshot of the Signal home screen", isFeatured: false, highlights: [] },
      { label: "Amazfit Bip 6", title: "bip6tohevy", description: "A Zepp OS Mini Program that connects the watch to Hevy and turns workout routines into accessible information on the wrist.", details: ["Zepp OS", "JavaScript", "Bluetooth", "Hevy API"], accent: "orange", repositoryUrl: "https://github.com/ledumape/bip6tohevy", demoUrl: null, previewImage: "/projects/bip6tohevy/cover.png", imageAlt: "Conceptual image for bip6tohevy with a smartwatch in a workout setting", isFeatured: false, highlights: [] },
    ],
    profile: "Profile", aboutTitle: "Technology matters when it makes the path clearer.",
    about: ["I am a Computer Engineer trained at CEUB, building applications, integrations, and automations. I like to understand the problem before choosing a tool.", "My experience includes innovation, data analysis, technical support, API integration, and generative AI projects, always focused on what is useful, secure, and sustainable."],
    linkedin: "View my LinkedIn profile", capabilitiesLabel: "Tools I work with", capabilitiesTitle: "A technical foundation to explore, build, and improve.",
    skills: ["Python", "SQL", "Power BI", "Power Automate", "FastAPI", "Flask", "APIs", "Git/GitHub", "HTML/CSS", "Generative AI"],
    credentialsLabel: "Continuous learning", credentialsTitle: "Certifications and ongoing study.",
    credentials: [["Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", "Oracle"], ["Prompt Engineering for ChatGPT", "Vanderbilt University / Coursera"], ["Gemini for Developers", "Google DeepMind / Coursera"], ["Python 3: Level 3", "Curso em Vídeo · 40h"]],
    next: "Next conversation", contactTitle: "Have an idea,\nan opening, or a project?",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title = language === "pt" ? "Leonardo Penna | Engenharia, automação e produtos digitais" : "Leonardo Penna | Engineering, automation and digital products";
  }, [language]);

  return <main>
    <nav className="nav" aria-label={language === "pt" ? "Navegação principal" : "Main navigation"}>
      <a className="brand" href="#inicio" aria-label={language === "pt" ? "Ir para o início" : "Go to top"}>LP<span>.</span></a>
      <div className="nav-links"><a href="#trabalho">{t.nav.work}</a><a href="#sobre">{t.nav.about}</a><a href="#contato">{t.nav.contact}</a></div>
      <div className="nav-actions"><div className="language-switcher" aria-label={t.language.label}><button type="button" aria-pressed={language === "pt"} onClick={() => setLanguage("pt")}>{t.language.pt}</button><span aria-hidden="true">/</span><button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>{t.language.en}</button></div><a className="nav-cta" href="mailto:leonardopenna1@gmail.com">{t.nav.talk} <span aria-hidden="true">↗</span></a></div>
    </nav>
    <section className="hero" id="inicio" aria-labelledby="hero-title"><p className="location">{t.location}</p><div className="hero-copy"><h1 id="hero-title">Leonardo<br /><i>Penna</i></h1><p>{t.hero.split("\n").map((line, index) => <span className={index === 0 ? "hero-role" : "hero-summary"} key={line}>{line}</span>)}</p></div><div className="trajectory" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="pulse" /><span className="trajectory-label">{t.movement}</span></div><a className="scroll-cue" href="#trabalho">{t.seeProjects} <span>↓</span></a></section>
    <section className="work" id="trabalho" aria-labelledby="work-title"><div className="section-heading"><h2 id="work-title">{t.workTitle}</h2><p>{t.workLead}</p></div><div className="project-list">{t.projects.map((project, index) => <article className={`project project-${project.accent}`} key={project.title}><div className="project-index">0{index + 1}</div><div className="project-main"><p>{project.label}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>{project.highlights.length > 0 && <p className="project-highlights">{project.highlights.join(" · ")}</p>}<div className="tags">{project.details.map((detail) => <span key={detail}>{detail}</span>)}</div></div><div className={`project-art${project.previewImage ? " project-art-preview" : ""}`} aria-hidden={project.previewImage ? undefined : "true"}>{project.previewImage ? (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={project.previewImage} width={1035} height={900} loading="lazy" alt={project.imageAlt} />
) : <><span /><b>{project.title.slice(0, 1)}</b><i /></>}</div><div className="project-footer"><span>{project.isFeatured ? project.label : t.repository}</span>{project.isFeatured && project.demoUrl ? <div className="project-links"><a href={project.demoUrl} target="_blank" rel="noreferrer">{t.liveDemo} <span aria-hidden="true">↗</span></a><a href={project.repositoryUrl} target="_blank" rel="noreferrer">{t.sourceCode} <span aria-hidden="true">↗</span></a></div> : <a href={project.repositoryUrl} target="_blank" rel="noreferrer">{t.viewProject} <span aria-hidden="true">↗</span></a>}</div></article>)}</div></section>
    <section className="about" id="sobre" aria-labelledby="about-title"><div className="about-statement"><p className="rule-label">{t.profile}</p><h2 id="about-title">{t.aboutTitle}</h2></div><div className="about-detail"><p>{t.about[0]}</p><p>{t.about[1]}</p><a href="https://www.linkedin.com/in/leonardodmp" target="_blank" rel="noreferrer">{t.linkedin} <span aria-hidden="true">↗</span></a></div></section>
    <section className="capabilities" aria-labelledby="capabilities-title"><div><p className="rule-label">{t.capabilitiesLabel}</p><h2 id="capabilities-title">{t.capabilitiesTitle}</h2></div><ul>{t.skills.map((skill, index) => <li key={skill}><span>{String(index + 1).padStart(2, "0")}</span>{skill}</li>)}</ul></section>
    <section className="credentials" aria-labelledby="credentials-title"><p className="rule-label">{t.credentialsLabel}</p><h2 id="credentials-title">{t.credentialsTitle}</h2><div className="credential-grid">{t.credentials.map(([name, source]) => <p key={name}>{name} <span>{source}</span></p>)}</div></section>
    <footer id="contato"><div><p className="rule-label">{t.next}</p><h2>{t.contactTitle.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h2><a className="email" href="mailto:leonardopenna1@gmail.com">leonardopenna1@gmail.com <span aria-hidden="true">↗</span></a></div><div className="footer-links"><a href="https://github.com/ledumape" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/leonardodmp" target="_blank" rel="noreferrer">LinkedIn</a><span>© {new Date().getFullYear()} Leonardo Penna</span></div></footer>
  </main>;
}
