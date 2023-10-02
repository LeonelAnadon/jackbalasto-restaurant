import React from "react";
import GridItem from "./GridItem";
import styles from "./grid.module.scss";
import useFetchBurgerData from "../../hooks/useFetchBurguers";
import BurgerNotFound from "../Errors/BurgerNotFound";
import { IBurger } from "../../interfaces/global";

interface IGridLayoutProps {
  filter: string;
}

const filterConditions: Record<string, (item: IBurger) => boolean> = {
  all: () => true,
  veggies: (item) => item.type === "veggies",
  offer: (item) => item.type === "offer",
};

const GridLayout: React.FC<IGridLayoutProps> = (props) => {
  const { data, error } = useFetchBurgerData();

  if (error) {
    return <BurgerNotFound error={error?.message} />;
  }

  if (!data) {
    return (
      <div style={{ color: "black", textAlign: "center" }}>
        Cargando datos...
      </div>
    );
  }

  const filteredData = data.filter((item) => {
    const filterFunction = filterConditions[props.filter];
    return filterFunction ? filterFunction(item) : false;
  });

  return (
    <div className={styles.container}>
      {filteredData.map((item, idx) => (
        <GridItem key={idx} {...item} />
      ))}
    </div>
  );
};

export default GridLayout;
