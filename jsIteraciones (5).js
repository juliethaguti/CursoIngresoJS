function Mostrar()
{

	var sexo = prompt("ingrese f ó m.");


	while(sexo!="f" && sexo!="m"){

	sexo=prompt("Reingrese f ó m.");

	}
	document.getElementById('Sexo').value=sexo;

	alert("Su sexo es "+sexo);

}//FIN DE LA FUNCIÓN