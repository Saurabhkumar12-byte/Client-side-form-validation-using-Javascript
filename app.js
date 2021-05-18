function validate() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  if (username.value == "") {
    document.getElementById("user_error").innerHTML =
      "Error: Username is empty";
    
  } else if (username.value.length < 5) {
    document.getElementById("user_error").innerHTML =
    "Error: Username must be more than 5 character";
    
} else {
    
    document.getElementById("user_error").innerHTML = "";
  }
  if (password.value == "") {
    document.getElementById("pass_error").innerHTML =
      "Error: password is empty";
    
  } else if (password.value.length < 5) {
    document.getElementById("pass_error").innerHTML =
      "Error: password must be more than 5 character";
    
  } else {
    document.getElementById("pass_error").innerHTML = "";
  }


  return false;
}
