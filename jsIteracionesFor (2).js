var respuesta;
var contadorSi=0;
var contadorNo=0;
var TipoMascota;
var edad;
var maximo;
var contador=0;
var nombrePrimerGatomayor a 5;
var nombrePersona;
var sexo;
var edadGato;

function Mostrar()
{

for(;contador<10;contador++){
	nombrePersona=prompt("Ingrese su nombre");
	sexo=prompt("Ingrese su sexo");
	while(sexo!="femenino" && sexo!="masculino"){
		sexo=prompt("Reingrese su sexo");
	}
	edad=prompt("Ingrese su edad");
	respuesta=prompt("Tiene mascota?");
	while(respuesta!="si" && respuesta!="no"){
		respuesta=prompt("Responda si o noTiene mascota?");
	}
	if(respuesta=="si"){
		contadorSi++;
		TipoMascota=prompt("Es perro o gato?");
	while(TipoMascota!="perro" && TipoMascota!="gato"){
		TipoMascota=prompt("Responda si es perro o gato");
		}
		if(TipoMascota==gato){
			edadGato=prompt("Ingrese la edad del gato");
			while(edadGato<0 || edadGato>16){
				edadGato=prompt("Puede se entre 1 y 15");
			}
		}
	}
	else{
		contadorNo++;
		
		if(contador==1){
			maximo=edad;
		}
		else{
			if(edad>maximo)
				maximo=edad
		}

	}
	
	}

}