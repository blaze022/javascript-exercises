const add = function(a=0,b=0) {
  return(a+b)	
};

const subtract = function(a,b) {
  return(a-b)
};

const sum = function(arr) {
  if(arr===null){
    return 0
  }
  else{
    const res=arr.reduce((total,item)=>{
      return total+item;
    },0);
    return res;
  }	
};

const multiply = function(arr) {
  if(arr===null){
    return 0
  }
  else{
    const res=arr.reduce((total,item)=>{
      return total*item;
    },1);
    return res;
  }
};

const power = function(a,b) {
  return(Math.pow(a,b))
	
};

const factorial = function(n) {
  if(n===0){
    return 1
  }
  else{
    let res=1
    for(let i=n;i>=1;i--){
      res=res*i;
    }
    return res
  }	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
