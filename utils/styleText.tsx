import styles from './styleText.module.css';

export function styleText(text: string) {
    const keywords = {
      "female": ["demoiselle"],
      "male": ["roberto", "demoiseau"],
      "koala": ["koala"],
      "giraffe": ["girafon"],
    }
  
    // @ts-ignore
    const allKeywords: string[] = [].concat(...Object.values(keywords));
    const regex = new RegExp(`\\b(${allKeywords.join("|")})\\b`, "gi");
  
    const parts = text.split(regex);
  
    return parts.map(part => {
      for (let [style, words] of Object.entries(keywords)) {
        if (words.includes(part.toLowerCase())) {
          return <span key={part} className={styles[style]}>{part}</span>;
        }
      }
      return part;
    });
  }