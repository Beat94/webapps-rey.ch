function toHours(hour, minute){
	hourInt = parseInt(hour);
	minuteInt = parseInt(minute);
	return hourInt + (minuteInt / 60);
}

function midnight(){
	varA = document.querySelector("#variableA").value;
	varB = document.querySelector("#variableB").value;
	varC = document.querySelector("#variableC").value;
	
	varAInt = parseInt(varA);
	varBInt = parseInt(varB);
	varCInt = parseInt(varC);
	
	result1 = ((varBInt * (-1)) + Math.pow(Math.pow(varBInt, 2) - 4 * varAInt * varCInt, 0.5)) / (2 * varAInt);
	result2 = ((varBInt * (-1)) - Math.pow(Math.pow(varBInt, 2) - 4 * varAInt * varCInt, 0.5)) / (2 * varAInt);
	
	
	//output
	//console.log(result1);
	//console.log(result2);
	document.getElementById("output").innerHTML = "X1: \t" + result1 + "<br>";
	document.getElementById("output").innerHTML += "X2: \t" + result2;
	
}





function timeById(){
	stunde = document.querySelector("#hour").value;
	minuten = document.querySelector("#minute").value;
	document.getElementById("ausgabe").innerHTML = toHours(stunde, minuten);
}