// validation.js
// Validates inputfields on the client-side
// Created on 4-8-15

var leerlingErrors = [];
var emailErrors = [];

function clearErrors(){
  $("#errors").html("");
}

function addError(item){
  var curHTML = $("#errors").html();
  $("#errors").html(curHTML + "<li>"+item+"</li>");
}

// Intervents submit event and checks if InputErrors array is empty
function validateInput(){
  var inputErrors = leerlingErrors.concat(emailErrors);
  clearErrors();
  if(inputErrors.length > 0){
    console.log("Some errors occured, form not submitted:");
    console.log(inputErrors);
    inputErrors.forEach(function(item){
      addError(item);
    });
    return false;
  } else if($("#leerlingnum").val().length === 0 || $("#email").val().length === 0){
    console.log("Can't leave fields empty");
    addError("Laat geen velden leeg");
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
    leerlingErrors = []; // Clear errors when typing
    changeColor($(this), 'green'); // Green when no errors

    if($(this).val().length < 7){
      leerlingErrors.push("Leerlingnummer te kort");
    }
    if($(this).val().length > 7){
      leerlingErrors.push("Leerlingnummer te lang");
    }
    if($(this).val().indexOf("O") !== 0){
      leerlingErrors.push("Geen correct leerlingnummer ingevoerd");
    }

    // If there's an error, change border-color to red
    if(leerlingErrors.length > 0){
      changeColor($(this), 'red');
    }
  });

  // Validate email inputfield
  $("#email").keyup(function(){
    emailErrors = []; // Clear errors when typing
    changeColor($(this), 'green'); // Green when no errors

    if($(this).val().length < 7){
      emailErrors.push("Email-addres te kort");
    }
    if($(this).val().indexOf("@") < 0 || $(this).val().indexOf(".") < 0){
      emailErrors.push("Voer een juist email-adres in");
    }

    // If there's an error, change border-color to red
    if(emailErrors.length > 0){
      changeColor($(this), 'red');
    }
  });
});
