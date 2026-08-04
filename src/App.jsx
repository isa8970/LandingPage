import Brand from './components/Brand';
import ProjectLink from './components/ProjectLink';
import { projectInfo, projectLinks } from './data/projectLinks';

export default function App() {
  return (
    <main className="landing">
      <div className="background-effects" aria-hidden="true">
        <span className="orb orb--gold" />
        <span className="orb orb--red" />
        <span className="grid" />
      </div>

      <section className="landing__container">
        <header className="hero">
          <Brand projectName={projectInfo.projectName} />

          

          <h1>
            Menos tiempo buscando.
            <span> Más tiempo disfrutando.</span>
          </h1>

          <p>{projectInfo.description}</p>
        </header>

        <nav className="project-links" aria-label="Recursos del proyecto">
          {projectLinks.map((item, index) => (
            <ProjectLink key={item.id} item={item} index={index} />
          ))}
        </nav>

        <footer className="footer">
          <span>Desarrollado por {projectInfo.developerName}</span>
          <small>Proyecto académico · {projectInfo.year}</small>
        </footer>
      </section>
    </main>
  );
}
