import React from "react";
import styles from "./chefs.module.scss";
import { IChefs } from "../../interfaces/global";


const ChefItem: React.FC<IChefs> = (props) => {
  return (
    <div className={styles.itemChef}>
      <img alt="" src={props.img} />
      <p>{props.name}</p>
      <span>{props.job}</span>
    </div>
  );
};

export default ChefItem;
