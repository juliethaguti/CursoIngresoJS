//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
//realizar el algoritmo que lea la base por ID de un cuadrado e informar el perímetro del mismo por alert
	var lado;
	var perimetro;
	lado=document.getElementById('lado').value;
	perimetro=4*lado;
	alert("El perímetro del cuadrado es "+perimetro);
/*2-realizar el algoritmo que lea un importe de un producto por prompt y muestre el importe final
sumándole el IVA (21%).*/
	var importe;
	var importeFinal;

	importe=prompt("Ingrese el importe del producto");
	importeFinal=importe*1.21;
	alert("El importe final es "+importeFinal);
/* realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que 
muestre cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.*/
}
	var largo;
	var ancho;
	var metros;
	var perimetro;

	largo=document.getElementById('largo').value;
	ancho=document.getElementById('ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=(2*largo)+(2*ancho);
	metros=3*perimetro;
  	document.getElementById('alambre').value=metros;

  	/*- (IF) realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique,
  	si el primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por  
  	document.write*/
  	var numeroUno;
  	var numeroDos; 
  	var multiplica;
  	var resta;
  	var suma;

  	numeroUno=prompt("Ingrese el primer número");
  	numeroDos=prompt("Ingrese el segundo número");
  	numeroUno=parseInt(numeroUno);
  	numeroDos=parseInt(numeroDos);

  	if(numeroUno==numeroDos){
  		multiplica=numeroUno*numeroDos;

  	}
  	else if(numeroUno>numeroDos){
  		resta=numeroUno-numeroDos;
  	}
  	else{
  		suma=numeroUno+numeroDos;
  	}
  	document.write("La multiplicación da "+multiplica+"<br/>"+"La suma da "+suma+"<br/>"+"La resta da "+resta);
  	/* (SWITCH)realizar el algoritmo que pida un día de la semana por prompt, si es un “Sábado” o 
  	“Domingo” informar por alert “es fin de semana” de lo contrario informar por alert “a trabajar !!!”*/

  	var dia;

  	dia=prompt("Ingrese un día de la semana");

  	switch(dia){
  		case "sabado":
  		case "domingo":
  		alert("Es fin de semana!!");
  		break;
  		default:
  		alert("A trabajar");
  	}
  	/*realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”) de los
  	24 días hábiles del mes por prompt (una por día), e informar cual fue el mayor importe y cuál fue el
  	 menor importe de venta.*/

  	var importeVentas;
  	var Respuesta="si";
  	var contador=0;
  	var maximo;
  	var minimo;

  	Respuesta=prompt("Desea realizar el reporte de ventas del día");
  	while(Respuesta==si){

  		importeVentas=prompt("Ingrese el importe de ventas del día");
  		importeVentas=parseInt(importeVentas);

  		while(importeVentas<0){
  			importeVentas=prompt("Este importeVentas no es válido por favor reingrese el importe");
  			importeVentas=parseInt(importeVentas);
  		}
  		if(contador==1){
  			maximo=importeVentas;
  			minimo=importeVentas;
  		}
  		else{
  			if(importeVentas>maximo){
  				maximo=importeVentas;
  			}
  			if(importeVentas<minimo){
  				minimo=importeVentas;
  			}
  		}
  		contador++;
  	}
  		alert("El importe de ventas mayor es "+maximo);
  		alert("El importe de ventas menor es "+minimo);
  		/* realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) 
  		y el sexo (validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
		a) el promedio de las notas totales.
		b) la nota más baja.
		c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/

		var nota;
		var contador=0;
		var sexo;
		var sumaNota=0;
		var promedioNota;
		var minimo;
		var varones=0;

		while(contador<100){
			nota=prompt("Ingrese la nota");
			nota=parseInt(nota);

			while(nota<0 || nota>10){
				nota=prompt("Ingrese la nota de 0 a 10");
				nota=parseInt(nota);
			}

			sexo=prompt("Ingrese el sexo f o m");

			while(sexo!="f" && sexo!="m"){
				sexo=prompt("Para ingresar el sexo solo m o f");
			}
			//La nota más baja
			if(contador==1){
				minimo=nota;
			}
				else{
					if(nota<minimo){
						minimo=nota;
					}
				}
			//Varones nota>=6
			if(sexo=="m" && nota>=6){
				varones=varones+1;

			}
			sumaNota=sumaNota+nota;
			contador++;
		}

		//Promedio delas notas
		promedioNota=sumaNota/100;

/*8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que 
el usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo*/

var numero;//Inicializar?
var respuesta="si";
var SumaNumeros=0;
var promedio;
var maximo;
var minimo;
var cantidadNumeroPar=0;

respuesta=prompt("Empezar a ingresar números?")
while(respuesta=="si"){
	
	numero=prompt("Ingrese el número");
	numero=parseInt(numero);

	while(numero<0){
		numero=prompt("Ingrese sólo números positivos");
		numero=parseInt(numero);
	}
	//Cantidad de números pares
	if(numero%2==0){
		cantidadNumeroPar=cantidadNumeroPar+1;
	}
	contador++;
	//Suma de los números
	SumaNumeros=SumaNumeros+numero;

	//Máximo y mínimo
	if(contador==1){
		maximo=numero;
		minimo=numero;
	}
	else{
		if(numero>maximo){
			maximo=numero
		}
		if(numero<minimo){
			minimo=numero
		}
	}
}
//Promedio de los números
promedio=SumaNumeros/contador;

document.write("La cantidad de números pares es "+cantidadNumeroPar+"<br/>"+
	"El promedio es "+ promedio+"<br/>"+"La suma de los números es "+SumaNumeros+"<br/>"+
	"El número máximo es "+ maximo+"<br/>"+"El número mínimo es "+minimo);