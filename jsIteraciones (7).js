function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	respuesta=prompt("Sumar?");

	while(respuesta=="si")
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		contador++;
		acumulador=acumulador+numero;
		respuesta=prompt("Seguir sumando?");


	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN