import React from "react";
import styles from "./nav.module.scss";
import LinkList from "../LinkList/LinkList";
import Rrss from "../Rrss/Rrss";

interface INavProps {
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<INavProps> = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <span>JackBalasto</span>
      </div>
      <nav>
        <LinkList />
      </nav>
      <div className={styles.rrssContainer}>
     <Rrss />
      </div>
      <div className={styles.menuHidden}>
        <button onClick={() => props.setShowDrawer(true)}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Nav;
