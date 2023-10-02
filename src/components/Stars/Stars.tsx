import React from "react";
import styles from "./stars.module.scss";
import {v4 as uuid} from "uuid";

interface IStars {
  howMany: number;
}

const Stars: React.FC<IStars> = (props) => {
  function makeStarsArray(num = 5): number[] {
    if (num <= 0) return Array<number>(5).fill(0);
    if (num >= 5) return Array<number>(5).fill(1);
    return Array<number>(num)
      .fill(1)
      .concat(Array<number>(5 - num).fill(0));
  }

  return (
    <div className={styles.stars}>
      {makeStarsArray(props.howMany).map((star) =>
        star === 0 ? (
          <ion-icon key={uuid().toString()} name="star-outline"></ion-icon>
        ) : (
          <ion-icon key={uuid().toString()} name="star"></ion-icon>
        )
      )}
    </div>
  );
};

export default Stars;
