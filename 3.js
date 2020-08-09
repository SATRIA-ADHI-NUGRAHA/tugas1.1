var printSegitiga = 5;

for (var baris = printSegitiga; baris >= 1; baris--) {
	var a = '';

	for (var kolom = 1; kolom <= baris; kolom++) {
		a += kolom;
	}
	console.log(a);
}