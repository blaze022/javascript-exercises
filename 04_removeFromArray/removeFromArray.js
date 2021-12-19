const removeFromArray = function() {
	let ar=[]
	let arr=arguments[0]
	let flg=0
	
	for(let i=0;i<arr.length;i++){
		
		for(let j=1;j<arguments.length;j++){
			
			if(arguments[j]===arr[i]){
				flg=1
			}

		}
		if(flg==0){
			ar.push(arr[i])

		}	
	}

	return ar
	
};


// Do not edit below this line
module.exports = removeFromArray;
