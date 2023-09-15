import React from "react";
import styles from "./Modal.module.css";


function Modal({ open, onClose }) {
    if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <p onClick={onClose} className={styles.closeBtn}>X</p>
        <div className={styles.content}>
        <p className={styles.text}>La Acción fue ejecutada con Exito!</p>
        <button onClick={onClose} className={styles.button}>Aceptar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
