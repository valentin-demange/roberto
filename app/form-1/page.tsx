"use client";

import React from "react";
import styles from "./form-1.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TAnimal } from "../type";

export default function Form1() {
  const router = useRouter();

  const goToNextStep = (choice: TAnimal) => {
    localStorage.setItem("animal_female", choice);
    router.push("/form-2");
  };

  return (
    <div className="container">
      <div className="spacer" />
      <div className="text" style={{marginBottom: "40px"}}>{"Comment vous identifiez vous ?"}</div>
      <div className={styles.avatarContainer}>
        <div className={styles.avatarCard} onClick={() => goToNextStep("human")}>
          <Image
            className={styles.avatarImage}
            src="/woman.png"
            width={200}
            height={200}
            alt="woman"
            style={{ position: "relative", zIndex: -1 }}
          />
        </div>
        <div className={styles.avatarCard} onClick={() => goToNextStep("giraffe")}>
          <Image
            className={styles.avatarImage}
            src="/giraffe-female.png"
            width={200}
            height={200}
            alt="giraffe female"
            style={{ position: "relative", zIndex: -1 }}
          />
        </div>
        <div className={styles.avatarCard} onClick={() => goToNextStep("koala")}>
          <Image
            className={styles.avatarImage}
            src="/koala-female.png"
            width={200}
            height={200}
            alt="koala female"
            style={{ position: "relative", zIndex: -1 }}
          />
        </div>
      </div>
      <div className="spacer" />
    </div>
  );
}
