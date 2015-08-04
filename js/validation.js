// validation.js
// Validates inputfields client-sided
// Created on 4-8-15

var inputErrors = [];

function validateInput(){
  console.log("Some errors occured, form not submitted");
  console.log(inputErrors);
  if(inputErrors.length > 0){
    return false;
  } else {
    return true;
  }
}

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
