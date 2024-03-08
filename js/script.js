{
  const calculateResult = (currencyPln, foreignCurrency) => {
    const rateEUR = 4.45;
    const rateUSD = 4.01; 
                                            
  switch (foreignCurrency) {
          case "EUR":
          return currencyPln / rateEUR;
     
          case "USD":
          return currencyPln / rateUSD;
   }
};

  const updateResultText = (currencyPln, result, foreignCurrency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${currencyPln.toFixed(2)} PLN = <strong>
  ${result.toFixed(2)} ${foreignCurrency}
</strong> `;
  }
 
const onFormSubmit = (Event) => {
  Event.preventDefault();

  const currencyPlnElement = document.querySelector(".js-currencyPln");
const foreignCurrencyElement = document.querySelector(".js-foreignCurrency");

const currencyPln = +currencyPlnElement.value;
const foreignCurrency = foreignCurrencyElement.value;

const resultElement = calculateResult(currencyPln, foreignCurrency);

 updateResultText (currencyPln, resultElement, foreignCurrency);
}
  
 const init = () => {
  const formElement = document.querySelector(".js-form");
  formElement.addEventListener("submit",onFormSubmit);
 };

init(); 
}
  

 

