function Mostrar()
{

	var contador=0;
	// declarar variables
	var edad;
	var respuesta='si';
	var maximo;
	var minimo;
	var nombre;
	var nombreMayor;
	var sexo;
	var nota;
	var notaMinima;
	var sexoNotaMinima;
	var aprobados=0;
	var mujeresDesaprobadas;
	var hombresDesaprobados;
	var sumaNotas;
	var promedioNotas;
	var sumaEdadMujeres;
	var promedioEdadMujeres;
	var mujerAprobadanotapar;
	var mujerMenorEdad;
	var bandera="nadie";
	var nombreDiez;
	var edadDiez;
	var sexoDiez;

	while(respuesta!='no')
	{
		nombre=prompt("Por favor ingrese el nombre");
	 	edad=prompt("Ingrese edad");
	 	edad=parseInt(edad);

	 	while(edad<0 || edad>100){

	 		edad=prompt("ERROR, Ingrese edad");
	 		edad=parseInt(edad);

	 	}
	 	sexo= prompt("Ingrese el sexo");

	 	while(sexo!="femenino" && sexo!="masculino"){
	 		sexo=prompt("ERROR, ingrese el sexo");
	 	}
	 	nota=prompt("Ingrese la nota");
		nota=parseInt(nota);

		while(nota<0 && nota>10){
			nota=prompt("ERROR,Ingrese la nota");
			nota=parseInt(nota);
		}
		if(nota==10 && bandera=="nadie"){
			nombreDiez=nombre;
			edadDiez=edad;
			sexoDiez=sexo;
			bandera="alguien";
		}
		//Cantidad de mujeres que aprobaron con nota par y son menores de edad;
		if(sexo=="femenino" && nota>3){
			if(nota%2=0){
				if(edad<18){
			mujerAprobadanotapar=mujerAprobadanotapar+1;
				}
			}
		}

		//Promedio de la edad de las mujeres
		if(sexo=="femenino"){
		sumaEdadMujeres=sumaEdadMujeres+edad;
		}
		//Promedio de todas las notas
		sumaNotas=sumaNotas+nota;

		//Cantidad de personas aprobadas.
		if(nota>=4){
			aprobados=aprobados+1;
		}
		//Cuantas mujeres y hombres desaprobaron
		if(nota<4 && sexo=="femenino"){
			mujeresDesaprobadas=mujeresDesaprobadas+1;
		}
		if(nota<4 && sexo=="masculino"){
			hombresDesaprobados=hombresDesaprobados+1;
		}

		if(contador==1){
			maximo=edad;
			minimo=edad;
			nombreMayor=nombre;
		}
			else {
				//Nombre de la persona más vieja;
				if (edad>maximo){
					maximo=edad;
					nombreMayor=nombre;
				}
				if (edad<minimo){
					minimo=edad;
				}
			}
		//SExo de la nota minima
		if(contador==1){
			notaMinima=nota;
			sexoNotaMinima=sexo;
		}
			else{
				if(nota<notaMinima){
					sexoNotaMinima=sexo;
				}
			}

		
		respuesta=prompt("Para salir teclee no");
		contador++;

	}//while(respuesta!='no')
	promedioEdadMujeres=sumaEdadMujeres/contador;
	promedioNotas=sumaNotas/contador;

//Datos que entran por prompt o document...Id siempre entran como string

}//FIN DE LA FUNCIÓN