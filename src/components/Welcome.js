import styles from "@/styles/Welcome.module.css";

export default function Welcome(props) {
  const { handleClick } = props;
  return (
    <div className={styles.welcome_home}>
      <div className={styles.welcome}>
        {/* <img
          src="\welcome\icons_adobe-photoshop.svg"
          alt="adobe photoshop icon"
          style={{
            position: "absolute",
            top: "50%",
            left: "100%",
            transform: "translateX(-100%)",
          }}
        />
        <img
          src="\welcome\icons_figma.svg"
          alt="figma icon"
          style={{ position: "absolute", top: "0px", left: "0px" }}
        />
        <img
          src="\welcome\iconss_adobe-illustrator.svg"
          alt="adobe illustrator icon"
          style={{
            position: "absolute",
            top: "0",
            left: "100%",
            transform: "translateX(-100%)",
          }}
        />
        <img
          src="\welcome\skill-icons_webflow.svg"
          alt="webflow"
          style={{ position: "absolute", top: "50%", left: "0" }}
        /> */}
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
        <div className={styles.welcome_experiance_outer_container}>
          <img
            src="/welcome/angle.svg"
            alt="arrow left"
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />
          <img
            src="/welcome/angle.svg"
            alt="arrow left"
            style={{
              position: "absolute",
              bottom: "0px",
              right: "0px",
              transform: "scale(-1, -1)",
            }}
          />
          <div className={styles.welcome_experiance_outer_border}></div>
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
