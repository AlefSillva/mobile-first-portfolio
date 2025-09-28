import styles from "./Testimonial.module.css";
import useReveal from "../effects/UseReveal";

export default function Testimonial({ title, text }) {
  const [ref, isVisible] = useReveal({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`${styles.Testimonial_container} ${isVisible ? styles.reveal : ""}`}
      >
      <h3 className={styles.Testimonial_title}>{title}</h3>
      <section className={styles.Testimonial}>
          <p className={styles.Testimonial_text}>{text}</p>
      </section>
    </div>
  );
}
