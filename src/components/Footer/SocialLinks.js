import React from "react";
import "./footer.css";
function SocialLinks() {
  return (
    <div
      className="icons-container"
      style={{
        fontSize: "2rem",
      }}>
      <a
        target="-blank"
        href="https://www.linkedin.com/in/chidinma-nwabekee-bb381b1b4/">
        <i className={`fab fa-linkedin`} style={{color: '#007bb6'}}></i>
      </a>
      <a target="-blank" href="https://github.com/chibeke-dev">
        <i className={`fab fa-github`} style={{color: '#000000'}}></i>
      </a>
      <a target="-blank" href="https://www.instagram.com/iambekss/">
        <i className={`fab fa-instagram`} style={{color: '#bc2a8d'}}  ></i>
       </a>
        <a target="-blank" href="https://www.facebook.com/chibekee/">
         <i className={`fab fa-facebook`}style={{color: '#3b5998'}} ></i>
       </a> 

      <a target="-blank" href="https://twitter.com/iambekss?t=9Hcw4qjeeSYEKWIG6lrA-A&s=08">
        <i className="fab fa-twitter" style={{color: '#55acee'}}> </i>
      </a>
    </div>
  );
}

export default SocialLinks;
