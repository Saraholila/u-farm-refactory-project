const urbanregForm = () => {
    const upload = document.urbanfarmerreg.upload;
    const name = document.urbanfarmerreg.name;
    const date = document.urbanfarmerreg.date;
    const paymentmode = document.urbanfarmerreg.paymentmode;
    const directions = document.urbanfarmerreg.directions;
    const deliverymode = document.urbanfarmerreg.deliverymode;
    const producetype = document.urbanfarmerreg.producetype;
    const availability = document.urbanfarmerreg.availability;
    const booking = document.urbanfarmerreg.booking;
    const ward = document.urbanfarmerreg.ward;
    const price = document.urbanfarmerreg.price;
    const uniquepassword = document.urbanfarmerreg.uniquepassword;
  
    const uploaderror = document.getElementById("uploaderror");
    const nameerror = document.getElementById("nameerror");
    const dateerror = document.getElementById("dateerror");
    const paymentmodeerror = document.getElementById("paymentmodeerror");  
    const directionserror = document.getElementById("directionserror");
    const deliverymodeerror = document.getElementById("deliverymodeerror");  
    const producetypeerror = document.getElementById("producetypeerror");  
    const availabilityerror = document.getElementById("availabiltyerror");  
    const bookingerror = document.getElementById("bookingerror");
    const warderror = document.getElementById("warderror");
    const priceerror = document.getElementById("priceerror");
    const uniquepassworderror = document.getElementById("uniquepassworderror");
  
   
    const uploadRegex = /.*\.(gif|jpe?g|bmp|png)$/igm;
    if (upload.value.match(uploadRegex)) {
      console.log(upload.value);
      upload.style.border = "2px solid green";
    } else {
      upload.style.border = "2px solid red";
      uploaderror.innerHTML = "Please upload image";
      uploaderror.style.color = "Red";
    }
    const nameRegex = /^[a-zA-Z].*[\s\.]*$/;
    if (name.value.match(nameRegex)) {
      console.log(name.value);
      name.style.border = "2px solid green";
    } else {
      name.style.border = "2px solid red";
      nameerror.innerHTML = "Name must be in alphabates";
      nameerror.style.color = "Red";
    }
  
    
  
    let dateRegex = /^[0-9]+$/;
    if (date.value.match(dateRegex)) {
      console.log(date.value);
      date.style.border = "2px solid green";
    } else {
      date.style.border = "2px solid red";
      dateerror.innerHTML = "Please input numeric characters";
      dateerror.style.color = "Red";
    }

    const paymentmodeRegex = /^[a-zA-Z].*[\s\.]*$/;
    if (paymentmode.value.match(paymentmodeRegex)) {
      console.log(paymentmode.value);
      paymentmode.style.border = "2px solid green";
    } else {
      paymentmode.style.border = "2px solid red";
      paymentmodeerror.innerHTML = "Please input payment mode";
      paymentmodeerror.style.color = "Red";
    }

    const directionsRegex = /^[a-zA-Z].*[\s\.]*$/;
    if (directions.value.match(directionsRegex)) {
      console.log(directions.value);
      directions.style.border = "2px solid green";
    } else {
      directions.style.border = "2px solid red";
      directionserror.innerHTML = "Please input directions";
      directionserror.style.color = "Red";
    }

    const deliverymodeRegex = /^[a-zA-Z].*[\s\.]*$/;
    if (deliverymode.value.match(deliverymodeRegex)) {
      console.log(deliverymode.value);
      deliverymode.style.border = "2px solid green";
    } else {
      deliverymode.style.border = "2px solid red";
      deliverymodeerror.innerHTML = "Please input delivery mode";
      deliverymodeerror.style.color = "Red";
    }

    const producetypeRegex = /^[a-zA-Z].*[\s\.]*$/;
    if (producetype.value.match(producetypeRegex)) {
      console.log(producetype.value);
      producetype.style.border = "2px solid green";
    } else {
      producetype.style.border = "2px solid red";
      producetypeerror.innerHTML = "Please input payment mode";
      producetypeerror.style.color = "Red";
    }

    const availabilityRegex = /^[a-zA-Z].*[\s\.]*$/;
    if (availability.value.match(availabilityRegex)) {
      console.log(availability.value);
      availability.style.border = "2px solid green";
    } else {
      availabilty.style.border = "2px solid red";
      availabilityerror.innerHTML = "Please input payment mode";
      availabilityerror.style.color = "Red";
    }

    const bookingRegex =  /^[0-9a-zA-Z]+$/;
    if (booking.value.match(bookingRegex)) {
      console.log(booking.value);
      booking.style.border = "2px solid green";
    } else {
      booking.style.border = "2px solid red";
      bookingerror.innerHTML = "Please input alphanumeric characters";
      bookingerror.style.color = "Red";
    }
   
  
    const wardnumberRegex = /^[0-9]+$/;
    if (ward.value.match(wardnumberRegex)) {
      console.log(ward.value);
      ward.style.border = "2px solid green";
    } else {
      ward.style.border = "2px solid red";
      warderror.innerHTML = "Please input a numeric character";
      warderror.style.color = "Red";
    }

    let priceRegex = /^\w{7,12}$/;
    if (price.value.match(priceRegex)) {
      console.log(price.value);
      price.style.border = "2px solid green";
    } else {
      price.style.border = "2px solid red";
      priceerror.innerHTML = "Password must have 7-12 characters";
      priceerror.style.color = "Red";
    }
  
    let uniquepasswordRegex = /^\w{3,7}$/;
    if (uniquepassword.value.match(uniquepasswordRegex)) {
      console.log(uniquepassword.value);
      uniquepassword.style.border = "2px solid green";
    } else {
      uniquepassword.style.border = "2px solid red";
      uniquepassworderror.innerHTML = "Password must have 3-7 characters";
      uniquepassworderror.style.color = "Red";
    }
  };
  