// ======= veriables ========
const API = "https://fakestoreapi.com/";
const items = document.querySelector(".items");
const list1 = document.querySelector("#list1");
const list2 = document.querySelector("#list2");
const list3 = document.querySelector("#list3");
const list4 = document.querySelector("#list4");
const list5 = document.querySelector("#list5");

// ======== render product =========
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

// ========= category function ==================

function all() {
  list1.addEventListener("click", () => {
    list1.classList.add("color");
    list2.classList.remove("color");
    list3.classList.remove("color");
    list4.classList.remove("color");
    list5.classList.remove("color");

    fetch(API + "products", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        render(data);
      });
  });
}
all();

function electronics() {
  list2.addEventListener("click", () => {
    list2.classList.add("color");
    list1.classList.remove("color");
    list3.classList.remove("color");
    list4.classList.remove("color");
    list5.classList.remove("color");

    fetch(API + "products/" + "category/" + "electronics", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        render(data);
      });
  });
}
electronics();

function jewelery() {
  list3.addEventListener("click", () => {
    list3.classList.add("color");
    list1.classList.remove("color");
    list2.classList.remove("color");
    list4.classList.remove("color");
    list5.classList.remove("color");

    fetch(API + "products/" + "category/" + "jewelery", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        render(data);
      });
  });
}
jewelery();

function men() {
  list4.addEventListener("click", () => {
    list4.classList.add("color");
    list1.classList.remove("color");
    list2.classList.remove("color");
    list3.classList.remove("color");
    list5.classList.remove("color");

    fetch(API + "products/" + "category/" + "men's clothing", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        render(data);
      });
  });
}
men();

function women() {
  list5.addEventListener("click", () => {
    list5.classList.add("color");
    list1.classList.remove("color");
    list2.classList.remove("color");
    list3.classList.remove("color");
    list4.classList.remove("color");

    fetch(API + "products/" + "category/" + "women's clothing", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        render(data);
      });
  });
}
women();

// ===========================

function getData() {
  fetch(API + "products", {
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
