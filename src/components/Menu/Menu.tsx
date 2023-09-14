import React from "react";
import styles from "./menu.module.scss";
import GridLayout from "../GridLayout/GridLayout";

const Menu: React.FC = () => {
  return (
    <section className={styles.container}>
      <div>
        <h2>
          Nuestro <span>menú</span>
        </h2>
        <GridLayout />
      </div>
    </section>
  );
};

export default Menu;
