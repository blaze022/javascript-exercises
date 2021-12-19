const reverseString = function(str) {
	let s=""
	for(let i=str.length;i>=0;i--){
		s+=str.charAt(i)
	}
	return s


};

// Do not edit below this line
module.exports = reverseString;
