function toHours(hour, minute){
	hourInt = parseInt(hour);
	minuteInt = parseInt(minute);
	return hourInt + (minuteInt / 60);
}

function onEnterListener(btnId){
	if (event.keyCode === 13){
		
		document.getElementById(btnId).click();
		
	}
	
}

function onEnterListener1(btnId){
	if (event.keyCode === 13){
		
		document.getElementById(btnId).click();
		
	}
	
}


function midnight(){
	varA = document.querySelector("#variableA").value;
	varB = document.querySelector("#variableB").value;
	varC = document.querySelector("#variableC").value;
	
	varAInt = parseInt(varA);
	varBInt = parseInt(varB);
	varCInt = parseInt(varC);
	
	
	varDInt = Math.pow(varBInt, 2) - 4 * varAInt * varCInt;
	
	if(parseInt(varDInt) < 0){
		
		document.getElementById("output").innerHTML = "Ergibt eine komplexe L&oumlsung bitte den Taschenrechner verwenden ;-)."
		
	}else{	
	
		result1 = ((varBInt * (-1)) + Math.pow(Math.pow(varBInt, 2) - 4 * varAInt * varCInt, 0.5)) / (2 * varAInt);
		result2 = ((varBInt * (-1)) - Math.pow(Math.pow(varBInt, 2) - 4 * varAInt * varCInt, 0.5)) / (2 * varAInt);
		
		
		//output
		//console.log(result1);
		//console.log(result2);
		document.getElementById("output").innerHTML = "X1: \t" + result1 + "<br>";
		document.getElementById("output").innerHTML += "X2: \t" + result2;
		
	}
	
}

// Diese Funktion wird nicht mehr gebraucht
function timeById(){
	stunden = document.querySelector("#hour").value;
	minuten = document.querySelector("#minute").value;
	document.getElementById("ausgabe").innerHTML = toHours(stunden, minuten);
}

function timeByIdStr(){
	inputString = document.querySelector("#inputStr").value;
	inputStringSplit = inputString.split(":")
	stunden = parseInt(inputStringSplit[0]);
	minuten = parseInt(inputStringSplit[1]);

	// document.getElementById("ausgabe").innerHTML = inputStringSplit;
	output = toHours(stunden, minuten);

	document.getElementById("ausgabe").innerHTML = output.toFixed(2);
	console.log(output)
}

// ab hier ist der Arr-Calc-Teil
//--------------------------------
var startArr = ["r2d2"];
var endArr = ["r2d2"];
var calcArr = ["r2d2"];
var startArrString = ["r2d2"];
var endArrString = ["r2d2"];

function ausgArr(){
	document.getElementById("ausgabe").innerHTML = "";

	total = 0;

	//output
	for(var i = 0; i < startArr.length; i++){
		document.getElementById("ausgabe").innerHTML += " | " +  startArrString[i] + " | " + endArrString[i] + " | " + calcArr[i] + " | <button class='btn btn-dark' onClick='editOpen(" + i + ")'>Editieren</button> | <button class='btn btn-dark' onClick='removeDataset("+ i +")'>L&oumlschen</button><br><div id='editDiv" + i + "'></div><br>";
		total += calcArr[i];
	}
	
	document.getElementById("ausgabe").innerHTML += "</table><br><br>Total: " + total.toFixed(2);
	console.log(total);
}

// arrAdd
function timeByIdStartEnd(){
	startString = document.getElementById("Start").value;
	endString = document.getElementById("End").value;
	
	startStringSplit = startString.split(":");
	endStringSplit = endString.split(":");

	startToHours = toHours(startStringSplit[0], startStringSplit[1]);
	endToHours = toHours(endStringSplit[0], endStringSplit[1]);
	calcToHours = endToHours - startToHours;

	startArr.push(startToHours);
	endArr.push(endToHours);
	calcArr.push(calcToHours);
	startArrString.push(startString);
	endArrString.push(endString);
	
	if(startArr[0] === "r2d2"){
		startArr.shift();
		endArr.shift();
		calcArr.shift();
		startArrString.shift();
		endArrString.shift();
	}
	
	ausgArr();

}

function removeDataset(zeiger){
	startArr.splice(zeiger, 1);
	endArr.splice(zeiger, 1);
	calcArr.splice(zeiger, 1);
	startArrString.splice(zeiger, 1);
	endArrString.splice(zeiger, 1);

	ausgArr();
}

function timeReset(){
	console.log("Time wird resetted");

	//del Arrays
	for(var i = startArr.length; i >= 0; i--){
		startArr.splice(i, 1);
		endArr.splice(i, 1);
		calcArr.splice(i, 1);
		startArrString.splice(i, 1);
		endArrString.splice(i, 1);
	}

	//Array mit Standard-Wert füllen
	startArr.push("r2d2");
	endArr.push("r2d2");
	calcArr.push("r2d2");
	startArrString.push("r2d2");
	endArrString.push("r2d2");

	document.getElementById("ausgabe").innerHTML = "Zeit Resetted";
	console.log("Fertig");
}

function editOpen(zeiger){
	document.getElementById("editDiv" + zeiger).innerHTML = "<br><form><table><tr><td>Startzeit:</td><td><input id='startEdit" + zeiger + "' placeholder='"+ startArrString[zeiger] +"' style='width:80px;' class='form-control'></td><td> Endzeit:</td><td> <input id='endEdit" + zeiger + "' placeholder='"+ endArrString[zeiger] +"' style='width:80px;' class='form-control'></td><td> <button class='btn btn-dark' onClick='inputNew(" + zeiger + ")'>Speichern</button></tr></table></form><br>";
}

function inputNew(zeiger){
	isNotAnum = false;

	startStringNew = document.getElementById("startEdit" + zeiger).value;
	endStringNew = document.getElementById("endEdit" + zeiger).value;
	
	startStringSplit = startStringNew.split(":");
	endStringSplit = endStringNew.split(":");

	startToHours = toHours(startStringSplit[0], startStringSplit[1]);
	endToHours = toHours(endStringSplit[0], endStringSplit[1]);

	if(isNaN(startToHours)){
		isNotAnum = true;
		startToHours = startArr[zeiger];
		startStringNew = startArrString[zeiger];
	}

	if(isNaN(endToHours)){
		isNotAnum = true;
		endToHours = endArr[zeiger];
		endStringNew = endArrString[zeiger];
	}

	calcToHours = endToHours - startToHours;


	startArr[zeiger] = startToHours;
	endArr[zeiger] = endToHours;
	calcArr[zeiger] = calcToHours;
	startArrString[zeiger] = startStringNew;
	endArrString[zeiger] = endStringNew;

	ausgArr();

}

function fuhrungsNull(variable){
	varStr = String(variable);
	output = varStr;

	if(parseInt(variable) < 10){
		output = "0" + varStr;
	}

	return output;
}

//helpful: https://www.it-swarm.com.de/de/javascript/wie-zeige-ich-die-aktuelle-uhrzeit-javascript-im-format-hh-mm-ss/1040374542/
function rtTime(){
				
	var time = new Date();
	var hour = fuhrungsNull(time.getHours());
	var minute = fuhrungsNull(time.getMinutes());
	var second = fuhrungsNull(time.getSeconds());

	document.getElementById("rtzeitausg").textContent = hour + ":" + minute + ":" + second;

	
}