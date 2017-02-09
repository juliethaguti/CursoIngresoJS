function Mostrar()
{
//tomo la edad  
var edad;

edad=document.getElementById('edad').value;

	if(edad<13){
	alert("Es un niño");
	}
		else if(edad<18){
			alert("Es un adolescente");
			}
				else{		
				alert("Es un adulto");
				}
			
}//FIN DE LA FUNCIÓN