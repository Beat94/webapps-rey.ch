Vue.component('navigation-index', {template: '<nav><router-link to="/">Home</router-link> | <router-link to="/zeitrechner">Zeitrechner</router-link> | <router-link to="/midnightformula">Mitternachtsformel</router-link></nav>'});

Vue.component('app-home', { template: '<div><h2>Home</h2> <p>Willkommen auf der Homepage der Webapps von rey.ch</p></div>'});
Vue.component('timecalc', { template: '<div><h2>Zeitrechner</h2><form><input type="number" id="hour"> : <input type="number" id="minute"><br><br><button type="button" onclick="timeById()">calculate</button></form><div id="ausgabe"></div></div>'});
Vue.component('midnight', { template: '<div><h2>Mitternachtsformel</h2><form><table><tr><td>A:</td><td><input type="number" id="variableA"></td></tr><tr><td>B:</td><td><input type="number" id="variableB"></td></tr><tr><td>C:</td><td><input type="number" id="variableC"></td></tr></table><br>	<button onclick="midnight()">Calculate</button><br><br>L&oumlsung:<br><div id="output"></div></form></div>'});



const router = new VueRouter({
	routes:[
		{ path: '/', component: { template: '<app-home></app-home>'}},
		{ path: '/zeitrechner', component: { template: '<timecalc></timecalc>'}},
		{ path: '/midnightformula', component: { template: '<midnight></midnight>'}},
	]
});




var app = new Vue({
	el: '#app',
	router
});

