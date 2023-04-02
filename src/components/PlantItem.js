import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ name, cover, id, light, water }) {
  return (
    <div>
      <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
        {cover && (
          <img className="lmj-plant-item-cover" src={cover} alt={name} />
        )}
        {name} <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </li>
    </div>
  );
}

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
}

export default PlantItem;
