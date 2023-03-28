import styles from "@/styles/TopBar.module.css";
import Image from "next/image";

const BUTTONS = ["Home", "About me", "My projects", "Services", "Testimonials"];

export default function TopBar(props) {
  const { topBarNav, handleClick } = props;
  return (
    <div className={styles.white_background} tabIndex={12}>
      <div className={styles.top_bar} tabIndex={0}>
        <img src="/main_logo.svg" alt="main logo" className={styles.logo} />
        <div className={styles.nav_btn}>
          {Object.keys(topBarNav).map((text) => {
            return (
              <div
                key={"top bar " + text}
                className={styles.button}
                onClick={() => handleClick(topBarNav[text])}>
                {text}
              </div>
            );
          })}
        </div>
        <div
          className={styles.get_in_touch}
          onClick={() => handleClick("GetInTouch")}>
          Get in Touch
        </div>
      </div>
    </div>
  );
}
