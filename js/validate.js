function validateEmail(email){
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function changeColor(element, color){
  $(element).css({'border-color': color});
}

function logErrors(array){
  var errorString = "";
  if(array.length == 1){
    errorString += array[0];
  } else {
    for(var i = 0; i < array.length; i++){
      errorString += array[i] + ", ";
    }
  }
  $('form p').html(errorString);
}

$(document).ready(function(){
  // Validate email field
  $('#email').keyup(function(){
    if(!validateEmail($('#email').val())){
      changeColor('#email:focus', 'red');
    } else {
      changeColor('#email:focus', 'green');
    }
  });
  // Validate appcode
  $('#appcode').keyup(function(){
    if($(this).val().length !== 12 && $(this).val().length !== 15){
      changeColor('#appcode:focus', 'red');
    } else {
      changeColor('#appcode:focus', 'green');
    }
  });

  // Validate on submit
  $("form").submit(function(event){
    var errors = [];
    if($('#email').css('border-color').toString() == 'rgb(255, 0, 0)'){
      errors.push('Email invalid');
    }
    if($('#appcode').css('border-color').toString() == 'rgb(255, 0, 0)'){
      errors.push('Appcode invalid');
    }

    // Checking for errors
    if(errors.length === 0 && $('#email').val().length !== 0 && $('#appcode').val().length !== 0){
      return;
    } else {
      console.log('Errors occured');
      logErrors(errors);
      event.preventDefault();
    }
  });
});
