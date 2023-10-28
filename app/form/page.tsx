"use client";

import React from "react";
import styles from "./form.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  const goToNextStep = () => {
    router.push("/form-2");
  };

  return (
    <div className={styles.container}>
      <div className={styles.spacer} />
      <div className={styles.prompt}>{"Comment vous identifiez vous ?"}</div>
      <div className={styles.flex}>
        <button className={styles.card} onClick={goToNextStep}>
          <Image
            className={styles.image}
            src="/woman.png"
            width={200}
            height={200}
            alt="woman"
            style={{ position: "relative", zIndex: -1 }}
          />
        </button>
        <button className={styles.card} onClick={goToNextStep}>
          <Image
            className={styles.image}
            src="/giraffe-female.png"
            width={200}
            height={200}
            alt="giraffe female"
            style={{ position: "relative", zIndex: -1 }}
          />
        </button>
        <div className={styles.card} onClick={goToNextStep}>
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
