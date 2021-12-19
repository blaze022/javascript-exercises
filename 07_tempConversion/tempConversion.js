const ftoc = function(ft) {
	if(ft==32){
		return 0
	}
	else{
		let x=0
		x=((ft-32)*5)/9
		x=Math.round(x * 10) / 10
		return x
	}
};

const ctof = function(ct) {
	if(ct==0){
		return 32
	}
	else{
		let x=0
		x=((ct*9)/5)+32
		x=Math.round(x * 10) / 10
		return x
	}
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
