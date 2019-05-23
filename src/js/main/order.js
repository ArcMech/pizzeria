class Pizza {
  constructor(name, amount, prize, ingredients, id) {
    this.name = name;
    this.amount = amount;
    this.prize = prize;
    this.ingredients = ingredients;
    this.id = id;
  }
}

const Pizzas = [
  {
    name: "Margarita",
    amount: 0,
    prize: 24.99,
    ingredients: "basil, tomato saunce, cheese, mushroom",
    id: 0
  },
  {
    name: "Italiana",
    amount: 0,
    prize: 24.99,
    ingredients:
      "basil, tomato saunce, cheese, mushroom, basil, tomato saunce, cheese",
    id: 1
  },
  {
    name: "Napoleoni",
    amount: 0,
    prize: 29.99,
    ingredients: "basil, oregano, tomato, tomato saunce, cheese, mushroom",
    id: 2
  },
  {
    name: "4 Cheeses",
    amount: 0,
    prize: 26.99,
    ingredients:
      "cheese, ementaler, gouda, tomato saunce, cheese, mushroom, basil, tomato saunce, cheese, mushroom",
    id: 3
  },
  {
    name: "Chineese",
    amount: 0,
    prize: 34.99,
    ingredients:
      "fish, oregano, tomato, garlic saunce, chicken, mushroom, basil, tomato, saunce, cheese, shitake",
    id: 4
  }
];

//Create UI

class UI {
  static displayMenu() {
    const pizzas = Stored.getPizza(); // Load Pizza Array
    pizzas.forEach(pizza => UI.addMenu(pizza)); // Load all dishes from array
    Stored.ordered();
  }

  static addMenu(pizza) {
    const dishParent = document.querySelector(".menu--list");
    const dish = document.createElement("li");
    dish.classList = "dish";
    dish.innerHTML = `<div class="name bold">${pizza.name}</div>
        <div class="ingredients">Ingredients: ${pizza.ingredients}</div>
        <div class="price">${pizza.prize}$</div>
        <button class="add">+</button>
        <span class="amount" id = "amount ${pizza.id}">${pizza.amount}</span>
        <button class="substract">-</button>`;

    dishParent.appendChild(dish);
  }

  static addAmount(el) {
    let amountElement, adjustAmount;

    if (el.classList.contains("add")) {
      adjustAmount = 1;
      amountElement = el.nextElementSibling;
    } else {
      adjustAmount = -1;
      amountElement = el.previousElementSibling;
    }

    if (amountElement.innerText >= 0) {
      amountElement.innerText =
        parseInt(amountElement.innerText) + adjustAmount;
    } else {
      amountElement.innerText = 0;
    }
  }
}

class Stored {
  static getPizza() {
    let pizzas;
    if (localStorage.getItem("pizzas") === null) {
      pizzas = [...Pizzas];
    } else {
      window.alert("There is something wrong... :(");
    }
    return pizzas;
  }

  static ordered() {
    const amountOfPizza = document.querySelectorAll(".amount");
    amountOfPizza.forEach(function(order) {
      let xD = Array.from(order.innerText);
      console.table(xD);
      console.log(order);
    });
    // order.innerText zwraca mi string "0"
    // powyżej 10 tworzy dwie tablice, do których liczba
    // dziesiątek należy do indexOf 0 a jedności 1
    // trzeba je jakoś połączyć by tworzyły jeden string
  }
}

document.addEventListener("DOMContentLoaded", UI.displayMenu);
document.addEventListener("click", Stored.ordered);
document.querySelector(".menu--list").addEventListener("click", e => {
  if (e.target.tagName == "BUTTON") {
    UI.addAmount(e.target);
  } else {
    console.log(e.target.tagName);
  }
});
