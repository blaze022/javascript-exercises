const fibonacci = function(num){
    let pprev=1;
    let prev=1;
    let res=0

    if(num==1){
        return 1;
    }
    else if(num==2){
        return 1;
    }
    else if(num>2){
        let x=num-2
        while(x>0){
            x--;
            res=(pprev+prev);
            pprev=prev
            prev=res
        }
        return res
    }
    else{
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
