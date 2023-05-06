const API = "https://fakestoreapi.com/";
const items = document.querySelector(".items");

// render product
const render = (data) => {
  items.innerHTML = "";
  data.forEach((item) => {
    const { title, price, image } = item;

    items.innerHTML += `
  <div class="item">
  <img src=${image} alt="img">
  <h4>${title}</h4>
  <span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span><span>&#11088</span>
  <div class="text__group">
      <p class="text">${Math.floor(price * 0.76)}$</p>
      <del>${price}$</del>
      <p class="sale">24% Off</p>
  </div>
  </div>
  `;
  });
};

function getData() {
  fetch(API + 'products', {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => render(data))
    .catch((error) => {
      console.log(error);
    });
}
getData();
