/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Resto;
	var numeroDividendo;
	var numeroDivisor;

	numeroDividendo=document.getElementById('numeroDividendo').value;
	numeroDivisor=document.getElementById('numeroDivisor').value;
	
	numeroDividendo=parseInt(numeroDividendo);
	numeroDivisor=parseInt(numeroDivisor);
	
	Resto=numeroDividendo%numeroDivisor;
	alert("El modulo es "+ Resto);

/*var resultado;
Resultado2%10;
Alert(resultado);
resultado10%2;
alert(resultado);*/
}