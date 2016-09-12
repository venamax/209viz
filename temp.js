var done = false;
var t = prompt('Input temperature:');
var convertor = function(val, dim){ 
					if (dim=='F'){ x = (val-32)*5/9;
									y = x.toFixed(1).toString()+"C";
									return 'in Celsius:'+' '+ y;
									}

					else{			x= val*9/5+32;
									y = x.toFixed(1).toString()+'F';
									return 'in Fahrenheit'+' '+y;}
								};


while (done == false){


var dim = t[t.length-1];                   
var val = parseFloat(t.slice(0,t.length-1));


if (dim=='C' || dim =='F'){
	alert(convertor(val,dim));
	done = true; 

}
else{
	var t = prompt('Input temperature again:');
}
};

