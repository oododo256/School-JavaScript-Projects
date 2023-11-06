function submitEmail(){
    var email= document.getElementById("email").value;
    if(email.includes("@") && "." && email.length>8){
        alert("Thank you for subscribing!");
        return true;
    }
    else{
        alert("Please enter a valid email address.");
        return false;
    }
}