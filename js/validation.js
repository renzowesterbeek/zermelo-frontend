// validation.js
// Validates inputfields on the client-side
// Created on 4-8-15

var inputErrors = [];

// Intervents submit event and checks if InputErrors array is empty
function validateInput(){
  if(inputErrors.length > 0){
    console.log("Some errors occured, form not submitted:");
    console.log(inputErrors);
    return false;
  } else if($("#leerlingnum").val().length === 0 || $("#email").val().length === 0){
    console.log("Can't leave fields empty");
    return false;
  } else {
    return true;
  }
}

function changeColor(element, color){
  element.css({
    'border-color' : color
  });
}

// Program loop
$(document).ready(function(){
  // Validate leerlingnummer inputfield
  $("#leerlingnum").keyup(function(){
    inputErrors = []; // Clear errors when typing
    changeColor($(this), 'green');

    if($(this).val().length !== 7){
      changeColor($(this), 'red');
      inputErrors.push("Incorrect leerlingnummer size");
    }
    if($(this).val().indexOf("O") !== 0){
      changeColor($(this), 'red');
      inputErrors.push("Missing O");
    }
  });

  // Validate email inputfield
  $("#email").keyup(function(){
    inputErrors = []; // Clear errors when typing
    changeColor($(this), 'green');

    if($(this).val().length < 7){
      changeColor($(this), 'red');
      inputErrors.push("Incorrect email size");
    }
    if($(this).val().indexOf("@") < 0 || $(this).val().indexOf(".") < 0){
      changeColor($(this), 'red');
      inputErrors.push("Email isn't correctly formatted");
    }
  });
});
