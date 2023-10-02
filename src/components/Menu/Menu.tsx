import React from "react";
import styles from "./menu.module.scss";
import GridLayout from "../GridLayout/GridLayout";
import MenuSelector from "../MenuSelector/MenuSelector";

const Menu: React.FC = () => {

  const [filter, setFilter] = React.useState<string>('all');

  const handleSetFilter = (filterThis: string) => {
    setFilter(filterThis)
  }

  return (
    <section className={styles.container} id="menu">
      <div>
        <h2>
          Nuestro <span>menú</span>
        </h2>
        <MenuSelector filter={filter} handleSetFilter={handleSetFilter} />
        <GridLayout filter={filter} />
      </div>
    </section>
  );
};

export default Menu;
