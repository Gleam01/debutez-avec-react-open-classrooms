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
        {categories.map((category, index) => (
          <li key={`${category}-${index}`}>{category}</li>
        ))}
      </ul>

      <ul>
        {plantList.map((plant) => (
          <li key={`${plant.id}`}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
