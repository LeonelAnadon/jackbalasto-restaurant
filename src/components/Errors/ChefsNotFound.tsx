import React from "react";
import styles from "./errors.module.scss";
import { ICommonErrorInFetch } from "../../interfaces/global";

const ChefsNotFound: React.FC<ICommonErrorInFetch> = ({ error }) => {
  return <div className={styles.chefsNF}>Error: {error}</div>;
};

export default ChefsNotFound;
