//Al presionar el botón pedir números hasta que el usuario quiera, 
//sumar los que son positivos y multiplicar los negativos.
function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	respuesta=prompt("Quiere agregar más números?");

	while(respuesta=="si"){
		numero=prompt("Ingrese el número");
		numero=parseInt(numero);
		contador++;
		if(numero>0){
			positivo=positivo+numero;
		}
		else {
				negativo=negativo*numero;
		}
		respuesta=prompt("Quiere seguir agregando numeros?")
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN