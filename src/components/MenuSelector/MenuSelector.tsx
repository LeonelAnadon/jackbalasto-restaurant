import React from "react";
import styles from "./menuselector.module.scss";

interface IMenuSelectorProps {
  filter: string;
  handleSetFilter: (filterThis: string) => void;
}

const MenuSelector: React.FC<IMenuSelectorProps> = (props) => {

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetFilter(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div>
        <div>
          <input
            id="all"
            value="all"
            name="menuselector"
            type="radio"
            checked={props.filter === "all"}
            onChange={handleRadioChange}
          />
          <label htmlFor="all">
            <ion-icon name="fast-food-outline"></ion-icon>
            Todas
          </label>
        </div>
        <div>
          <input
            id="offer"
            value="offer"
            name="menuselector"
            type="radio"
            checked={props.filter === "offer"}
            onChange={handleRadioChange}
          />
          <label htmlFor="offer">
            <ion-icon name="flash-outline"></ion-icon>
            Ofertas
          </label>
        </div>
        <div>
          <input
            id="veggies"
            value="veggies"
            name="menuselector"
            type="radio"
            checked={props.filter === "veggies"}
            onChange={handleRadioChange}
          />
          <label htmlFor="veggies">
            <ion-icon name="leaf-outline"></ion-icon>
            Veggies
          </label>
        </div>
      </div>
    </div>
  );
};

export default MenuSelector;
