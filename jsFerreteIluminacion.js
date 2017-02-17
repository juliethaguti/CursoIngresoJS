/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es
 de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del
 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  
“FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en 
informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 
 var cantidadLamp;
 var marca;
 var precioDescuento;
 var importeFinal;
 var impuesto;

 cantidadLamp=document.getElementById('Cantidad').value;
 marca=document.getElementById('Marca').value;
 	
 	if(cantidadLamp>5){
 		precioDescuento=35*cantidadLamp*0.5;
 	}	
 	else{
 		if(cantidadLamp==5){
 			if(marca=="ArgentinaLuz"){
 			precioDescuento=35*cantidadLamp*0.6;
 			}
 			else{
 				precioDescuento=35*cantidadLamp*0.7;
 			}
 		} 
 		if(cantidadLamp==4){
 			if(marca=="ArgentinaLuz" || marca=="FelipeLamparas"){
 			precioDescuento=35*cantidadLamp*0.75;
 			}
 			else{
 			precioDescuento=35*cantidadLamp*0.8;
 			}
 		}
 		if(cantidadLamp==3){
 			if(marca=="ArgentinaLuz"){
 				precioDescuento=35*cantidadLamp*0.85;
 			}
 			else{
				if(marca=="FelipeLamparas"){
 				precioDescuento=35*cantidadLamp*0.9;
 				}
 				else{
 				precioDescuento=35*cantidadLamp*0.95;
 				}
 			}
 		}
 		else{
 			if(cantidadLamp<3){
 			precioDescuento=35*cantidadLamp;
 			}
 		}	
 	}
 	document.getElementById('precioDescuento').value=precioDescuento;

 	if(precioDescuento>120){
 		importeFinal=precioDescuento*1.1;
 		impuesto=importeFinal-precioDescuento;
 		alert("Usted pago "+impuesto+" de IIBB.");
 	}
}
