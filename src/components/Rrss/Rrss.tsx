import React from "react";
import styles from "./rrss.module.scss";

const Rrss: React.FC = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.contactInfo}>
        <a href="#">0800-000-000</a>
      </li>
      <li>
        <a href="#">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
      </li>
      <li>
        <a href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </li>
      <li>
        <a href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>
    </ul>
  );
};

export default Rrss;
