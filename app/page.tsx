const projects = [
  {
    title: "Signal",
    label: "Agente de vagas",
    description: "Um radar pessoal que cruza preferências, currículo e oportunidades para explicar onde vale concentrar energia.",
    details: ["Next.js", "TypeScript", "APIs", "Análise explicável"],
    accent: "lime",
  },
  {
    title: "Color Cycle",
    label: "Amazfit Bip 6",
    description: "Mini Program para Zepp OS que conecta o relógio ao Hevy e transforma a rotina de treino em informação acessível no pulso.",
    details: ["Zepp OS", "JavaScript", "Bluetooth", "API Hevy"],
    accent: "orange",
  },
];

const skills = ["Python", "SQL", "Power BI", "Power Automate", "FastAPI", "Flask", "APIs", "Git/GitHub", "HTML/CSS", "IA generativa"];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Ir para o início">LP<span>.</span></a>
        <div className="nav-links"><a href="#trabalho">Trabalho</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></div>
        <a className="nav-cta" href="mailto:leonardopenna1@gmail.com">Vamos conversar <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <p className="location">Brasília, DF · disponível para desafios em tecnologia</p>
        <div className="hero-copy">
          <h1 id="hero-title">Leonardo<br /><i>Penna</i></h1>
          <p>Engenharia da Computação, automação e produtos digitais que reduzem atrito no trabalho das pessoas.</p>
        </div>
        <div className="trajectory" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="pulse" /><span className="trajectory-label">em movimento</span></div>
        <a className="scroll-cue" href="#trabalho">ver projetos <span>↓</span></a>
      </section>

      <section className="work" id="trabalho" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title">Projetos que mostram como eu penso.</h2><p>Da busca por oportunidades à experiência no dispositivo: cada projeto nasce de um problema prático e vira uma ferramenta que alguém pode usar.</p></div>
        <div className="project-list">
          {projects.map((project, index) => <article className={`project project-${project.accent}`} key={project.title}>
            <div className="project-index">0{index + 1}</div>
            <div className="project-main"><p>{project.label}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tags">{project.details.map((detail) => <span key={detail}>{detail}</span>)}</div></div>
            <div className="project-art" aria-hidden="true"><span /><b>{project.title.slice(0, 1)}</b><i /></div>
            <div className="project-footer"><span>Repositório em publicação</span><a href="#contato">Conhecer o projeto <span aria-hidden="true">↗</span></a></div>
          </article>)}
        </div>
      </section>

      <section className="about" id="sobre" aria-labelledby="about-title">
        <div className="about-statement"><p className="rule-label">Perfil</p><h2 id="about-title">Tecnologia só faz sentido quando deixa o caminho mais claro.</h2></div>
        <div className="about-detail"><p>Sou graduando em Engenharia da Computação no CEUB e atuo com tecnologia, análise de dados, automação de processos e suporte. Gosto de entender o problema antes de escolher a ferramenta.</p><p>Minha experiência passa por rotinas institucionais, visualização de dados, integração de APIs e projetos com IA generativa — sempre com atenção ao que é útil, seguro e sustentável.</p><a href="https://www.linkedin.com/in/leonardodmp" target="_blank" rel="noreferrer">Ver trajetória no LinkedIn <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="capabilities" aria-labelledby="capabilities-title">
        <div><p className="rule-label">Ferramentas de trabalho</p><h2 id="capabilities-title">Uma base técnica para explorar, construir e melhorar.</h2></div>
        <ul>{skills.map((skill, index) => <li key={skill}><span>{String(index + 1).padStart(2, "0")}</span>{skill}</li>)}</ul>
      </section>

      <section className="credentials" aria-labelledby="credentials-title">
        <p className="rule-label">Formação contínua</p><h2 id="credentials-title">Certificações e estudo em andamento.</h2>
        <div className="credential-grid"><p>Oracle Cloud Infrastructure 2025 Certified Generative AI Professional <span>Oracle</span></p><p>Prompt Engineering for ChatGPT <span>Vanderbilt University / Coursera</span></p><p>Gemini for Developers <span>Google DeepMind / Coursera</span></p><p>Python 3 — Mundo 3 <span>Curso em Vídeo · 40h</span></p></div>
      </section>

      <footer id="contato">
        <div><p className="rule-label">Próxima conversa</p><h2>Tem uma ideia,<br />vaga ou projeto?</h2><a className="email" href="mailto:leonardopenna1@gmail.com">leonardopenna1@gmail.com <span aria-hidden="true">↗</span></a></div>
        <div className="footer-links"><a href="https://github.com/ledumape" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/leonardodmp" target="_blank" rel="noreferrer">LinkedIn</a><span>© {new Date().getFullYear()} Leonardo Penna</span></div>
      </footer>
    </main>
  );
}
