import styles from "@/styles/getInTouch.module.css";

export default function GetInTouch(props) {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_content}>
        <div className={styles.contact_header}>
          Get in <span style={{ color: "#1A74E5" }}> Touch!</span>
        </div>
        <div className={styles.contact_privacy}>
          {
            "We’ll never sell your information or share it with third-party marketing sevices"
          }
        </div>
        <div className={styles.contact_methods}>
          <div className={styles.contact_methods_imputs}></div>
          <div className={styles.contact_methods_book_meeting}>
            Or book a meeting here
          </div>
          <div className={styles.contact_methods_calendly_outter_shell}>
            <div className={styles.contact_methods_calendly_inner_shell}>
              <img
                src="/calendly.svg"
                alt="Calendly"
                className={styles.contact_methods_calendly}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
