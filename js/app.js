//Declaración de variables globales
const form = document.querySelector("form");
const formArray = Array.from(form);//Convierte colección html en array
const formValue =[];


//Convirtiendo array de target en array de values
const info = array =>{
  const formValue =[];
  array.forEach(item=>formValue.push(item.value));
  console.log(formValue);
  return formValue;
}

//Validación de número de tarjeta mediante algoritmo de luhn
const validateCardNumber = element =>{
  let sum = 0;
    //Convertir valor del input en array de números e invertirlo
    let cardNumberValue = Array.from(element.value);
    let numberArray = cardNumberValue.map(num => { return Number(num); }).reverse();

    numberArray.forEach((num, index) =>{
      if (index % 2 != 0) { //seleccionar índices pares y multiplicarlos por 2
        let evenNumber = num * 2;
        if (evenNumber > 9) { //si son mayor a 9 sumar el valor de su índice 0 y 1
            evenNumber = evenNumber.toString();
            let evenNumeZero = Number(evenNumber[0]);
            let evenNumeOne = Number(evenNumber[1]);
            let sumEvenNumber =  evenNumeZero + evenNumeOne;
            sum = sum + sumEvenNumber;
            } else {
                sum = sum + evenNumber;
                }
            } else {
        sum = sum + num;
        }
    });


  if (sum % 10 === 0) { //Dividir la suma entre 10, si es módulo 0 cambiar la clase a "success", si no lo es a "error"
    element.className = 'success'
    return true;
    } else {
    element.className = 'error'
    }
  }

// validación de fecha de vencimiento será true, la condición se eencuentra en el html
const validateExpiryDate = element =>{
  let expireDateForm = document.querySelector("#exp");
  expireDateForm.className = 'success'
  return true;
}

//validación de número Cvv
const validateVerificationValue = element =>{
  let cvvValue = parseInt(element.value);
    if(cvvValue > 100){
        element.className = "success";
        return true;
    }else{
        element.className = "error";
        return false
    }
}

//validación del nombre
const validateName = element =>{
  let nameValue = element.value;
  if(nameValue.length <= 30){
      element.className = "success";
      return true;
  }else{
      element.className = "error";
  }
  console.log(" name ")
}

//Ejecuta las funciones de validación ynameFormevalua si son true
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
