function lettersOnly(input){
  var regex = /[^a-z|-]/gi;
  input.value = input.value.replace(regex, "");
}

function alpha(input){
  var regex = /[A-Za-z\s\-]{6,}/gi;
  input.value = input.value.replace(regex, "");
}

function numbersOnly(input){
  var regex = /[^\d+]/;
  input.value = input.value.replace(regex, "");
}