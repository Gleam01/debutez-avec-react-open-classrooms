import '../styles/Cart.css';

function Cart() {
  const monsteraPrice = 8;
  const lierrePrice = 10;
  const bouquetFleursPrice = 15;
  return (
    <div className="lmj-cart">
      <h2>Panier</h2>

      <ul>
        <li>Monstera: {monsteraPrice}€</li>
        <li>Lierre: {lierrePrice}€</li>
        <li>Bouquet de fleurs: {bouquetFleursPrice}€</li>
      </ul>
      <p>Total: {monsteraPrice + lierrePrice + bouquetFleursPrice}€</p>
    </div>
  );
}

export default Cart;
