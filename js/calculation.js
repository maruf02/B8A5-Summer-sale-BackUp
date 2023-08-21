// card 1 js start
document.getElementById("card-1").addEventListener("click", function () {
  const cartTitleElement = document.getElementById("card-1-title");
  const cartTitle = cartTitleElement.innerText;
  const cartPriceElement = document.getElementById("card1Price");
  const cartPrice = parseFloat(cartPriceElement.innerText);
  // console.log(cartTitle, cartPrice);
  // console.log(cartTitle, cartPrice);

  // get show cart item add cart tittle
  const listContainer = document.getElementById("title-list");
  const li = document.createElement("li");
  li.innerText = cartTitle;
  listContainer.appendChild(li);

  const previousPriceElement = document.getElementById("totalPrice");
  const previousPrice = parseFloat(previousPriceElement.innerText);
  const totalPrice = cartPrice + previousPrice;
  // console.log(totalPrice);
  previousPriceElement.innerText = totalPrice;

  const finalTotalElement = document.getElementById("finalPrice");
  const finalTotal = parseFloat(finalTotalElement.innerText);
  finalTotalElement.innerText = totalPrice;

  const btnPurchase = document.getElementById("btnPurchase");
  if (totalPrice > 0) {
    btnPurchase.removeAttribute("disabled");
  } else {
    btnPurchase.setAttribute("disabled", "true");
  }
  // coupon start
  var condition = false;
  btnapply = document.getElementById("btn-apply");
  if (totalPrice >= 200) {
    btnapply.removeAttribute("disabled");
  } else {
    btnapply.setAttribute("disabled", "true");
  }
});

// card 1 js ends
// ************************************************************************
// card 2 js start
document.getElementById("card-2").addEventListener("click", function () {
  const cartTitleElement = document.getElementById("card-2-title");
  const cartTitle = cartTitleElement.innerText;
  const cartPriceElement = document.getElementById("card2Price");
  const cartPrice = parseFloat(cartPriceElement.innerText);
  // console.log(cartTitle, cartPrice);

  // get show cart item add cart tittle
  const listContainer = document.getElementById("title-list");
  const li = document.createElement("li");
  li.innerText = cartTitle;
  listContainer.appendChild(li);

  const previousPriceElement = document.getElementById("totalPrice");
  const previousPrice = parseFloat(previousPriceElement.innerText);
  const totalPrice = cartPrice + previousPrice;
  // console.log(totalPrice);
  previousPriceElement.innerText = totalPrice;

  const finalTotalElement = document.getElementById("finalPrice");
  const finalTotal = parseFloat(finalTotalElement.innerText);
  finalTotalElement.innerText = totalPrice;

  const btnPurchase = document.getElementById("btnPurchase");
  if (totalPrice > 0) {
    btnPurchase.removeAttribute("disabled");
  } else {
    btnPurchase.setAttribute("disabled", "true");
  }
  // coupon start
  var condition = false;
  btnapply = document.getElementById("btn-apply");
  if (totalPrice >= 200) {
    btnapply.removeAttribute("disabled");
  } else {
    btnapply.setAttribute("disabled", "true");
  }
});
// card 2 js ends
// ************************************************************************
// card 3 js start

document.getElementById("card-3").addEventListener("click", function () {
  const cartTitleElement = document.getElementById("card-3-title");
  const cartTitle = cartTitleElement.innerText;
  const cartPriceElement = document.getElementById("card3Price");
  const cartPrice = parseFloat(cartPriceElement.innerText);
  // console.log(cartTitle, cartPrice);

  // get show cart item add cart tittle
  const listContainer = document.getElementById("title-list");
  const li = document.createElement("li");
  li.innerText = cartTitle;
  listContainer.appendChild(li);

  const previousPriceElement = document.getElementById("totalPrice");
  const previousPrice = parseFloat(previousPriceElement.innerText);
  const totalPrice = cartPrice + previousPrice;
  // console.log(totalPrice);
  previousPriceElement.innerText = totalPrice;

  const finalTotalElement = document.getElementById("finalPrice");
  const finalTotal = parseFloat(finalTotalElement.innerText);
  finalTotalElement.innerText = totalPrice;

  const btnPurchase = document.getElementById("btnPurchase");
  if (totalPrice > 0) {
    btnPurchase.removeAttribute("disabled");
  } else {
    btnPurchase.setAttribute("disabled", "true");
  }
  // coupon start
  var condition = false;
  btnapply = document.getElementById("btn-apply");
  if (totalPrice >= 200) {
    btnapply.removeAttribute("disabled");
  } else {
    btnapply.setAttribute("disabled", "true");
  }
});

// card 3 js ends
// ************************************************************************
// card 4 js start

