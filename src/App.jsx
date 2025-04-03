
import React, { useState } from "react";

export default function App() {
  const [step, setStep] = useState("standing");

  const steps = {
    standing: {
      name: "Standing (Qiyam)",
      instruction: "Stand upright facing the Qiblah with hands by your sides."
    },
    bowing: {
      name: "Bowing (Rukoo)",
      instruction: "Bend at the waist with your back straight, hands on knees."
    },
    prostration: {
      name: "Prostration (Sujood)",
      instruction:
        "Place your forehead, nose, hands, knees, and toes on the ground."
    },
    sitting: {
      name: "Sitting (Jalsa)",
      instruction: "Sit upright on your legs between the two prostrations."
    }
  };

  const phrases = [
    { arabic: "الله أكبر", english: "Allahu Akbar" },
    { arabic: "سبحان ربي العظيم", english: "Subhana Rabbiyal Adheem" },
    { arabic: "سمع الله لمن حمده", english: "Sami'Allahu liman Hamidah" },
    { arabic: "ربنا لك الحمد", english: "Rabbana lakal hamd" },
    { arabic: "سبحان ربي الأعلى", english: "Subhana Rabbiyal A'la" }
  ];

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>🕌 Salah Helper App</h1>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <button onClick={() => setStep("posture")} style={{ marginRight: 10 }}>Posture Guide</button>
        <button onClick={() => setStep("pronunciation")}>Pronunciation</button>
      </div>

      {step === "posture" && (
        <div style={{ marginTop: 20 }}>
          <h2>{steps[step]?.name}</h2>
          <p>{steps[step]?.instruction}</p>
          <div style={{ marginTop: 10 }}>
            {Object.keys(steps).map((key) => (
              <button key={key} onClick={() => setStep(key)} style={{ margin: 5 }}>
                {steps[key].name}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "pronunciation" && (
        <div style={{ marginTop: 20 }}>
          <h2>Listen & Learn</h2>
          <ul>
            {phrases.map((phrase, index) => (
              <li key={index} style={{ marginBottom: 10 }}>
                <p style={{ fontSize: 20 }}>{phrase.arabic}</p>
                <p>{phrase.english}</p>
                <button
                  onClick={() => {
                    const audio = new SpeechSynthesisUtterance(phrase.arabic);
                    audio.lang = "ar-SA";
                    window.speechSynthesis.speak(audio);
                  }}
                >
                  🔊 Listen
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
