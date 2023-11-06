function addTemperature(){
    const temperature = document.getElementById("temperature").value;
    const temperatureList = document.getElementById("temperatureList");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(temperature));
    temperatureList.appendChild(li);
    document.getElementById("temperature").value = "";
    
    // Calculate average temperature
    const listItems = temperatureList.getElementsByTagName("li");
    let sum = 0;
    for(let i = 0; i < listItems.length; i++){
        sum += parseInt(listItems[i].textContent);
    }
    const averageTemperature = sum / listItems.length;
    document.getElementById("averageTemperature").textContent = averageTemperature;
}