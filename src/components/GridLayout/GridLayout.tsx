import React from "react";
import GridItem from "./GridItem";
import styles from "./grid.module.scss";
import useFetchBurgerData from "../../hooks/useFetchBurguers";
import BurgerNotFound from "../Errors/BurgerNotFound";

const GridLayout: React.FC = () => {
  const { data, error } = useFetchBurgerData();

  React.useEffect(() => {
    console.log({ data });
  }, [data]);

  if (error) {
    return <BurgerNotFound error={error?.message} />;
  }

  if (!data) {
    return <div style={{color: 'black', textAlign: 'center'}}>Cargando datos...</div>;
  }

  return (
    <div className={styles.container}>
      {data.map((item, idx) => (
        <GridItem key={idx} {...item} />
      ))}
    </div>
  );
};

export default GridLayout;
