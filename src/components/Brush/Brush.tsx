import React from "react";
import styles from "./brush.module.scss";

interface IBrush {
  isInverted: boolean;
}

const Brush: React.FC<IBrush> = (props) => {
  const brushStyles = props.isInverted
    ? `${styles.container} ${styles.invert}`
    : `${styles.container}`;
  return <div className={brushStyles}></div>;
};

export default Brush;
