import styles from "./Testimonial.module.css";

export default function Testimonial({ title, text }) {
  return (
    <>
      <h3 className={styles.Testimonial_title}>{title}</h3>
      <section className={styles.Testimonial}>
          <p className={styles.Testimonial_text}>{text}</p>
      </section>
    </>
  );
}