document.getElementById("card-4").addEventListener("click", function () {
  const cartTitleElement = document.getElementById("card-4-title");
  const cartTitle = cartTitleElement.innerText;
  const cartPriceElement = document.getElementById("card4Price");
  const cartPrice = parseFloat(cartPriceElement.innerText);
  // console.log(cartTitle, cartPrice);

  // get show cart item add cart tittle
  const listContainer = document.getElementById("title-list");
  const li = document.createElement("li");
  li.innerText = cartTitle;
  listContainer.appendChild(li);

  const previousPriceElement = document.getElementById("totalPrice");
  const previousPrice = parseFloat(previousPriceElement.innerText);
  const totalPrice = cartPrice + previousPrice;
  // console.log(totalPrice);
  previousPriceElement.innerText = totalPrice;

  const finalTotalElement = document.getElementById("finalPrice");
  const finalTotal = parseFloat(finalTotalElement.innerText);
  finalTotalElement.innerText = totalPrice;

  const btnPurchase = document.getElementById("btnPurchase");
  if (totalPrice > 0) {
    btnPurchase.removeAttribute("disabled");
  } else {
    btnPurchase.setAttribute("disabled", "true");
  }
  // coupon start
  var condition = false;
  btnapply = document.getElementById("btn-apply");
  if (totalPrice >= 200) {
    btnapply.removeAttribute("disabled");
  } else {
    btnapply.setAttribute("disabled", "true");
  }
});

// card 4 js ends
// ************************************************************************
// card 5 js start

document.getElementById("card-5").addEventListener("click", function () {
  const cartTitleElement = document.getElementById("card-5-title");
  const cartTitle = cartTitleElement.innerText;
  const cartPriceElement = document.getElementById("card5Price");
  const cartPrice = parseFloat(cartPriceElement.innerText);
  // console.log(cartTitle, cartPrice);

  // get show cart item add cart tittle
  const listContainer = document.getElementById("title-list");
  const li = document.createElement("li");
  li.innerText = cartTitle;
  listContainer.appendChild(li);

  const previousPriceElement = document.getElementById("totalPrice");
  const previousPrice = parseFloat(previousPriceElement.innerText);
  const totalPrice = cartPrice + previousPrice;
  // console.log(totalPrice);
  previousPriceElement.innerText = totalPrice;

  const finalTotalElement = document.getElementById("finalPrice");
  const finalTotal = parseFloat(finalTotalElement.innerText);
  finalTotalElement.innerText = totalPrice;

  const btnPurchase = document.getElementById("btnPurchase");
  if (totalPrice > 0) {
    btnPurchase.removeAttribute("disabled");
  } else {
    btnPurchase.setAttribute("disabled", "true");
  }
  // coupon start
  var condition = false;
  btnapply = document.getElementById("btn-apply");
  if (totalPrice >= 200) {
    btnapply.removeAttribute("disabled");
  } else {
    btnapply.setAttribute("disabled", "true");
  }
});

// card 5 js ends
// ************************************************************************
// card 6 js start

document.getElementById("card-6").addEventListener("click", function () {
  const cartTitleElement = document.getElementById("card-6-title");
  const cartTitle = cartTitleElement.innerText;
  const cartPriceElement = document.getElementById("card6Price");
  const cartPrice = parseFloat(cartPriceElement.innerText);
  // console.log(cartTitle, cartPrice);

  // get show cart item add cart tittle
  const listContainer = document.getElementById("title-list");
  const li = document.createElement("li");
  li.innerText = cartTitle;
  listContainer.appendChild(li);

  const previousPriceElement = document.getElementById("totalPrice");
  const previousPrice = parseFloat(previousPriceElement.innerText);
  const totalPrice = cartPrice + previousPrice;
  // console.log(totalPrice);
  previousPriceElement.innerText = totalPrice;

  const finalTotalElement = document.getElementById("finalPrice");
  const finalTotal = parseFloat(finalTotalElement.innerText);
  finalTotalElement.innerText = totalPrice;

  const btnPurchase = document.getElementById("btnPurchase");
  if (totalPrice > 0) {
    btnPurchase.removeAttribute("disabled");
  } else {
    btnPurchase.setAttribute("disabled", "true");
  }
  // coupon start
  var condition = false;
  btnapply = document.getElementById("btn-apply");
  if (totalPrice >= 200) {
    btnapply.removeAttribute("disabled");
  } else {
    btnapply.setAttribute("disabled", "true");
  }
});
// card 6 js ends
// ************************************************************************
// card 7 js start

document.getElementById("card-7").addEventListener("click", function () {
  const cartTitleElement = document.getElementById("card-7-title");
  const cartTitle = cartTitleElement.innerText;
  const cartPriceElement = document.getElementById("card7Price");
  const cartPrice = parseFloat(cartPriceElement.innerText);
  // console.log(cartTitle, cartPrice);

  // get show cart item add cart tittle
  const listContainer = document.getElementById("title-list");
  const li = document.createElement("li");
  li.innerText = cartTitle;
  listContainer.appendChild(li);

  const previousPriceElement = document.getElementById("totalPrice");
  const previousPrice = parseFloat(previousPriceElement.innerText);
  const totalPrice = cartPrice + previousPrice;
  // console.log(totalPrice);
  previousPriceElement.innerText = totalPrice;

  const finalTotalElement = document.getElementById("finalPrice");
  const finalTotal = parseFloat(finalTotalElement.innerText);
  finalTotalElement.innerText = totalPrice;

  const btnPurchase = document.getElementById("btnPurchase");
  if (totalPrice > 0) {
    btnPurchase.removeAttribute("disabled");
  } else {
    btnPurchase.setAttribute("disabled", "true");
  }
  // coupon start
  var condition = false;
  btnapply = document.getElementById("btn-apply");
  if (totalPrice >= 200) {
    btnapply.removeAttribute("disabled");
  } else {
    btnapply.setAttribute("disabled", "true");
  }
});

