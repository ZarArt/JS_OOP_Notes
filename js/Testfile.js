var myObj = (function() {
	return {
		func: function(a, b) {
			console.log(this);
			return a + b;
		}
	}
})();

console.log(myObj.func(1, 4));