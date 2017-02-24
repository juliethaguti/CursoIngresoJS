var contador=0;
var contador1=0;
var contador2=0;
var contador3=0;
var contador4=0;
var contador5=0;
var contador6=0;
var contador7=0;
var contador8=0;
var contador9=0;
var contador10=0;
var random;

function Mostrar()
{

for(contador=0;contador<100;contador++){
	random=Math.floor((Math.random() * 10) + 1);
	switch(random){
		case 1:
		contador1++;
		break;
		case 2:
		contador2++;
		break;
		case 3:
		contador3++;
		break;
		case 4:
		contador4++;
		break;
		case 5:
		contador5++;
		break;
		case 6:
		contador6++;
		break;
		case 7:
		contador7++;
		if(contador7==7){
		continue;
		}
		break;
		case 8:
		contador8++;
		break;
		case 9:
		contador9++;
		break;
		case 10:
		contador10++;
		break;
	}
}
console.log("La cantidad de uno: "+contador1/contador*100+"%");
console.log("La cantidad de dos: "+contador2/contador*100+"%");
console.log("La cantidad de tres: "+contador3/contador*100+"%");
console.log("La cantidad de cuatros: "+contador4/contador*100+"%");
console.log("La cantidad de cincos: "+contador5/contador*100+"%");
console.log("La cantidad de seis: "+contador6/contador*100+"%");
console.log("La cantidad de sietes: "+contador7/contador*100+"%");
console.log("La cantidad de ochos: "+contador8/contador*100+"%");
console.log("La cantidad de nueves: "+contador9/contador*100+"%");
console.log("La cantidad de diez: "+contador10/contador*100+"%");
















}