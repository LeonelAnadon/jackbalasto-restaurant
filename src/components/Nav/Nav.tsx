import React from "react";
import styles from "./nav.module.scss";

const Nav: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <span>JackBalasto</span>
      </div>
      <nav>
        <ul>
          <li>
            <a>Sobre nosotros</a>
          </li>
          <li>
            <a>Burguers</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </nav>
      <div className={styles.rrssContainer}>
        <ul>
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
      </div>
    </div>
  );
};

export default Nav;
