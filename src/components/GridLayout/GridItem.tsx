import React from "react";
import styles from "./grid.module.scss";
import { IBurger } from "../../interfaces/global";
import { formatCurrency } from "../../utils/formatCurrency";

const GridItem: React.FC<IBurger> = (props) => {
  const isInOfferStyles = props.inOffer ? `${styles.isInOffer}` : ``;

  return (
    <div className={styles.itemContainer}>
      <div className={isInOfferStyles}>
        <div className={styles.imgContainer}>
          <img alt={props.title} src={props.img} />
        </div>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
        <div className={styles.priceContainer}>
          {props.inOffer && <s>{formatCurrency(props.inOffer)}</s>}
          <b>{formatCurrency(props.price)}</b>
        </div>
        {props.inOffer && (
          <div className={styles.flameOffer}>
            <ion-icon name="flash"></ion-icon>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridItem;
