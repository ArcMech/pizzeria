// class for transaction window
class TransactionUI {
  //
  static displayTransaction() {
    const popWindow = document.createElement("div");
    const parent = document.querySelector("footer");
    popWindow.innerHTML = `
    <li>Hello World</li>
      `;
    parent.appendChild(popWindow);
  }
}

document.addEventListener("click", function() {
  const order = document.querySelector("button.orderButton");
  if (order.classList.contains("disabled")) {
    console.log("disabled");
  } else {
    //TransactionUI.displayTransaction();
  }
});
