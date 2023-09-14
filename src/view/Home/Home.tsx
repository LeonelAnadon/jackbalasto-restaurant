import About from "../../components/About/About";
import Brush from "../../components/Brush/Brush";
import Hero from "../../components/Hero/Hero";
import Menu from "../../components/Menu/Menu";
import Nav from "../../components/Nav/Nav";
import Testimonials from "../../components/Testimonials/Testimonials";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <Hero />
        <Brush isInverted={false} />
        <Menu />
        <Brush isInverted={true} />
        <Testimonials />
        <About />
      </main>
      <footer className={styles.footer}>footer</footer>
    </>
  );
};

export default Home;
