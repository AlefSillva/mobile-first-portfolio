import styles from "./ProfileCard.module.css";

export default function ProfileCard({ picture, pictureName, name, description }) {
    return (
        <div className={styles.profileCard}>
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