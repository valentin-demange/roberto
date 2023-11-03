"use client";

import React from "react";
import styles from "./form-1.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TAnimal } from "../type";

export default function Form1() {
  const router = useRouter();

  const goToNextStep = (choice:TAnimal) => {
    localStorage.setItem('animal_female', choice);
    router.push("/form-2");
  };

  return (
    <div className={styles.container}>
      <div className={styles.spacer} />
      <div className={styles.prompt}>{"Comment vous identifiez vous ?"}</div>
      <div className={styles.flex}>
        <button className={styles.card} onClick={() => goToNextStep("human")}>
          <Image
            className={styles.image}
            src="/woman.png"
            width={200}
            height={200}
            alt="woman"
            style={{ position: "relative", zIndex: -1 }}
          />
        </button>
        <button className={styles.card} onClick={() => goToNextStep("giraffe")}>
          <Image
            className={styles.image}
            src="/giraffe-female.png"
            width={200}
            height={200}
            alt="giraffe female"
            style={{ position: "relative", zIndex: -1 }}
          />
        </button>
        <div className={styles.card} onClick={() => goToNextStep("koala")}>
          <Image
            className={styles.image}
            src="/koala-female.png"
            width={200}
            height={200}
            alt="koala female"
            style={{ position: "relative", zIndex: -1 }}
          />
        </div>
      </div>
      <div className={styles.spacer} />
    </div>
  );
}
