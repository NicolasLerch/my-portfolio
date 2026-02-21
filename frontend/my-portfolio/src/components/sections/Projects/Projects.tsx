import styles from "./Projects.module.css";
import { projects } from "../../../content/projects";
import  {ProjectCard} from "../../../components/ProjectCard/ProjectCard";
import { SectionHeader } from "../../SectionHeader/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className={styles.section} >
      <div className={styles.inner}>
        <SectionHeader label="PORTFOLIO" title="Selected projects" />
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}