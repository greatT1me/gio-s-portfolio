import styles from "@/styles/footer.module.css";

export default function Footer(props) {
  const { navigation, handleClick } = props;
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_logo}>
          <img
            src="/main_logo.svg"
            alt=""
            className={styles.footer_main_logo}
          />{" "}
          <div className={styles.footer_tdesign}>Tdesign</div>
        </div>
        <div className={styles.footer_navigation}>
          {Object.keys(navigation).map((btn) => {
            return (
              <div
                className={styles.footer_navigation_btn}
                onClick={() => handleClick(navigation[btn])}>
                {btn}
              </div>
            );
          })}
        </div>
        <div className={styles.footer_follow_me}>
          Follow me:{" "}
          <img
            src="/footer/footer_linkedin.svg"
            alt="Linkedin"
            className={styles.footer_social_net}
          />{" "}
          <img
            src="/footer/footer_be.svg"
            alt="Be"
            className={styles.footer_social_net}
          />{" "}
        </div>
      </div>
      <div className={styles.footer_copyright}>
        © 2023 Tdesign. All Rights Reserved.
      </div>
    </div>
  );
}
