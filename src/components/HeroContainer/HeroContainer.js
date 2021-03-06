import React from "react";
import useWebAnimations, {
  bounceInLeft,
  bounceInRight,
} from "@wellyshen/use-web-animations";
import styles from "./hero.module.css";

const HeroContainer = () => {
  const { ref: refRight } = useWebAnimations({ ...bounceInRight });
  const { ref: refLeft } = useWebAnimations({ ...bounceInLeft });
  return (
    <div className={styles.heroContainer} id="Home">
      <div className={styles.content} ref={refLeft}>
        <h1 className={styles.bigOne}>
          Hey there <br /> Welcome
        </h1>
        <p>
          My name is Chidinma Nwabekee. I'm a Front-end Developer. I love to create
          aesthetic UI with user centric approach. <br />
          Thanks for visiting my website have a look at my portfolio and if you
          have any query you can contact me.
        </p>
      </div>
      <img
        ref={refRight}
        src="./images/Mine.jpg"
        alt="developer illustration"
        style={{width: '500px', borderRadius: '10%', height: '500px', marginLeft: '200px'}}
      />
    </div>
  );
};

export default HeroContainer;
