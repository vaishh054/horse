function decrementQuantity() {
  const quantityInput = document.getElementById("quantity");
  let quantityValue = parseInt(quantityInput.value);
  if (quantityValue > 1) {
    quantityValue--;
    quantityInput.value = quantityValue;
  }
}

function incrementQuantity() {
  const quantityInput = document.getElementById("quantity");
  let quantityValue = parseInt(quantityInput.value);
  quantityValue++;
  quantityInput.value = quantityValue;
}
