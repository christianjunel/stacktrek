//Number 5 isn't finished. Will get back to it if I have the chance. 
//But if you guys, need to score it then please go ahead. Thank you

const BetterModule = (firstVal, secondVal, thirdVal) => {
    
    const operation_3 = (firstVal, thirdVal) => {
        let rep = 0;
        for(let i=1; i<=firstVal; i++){
            rep += firstVal;
        }
        rep = operation_2(rep, thirdVal);
        return rep;
    }
    
    const operation_2 = (firstVal, thirdVal) => {
        let ret = 0;
        let copy = firstVal;
        while(firstVal >= thirdVal) {
            firstVal -= thirdVal;
            ret += 1;
        }
        return copy - ret*thirdVal;
    }

    const operation_4 = (secondValue) => {
        return Math.floor(secondValue/2);
    }

    if(secondVal == 0) {
        return 1;
    } else if(secondVal == 1) {
        if (firstVal - thirdVal === firstVal/2 || firstVal === thirdVal){
            return 0;
        } else if (firstVal < thirdVal){
            return firstVal;
        } else if (firstVal > thirdVal){
            return firstVal - thirdVal;
        }
    } else {
        let fourthVal = BetterModule(operation_3(firstVal, thirdVal), operation_4(secondVal), thirdVal);
    	if(secondVal%2 == 1) {
            return operation_2(firstVal*fourthVal, thirdVal);
        } else {
            return fourthVal;
        }
    }
};

exports.BetterModule = BetterModule;
// console.log(BetterModule(3,2,4)) // prints 1
// console.log(BetterModule(4,3,2)) // prints 0
// console.log(BetterModule(9,6,19)) // prints 11