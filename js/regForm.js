function validateForm() {

    var userInfo = {}
    var flag = true;
    var alphaExp = /^[a-zA-Z]/;

    var fieldTXt = document.forms["regForm"]["fname"].value;
    userInfo["name"] = fieldTXt;
    if (fieldTXt == "") {
        document.getElementById("fname").style.border = "2px solid red";
        document.getElementById("fnameValid").innerHTML = "Please fill out this field." ;
        flag = false;
    } else if (!fieldTXt.match(alphaExp)) {
        
            document.getElementById("fname").style.border = "2px solid red";
            document.getElementById("fnameValid").innerHTML = "Please input alphabet characters only." ;
            flag = false;
    } else{
        document.getElementById("fname").style.border = "2px solid  rgb(100, 205, 237)";
        document.getElementById("fnameValid").innerHTML = ""
        flag = true;
    }


    var fieldTXt = document.forms["regForm"]["lname"].value;
    userInfo["lastname"] = fieldTXt;
    if (fieldTXt == "") {
        document.getElementById("lname").style.border = "2px solid red";
        document.getElementById("lnameValid").innerHTML = "Please fill out this field." ;
        flag = false;
    }else if (!fieldTXt.match(alphaExp)) {
        
        document.getElementById("lname").style.border = "2px solid red";
        document.getElementById("lnameValid").innerHTML = "Please input alphabet characters only." ;
        flag = false;
    } else{
    document.getElementById("lname").style.border = "2px solid rgb(100, 205, 237)";
    document.getElementById("lnameValid").innerHTML = ""
    flag = true;
    }


    var fieldTXt = document.forms["regForm"]["email"].value;
    userInfo["email"] = fieldTXt;
    if (fieldTXt == "") {
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("emailValid").innerHTML = "Please fill out this field." ;
        flag = false;
    } else {

        document.getElementById("email").style.borderColor = " rgb(100, 205, 237)";
        document.getElementById("emailValid").innerHTML = "" ;
        flag = true;

    }

    var fieldTXt = document.forms["regForm"]["pwd"].value;
    userInfo["password"] = fieldTXt;
    if (fieldTXt == "") {
        document.getElementById("pwd").style.border = "2px solid red";
        document.getElementById("pwdValid").innerHTML = "Please fill out this field." ;
        flag = false;
    }
    else if (fieldTXt != document.forms["regForm"]["confirmpwd"].value){

        document.getElementById("pwd").style.border = "2px solid  rgb(100, 205, 237)";
        document.getElementById("pwdValid").innerHTML = "" ;
        document.getElementById("confirmpwd").style.border = "2px solid red";
        document.getElementById("confirm").innerHTML = "Passwords do not match.";
        flag = false;
    }
    else{

        document.getElementById("pwd").style.border = "2px solid  rgb(100, 205, 237)";
        document.getElementById("pwdValid").innerHTML = "" ;
        document.getElementById("confirmpwd").style.border = "2px solid  rgb(100, 205, 237)";
        document.getElementById("confirm").innerHTML = "";
        flag = true;
    }
    
    if (flag){
      console.log(userInfo);
      var node = document.forms["regForm"];
      var para = document.createElement("P");  
      var t = document.createTextNode("You have successfully registered!"); 
      para.appendChild(t);
      node.insertBefore(para, node.submit);
    }

    /*flag = false; //just for show results
    return flag;*/

}



