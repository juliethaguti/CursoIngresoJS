/* mostar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 4-Cantidad de negativos. 
5-Cantidad de ceros. 6-Cantidad de números pares. 7-Promedio de positivos. 8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/

function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var respuesta="si";
	var sumaNumeroNegativo=0;
	var sumsPositivo=0;
	var cantidadpositivos=0;
	var cantidadnegativos=0;
	var cantidadCeros=0;
	var numeroPar=0;
	var DiferenciaPosyNeg;
	var PromedioPositivo;
	var PromedioNegativo;

	while(respuesta!="no")
	{
		numero=prompt("Ingrese el numero entero");
		numero=parseInt(numero);

		//Suma y conteo de los números negativos.
		if(numero<0){
			sumaNumeroNegativo=sumaNumeroNegativo+numero;
			cantidadnegativos=cantidadnegativos+1;
		}
		//Suma y conteo de los números positivos.
		if(numero>0){
			sumsPositivo=sumsPositivo+numero;
			cantidadpositivos=cantidadpositivos+1;
		}
		//Cantidad de ceros
		if(!(numero<0 || numero>0)){
			cantidadCeros=cantidadCeros+1;
		}
		//Cantidad números pares
		if(0==numero%2){
			numeroPar=numeroPar+1;
		}
		//Diferencia entre positivos y negativos (positvos-negativos)
		DiferenciaPosyNeg=sumsPositivo-(sumaNumeroNegativo);

		//Promedio de positivos
		PromedioPositivo=sumsPositivo/cantidadpositivos;

		//Promedio de negativas
		PromedioNegativo=sumaNumeroNegativo/cantidadnegativos;

		respuesta=prompt("Para salir teclee no");
	
	}
	document.write("La suma de números negativos es "+sumaNumeroNegativo+"<br/>"+
		"La cantidad de números negativos es "+cantidadnegativos+"<br/>"+
		"La suma de los números positivos es "+sumsPositivo+"<br/>"+
		"La cantidad de números positivos es "+cantidadpositivos+"<br/>"+
		"La cantidad de ceros es "+cantidadCeros+"<br/>"+
		"La cantidad de números pares es "+numeroPar+"<br/>"+
		"Diferencia entre positivos y negativos es "+DiferenciaPosyNeg+"<br/>"+
		"El promedio de números positivos es "+PromedioPositivo+"<br/>"+
		"El promedio de números negativos es "+PromedioNegativo);



}//FIN DE LA FUNCIÓN