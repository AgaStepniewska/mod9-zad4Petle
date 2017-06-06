function drawTree(x) {
	//tworzy rzędy:
	debugger;
	for (var i=0; i<x; i++) {
		var gwiazdka = '*';
		//ilosc w rzedzie
		for (var j=0; j<i; j++) {
			gwiazdka = gwiazdka + '*'

		}
		console.log(gwiazdka);
	}
}
drawTree(5);