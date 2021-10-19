function updatePrice() {
  
  let s = document.getElementsByName("SafesType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.SafesTypes[priceIndex];
  }
  
  let radioDiv = document.getElementById("radios");
  
  let checkDiv = document.getElementById("checkboxes");
  
  if(select.value == 1){radioDiv.style.display="none";checkDiv.style.display="none";}
  else if(select.value==2){ radioDiv.style.display="block";checkDiv.style.display="none";}
  else if(select.value==3){ radioDiv.style.display="none";checkDiv.style.display="block"}
  
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }
  });
   
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });
  
  let val = document.getElementById("amount").value;
  let SafePrice = document.getElementById("SafePrice");
  if(!(/^[1-9][0-9]*$/).test(val)){SafePrice.innerHTML="Ничего не набрано или неверно набранно количество!";return;}
  val=parseInt(val);
  SafePrice.innerHTML = "Итого: " + price*val + " $";
}
function getPrices() {
  return {
    SafesTypes: [200, 300, 500],
    prodOptions: {
	  option1: 300,
      option2: 400,
      option3: 500,
    },
    prodProperties: {
      prop1: 140,
      prop2: 50,
    }
  };
}

window.addEventListener('DOMContentLoaded', function (event) {
  
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";
  
 
  let s = document.getElementsByName("SafesType");
  let select = s[0];
  
  select.addEventListener("change", function(event) {
    updatePrice();
  });
  
  
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      updatePrice();
    });
  });

   
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      updatePrice();
    });
  });
  
  let val = document.getElementById("amount");
  val.addEventListener("change", updatePrice);

  updatePrice();
});
