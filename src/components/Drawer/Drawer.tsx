import React from "react";
import styles from "./drawer.module.scss";
import LinkList from "../LinkList/LinkList";

interface IDrawerProps {
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer: React.FC<IDrawerProps> = (props) => {
  React.useEffect(() => {
    if (props.showDrawer) {
      document.body.classList.add("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [props.showDrawer]);

  const handleHasBeenClicked = () => {
    props.setShowDrawer(false)
  }

  return (
    <div className={`${styles.drawer} ${props.showDrawer ? styles.open : ""}`}>
      <div className={styles.header}>
        <span>JackBalasto</span>
        <button onClick={() => props.setShowDrawer(false)}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <div className={styles.linkListCont}>
        <LinkList handleHasBeenClicked={handleHasBeenClicked} />
      </div>
      <div className={styles.contactInfoCont}>
        <p>Nuestros contactos</p>
        <ul>
          <li className={styles.contactInfo}>
            <a href="#">0800-000-000</a>
          </li>
          <div>
          <li>
            <a href="#" onClick={() => props.setShowDrawer(true)}>
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
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
