function colorHash(inputString){
	inputString = inputString.split("");
	var r = 0;
	var g = 0;
	var b = 0;
	
	for(var i in inputString){
		r += (Math.pow(inputString[i].charCodeAt(0), 2));
		g += (Math.sqrt(inputString[i].charCodeAt(0)) * 2142);
		b += (Math.sin(inputString[i].charCodeAt(0)) * 1337);
	}
	r = Math.abs(~~(r % 255));
	g = Math.abs(~~(g % 255));
	b = Math.abs(~~(b % 255));

	var rgb = "rgb("+r+", "+g+", "+b+")";

	var hex = "#";

	hex += ("00" + r.toString(16)).substr(-2,2).toUpperCase();
	hex += ("00" + g.toString(16)).substr(-2,2).toUpperCase();
	hex += ("00" + b.toString(16)).substr(-2,2).toUpperCase();

	return {
		 r: r
		,g: g
		,b: b
		,rgb: rgb
		,hex: hex
	};
}
