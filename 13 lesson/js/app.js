function App() {};

App.prototype = Object.create(Helper.prototype);

var app = new App();
var divMain = document.getElementById("main");
divMain.innerHTML = app.CompareDate("ukr", "2016-04-09 11:22:33");