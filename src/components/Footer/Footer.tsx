import React from "react";
import styles from "./footer.module.scss";
import LinkList from "../LinkList/LinkList";
import Rrss from "../Rrss/Rrss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <span>JackBalasto</span>
          <LinkList />
        </div>
        <div>
          <p>TM &copy; 2023 - Todos los derechos reservados - Jack Balasto</p>
          <div></div>
          <Rrss />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
