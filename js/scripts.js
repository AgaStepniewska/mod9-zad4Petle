function drawTree(x) {
	for (var i=0; i<x; i++) {
		var gwiazdka = '*';
		for (var j=0; j<i; j++) {
			gwiazdka = gwiazdka + '*';
		}
		console.log(gwiazdka);
	}
}
drawTree(5);