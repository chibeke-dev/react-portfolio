import React from "react";
import Container from "@material-ui/core/Container";
import config from "react-reveal/globals";

import Header from "./components/Header/Header";
import styles from "./app.module.css";
import HeroContainer from "./components/HeroContainer/HeroContainer";

const App = () => {
  const navList = ["Home","Skills", "Portfolio", "Contact"];
  config({ ssrFadeout: true });

  return (
    <>
      <Container maxWidth="lg" className={styles.container}>
        <Header list={navList} />
        <HeroContainer />
      </Container>
    
    </>
  );
};

export default App;
