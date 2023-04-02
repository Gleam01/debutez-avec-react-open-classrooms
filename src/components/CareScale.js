import water from "../assets/water.svg";
import sun from "../assets/sun.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];

  const scaleType =
    careType === "light" ? (
      <img src={sun} alt="sun-icon" />
    ) : (
      <img src={water} alt="water-icon" />
    );

  return (
    <div onClick={() => handleClick(careType, scaleValue)}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

function handleClick(careType, scaleValue) {
  let message = "Cette plante requiert ";
  if (scaleValue <= 1) {
    message += "beaucoup";
  } else if (scaleValue === 2) {
    message += "modérement";
  } else {
    message += "peu";
  }

  switch (careType) {
    case "light":
      message += " de lumière";
      break;
    case "water":
      message += " d'arrosage";
      break;
  }

  alert(message);
}

export default CareScale;
