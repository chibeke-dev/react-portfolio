import React from "react";
import Container from "@material-ui/core/Container";
import config from "react-reveal/globals";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import styles from "./app.module.css";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact"
import Portfolio from "./components/Portfolio/Portfolio";


const App = () => {
  const navList = ["Home","Skills", "About", "Portfolio", "Contact"];
  config({ ssrFadeout: true });

  return (
    <>
      <Container maxWidth="lg" className={styles.container}>
        <Header list={navList} />
        <HeroContainer />
        <About />
        <Skills />
        <Portfolio />
        <Contact /> 
       </Container>
       <Footer />
    </>
  );
};

export default App;
