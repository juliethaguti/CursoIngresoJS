/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var cantidadCompra;

largo=document.getElementById('Largo').value;
ancho=document.getElementById('Ancho').value;

largo=parseInt(largo);
ancho=parseInt(ancho);

cantidadCompra=((largo*2)+(ancho*2))*3;
alert("La cantidad de hilo para alambrar es "+cantidadCompra);
}
function Circulo () 
{
var radio;
var cantidadComprao;

radio=document.getElementById('Radio').value;

cantidadComprao=6*3.14*radio;
alert("La cantidad de hilo para la área circular es "+cantidadComprao)	
}
function Materiales () 
{
	var area;
	var bolsascemento;
	var bolsascal;

largo=document.getElementById('Largo').value;
ancho=document.getElementById('Ancho').value;

area=largo*ancho;
bolsascemento=area*2;
bolsascal=area*3
alert("Se necesitan "+bolsascemento+" bolsas de cemento y "+bolsascal+"bolsas de cal")
}