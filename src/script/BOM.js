const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.5,
    category: "Electronics",
    inStock: false,
  },
  {
    id: 3,
    name: "Coffee Mug",
    price: 12.99,
    category: "Kitchen",
    inStock: true,
  },
  {
    id: 4,
    name: "Notebook",
    price: 5.49,
    category: "Stationery",
    inStock: true,
  },
  {
    id: 5,
    name: "Headphones",
    price: 89.99,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 6,
    name: "Backpack",
    price: 49.95,
    category: "Fashion",
    inStock: false,
  },
  {
    id: 7,
    name: "Desk Lamp",
    price: 25.0,
    category: "Furniture",
    inStock: true,
  },
  {
    id: 8,
    name: "Water Bottle",
    price: 15.75,
    category: "Sports",
    inStock: true,
  },
  { id: 9, name: "T-Shirt", price: 19.99, category: "Clothing", inStock: true },
  {
    id: 10,
    name: "Sunglasses",
    price: 55.0,
    category: "Accessories",
    inStock: false,
  },
];

products.forEach((e) => {
  if (e.price > 10) {
    console.log(e.name);
  }
});
