"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";
import { styleText } from "@/utils/styleText";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const animal_female = localStorage.getItem("animal_female");
    const animal_male = localStorage.getItem("animal_male");
    if (animal_female && animal_male) {
      router.push("/chat");
    } else if (animal_female) {
      router.push("/form-2");
    }
  }, [router]);

  const description = `
  Bonjour je suis Roberto, prêt à vous aider pour trouver l'âme sœur qui vous correspond.`;
  const styledDescription = styleText(description);

  const buttonText = "Continuer";
  const styledButtonText = styleText(buttonText); // This is unused in the current code

  const goToNextStep = () => {
    router.push("/form-1");
  };

  return (
    <div className="container">
      <div className="spacer" />
      <div className={`text ${styles.description}`}>{styledDescription}</div>
      <button
        className={`button ${styles.nextStepButton}`}
        onClick={goToNextStep}
      >
        {styledButtonText}
      </button>
      <div className="spacer" />
    </div>
  );
}
