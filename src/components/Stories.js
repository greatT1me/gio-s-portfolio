import styles from "@/styles/stories.module.css";

export default function Stories(props) {
  const { stories } = props;

  return (
    <div className={styles.success_stories}>
      <div className={styles.stories_title}>Success Stories</div>
      <div className={styles.stories}>
        {stories.map((story) => {
          return (
            <div className={styles.stories_each_story}>
              <div className={styles.stories_name}>{story.name}</div>
              <div className={styles.stories_story}>{story.story}</div>
              <div className={styles.stories_review}></div>
              {story.review}
            </div>
          );
        })}
      </div>
      <div className={styles.stories_arrow_box}>
        {" "}
        <img
          src="/review_arrow_left.svg"
          alt="arrow left"
          className={styles.stories_arrows}
        />{" "}
        <img
          src="/review_arrow_right.svg"
          alt="arrow left"
          className={styles.stories_arrows}
        />
      </div>
    </div>
  );
}
