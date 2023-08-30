const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

// Establecer el tamaño del canvas
canvas.width = 500;
canvas.height = 500;

ctx.beginPath();
ctx.arc(150, canvas.height / 2 - 20, 65, 0, 2 * Math.PI);
ctx.fillStyle = '#EA5201';

ctx.closePath();
ctx.fill();

var y = 0;
const ancho = canvas.width;

dibujarTriangulo(
	{ x: 0, y: 0 },
	{ x: ancho, y: 0 },
	{ x: ancho, y: 75 },
	'#CF4900'
);
dibujarTriangulo(
	{ x: 0, y: 0 },
	{ x: ancho, y: 75 },
	{ x: 0, y: 75 },
	'#E95301'
);
dibujarTriangulo(
	{ x: 0, y: 75 },
	{ x: ancho, y: 75 },
	{ x: 0, y: 150 },
	'#F35F01'
);
dibujarTriangulo(
	{ x: 0, y: 150 },
	{ x: ancho, y: 75 },
	{ x: ancho, y: 150 },
	'#FE8103'
);
dibujarTriangulo(
	{ x: 0, y: 150 },
	{ x: ancho, y: 150 },
	{ x: 0, y: 225 },
	'rgb(255, 181, 34,0.7)'
);
dibujarTriangulo(
	{ x: 0, y: 225 },
	{ x: ancho, y: 150 },
	{ x: ancho, y: 225 },
	'rgb(254, 232, 58,.7)'
);
dibujarTriangulo(
	{ x: 0, y: 225 },
	{ x: ancho, y: 225 },
	{ x: ancho, y: 300 },
	'#37C3E4'
);
dibujarTriangulo(
	{ x: 0, y: 225 },
	{ x: ancho, y: 300 },
	{ x: 0, y: 300 },
	'#06AED3'
);
dibujarTriangulo(
	{ x: 0, y: 300 },
	{ x: ancho, y: 300 },
	{ x: ancho, y: 375 },
	'#00869A'
);
dibujarTriangulo(
	{ x: 0, y: 300 },
	{ x: ancho, y: 375 },
	{ x: 0, y: 375 },
	'#01737E'
);
dibujarTriangulo(
	{ x: 0, y: 375 },
	{ x: ancho, y: 375 },
	{ x: 0, y: 450 },
	'#00585A'
);
dibujarTriangulo(
	{ x: 0, y: 450 },
	{ x: ancho, y: 375 },
	{ x: ancho, y: 450 },
	'#004A49'
);

function dibujarTriangulo(coordenada1, coordenada2, coordenada3, color) {
	ctx.beginPath();

	ctx.moveTo(coordenada1.x, coordenada1.y); // pocision inicial del triangulo
	ctx.lineTo(coordenada2.x, coordenada2.y); // pocision final del triangulo
	ctx.lineTo(coordenada3.x, coordenada3.y); // altura del triangulo

	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
}
