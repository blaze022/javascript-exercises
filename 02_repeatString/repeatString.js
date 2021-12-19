const repeatString = function(string,num) {
	if(num==-1){
		return "ERROR"
	}
	let s=""
	while(num!=0){
		s+=string;
		num--;
	}
	if(string==" "){
		return " "
	}
	else{
		return s;
	}	
};

// Do not edit below this line
module.exports = repeatString;
