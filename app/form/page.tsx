import React from "react";
import styles from "./form.module.css";

export default function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.spacer} />
      <div className={styles.prompt}>
        {"Qui êtes vous ?"}
      </div>
      <div className={styles.flex}>
        <div className={styles.card}>
          <div className={styles.prompt}>{"Femme"}</div>
        </div>
        <div className={styles.card}>
          <div className={styles.prompt}>{"Girafon"}</div>
        </div>
        <div className={styles.card}>
          <div className={styles.prompt}>{"Koala"}</div>
        </div>
      </div>
      <div className={styles.prompt}>{"Que recherchez vous ?"}</div>
      <div className={styles.flex}>
        <div className={styles.card}>
          <div className={styles.prompt}>{"Homme"}</div>
        </div>
        <div className={styles.card}>
          <div className={styles.prompt}>{"Girafon"}</div>
        </div>
        <div className={styles.card}>
          <div className={styles.prompt}>{"Koala"}</div>
        </div>
      </div>
      <div className={styles.spacer} />
    </div>
  );
}
