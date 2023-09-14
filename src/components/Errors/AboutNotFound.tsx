import React from "react";
import styles from "./errors.module.scss";
import { ICommonErrorInFetch } from "../../interfaces/global";

const AboutNotFound: React.FC<ICommonErrorInFetch> = ({ error }) => {
  return <div className={styles.aboutNF}>Error: {error}</div>;
};

export default AboutNotFound;
