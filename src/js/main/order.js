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
  },
  {
    name: "Sea Food",
    amount: "0",
    price: 45.99,
    ingredients:
      "lobster, shrimps, tiger shrimps, tuna, fish, eel, lavender, sea salt, cheese",
    id: 5
  }
];

//Create UI -> contains functions with interface and DOM manipulations

class UI {
  static displayMenu() {
    const pizzas = Stored.getPizza(); // Load Pizza Array
    pizzas.forEach(pizza => UI.addMenu(pizza)); // Load all dishes from array
    Stored.ordered(); //Load and update quantity of Pizza

    UI.createCard(); //Creates shopping card DOM
    UI.hideCard();
    Stored.getPrice(); //Sums price
    UI.createPrice(); //Load DOM element for price
    UI.showPrice(); // Shows price
    UI.createButton(); // Creates button for order
    UI.updateButton(); // Changes color of button if there is some items in bag
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
  // Hides shopping cards, which amount of order is 0
  static hideCard() {
    let pizzas = Stored.getPizza();
    const button = document.querySelector(".orderButton");
    for (let i = 0; i < pizzas.length; i++) {
      let bagItem = document.querySelector(`.bag${i}`);
      if (pizzas[i].amount == 0) {
        bagItem.classList.add("hidden");
        bagItem.classList.remove("grid");
      } else {
        bagItem.classList.remove("hidden");
        bagItem.classList.add("grid");
      }
    }
  }

  static createButton() {
    const shopCard = document.querySelector(".dropdownBackground");
    const priceContainer = document.querySelector(".priceContainer");
    const button = document.createElement("button");
    button.classList = "orderButton bold flex";
    button.innerText = "ORDER";
    shopCard.appendChild(priceContainer);
    priceContainer.appendChild(button);
  }

  static updateButton() {
    let price = Stored.getPrice();
    let button = document.querySelector(".orderButton");
    if (price == 0) {
      button.classList.add("disabled");
      button.classList.remove("primary-background");
    } else {
      button.classList.remove("disabled");
      button.classList.add("primary-background");
    }
  }

  static updateCard() {
    const pizzas = Stored.getPizza();
    const quantities = document.querySelectorAll(".order--amount");

    for (let i = 0; i < quantities.length; i++) {
      if (parseInt(quantities[i].innerText) !== parseInt(pizzas[i].amount)) {
        quantities[i].innerText = pizzas[i].amount;
      } else {
        continue;
      }
    }
  }

  static updateMenu() {
    const pizzas = Stored.getPizza();
    const quantities = document.querySelectorAll(".amount");

    for (let i = 0; i < quantities.length; i++) {
      if (parseInt(quantities[i].innerText) !== parseInt(pizzas[i].amount)) {
        quantities[i].innerText = pizzas[i].amount;
      } else {
        continue;
      }
    }
  }

  static amountCatch(e) {
    let amountElement, adjustAmount;

    if (e.classList.contains("add")) {
      adjustAmount = 1;
      amountElement = e.nextElementSibling;
    } else {
      adjustAmount = -1;
      amountElement = e.previousElementSibling;
    }

    if (amountElement.innerText >= 0) {
      amountElement.innerText =
        parseInt(amountElement.innerText) + adjustAmount;
    } else {
      adjustAmount = -1;
      amountElement.innerText = 0;
    }
  }
  static createPrice() {
    const shopCard = document.querySelector(".dropdownBackground");
    const priceContainer = document.createElement("span");
    const priceItem = document.createElement("span");
    priceItem.classList = "priceItem";
    priceContainer.classList = "priceContainer";
    shopCard.appendChild(priceContainer);
    priceContainer.appendChild(priceItem);
  }
  static showPrice() {
    let price, roundedPrice;
    const priceItem = document.querySelector(".priceItem");
    price = Stored.getPrice();
    roundedPrice = Stored.roundPrice(price, 2);

    if (price > 0) {
      priceItem.innerText = `Price: ${roundedPrice}$`;
    } else {
      priceItem.innerText = "Your card is empty...";
    }
  }

  static deleteCatch(e) {
    let index = e.previousElementSibling.innerText;
    let deleteButtons = document.querySelectorAll(".delete");
    for (let i = 0; i < deleteButtons.length; i++) {
      if (e.classList.contains(`delete${i}`)) {
        Stored.deleteOrder(index, i);
      }
    }
  }
}

// Stored contains data and its modifications.
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

  static deleteOrder(index, element) {
    let pizzas = this.getPizza();

    if (index > 0) {
      pizzas[element].amount = "0";
    }

    UI.updateCard();
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
  // Unfortunately getPrice returns costs with long decimal number
  static roundPrice(price, decimals) {
    let cost = Math.pow(10, decimals);
    return Math.round(price * cost) / cost;
  }
}

document.addEventListener("DOMContentLoaded", UI.displayMenu);
document.addEventListener("click", function() {
  UI.updateCard();
  UI.hideCard();
  UI.updateMenu();
  UI.updateButton();
  Stored.getPrice();
  UI.showPrice();
});
document.querySelector(".menu--list").addEventListener("click", e => {
  if (e.target.tagName == "BUTTON") {
    UI.amountCatch(e.target);
    Stored.ordered();
  } else {
    return 0;
  }
});
document.querySelector(".dropdownBackground").addEventListener("click", e => {
  if (e.target.tagName == "BUTTON") {
    UI.deleteCatch(e.target);
  } else {
    return 0;
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
