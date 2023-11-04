"use client";

import React from "react";
import styles from "./page.module.css";
import { styleText } from "@/utils/styleText";
import { useRouter } from "next/navigation";

export default function Home() {
  const description = `
  Bonjour je suis Roberto, prêt à vous aider pour trouver l'âme sœur qui vous correspond.`;
  const styledDescription = styleText(description);

  const buttonText = "Continuer";
  const styledButtonText = styleText(buttonText); // This is unused in the current code
  const router = useRouter();
  const goToNextStep = () => {
    router.push("/form-1");
  };

  return (
    <div className="container">
      <div className="spacer" />
      <div className="text" style={{marginBottom: "40px"}}>{styledDescription}</div>
      <button className={`button ${styles.nextStepButton}`} onClick={goToNextStep}>
        {styledButtonText}
      </button>
      <div className="spacer" />
    </div>
  );
}
