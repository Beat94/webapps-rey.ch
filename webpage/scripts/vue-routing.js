const app = Vue.createApp({})

app.component('foot', { template: '<div class="d-flex justify-content-center"><a href="https://github.com/Beat94/webapps-rey.ch"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a></div>'});
app.component('navigation-index', {template: '<nav class="navbar navbar-expand-sm navbar-dark bg-dark"><div class="container-fluid"><router-link class="navbar-brand" to="/">Apps - Home</router-link><!-- Für mobile Ansicht --><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-lable="Toggle navigation"><span class="navbar-toggler-icon"></span></button><!-- normale Ansicht --><div id="mainMenu" class="collapse navbar-collapse"><ul class="navbar-nav me-auto mb-2 mb-sm-0"><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Zeitrechner</a><ul class="dropdown-menu" aria-labelledby="navbarDropdown"><li><router-link class="dropdown-item" to="/zeitrechner">Zeitrechner</router-link></li><li><router-link class="dropdown-item" to="/zeitrechner2">Zeitrechner (Startzeit / Endzeit)</router-link></li></ul></li><li class="nav-item"><router-link class="nav-link" to="/midnightformula">Mitternachtsformel</router-link></li><li class="nav-item"><router-link class="nav-link" to="/uhrzeit">Uhrzeit</router-link></li></ul></div></div></nav>'});

app.component('app-home', { template: '<div><h2>Home</h2><p>Willkommen auf der Homepage der Webapps von rey.ch</p></div>'});
app.component('timecalc', { template: '<div><h2>Zeitrechner</h2><form><input type="text" id="inputStr" style="width:80px;" class="form-control" placeholder="hh:mm"><br><button id="btnTimeCalc" class="btn btn-dark" onclick="timeByIdStr()">Calculate</button></form><div id="ausgabe"></div></div>'});
app.component('timecalc2', { template: '<div><h2>Zeitrechner (Startzeit / Endzeit)</h2><form><table><tr><td>Startzeit:</td><td><input type="text" class="form-control" id="Start" style="width:80px;" placeholder="hh:mm"></td></tr><tr><td>Endzeit:</td><td><input type="text" id="End" style="width:80px;" placeholder="hh:mm" class="form-control"></td></tr></table><br><button id="btnTimeCalc" class="btn btn-dark" onclick="timeByIdStartEnd()">Add Time</button> <button id="btnTimeRes" class="btn btn-dark" onclick="timeReset()">Reset Time</button></form><br><div id="ausgabe"></div></div>'});
app.component('midnight', { template: '<div><h2>Mitternachtsformel</h2><form><table><tr><td>A:</td><td><input type="text" id="variableA" class="form-control"></td></tr><tr><td>B:</td><td><input type="text" id="variableB" class="form-control"></td></tr><tr><td>C:</td><td><input type="text" id="variableC" class="form-control"></td></tr></table><br>	<button class="btn btn-dark" id="btnCalc" onclick="midnight()">Calculate</button><br><br>L&oumlsung:<br><div id="output"></div></form></div>'});
app.component('clock', { template: '<div><h2>Uhrzeit</h2><div id="rtzeitausg"></div></div>'}, setInterval(rtTime, 1000));


const routes = [
	{ path: '/', component: { template: '<app-home></app-home>'}},
	{ path: '/zeitrechner', component: { template: '<timecalc></timecalc>'}},
	{ path: '/zeitrechner2', component: { template: '<timecalc2></timecalc2>'}},
	{ path: '/midnightformula', component: { template: '<midnight></midnight>'}},
	{ path: '/uhrzeit', component: { template: '<clock></clock>'}}
]


const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
});



app.use(router)

app.mount('#app')


/*
var app = new Vue({
	el: '#app',
	router
});
*/
