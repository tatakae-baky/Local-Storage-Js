const addProduct = () => {
  const ProductName = document.getElementById("product-name");
  const ProductQuantity = document.getElementById("product-quantity");
  const Product = ProductName.value;
  const Quantity = ProductQuantity.value;
  ProductName.value = "";
  ProductQuantity.value = "";
  displayProduct(Product, Quantity);
  saveProduct(Product, Quantity);
};

const displayProduct = (Product, Quantity) => {
  const ul = document.getElementById("display-screen");
  const li = document.createElement("li");
  li.innerText = `${Product} : ${Quantity}`;
  ul.appendChild(li);
};

const getStoredProduct = () => {
  let product = {};
  const storedProduct = localStorage.getItem("product");
  if (storedProduct) {
    product = JSON.parse(storedProduct);
  }
  return product;
};

const saveProduct = (Product, Quantity) => {
  const product = getStoredProduct();
  product[Product] = Quantity;
  const productStringified = JSON.stringify(product);
  localStorage.setItem("product", productStringified);
};

const persistentDisplay = (Product, Quantity) => {
  const products = getStoredProduct();
  console.log(products);
  for (product in products) {
    const quantity = products[product];
    displayProduct(product, quantity);
  }
};

persistentDisplay();
