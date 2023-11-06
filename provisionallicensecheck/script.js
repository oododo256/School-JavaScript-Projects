function yesProvisionalLicense(){
    var age = document.getElementById("age").value;
    if(age >= 17){
        document.getElementById("result").innerHTML = "You are eligible for a full license.";
    }
    else{
        document.getElementById("result").innerHTML = "You are not eligible for a full license, or a provisional license";
    }
}
function noProvisionalLicense(){
    var age = document.getElementById("age").value;
    if(age >= 17){
        document.getElementById("result").innerHTML = "You are eligible for a provisional license, but not a full license.";
    }
    else{
        document.getElementById("result").innerHTML = "You are not eligible for a full license, or a provisional license.";
    }
}