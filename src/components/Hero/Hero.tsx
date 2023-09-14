import React from "react";
import styles from "./hero.module.scss";
import burguerImg from "../../assets/burguer_5.png";
import pedidosYaImg from "../../assets/icons/PedidosYa.png";
import rappiImg from "../../assets/icons/rappi.png";

const Hero: React.FC = () => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.theTitle}>
          <div className={styles.firstTitle}>
            <h2>Vení&nbsp;</h2>
            <h2>Disfrutá</h2>
          </div>
          <h1>{"Jack Balasto"}</h1>
        </div>
        <div className={styles.imgContainer}>
          <img alt="" src={burguerImg} />
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.deliveryContainer}>
            <button>
              <ion-icon name="arrow-forward-outline"></ion-icon> Pedir ya!
            </button>
            <a>
              <img alt="py" src={pedidosYaImg} />
            </a>
            <a>
              <img alt="rappi" src={rappiImg} />
            </a>
          </div>
    
        </div>
      </div>
    </section>
  );
};

export default Hero;
