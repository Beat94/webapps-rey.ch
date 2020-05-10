Vue.component('navigation-index', {template: '<nav><router-link to="/">Home</router-link> <router-link to="/zeitrechner">Zeitrechner</router-link></nav>'});

Vue.component('app-home', {	template: '<div><h1>Home</h1> <p>Willkommen auf der Homepage der Webapps von rey.ch</p></div>'});

Vue.component('timecalc', { template: '<div><form><input type="number" id="hour"> : <input type="number" id="minute"><br><br><button type="button" onclick="timeById()">calculate</button></form><div id="ausgabe"></div></div>'});



const router = new VueRouter({
	routes:[
		{ path: '/', component: { template: '<app-home></app-home>'}},
		{ path: '/zeitrechner', component: { template: '<timecalc></timecalc>'}}
	]
});




var app = new Vue({
	el: '#app',
	router,
	data: {
		minute: 0,
		hour: 0,
		result: 0,
		minDec: 0
	},
	methods: {
		calculate: function(){
			this.result = parseInt(this.hour) + (parseInt(this.minute) / 60)
		}
	}
});

function timeById(){
	stunde = document.querySelector("#hour").value;
	minuten = document.querySelector("#minute").value;
	console.log("Stunde: " + stunde);
	console.log("Minute: " + minuten);
	resultat = parseInt(stunde) + (parseInt(minuten) / 60);
	document.getElementById("ausgabe").innerHTML = resultat;
}