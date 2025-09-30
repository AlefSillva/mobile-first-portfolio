import styles from "./ProfileCard.module.css";
import useReveal from "../effects/UseReveal";
import linkedinLogo from "../../assets/In-logo.png";
import githubLogo from "../../assets/github-logo.png";

export default function ProfileCard({ picture, pictureName, name, description }) {
    const [ref, isVisible] = useReveal();
    return (
        <div className={`${styles.profileCard}  ${isVisible ? styles.reveal : ""}`} ref={ref}>
            <div className={styles.profile_imageContainer}>
                <img src={picture} alt={pictureName} />
            </div>
            <div className={styles.profile_infoContainer}>
                <h2 className={styles.profile_name}>{name}</h2>
                <p className={styles.profile_description}>{description}</p>
                <div className={styles.profile_socials}>
                    <div className={styles.profile_linkedin}>
                        <a href="https://www.linkedin.com/in/alefsilvasantos15/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="LinkedIn" />
                        </a>
                    </div>

                    <div className={styles.profile_github}>
                        <a href="https://github.com/AlefSillva" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}