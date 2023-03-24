import styles from "@/styles/stories.module.css";
import next from "next";
import { useEffect, useState } from "react";

export default function Stories(props) {
  const [storyIndex, setStoryIndex] = useState(0);
  const { stories } = props;
  const nextStory = () => {
    if (Object.keys(stories).length - 1 > storyIndex) {
      let newIndex = storyIndex + 1;
      setStoryIndex(newIndex);
    } else {
      setStoryIndex(0);
    }
  };
  const prevStory = () => {
    if (storyIndex > 0) {
      let newIndex = storyIndex - 1;
      setStoryIndex(newIndex);
    } else {
      setStoryIndex(Object.keys(stories).length - 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextStory();
    }, 8000);
    console.log("done");
    return () => clearInterval(interval);
  }, [storyIndex]);

  return (
    <div className={styles.success_stories}>
      <div className={styles.stories_arrow_box} onClick={prevStory}>
        {" "}
        <img
          src="/review_arrow_left.svg"
          alt="arrow left"
          className={styles.prev_story}
        />
      </div>
      <div className={styles.stories_content}>
        <div className={styles.stories_title}>
          <div>
            Success <span style={{ color: "black" }}>Stories</span>{" "}
          </div>
        </div>
        <div className={styles.stories}>{stories[storyIndex].story}</div>
        {/*  */}
        <div className={styles.stories_author}>
          <div className={styles.author_info}>
            <div className={styles.author_website_name}>
              {stories[storyIndex].authorName}{" "}
            </div>
            <div className={styles.author_job}>
              {stories[storyIndex].authorJob}
            </div>
          </div>
          <div className={styles.author_website_name}>
            {stories[storyIndex].website}
          </div>
        </div>
      </div>{" "}
      <div className={styles.stories_arrow_box} onClick={nextStory}>
        <img
          src="/review_arrow_right.svg"
          alt="arrow left"
          className={styles.next_story}
        />
      </div>
    </div>
  );
}
