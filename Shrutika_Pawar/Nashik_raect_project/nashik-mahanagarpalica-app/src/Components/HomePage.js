import React, { useState } from "react";
import Card from "./Card";
function HomePage() {
  const [language, setLanguage] = useState("marathi");

  return (
    <div className="hero-section">
      <button
        className="language-btn"
        onClick={() =>
          setLanguage(language === "marathi" ? "english" : "marathi")
        }
      >
        Marathi / English
      </button>
      <h1 className="main-text">
        {language === "marathi"
          ? "नाशिक महानगरपालिकेत आपले स्वागत आहे"
          : "Welcome To Nashik Municipal Corporation"}
          <Card />
      </h1>
      
    </div>
  );
}

export default HomePage;
