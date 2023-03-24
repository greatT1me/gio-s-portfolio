import styles from "@/styles/stories.module.css";

export default function Stories(props) {
  const { stories } = props;

  return (
    <div className={styles.success_stories}>
      <div className={styles.stories_arrow_box}>
        {" "}
        <img
          src="/review_arrow_left.svg"
          alt="arrow left"
          className={styles.stories_arrows}
        />
      </div>
      <div className={styles.stories_content}>
        <div className={styles.stories_title}>
          <div>
            Success <span style={{ color: "black" }}>Stories</span>{" "}
          </div>
        </div>
        <div className={styles.stories}>{stories[0].story}</div>
        {/*  */}
        <div className={styles.stories_author}>
          <div className={styles.author_info}>
            <div className={styles.author_name}>{stories[0].authorName} </div>
            <div className={styles.author_job}>{stories[0].authorJob}</div>
          </div>
          <div className={styles.author_website_name}>{stories[0].website}</div>
        </div>
      </div>{" "}
      <div className={styles.stories_arrow_box}>
        <img
          src="/review_arrow_right.svg"
          alt="arrow left"
          className={styles.stories_arrows}
        />
      </div>
    </div>
  );
}
