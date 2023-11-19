"use client";

import React from "react";
import styles from "./form-2.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TAnimal } from "../type";

export default function FormPage2() {
  const router = useRouter();

  const goToNextStep = (choice: TAnimal) => {
    localStorage.setItem("animal_male", choice);
    router.push("/chat");
  };

  return (
    <div className="container">
      <div className="spacer" />
      <div className="text" style={{ marginBottom: "40px" }}>
        {"Que recherchez vous ?"}
      </div>
      <div className={styles.avatarContainer}>
        <div
          className={styles.avatarCard}
          onClick={() => goToNextStep("human")}
        >
          <Image
            className={styles.avatarImage}
            src="/man.png"
            width={200}
            height={200}
            alt="man"
            style={{ position: "relative", zIndex: -1 }}
          />
        </div>
        <div
          className={styles.avatarCard}
          onClick={() => goToNextStep("giraffe")}
        >
          <Image
            className={styles.avatarImage}
            src="/giraffe-male.png"
            width={200}
            height={200}
            alt="giraffe male"
            style={{ position: "relative", zIndex: -1 }}
          />
        </div>
        <div
          className={styles.avatarCard}
          onClick={() => goToNextStep("koala")}
        >
          <Image
            className={styles.avatarImage}
            src="/koala-male.png"
            width={200}
            height={200}
            alt="koala male"
            style={{ position: "relative", zIndex: -1 }}
          />
        </div>
      </div>
      <div className="spacer" />
    </div>
  );
}
