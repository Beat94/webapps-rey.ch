Vue.component('navigation-index', {template: '<nav><router-link to="/">Home</router-link> <router-link to="/zeitrechner">Zeitrechner</router-link></nav>'});

Vue.component('app-home', { template: '<div><h2>Home</h2> <p>Willkommen auf der Homepage der Webapps von rey.ch</p></div>'});
Vue.component('timecalc', { template: '<div><h2>Zeitrechner</h2><form><input type="number" id="hour"> : <input type="number" id="minute"><br><br><button type="button" onclick="timeById()">calculate</button></form><div id="ausgabe"></div></div>'});



const router = new VueRouter({
	routes:[
		{ path: '/', component: { template: '<app-home></app-home>'}},
		{ path: '/zeitrechner', component: { template: '<timecalc></timecalc>'}}
	]
});




var app = new Vue({
	el: '#app',
	router
});

