//numero1 = prompt("Dame el primer número:");
//numero2 = prompt("Dame el segundo número:");
//console.log(numero1);
//console.log(numero2);
//console.log(numero1 + numero2);
//console.log(parseFloat(numero1) + parseFloat(numero2));

var coches = ["mustang","jetta","audi a8"];
console.log(coches[0]);

function recorrerArreglo(arr) {
	for(var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

recorrerArreglo(coches);

var camionetas = ["Tiguan","Explorer","CRX7"];
recorrerArreglo(camionetas);

var coche = {
	nombre: "Jetta",
	modelo: 2018,
	color: "Plata",
	arrancar: function() {
		console.log("Run run...");
	}
}

console.log(coche.nombre);
console.log(coche.modelo);
console.log(coche.color);
console.log(coche.arrancar());

var cochesnuevos = [
	{
		nombre: "Mustang",
		modelo: 2008,
		costo: 120000,
		color: "Rojo"

	},
	{
		nombre: "Jetta",
		modelo: 2018,
		costo: 320000,
		color: "Negro"
	},
	{
		nombre: "Audi R8",
		modelo: 2010,
		costo: 510000,
		color: "Blanco"
	}
];

function recorrerArregloNuevo(arr) {
	for(var i = 0; i < arr.length; i++) {
		console.log(arr[i].nombre + ' ' + arr[i].modelo + ' ' + arr[i].color + ': $' + Intl.NumberFormat("en").format(arr[i].costo));
	}
}

recorrerArregloNuevo(cochesnuevos);

//Función que muestre el coche de mayor precio
function cocheMayorCosto(arr) {
	var index = 0;
	var value = 0;
	for(var i = 0; i < arr.length; i++) {
		if(value < arr[i].costo) {
			value = arr[i].costo;
			index = i;
		}
	}
	console.log("El coche de mayor precio es: " + arr[index].nombre + ' ' + arr[index].modelo + ' ' + arr[index].color + ': $' + Intl.NumberFormat("en").format(arr[index].costo));
}

cocheMayorCosto(cochesnuevos);

//Función que sume el costo total de los coches y lo muestre
function precioTotal(arr) {
	var total = 0;
	for(var i = 0; i < arr.length; i++) {
		total += arr[i].costo;
	}
	return total;
}

precioTotal(cochesnuevos);

//window --> pantalla
//document --> documento html cargado
//navigator --> información del navegador
//DOM - Document Object Model
//Sintaxis javascript puro
//document.getElementById("email-inicio").value = precioTotal(cochesnuevos);
//sintaxis jQuery
$("#email-inicio").val(precioTotal(cochesnuevos));