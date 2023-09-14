import React from "react";
import styles from "./about.module.scss";
import useFetchAbout from "../../hooks/useFetchAbout";
import AboutNotFound from "../Errors/AboutNotFound";
import DOMPurify from 'dompurify';


const About: React.FC = () => {
  const { data, error } = useFetchAbout();

  if (error) {
    return <AboutNotFound error={error?.message} />;
  }

  if (!data) {
    return (
      <div style={{ color: "black", textAlign: "center" }}>
        Cargando datos...
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <div>
        <div className={styles.aboutCont}>
          <h2>{data.title}</h2>
          <h3>{data.subtitle}</h3>
          <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.desc) }} ></p>
        </div>
        <div className={styles.imgCont}>
          {
            data.imgs.map(img => (
              <div key={img}>
                <img alt="" src={img} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default About;
