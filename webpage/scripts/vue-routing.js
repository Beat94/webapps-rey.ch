Vue.component('navigation-index', {template: '<nav class="navbar navbar-expand-sm navbar-dark bg-dark"><div class="container-fluid"><router-link class="navbar-brand" to="/">Apps - Home</router-link><!-- Für mobile Ansicht --><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-lable="Toggle navigation"><span class="navbar-toggler-icon"></span></button><!-- normale Ansicht --><div id="mainMenu" class="collapse navbar-collapse"><ul class="navbar-nav me-auto mb-2 mb-sm-0"><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Zeitrechner</a><ul class="dropdown-menu" aria-labelledby="navbarDropdown"><li><router-link class="dropdown-item" to="/zeitrechner">Zeitrechner</router-link></li><li><router-link class="dropdown-item" to="/zeitrechner2">Zeitrechner (Startzeit / Endzeit)</router-link></li></ul></li><li class="nav-item"><router-link class="nav-link" to="/midnightformula">Mitternachtsformel</router-link></li><li class="nav-item"><router-link class="nav-link" to="/uhrzeit">Uhrzeit</router-link></li></ul></div></div></nav>'});

Vue.component('app-home', { template: '<div><h2>Home</h2><p>Willkommen auf der Homepage der Webapps von rey.ch</p></div>'});
Vue.component('timecalc', { template: '<div><h2>Zeitrechner</h2><form><input type="text" id="inputStr" style="width:80px;" class="form-control" placeholder="hh:mm"><br><button id="btnTimeCalc" class="btn btn-dark" onclick="timeByIdStr()">Calculate</button></form><div id="ausgabe"></div></div>'});
Vue.component('timecalc2', { template: '<div><h2>Zeitrechner (Startzeit / Endzeit)</h2><form><table><tr><td>Startzeit:</td><td><input type="text" id="Start" style="width:80px;" placeholder="hh:mm"></td></tr><tr><td>Endzeit:</td><td><input type="text" id="End" style="width:80px;" placeholder="hh:mm"></td></tr></table><button id="btnTimeCalc" class="btn btn-dark" onclick="timeByIdStartEnd()">Add Time</button> <button id="btnTimeRes" class="btn btn-dark" onclick="timeReset()">Reset Time</button></form><div id="ausgabe"></div></div>'});
Vue.component('midnight', { template: '<div><h2>Mitternachtsformel</h2><form><table><tr><td>A:</td><td><input type="text" id="variableA"></td></tr><tr><td>B:</td><td><input type="text" id="variableB"></td></tr><tr><td>C:</td><td><input type="text" id="variableC"></td></tr></table><br>	<button class="btn btn-dark" id="btnCalc" onclick="midnight()">Calculate</button><br><br>L&oumlsung:<br><div id="output"></div></form></div>'});
Vue.component('clock', { template: '<div><h2>Uhrzeit</h2><div id="rtzeitausg"></div></div>'}, rtTime());



const router = new VueRouter({
	routes:[
		{ path: '/', component: { template: '<app-home></app-home>'}},
		{ path: '/zeitrechner', component: { template: '<timecalc></timecalc>'}},
		{ path: '/zeitrechner2', component: { template: '<timecalc2></timecalc2>'}},
		{ path: '/midnightformula', component: { template: '<midnight></midnight>'}},
		{ path: '/uhrzeit', component: { template: '<clock></clock>'}}
	]
});




var app = new Vue({
	el: '#app',
	router
});

