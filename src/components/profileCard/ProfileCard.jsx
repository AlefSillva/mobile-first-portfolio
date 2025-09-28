import styles from "./ProfileCard.module.css";
import useReveal from "../effects/UseReveal";

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
            </div>
        </div>
    )
}