// card 7 js ends
// ************************************************************************
// card 8 js start

document.getElementById("card-8").addEventListener("click", function () {
  const cartTitleElement = document.getElementById("card-8-title");
  const cartTitle = cartTitleElement.innerText;
  const cartPriceElement = document.getElementById("card8Price");
  const cartPrice = parseFloat(cartPriceElement.innerText);
  // console.log(cartTitle, cartPrice);

  // get show cart item add cart tittle
  const listContainer = document.getElementById("title-list");
  const li = document.createElement("li");
  li.innerText = cartTitle;
  listContainer.appendChild(li);

  const previousPriceElement = document.getElementById("totalPrice");
  const previousPrice = parseFloat(previousPriceElement.innerText);
  const totalPrice = cartPrice + previousPrice;
  // console.log(totalPrice);
  previousPriceElement.innerText = totalPrice;

  const finalTotalElement = document.getElementById("finalPrice");
  const finalTotal = parseFloat(finalTotalElement.innerText);
  finalTotalElement.innerText = totalPrice;

  const btnPurchase = document.getElementById("btnPurchase");
  if (totalPrice > 0) {
    btnPurchase.removeAttribute("disabled");
  } else {
    btnPurchase.setAttribute("disabled", "true");
  }
  // coupon start
  var condition = false;
  btnapply = document.getElementById("btn-apply");
  if (totalPrice >= 200) {
    btnapply.removeAttribute("disabled");
  } else {
    btnapply.setAttribute("disabled", "true");
  }
});

// card 8 js ends
// ************************************************************************
// card 9 js start

document.getElementById("card-9").addEventListener("click", function () {
  const cartTitleElement = document.getElementById("card-9-title");
  const cartTitle = cartTitleElement.innerText;
  const cartPriceElement = document.getElementById("card9Price");
  const cartPrice = parseFloat(cartPriceElement.innerText);
  // console.log(cartTitle, cartPrice);

  // get show cart item add cart tittle
  const listContainer = document.getElementById("title-list");
  const li = document.createElement("li");
  li.innerText = cartTitle;
  listContainer.appendChild(li);

  const previousPriceElement = document.getElementById("totalPrice");
  const previousPrice = parseFloat(previousPriceElement.innerText);
  const totalPrice = cartPrice + previousPrice;
  // console.log(totalPrice);
  previousPriceElement.innerText = totalPrice;

  const finalTotalElement = document.getElementById("finalPrice");
  const finalTotal = parseFloat(finalTotalElement.innerText);
  finalTotalElement.innerText = totalPrice;

  const btnPurchase = document.getElementById("btnPurchase");
  if (totalPrice > 0) {
    btnPurchase.removeAttribute("disabled");
  } else {
    btnPurchase.setAttribute("disabled", "true");
  }
  // coupon start

  const btnapply = document.getElementById("btn-apply");
  if (totalPrice >= 200) {
    btnapply.removeAttribute("disabled");
  } else {
    btnapply.setAttribute("disabled", "true");
  }
});

// card 9 js ends
// ************************************************************************

// ********************************************************************
// Calculate the discount price && set the final price after discount

document.getElementById("btn-apply").addEventListener("click", function () {
  const inputFieldElement = document.getElementById("inputField");
  const inputField = inputFieldElement.value;
  if (inputField === "SELL200") {
    const finalTotalPriceElement = document.getElementById("totalPrice");
    const finalTotalPriceFull = parseFloat(finalTotalPriceElement.innerText);
    const finalTotalPrice = finalTotalPriceFull.toFixed(2);
    // console.log(finalTotalPrice);
    const previousdisPriceDeflt = 0;
    const discountPrice = finalTotalPrice * 0.2; //disPrice
    const previousdisPriceElement = document.getElementById("disPrice");
    // const previousdisPrice = parseFloat(previousdisPriceElement.innerText);
    const totaldisPriceFull = discountPrice + previousdisPriceDeflt;
    const totaldisPrice = totaldisPriceFull.toFixed(2);
    // console.log(totalPrice);
    previousdisPriceElement.innerText = totaldisPrice;

    const finalTotalElement = document.getElementById("finalPrice");
    const finalTotal = parseFloat(finalTotalElement.innerText);
    const finalTotalValueFull = finalTotalPrice - totaldisPrice;
    const finalTotalValue = finalTotalValueFull.toFixed(2);
    finalTotalElement.innerText = finalTotalValue;
    // inputFieldElement.setAttribute("disabled", "true");
  } else {
    const my_modal_2 = document.getElementById("my_modal_2");
    my_modal_2.setAttribute("onclick", "this.showModal()");
    my_modal_2.click();
    // alert("your coupon is incorrect!!");
    console.log("Ohh No Coupon Incorrect");
  }

  inputFieldElement.value = "";
});
