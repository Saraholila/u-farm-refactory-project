const ao_foregForm = () => {
    const name = document.ao_foregistration.name;
    const username = document.ao_foregistration.username;
    const ward = document.ao_foregistration.ward;
    const regdate = document.ao_foregistration.regdate;
    const genderM = document.getElementById("genderM");
    const genderF = document.getElementById("genderF");
    // const birthdate = document.ao_foregistration.birthdate;
    // const activities = document.ao_foregistration.activities;
    // const nin = document.ao_foregistration.nin;
    // const phone = document.ao_foregistration.phone;
    // const directions = document.ao_foregistration.directions;
    // const residenttype = document.ao_foregistration.residenttype;
    // const stayperiod = document.ao_foregistration.stayperiod;
  
    const nameerror = document.getElementById("nameerror");
    const usernameerror = document.getElementById("usernameerror");
    const warderror = document.getElementById("warderror");
    const regdateerror = document.getElementById("regdateerr");
    const gendererror = document.getElementById("gendererror");
    // const birthdateerror = document.getElementById("birthdateerror");
    // const birthdateerror = document.getElementById("birthdateerror");
    // const activitieserror = document.getElementById("actvitieserror");
    // const ninerror = document.getElementById("ninerror");
    // const phoneerror = document.getElementById("phoneerror");
    // const directionserror = document.getElementById("directionserror");
    // const residenttypeerror = document.getElementById("residenttypeerror");
    // const stayperioderror = document.getElementById("stayperioderror");
  
    const nameRegex = /^[a-z]([-']?[a-z]+)( [a-z]([-']?[a-z]+))+$/;
    if (name.value.match(nameRegex)) {
      console.log(name.value);
    //   name.style.border = "2px solid green";
      name.style.border = "2px solid red";
      nameerror.innerHTML = "Name must be in alphabates";
      nameerror.style.color = "Red";
    //   name.focus()
      return false;
    } 

    const usernameRegex = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
    if (username.value.match(usernameRegex)) {
      console.log(username.value);
    //   username.style.border = "2px solid green";
      username.style.border = "2px solid red";
      usernameerror.innerHTML = "Name must be in alphabates";
      usernameerror.style.color = "Red";
      return false;
    } 
  
    const wardRegex = /^[0-9]+$/;
    if (ward.value.match(wardRegex)) {
      console.log(ward.value);
    //   ward.style.border = "2px solid green";
      ward.style.border = "2px solid red";
      warderror.innerHTML = "Please input a numeric character";
      warderror.style.color = "Red";
      return false
    } 
  
   
    // let regdateRegex = /^[0-9]+$/;
    if (regdate.value=="") {
        console.log(regdate.value);
    //   regdate.style.border = "2px solid green";
        regdate.style.border = "2px solid red";
        regdateerror.innerHTML = "Please select a date";
        regdateerror.style.color = "Red";
        regdate.focus() 
        return false;
    } 

  
    if (genderM.checked == false && genderF.checked == false) {
      // alert("Please select your gender");
      // return false;
      // }else {
      gendererror.innerHTML = "Please checkout gender";
      gendererror.style.color = "red";
    }
  
    // let birthRegex = /^[0-9]+$/;
    // if (birthdate.value.match(birthRegex)) {
    //   console.log(birthdate.value);
    //   birthdate.style.border = "2px solid green";
    // } else {
    //   birthdate.style.border = "2px solid red";
    //   birthdateerror.innerHTML = "Please input numeric characters";
    //   birthdateerror.style.color = "Red";
    // }
  
    // const activitiesRegex = /^[a-zA-Z].*[\s\.]*$/;
    // if (activities.value.match(activitiesRegex)) {
    //   console.log(activities.value);
    //   activities.style.border = "2px solid green";
    // } else {
    //   activities.style.border = "2px solid red";
    //   activitieserror.innerHTML = "Please input activities";
    //   activitieserror.style.color = "Red";
    // }
  
    // const ninRegex = /^[0-9a-zA-Z]+$/;
    // if (nin.value.match(ninRegex)) {
    //   console.log(nin.value);
    //   // alert("Right Address");
    //   nin.style.border = "2px solid green";
    // } else {
    //   // alert("Wrong address");
    //   nin.style.border = "2px solid red";
    //   ninerror.innerHTML = "Please insert right Nin number";
    //   ninerror.style.color = "red";
    // }
  
    // const phoneRegex = /^[0-12]+$/;
    // if (phone.value.match(phoneRegex)) {
    //   console.log(phone.value);
    //   // alert("Right Zip Code");
    //   phone.style.border = "2px solid green";
    // } else {
    //   // alert("Please use Alphanumeric zip Code");
    //   phone.style.border = "2px solid red";
    //   phoneerror.innerHTML = "Please input right phone number";
    //   phoneerror.style.color = "red";
    // }
  
    // const directionsRegex = /^[0-9a-zA-Z]+$/;
    // if (directions.value.match(directionsRegex)) {
    //   console.log(directions.value);
    //   // alert("Right Address");
    //   directions.style.border = "2px solid green";
    // } else {
    //   // alert("Wrong address");
    //   directions.style.border = "2px solid red";
    //   directionserror.innerHTML = "Please insert right address";
    //   directionserror.style.color = "red";
    // }
  
    // const residentRegex = /^[a-zA-Z].*[\s\.]*$/;
    // if (residencetype.value.match(residentRegex)) {
    //   console.log(residenttype.value);
    //   residenttype.style.border = "2px solid green";
    // } else {
    //   residenttype.style.border = "2px solid red";
    //   residenttypeerror.innerHTML = "Name must be in alphabates";
    //   residenttypeerror.style.color = "Red";
    // }
  
    // let stayperiodRegex = /^[0-9]+$/;
    // if (stayperiod.value.match(stayperiodRegex)) {
    //   console.log(stayperiod.value);
    //   stayperiod.style.border = "2px solid green";
    // } else {
    //   stayperiod.style.border = "2px solid red";
    //   stayperioderror.innerHTML = "Please input numeric characters";
    //   stayperioderror.style.color = "Red";
    // }
    else{
        alert ("The form has been successfully submitted");
        return true;
    }
  };
  