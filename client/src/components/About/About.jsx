import React from "react";
import styles from "./About.module.css";
import InstagramImg from '../../assets/pngtree-instagram-icon-png-image_6315974.png'
import LinkedIn from '../../assets/linkedin.png'

function About() {
  const openInstagram = () => {
    window.open("https://www.instagram.com/lucas.shmidt/?hl=es", "_blank");
  };

  const oepnLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/lucas-axel-shmidt-86468b206/",
      "blank"
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.selfContainer}>
        <p className={styles.text}>Hola, bienvenido a mi perfil. Conéctate conmigo en:</p>
        
        <div className={styles.iconContainer}>
          <span className={styles.icon} onClick={openInstagram}>
            <img src={InstagramImg} alt="Instagram" className={styles.iconImage1} />
          </span>
          <span className={styles.icon} onClick={oepnLinkedIn}>
            <img src={LinkedIn} alt="LinkedIn" className={styles.iconImage2} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;

