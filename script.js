function myfunction(){
    const nameRegex = /[a-zA-Z]{2,30}/igm;
    const emailRegex = /[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim;
    const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/gm;
    const phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/gm;

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const zip = document.getElementById("zip").value;
const phone = document.getElementById("phone").value;

if(nameRegex.test(name)){
    document.getElementById("errorname").innerHTML="";
}
else if(name==""){
    document.getElementById("errorname").innerHTML="enter username";

}
 else{
    document.getElementById("errorname").innerHTML="Name must be 2 to 23 characters";
}
if(emailRegex.test(email)){
    document.getElementById("erroremail").innerHTML="";
}else{
    document.getElementById("erroremail").innerHTML="email is not valid";
}
if(zipRegex.test(zip)){
    document.getElementById("errorzip").innerHTML="";
}else{
    document.getElementById("errorzip").innerHTML="Zip code is not valid";
}
if(phoneRegex.test(phone)){
    document.getElementById("errorphone").innerHTML="";
}else{
    document.getElementById("errorphone").innerHTML="Phone number is not valid";
    return false;
}
}

    