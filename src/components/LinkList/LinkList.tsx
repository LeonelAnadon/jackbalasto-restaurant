import React from "react";
import styles from "./linklist.module.scss";

interface ILinkList {
  handleHasBeenClicked?: () => void;
}

const LinkList: React.FC<ILinkList> = (props) => {
  return (
    <ul className={styles.linklist}>
      <li>
        <a onClick={props.handleHasBeenClicked} href="#menu">
          Burguers
        </a>
      </li>
      <li>
        <a onClick={props.handleHasBeenClicked} href="#acerca-de-nosotros">
          Sobre nosotros
        </a>
      </li>
      <li>
        <a onClick={props.handleHasBeenClicked} href="#nuestros-chefs">
          Nuestros chefs
        </a>
      </li>
      <li>
        <a onClick={props.handleHasBeenClicked} href="#reservar">
          Reservar
        </a>
      </li>
    </ul>
  );
};

export default LinkList;
