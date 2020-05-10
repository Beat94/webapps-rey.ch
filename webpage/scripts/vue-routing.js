Vue.component('app-home', {	template: '<div><p>home - Hello World</p></div>'});

Vue.component('about', { template: '<div><p>about</p></div>'});


const router = new VueRouter({
	routes:[
		{ path: '/', component: { template: '<app-home></app-home>'}},
		{ path: '/about', component: { template: '<about></about>'}}
	]
});




var app = new Vue({
	el: '#app',
	router
});