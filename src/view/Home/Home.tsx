import React from "react";
import About from "../../components/About/About";
import Brush from "../../components/Brush/Brush";
import Chefs from "../../components/Chefs/Chefs";
import Drawer from "../../components/Drawer/Drawer";
import Hero from "../../components/Hero/Hero";
import Menu from "../../components/Menu/Menu";
import Nav from "../../components/Nav/Nav";
import Testimonials from "../../components/Testimonials/Testimonials";
import styles from "./home.module.scss";
import Book from "../../components/Book/Book";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [showDrawer, setShowDrawer] = React.useState(false);

  React.useEffect(() => {
    window.history.replaceState({}, document.title, "/");
  }, []);

  return (
    <>
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <header className={styles.header}>
        <Nav setShowDrawer={setShowDrawer} />
      </header>
      <main className={styles.main}>
        <Hero />
        <Brush isInverted={false} />
        <Menu />
        <Brush isInverted={true} />
        <Testimonials />
        <About />
        <Chefs />
        <Book />
      </main>
      <Footer />
    </>
  );
};

export default Home;
