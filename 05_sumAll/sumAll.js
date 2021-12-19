const sumAll = function(x,y) {
	if(typeof(x)!=typeof(y)){
		return "ERROR"
	}
	else if(x<0 || y<0){
		return "ERROR"
	}
	let sum=0
	if(x<y){
		for(let i=x;i<=y;i++){
			sum+=i
		}
	}
	else{
		for(let i=x;i>=y;i--){
			sum+=i
		}
	}	
	return sum
};

// Do not edit below this line
module.exports = sumAll;
