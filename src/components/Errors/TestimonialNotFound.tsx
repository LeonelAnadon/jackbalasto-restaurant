import React from "react";
import styles from "./errors.module.scss";
import { ICommonErrorInFetch } from "../../interfaces/global";

const TestimonialNotFound: React.FC<ICommonErrorInFetch> = ({ error }) => {
  return <div className={styles.testimonialNF}>Error: {error}</div>;
};

export default TestimonialNotFound;
