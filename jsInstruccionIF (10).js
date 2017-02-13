function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var nota;

console.log(nota=Math.floor((Math.random() * 10) + 1));
document.getElementById('FormIngreso').value=nota;

if(nota>8){
	alert("Excelente");
}
	else if(nota>4){
			alert("Aprobó");
			}
			else{
				alert("Vamos, la próxima se puede");
		}	

}//FIN DE LA FUNCIÓN