//Declaración de variables globales
const form = document.querySelector("form");
const formArray = Array.from(form);//Convierte colección html en array
const formValue =[];


//Convirtiendo array de target en array de values
const info = array =>{
  const formValue =[];
  array.forEach(item=>formValue.push(item.value));
  return formValue;
}

//Validación de número de tarjeta mediante algoritmo de luhn
const validateCardNumber = cardNumber =>{
	let arrayNumbers = cardNumber.split('');
	let arrayInverse = arrayNumbers.reverse();
	let sum = 0;
	if( cardNumber.length === 0){
    element.className = 'error'
    return false;
	}
  else {
      arrayInverse.forEach((item,i)=>{
      arrayInverse[i] = parseInt(arrayInverse[i]);
      if(i % 2 == 1){
				arrayInverse[i] = (parseInt((arrayInverse[i] * 2 )/ 10 )) + ((arrayInverse[i] * 2 ) % 10 );
			}
			sum += arrayInverse[i];

    						});
      element.className = 'success'
	    return sum % 10 === 0;
  }
}

// validación de fecha de vencimiento será true, la condición se eencuentra en el html
const validateExpiryDate = item =>{
  return true;
}

//validación de número Cvv
const validateVerificationValue = item =>{
  item = parseInt(item);
  console.log(item);
  // Si el elemento no es un número o es menor que 100 o mayor a 999
   if (isNaN(item) || item < 100 ||item > 999) {
       return false;
   } else {
       return true;
   }
}

//validación del nombre
const validateName = item =>{
    if(item.length <= 30){
       let element = document.querySelector("#name")
        element.className = "success";
        return true;
    }else{
        element.className = "error";
    }
    return false;
}

//Ejecuta las funciones de validación y evalua si son true
const validateCardDetails = array => {
  info(formArray);
  if(validateCardNumber(formArray[0]) && validateExpiryDate(formArray[1]) && validateVerificationValue(formArray[2]) && validateName(formArray[3]))  //escribe tu código aqui
  {
    return true;
  } else{
    return false;
  }
}


//Función principal ligada al evento que desencadena
form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});
