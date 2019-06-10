class Pizza {
  constructor(name, amount, price, ingredients, id) {
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.ingredients = ingredients;
    this.id = id;
  }
}

const Pizzas = [
  {
    name: "Margarita",
    amount: "0",
    price: 24.99,
    ingredients: "basil, tomato saunce, cheese, mushroom",
    id: 0
  },
  {
    name: "Italiana",
    amount: "0",
    price: 24.99,
    ingredients:
      "basil, tomato saunce, cheese, mushroom, basil, tomato saunce, cheese",
    id: 1
  },
  {
    name: "Napoleoni",
    amount: "0",
    price: 29.99,
    ingredients: "basil, oregano, tomato, tomato saunce, cheese, mushroom",
    id: 2
  },
  {
    name: "4 Cheeses",
    amount: "0",
    price: 26.99,
    ingredients:
      "cheese, ementaler, gouda, tomato saunce, cheese, mushroom, basil, tomato saunce, cheese, mushroom",
    id: 3
  },
  {
    name: "Chineese",
    amount: "0",
    price: 34.99,
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
    Stored.ordered(); //Load and update quantity of Pizza

    UI.createCard();
    UI.createPrice(); //Load DOM element for price
    Stored.getPrice();
  }
  // Create Menu from all dishes
  static addMenu(pizza) {
    const dishParent = document.querySelector(".menu--list");
    const dish = document.createElement("li");
    dish.classList = "dish";
    dish.innerHTML = `<div class="name bold">${pizza.name}</div>
        <div class="ingredients">Ingredients: ${pizza.ingredients}</div>
        <div class="price">${pizza.price}$</div>
        <button class="add">+</button>
        <span class="amount" id = "amount${pizza.id}">${pizza.amount}</span>
        <button class="substract">-</button>`;

    dishParent.appendChild(dish);
  }

  // Create DOM for Shop nav
  static shopCard(pizza) {
    const shopCard = document.querySelector(".dropdownBackground");
    const shopItem = document.createElement("li");
    shopItem.classList = "open";
    shopItem.classList = `bag${pizza.id}`;
    shopItem.innerHTML = `
    <div class="name bold">${pizza.name}</div>
    <div class="price">${pizza.price}$</div>
    <span class="order--amount" id = "order--amount${pizza.id}">${
      pizza.amount
    }</span>
    <button class="delete delete${pizza.id}">X</button>
    `;
    shopCard.appendChild(shopItem);
  }

  static createCard() {
    const pizzas = Stored.getPizza();

    pizzas.forEach(pizza => {
      if (pizza.amount) {
        UI.shopCard(pizza);
      }
    });
  }

  static updateCard() {
    const pizzas = Stored.getPizza();
    const quantities = document.querySelectorAll(".order--amount");

    for (let i = 0; i < quantities.length; i++) {
      if (quantities[i].innerText !== pizzas[i].amount && !null) {
        quantities[i].innerText = pizzas[i].amount;
      } else {
        continue;
      }
    }
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
  static createPrice() {
    const shopCard = document.querySelector(".dropdownBackground");
    const priceItem = document.createElement("li");
    priceItem.classList = "priceItem";
    shopCard.appendChild(priceItem);
  }
  static showPrice() {
    let price;
    const priceItem = document.querySelector(".priceItem");
    price = Stored.getPrice();

    if (price > 0) {
      priceItem.innerText = `Price: ${price}`;
    } else {
      priceItem.innerText = "Mr Pizza is sad. Order pizza";
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
    const values = document.querySelectorAll(".amount");

    const array = [];
    for (let i = 0; i < values.length; i++) {
      let v = document.getElementById(`amount${i}`);
      let value = v.innerText;
      array.push(value);
      Pizzas[i].amount = array[i];
    }
  }
  // Sums price
  static getPrice() {
    let price = [];
    let priceItem;
    let reducedPrice;

    const pizzas = Stored.getPizza();
    pizzas.forEach(pizza => {
      priceItem = pizza.amount * pizza.price;
      price.push(priceItem);

      reducedPrice = price.reduce(function(a, b) {
        return a + b;
      });
    });
    return reducedPrice;
  }
}

document.addEventListener("DOMContentLoaded", UI.displayMenu);
document.addEventListener("click", function() {
  Stored.ordered();
  UI.updateCard();
  Stored.getPrice();
  UI.showPrice();
});
document.querySelector(".menu--list").addEventListener("click", e => {
  if (e.target.tagName == "BUTTON") {
    UI.addAmount(e.target);
  } else {
    return 0;
  }
});
