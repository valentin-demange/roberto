import React from "react";
import Link from "next/link"; // Step 1: Import Link
import styles from "./page.module.css";
import { styleText } from "@/utils/styleText";

export default function Home() {
  const description = `
  Bonjour, je suis Roberto, prêt à vous aider pour trouver l'âme sœur qui vous correspond.`;
  const styledDescription = styleText(description);

  const buttonText = "Continuer";
  const styledButtonText = styleText(buttonText); // This is unused in the current code

  return (
    <div className={styles.container}>
      <div className={styles.spacer} />
      <div className={styles.description}>{styledDescription}</div>
      <div className={styles.card}>
        <Link href="/form-1">
          <h2>{styledButtonText}</h2>
        </Link>
      </div>

      <div className={styles.spacer} />
    </div>
  );
}
