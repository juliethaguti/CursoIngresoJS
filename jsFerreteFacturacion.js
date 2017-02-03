/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
var precioDos;
var precioTres;

function Sumar (PrecioUno,precioDos,PrecioTres) 
{
	return precioUno+precioDos+precioTres;
precioUno=document.getElementById('PrecioUno').value;
precioDos=document.getElementById('PrecioDos').value;
precioTres=document.getElementById('PrecioTres').value;

precioUno=parseInt(precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);
var x=Sumar(PrecioUno,precioDos,PrecioTres);
 
//alert("La suma de los precios es "+ Sumar);	
}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}