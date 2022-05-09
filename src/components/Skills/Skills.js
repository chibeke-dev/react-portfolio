import React from "react";
import Zoom from "react-reveal/Zoom";

import CreateSKills from "./CreateSKills";

import styles from "./skills.module.css";
import appStyles from "../../app.module.css";

const Skills = () => {
  const devSkills = [
    { name: "js", color: `yellow` },
    { name: "react", color: "blue" },
    { name: "html5", color: "deepOrange" },
    { name: "css3", color: "blue" },                                        
    { name: "git-alt", color: "orange" },
    { name: "github", color: "grey" },
    { name: "kubernetes", color: "orange" },
    { name: "python", color: "orange" },
    { name: "rust", color: "brown" },
    { name: "figma", color: `orange` }
  ];


  return (
    <div className={styles.skillContainer} id="Skills">
      <h2 className={appStyles.heading}>My Skills</h2>
      <Zoom duration={1500} top>
        <CreateSKills skills={devSkills} size="9vw" />
      </Zoom>
    </div>
  );
};

export default Skills;
