import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Malicious Attacks","Weaponized Exploits", "Zero Day Attacks", "Attack Payloads"];

  return (
    (<div className=" flex justify-center items-center px-4">
      <div
        className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Monitor
        <FlipWords words={words} /> <br />
        World-Wide with help of <span className="text-amber-500">Satellite.</span>
      </div>
    </div>)
  );
}
