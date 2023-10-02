import React from "react";
import styles from "./chefs.module.scss";
import useFetchChefs from "../../hooks/useFetchChefs";
import ChefsNotFound from "../Errors/ChefsNotFound";
import ChefItem from "./ChefItem";

const Chefs: React.FC = () => {
  const { data, error } = useFetchChefs();

  if (error) {
    return <ChefsNotFound error={error?.message} />;
  }

  if (!data) {
    return (
      <div style={{ color: "white", textAlign: "center" }}>
        Cargando datos...
      </div>
    );
  }

  return (
    <section className={styles.container} id="nuestros-chefs">
      <div>
        <div className={styles.titleCont}>
        <h2>Nuestros Asadores Magistrales</h2>
        <h3>Los Maestros del Fuego que Transforman Carnes en Obras de Arte</h3>
        </div>
        <div className={styles.gridChefCont}>
          {data.map((chef) => (
            <ChefItem key={chef.id} {...chef} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
