import React from "react";
import Fade from "react-reveal/Fade";

import Form from "./Form";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container} id="Contact">
      <Fade bottom>
        <div className={styles.heading}>
          <h1>You can reach out here</h1>
        </div>
      </Fade>
      <Fade bottom delay={200}>
        <Form />
      </Fade>
    </div>
  );
};

export default Contact;
