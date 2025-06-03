const addProduct = () => {
  const ProductName = document.getElementById("product-name");
  const ProductQuantity = document.getElementById("product-quantity");
  const Product = ProductName.value;
  const Quantity = ProductQuantity.value;
  ProductName.name = "";
  ProductQuantity.name = "";
  displayProduct(Product, Quantity);
};

const displayProduct = (Product, Quantity) => {
  const ul = document.getElementById("display-screen");
  const li = document.createElement("li");
  li.innerText = `${Product} ${Quantity}`;
  ul.appendChild(li);
};
