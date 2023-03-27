import styles from "@/styles/myProjects.module.css";
import Link from "next/link";

export default function MyProjects(props) {
  const { projects } = props;
  return (
    <div className={styles.my_projects}>
      <div className={styles.my_projects_title}>
        My <span style={{ color: "#1A74E5" }}>projects</span>
      </div>
      {projects.map((project, i) => {
        if (i <= 3) {
          return (
            <div
              className={styles.my_projects_img_container}
              style={{
                top: `calc(${((i + 1) % 2) * 90}00vw/1512)`,
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
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div></div>
      <Link href="/Projects" className={styles.projects_view_all_link}>
        <div className={styles.projects_view_all}> View All Projects</div>
      </Link>
    </div>
  );
}

//97
