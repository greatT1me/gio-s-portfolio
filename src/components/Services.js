import styles from "@/styles/services.module.css";
import data from "@/data/data";

export default function Services({ ...props }) {
  const { services } = props;
  return (
    <div className={styles.services_main}>
      <div className={styles.services_conteiner}>
        <div className={styles.services}>Services</div>
        <div className={styles.services_content}>
          {Object.keys(services).map((service) => {
            return (
              <div className={styles.each_service}>
                <img
                  src={services[service].logoRoute}
                  alt="logo"
                  className={styles.service_logo}
                />
                <div className={styles.service_name}>
                  {services[service].name}
                </div>
                <div className={styles.service_text}>
                  {services[service].text}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.services_follow_me}>
          Follow me:{" "}
          <img
            src="/services/linkedin.svg"
            alt="instagram"
            style={{ width: " calc(1750vw / 1512)" }}
          />{" "}
          <img
            src="/services/be.svg"
            alt="be"
            style={{ width: " calc(2400vw / 1512)" }}
          />
        </div>
      </div>
    </div>
  );
}
