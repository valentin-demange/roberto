"use client";

import React from "react";
import styles from "./form-2.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Form2() {
  const router = useRouter();

  const goToNextStep = () => {
    router.push("/chat");
  };

  return (
    <div className={styles.container}>
      <div className={styles.spacer} />
      <div className={styles.prompt}>{"Que recherchez vous ?"}</div>
      <div className={styles.flex}>
        <button className={styles.card} onClick={goToNextStep}>
          <Image
            className={styles.image}
            src="/man.png"
            width={200}
            height={200}
            alt="man"
            style={{ position: "relative", zIndex: -1 }}
          />
        </button>
        <button className={styles.card} onClick={goToNextStep}>
          <Image
            className={styles.image}
            src="/giraffe-male.png"
            width={200}
            height={200}
            alt="giraffe male"
            style={{ position: "relative", zIndex: -1 }}
          />
        </button>
        <div className={styles.card} onClick={goToNextStep}>
          <Image
            className={styles.image}
            src="/koala-male.png"
            width={200}
            height={200}
            alt="koala male"
            style={{ position: "relative", zIndex: -1 }}
          />
        </div>
      </div>
      <div className={styles.spacer} />
    </div>
  );
}
