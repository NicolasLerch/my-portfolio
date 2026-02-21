import styles from "./ProjectCard.module.css";
import type { Project } from "../../types/projects";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    description,
    image,
    stack,
    demoUrl,
    repoUrl,
  } = project


    return (
        <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={`Screenshot of ${title}`} className={styles.image} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {stack.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className={styles.actions}>
          {demoUrl && (
            <Button variant="primary" size="small" href={demoUrl}>
              Demo
            </Button>
          )}
          {repoUrl && (
            <Button variant="outline" size="small" href={repoUrl}>
              Code
            </Button>
          )}
        </div>
      </div>
    </article>
    )
}