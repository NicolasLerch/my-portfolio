import styles from "./About.module.css";
import { SectionHeader } from "../../SectionHeader/SectionHeader";
import { skills, content} from "../../../content/about";
import Badge from "../../Badge/Badge";

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.inner}>
                <SectionHeader label="BACKGROUND" title="About me" />
                <div className={styles.grid}>
                    <div className={styles.bio}>
                        {content.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className={styles.skills}>
                        {skills.map((group) => (
                            <div className={styles.skillGroup}>
                                <h3 className={styles.skillGroupTitle}>{group.title}</h3>
                                <div className={styles.skillsList}>
                                    {group.skills.map((skill) => (
                                        <Badge key={skill}>{skill}</Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        
        </section>
    )
}