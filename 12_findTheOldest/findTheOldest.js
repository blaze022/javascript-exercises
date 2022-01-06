const findTheOldest = function(arr) {
    let res={}
    let ageMax=0;
    for(let i=0;i<arr.length;i++){
        let by=arr[i].yearOfBirth
        let dy=arr[i].yearOfDeath
        if(dy===undefined){
            dy=new Date().getFullYear();
        }
        if((dy-by)>ageMax){
            ageMax=(dy-by)
            res=arr[i]
        }

    }
    return res

};

// Do not edit below this line
module.exports = findTheOldest;
