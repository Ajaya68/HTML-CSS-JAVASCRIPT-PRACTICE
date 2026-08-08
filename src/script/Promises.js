// let myPromise = new Promise((resolve, reject) => {
//   let study = true;
//   if (study) {
//     resolve("promise fullfilled");
//   } else {
//     reject("Promise rejected");
//   }
// });
// console.log(myPromise);

// let promiseValue = myPromise;
// console.log(promiseValue);
// promiseValue.then((value) => console.log(value));
// promiseValue.catch((error) => console.log(error));

// let fetchProduct = () => {
//   let data = fetch("https://fakestoreapi.com/products");
//   console.log(data);
//   return data;
// };

// // fetchProduct();
// fetchProduct()
//   .then((value) => {
//     return value.json();
//   })
//   .then((value) =>
//     value.map((product) => {
//       let container = document.createElement("article");
//       let button = document.createElement("button");
//       let para = document.createElement("p");
//       let image = document.createElement("img");

//       para.innerText = product.title;
//       button.innerText = "Add to cart";
//       image.src = product.image;

//       container.append(image, para, button);
//       document.querySelector("body").appendChild(container);
//     }),
//   );
// fetchProduct().catch((error) => console.log(error));

let fetchProduct = async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    // console.log(data);

    data.map((product) => {
      let container = document.createElement("article");
      let button = document.createElement("button");
      let para = document.createElement("p");
      let image = document.createElement("img");

      para.innerText = product.title;
      button.innerText = "Add to cart";
      image.src = product.image;

      container.append(image, para, button);
      document.querySelector("body").appendChild(container);
    });
  } catch (error) {
    console.log(error)
  }
};

fetchProduct();
