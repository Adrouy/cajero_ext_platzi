var imagenes = [];

imagenes["1"] = "1.png";//cargar img 20 pe
imagenes["5"] = "5.png";//seguir cargando billetes
imagenes["20"] = "20.png";
imagenes["50"] = "50.png";
imagenes["100"] = "100.png";
imagenes["500"] = "500.png";

var coleccion = [];
coleccion.push(new Billete("1", 30));
coleccion.push(new Billete("5", 25));
coleccion.push(new Billete("20", 10));
coleccion.push(new Billete("50", 50));
coleccion.push(new Billete("100", 30));
coleccion.push(new Billete("500", 2));
//seguir cargandolos

for( var billetitos of coleccion)
{
  billetitos.mostrar();
}

for( var x in coleccion[0])
{
  console.log(x);
}
