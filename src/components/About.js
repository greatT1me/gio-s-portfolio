import styles from "@/styles/about.module.css";

export default function About(props) {
  const { handleClick } = props;
  return (
    <div className={styles.about_main}>
      {" "}
      <img src="/about_gio.jpg" alt="Gio " className={styles.about_picture} />
      <div className={styles.about_text}>
        <div className={styles.about_about_me}>About me</div>
        <div className={styles.about_about}>
          <div className={styles.about_about_text}>
            Whether you're a start-up founder, a product manager, or a fellow
            designer, I'm always open to new design challenges and
            collaborations. Feel free to explore my portfolio and get in touch
            with me through the contact section if you'd like to learn more
            about my design services or discuss a potential project. Thank you
            for visiting my website, and I hope to hear from you soon!
          </div>
          <div className={styles.about_see_more}>See more</div>
        </div>

        <div
          className={styles.about_get_in_touch}
          onClick={() => handleClick("GetInTouch")}>
          Get in Touch
        </div>
      </div>
    </div>
  );
}
