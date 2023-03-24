import styles from "@/styles/Welcome.module.css";

export default function Welcome(props) {
  const { handleClick } = props;
  return (
    <div className={styles.welcome_home}>
      <div className={styles.welcome}>
        <div className={styles.welcome_content}>
          <div className={styles.welcome_text}>
            Welcome to my <span style={{ color: "#1A74E5" }}>portfolio!</span>
          </div>
          <div
            className={styles.welcome_get_in_touch}
            onClick={() => handleClick("GetInTouch")}>
            Get In Touch
          </div>
        </div>
      </div>

      <div className={styles.welcome_experiance_background}>
        <div className={styles.welcome_experiance_outer_border}>
          <div className={styles.welcome_experiance_inner_border}>
            <div className={styles.welcome_experiance}>
              <div className={styles.welcome_experiance_number}>50+</div>
              <div className={styles.welcome_experiance_text}>
                happy clients
              </div>
            </div>
            <div className={styles.welcome_experiance}>
              <div className={styles.welcome_experiance_number}>50+</div>
              <div className={styles.welcome_experiance_text}>projects</div>
            </div>
            <div className={styles.welcome_experiance}>
              <div className={styles.welcome_experiance_number}>1 + year</div>
              <div className={styles.welcome_experiance_text}>experiance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
