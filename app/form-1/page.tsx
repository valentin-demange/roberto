"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Form1() {
  const router = useRouter();

  useEffect(() => {
    // Set female animal as giraffe
    localStorage.setItem("animal_female", "giraffe");
    // Redirect immediately to form-2
    router.push("/form-2");
  }, []);

  // Return empty div while redirecting
  return <div></div>;
}
