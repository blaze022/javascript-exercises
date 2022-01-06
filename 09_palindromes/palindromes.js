const palindromes = function (str) {
    str=str.toLowerCase()
    let s="";
    let res="";
    for(let i=0;i<str.length;i++){
        let x=str.charAt(i);
        if(x.toLowerCase()!=x.toUpperCase()){
            s+=x;
        }
    }
    for(let i=s.length-1;i>=0;i--){
        res+=s.charAt(i)

    }
    if(res===s){
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
