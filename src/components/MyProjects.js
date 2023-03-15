import styles from "@/styles/myProjects.module.css";

export default function MyProjects(props) {
  const { projects } = props;
  return (
    <div className={styles.my_projects}>
      <div className={styles.my_projects_title}>My projects</div>
      {projects.map((project, i) => {
        if (i <= 3) {
          return (
            <div
              className={styles.my_projects_img_container}
              style={{
                top: `calc(${((i + 1) % 2) * 97}00vw/1512)`,
              }}>
              <img
                src={project.imgURL}
                alt={project.title}
                className={styles.my_projects_img}
              />
              <div className={styles.my_projects_about}>
                <div className={styles.my_projects_about_title}>
                  {project.title}
                </div>
                <div className={styles.my_projects_about_text}>
                  {project.text}
                </div>
                <div className={styles.my_projects_about_see_more}>
                  See More{" "}
                  <img
                    src="/arrow_right.svg"
                    alt="right arrow"
                    className={styles.my_projects_about_see_more_arrow}
                  />
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div></div>
      <div className={styles.projects_view_all}> Wiev All Projects</div>
    </div>
  );
}

//97
