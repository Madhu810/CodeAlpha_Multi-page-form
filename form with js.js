function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
  
    // Check if the name field is empty.
    if (name == "") {
      alert("Please enter your name.");
      return false;
    }
  
    // Check if the email field is empty or invalid.
    if (email == "" || !validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Check if the age field is empty or invalid.
    if (age == "") {
      alert("Please enter your age.");
      return false;
    }
  
    // The form is valid, so submit it.
    return true;
  }
  
  // This function is used to validate the email address.
  
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }