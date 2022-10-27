const amount = document.querySelector('#amount');
const colorStandard = document.querySelector('#colorStandard')
const buttonSwitch = document.querySelector('#buttonSwitch');
const priceFinal = document.querySelector('#priceFinal');
const amountFinal = document.querySelector('#amountFinal');
const colorSwitch = document.querySelector('#colorSwitch');



buttonSwitch.addEventListener('click', () => {
  
  // Cambio de Precio
  const price = amount.value * 40000;
  priceFinal.textContent = "Total: $" + price; 

  // Cambio cantidades
  amountFinal.textContent = `Cantidad: ${amount.value}`;

  // Cambio de color
  const colorFinal = colorStandard.value;
  colorSwitch.style.backgroundColor = colorFinal;

})

