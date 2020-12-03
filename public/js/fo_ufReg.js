const fo_ufregForm = () => {
    const name = document.fo_ufReg.name;
    const username = document.fo_ufReg.username;
    const ward = document.fo_ufReg.ward;
    const password = document.fo_ufReg.password;
    const regdate = document.fo_ufReg.regdate;
    const genderM = document.getElementById("genderM");
    const genderF = document.getElementById("genderF");
    const birthdate = document.fo_ufReg.birthdate;
    const activities = document.fo_ufReg.activities;
    const nin = document.fo_ufReg.nin;
    const phone = document.fo_ufReg.phone;
  
    const nameerror = document.getElementById("nameerror");
    const usernameerror = document.getElementById("usernameerror");
    const warderror = document.getElementById("warderror");
    const passworderror = document.getElementById("passworderror");
    const regdateerror = document.getElementById("regdateerror");
    const gendererror = document.getElementById("gendererror");
    const birthdateerror = document.getElementById("birthdateerror");
    const activitieserror = document.getElementById("actvitieserror");
    const ninerror = document.getElementById("ninerror");
    const phoneerror = document.getElementById("phoneerror");
  
    const nameRegex = /^[a-zA-Z].*[\s\.]*$/;
    if (name.value.match(nameRegex)) {
      console.log(name.value);
      name.style.border = "2px solid green";
    } else {
      name.style.border = "2px solid red";
      nameerror.innerHTML = "Name must be in alphabates";
      nameerror.style.color = "Red";
    }

    const nameRegex = /^[a-zA-Z].*[\s\.]*$/;
    if (username.value.match(nameRegex)) {
      console.log(username.value);
      username.style.border = "2px solid green";
    } else {
      username.style.border = "2px solid red";
      usernameerror.innerHTML = "Name must be in alphabates";
      usernameerror.style.color = "Red";
    }
  
    const wardRegex = /^[0-9]+$/;
    if (ward.value.match(wardRegex)) {
      console.log(ward.value);
      ward.style.border = "2px solid green";
    } else {
      ward.style.border = "2px solid red";
      warderror.innerHTML = "Please input a numeric character";
      warderror.style.color = "Red";
    }
  
   
    let regdateRegex = /^[0-9]+$/;
    if (regdate.value.match(regdateRegex)) {
      console.log(regdate.value);
      regdate.style.border = "2px solid green";
    } else {
      regdate.style.border = "2px solid red";
      regdateerror.innerHTML = "Please input numeric characters";
      regdateerror.style.color = "Red";
    }
  
    if (genderM.checked == false && genderF.checked == false) {
      // alert("Please select your gender");
      // return false;
      // }else {
      gendererror.innerHTML = "Please checkout gender";
      gendererror.style.color = "red";
    }
  
    let birthRegex = /^[0-9]+$/;
    if (birthdate.value.match(birthRegex)) {
      console.log(birthdate.value);
      birthdate.style.border = "2px solid green";
    } else {
      birthdate.style.border = "2px solid red";
      birthdateerror.innerHTML = "Please input numeric characters";
      birthdateerror.style.color = "Red";
    }
  
    const activitiesRegex = /^[a-zA-Z].*[\s\.]*$/;
    if (activities.value.match(activitiesRegex)) {
      console.log(activities.value);
      activities.style.border = "2px solid green";
    } else {
      activities.style.border = "2px solid red";
      activitieserror.innerHTML = "Please input activities";
      activitieserror.style.color = "Red";
    }
  
    const ninRegex = /^[0-9a-zA-Z]+$/;
    if (nin.value.match(ninRegex)) {
      console.log(nin.value);
      // alert("Right Address");
      nin.style.border = "2px solid green";
    } else {
      // alert("Wrong address");
      nin.style.border = "2px solid red";
      ninerror.innerHTML = "Please insert right Nin number";
      ninerror.style.color = "red";
    }
  
    const phoneRegex = /^[0-12]+$/;
    if (phone.value.match(phoneRegex)) {
      console.log(phone.value);
      // alert("Right Zip Code");
      phone.style.border = "2px solid green";
    } else {
      // alert("Please use Alphanumeric zip Code");
      phone.style.border = "2px solid red";
      phoneerror.innerHTML = "Please input right phone number";
      phoneerror.style.color = "red";
    }

    let passwordRegex = /^\w{3,7}$/;
    if (uniquepassword.value.match(passwordRegex)) {
      console.log(password.value);
      password.style.border = "2px solid green";
    } else {
      password.style.border = "2px solid red";
      passworderror.innerHTML = "Password must have 3-7 characters";
      passworderror.style.color = "Red";
    }
  };
   
  