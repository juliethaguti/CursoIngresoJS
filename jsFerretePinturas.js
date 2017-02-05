/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var temperatura;
var Centigrados;

temperatura=document.getElementById('Temperatura').value;

Centigrados=(temperatura-32)*5/9;
alert("La temperatura es "+ Centigrados);

}

function CentigradosFahrenheit () 
{
	var Fahrenheit;

	temperatura=document.getElementById('Temperatura').value;
	temperatura=parseInt(temperatura);

	Fahrenheit=9/5*temperatura+32;	
	alert("La temperatura es "+Fahrenheit);
}	
