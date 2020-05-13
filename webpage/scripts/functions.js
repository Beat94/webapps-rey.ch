function toHours(hour, minute){
	hourInt = parseInt(hour);
	minuteInt = parseInt(minute);
	return hourInt + (minuteInt / 60);
}

function timeById(){
	stunde = document.querySelector("#hour").value;
	minuten = document.querySelector("#minute").value;
	document.getElementById("ausgabe").innerHTML = toHours(stunde, minuten);
}