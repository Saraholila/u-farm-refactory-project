const login = () => {
    const name = document.getElementById("name");
    const password = document.getElementById("password");
  
    name.focus();
  
    const nameerror = document.getElementById("nameerror");
    const passworderror = document.getElementById("passworderror");
  
    const nameRegex = /^[a-zA-Z].*[\s\.]*$/;
    if (name.value.match(nameRegex)) {
      console.log(name.value);
      name.style.border = "2px solid green";
    } else {
      name.style.border = "2px solid red";
      nameerror.innerHTML = "Name must be in alphabates";
      nameerror.style.color = "Red";
    }
  
    let passwordRegex = /^[0-9a-zA-Z]+$/;
    if (password.value.match(passwordRegex)) {
      console.log(password.value);
      password.style.border = "2px solid green";
    } else {
      password.style.border = "2px solid red";
      passworderror.innerHTML = "Please insert Alphanumeric password";
      passworderror.style.color = "Red";
     
  
    }
     
  };
  