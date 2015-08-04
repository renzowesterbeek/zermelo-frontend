// validation.js
// Validates inputfields client-sided
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

// Program loop
$(document).ready(function(){
  $("#leerlingnum").keyup(function(){
    console.log(inputErrors);
    inputErrors = [];

    if($(this).val().length !== 7){
      inputErrors.push("Incorrect leerlingnummer size");
    }
    if($(this).val().indexOf("O") !== 0){
      inputErrors.push("Missing O");
    }
  });
  $("#email").keyup(function(){

  });
});
