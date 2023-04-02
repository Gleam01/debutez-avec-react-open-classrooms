import { plantList } from "../datas/plantList";

function ShoppingList() {
  const categories = plantList.reduce((acc, obj) => {
    if (!acc.includes(obj.category)) {
      acc.push(obj.category);
    }
    return acc;
  }, []);
  console.log(categories);

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={`${category}`}>{category}</li>
        ))}
      </ul>

      <ul>
        {plantList.map((plant) => (
          // <li key={`${plant.id}`}>{plant.name} {plant.isBestSale ? <span>🔥</span> : null}</li>
          <li key={`${plant.id}`}>
            {plant.name} {plant.isBestSale && <span>🔥</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
