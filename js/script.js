/*
Shopping Cart Features:
  - Increase quantity
  - Decrease quantity
  - Delete products
  - Like products
  - Automatically update total price
*/

// Selecting Buttons and Icons

const plusButtons = document.querySelectorAll(".fa-plus-circle");
const minusButtons = document.querySelectorAll(".fa-minus-circle");
const deleteButtons = document.querySelectorAll(".fa-trash-alt");
const heartButtons = document.querySelectorAll(".fa-heart");

// Price

const total = document.querySelector(".total");

// A Function to Calculate the Price of All Products

function updateTotal() {
  let totalPrice = 0;

  const products = document.querySelectorAll(".card");

  products.forEach((product) => {
    const quantity = Number(product.querySelector(".quantity").textContent);

    const price = Number(
      product.querySelector(".unit-price").textContent.replace("$", "")
    );
    totalPrice += quantity * price;
  });

  total.textContent = totalPrice + "$";
}

// Plus Buttons

plusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantity = button.parentElement.querySelector(".quantity");

    quantity.textContent++;
    updateTotal();
  });
});

// Minus Buttons

minusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantity = button.parentElement.querySelector(".quantity");

    if (quantity.textContent > 0) {
      quantity.textContent--;
    }
    updateTotal();
  });
});

// Delete Buttons

deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".card").parentElement.remove();
    updateTotal();
  });
});

//Like Buttons

heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("liked");
  });
});
