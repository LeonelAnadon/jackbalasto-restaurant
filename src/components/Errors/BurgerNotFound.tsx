import { ICommonErrorInFetch } from "../../interfaces/global";
import React from "react";
import styles from "./errors.module.scss";

const BurgerNotFound: React.FC<ICommonErrorInFetch> = ({ error }) => {
  return <div className={styles.burgerNF}>Error: {error}</div>;
};

export default BurgerNotFound;
