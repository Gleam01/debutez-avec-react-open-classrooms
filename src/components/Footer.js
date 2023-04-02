import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        Laissez-nous votre mail :{" "}
        <input
          defaultValue={inputValue}
          onBlur={(e) => checkValue(e.target.value, setInputValue)}
        />
      </div>
    </footer>
  );
}

function checkValue(value, setInputValue) {
  setInputValue(value);

  if (!value.includes("@")) {
    alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
  }
}

export default Footer;
