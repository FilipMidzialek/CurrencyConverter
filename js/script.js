let currencyPlnElement = document.querySelector(".js-currencyPln");
let foreignCurrencyElement = document.querySelector(".js-foreignCurrency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  
let currencyPln = currencyPlnElement.value;
let EUR = currencyPln * 0.23;
let USD = currencyPln * 0.25; 
  
let foreignCurrency = foreignCurrencyElement.value;
let result;                                                 
switch (foreignCurrency) {
        case "EUR":
        result = EUR;
   break;
        case "USD":
        result = USD;
   break;
}
  
  resultElement.innerText = result.toFixed(2);
})