var myNames=[];
var myAges=[];
var nameEle=document.getElementById("nameIn");
var ageEle=document.getElementById("ageIn");
var outEle=document.getElementById("outDisplay")

function addData(){
    myNames.push(nameEle.value);
    myAges.push(ageEle.value);
    outEle.value="";
    for(var index=0; index<myNames.length; index+=1){
        outEle.value+=myNames[index]+"\t\t"+myAges[index]+"\n";
    }
}