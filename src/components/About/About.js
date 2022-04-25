import React from "react";
import useWebAnimations, { rubberBand } from "@wellyshen/use-web-animations";
import Slide from "react-reveal/Slide";

import styles from "./about.module.css";
import appStyles from "../../app.module.css";
const About = () => {
  const { ref: refRubber, getAnimation } = useWebAnimations({ ...rubberBand });

  return (
    <div className={styles.aboutContainer} id="About">
      <h1
        className={appStyles.heading}
        ref={refRubber}
        onClick={() => getAnimation().play()}>
        About Me
      </h1>
      <div className={styles.contentContainer}>
        <Slide left>
          <img src="./images/about.jpg" style={{width: "500px", height: "300px"}} alt="developer illustration" />
        </Slide>
        <Slide right>
          <div className={styles.content}>
            <p>
             Chidinma Nwabekee is a software developer and copy writer, with my main focus being on the front-end. I specialize in building and designing web pages, writing well-designed, testable, and efficient code by using the best software development practice. 
             When not coding or writing for the web, she enjoys watching movies, working out and making good food.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
