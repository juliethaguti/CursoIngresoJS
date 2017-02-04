/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
 var precioDos;
 var precioTres;
 var Sumar;

function Sumar () 
{
 
 precioUno=document.getElementById('PrecioUno').value;
 precioDos=document.getElementById('PrecioDos').value;
 precioTres=document.getElementById('PrecioTres').value;
 
 precioUno=parseInt(precioUno);
 precioDos=parseInt(precioDos);
 precioTres=parseInt(precioTres);
 
 Sumar=precioUno+precioDos+precioTres;
  
 alert("La suma de los precios es "+ Sumar);
}

function Promedio () 
{
var promedio;
 precioUno=document.getElementById('PrecioUno').value;
 precioDos=document.getElementById('PrecioDos').value;
 precioTres=document.getElementById('PrecioTres').value;

precioUno=parseInt(precioUno);
 precioDos=parseInt(precioDos);
 precioTres=parseInt(precioTres);

 promedio=(precioUno+precioDos+precioTres)/3;
 alert("El promedio de los precios es "+promedio);
}
function PrecioFinal () 
{
 precioUno=document.getElementById('PrecioUno').value;
 precioDos=document.getElementById('PrecioDos').value;
 precioTres=document.getElementById('PrecioTres').value;

precioUno=parseInt(precioUno);
 precioDos=parseInt(precioDos);
 precioTres=parseInt(precioTres);
var PrecioFinal;
PrecioFinal=(precioUno+precioDos+precioTres)*1.21;
alert("El precio final es "+PrecioFinal);

}