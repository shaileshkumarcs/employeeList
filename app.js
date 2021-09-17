function resetForm(){
    document.getElementById("myForm").reset();
}
function formSubmit(){

    var commonClass = document.getElementsByClassName("inputtext");
    for(var i=0; i< commonClass.length; i++){
        // console.log("commonClass", commonClass[i]);    
        commonClass[0].style.border = "1px solid gray";
    }
    // var errorMsg = document.getElementsByClassName("error-msg");
    // for(var j= 0; j< errorMsg.length; i++){
    //     // errorMsg[0].innerText = "";
    //     console.log("Error Msg", errorMsg[j]);
    // }
    // return false;

    var name = document.getElementById("name");
    // console.log(name);
    // return false;
    var email = document.getElementById("email");
    // console.log(email);
    var password = document.getElementById("password");
    // console.log(password);
    var phone = document.getElementById("phone");
    // console.log(phone);
    var language = document.getElementById("language");
    // console.log(language);


    if(name.value == ""){
        // alert("Please enter name");
        // name.classList.add("error-name");
        name.style.border = "1px solid red";
        document.getElementById("errorname").innerText = "Enter your name";
        return false;
    }
    if(email.value == ""){
        // alert("Please enter email");
        // email.classList.add("error-email");
        email.style.border = "1px solid red";
        document.getElementById("erroremail").innerText = "Enter your email";
        return false;
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        // alert('Please provide a valid email address');
        // email.classList.add("error-email");
        email.style.border = "1px solid red";
        document.getElementById("erroremail").innerText = "Please enter a valid email address";
        return false;
    }
    
    if(password.value == ""){
        // alert("Please enter password");
        // password.classList.add("error-password");
        password.style.border = "1px solid red";
        document.getElementById("errorpassword").innerText = "Enter your password";
        return false;
    }
    if(phone.value == ""){
        // alert("Please enter phone");
        // phone.classList.add("error-phone");
        phone.style.border = "1px solid red";
        document.getElementById("errorphone").innerText = "Enter your phone";
        return false;
    }
    if(language.value == ""){
        // alert("Please select language");
        // language.classList.add("error-language");
        language.style.border = "1px solid red";
        document.getElementById("errorlanguage").innerText = "Pelase select language";
        return false;
    }
    return false;
}