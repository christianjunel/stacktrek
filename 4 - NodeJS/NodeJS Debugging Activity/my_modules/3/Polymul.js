exports.Polymul = (listA, listB) => {
    let ansSimplified= '';
    let ans = '';
    const numberProd = [];
    let prodObj = {};
    let exp = 0;
    const A = listA;
    const B = listB;
    let n = (A.length + B.length) - 1

    const multiply = (A, B) => {
        let prod = [];
        for (let i = 0; i < A.length + B.length - 1; i++) prod[i] = 0;
    
        for(let i = 0; i < A.length ; i++){
            for (let j = 0; j < B.length ; j++)
                prod[i + j] += A[i] * B[j];
        }
    
        return prod;
    }

    let prod = multiply(A, B);

    for (let i = n-1; i >= 0 ; i--){
        ansSimplified += prod[(n-1) - i];
        ans += prod[(n-1) - i];
        numberProd.push(prod[(n-1) - i]);
        if (i != 0) {
            if(i === 1){
                ansSimplified +="x";
            } else {
                ansSimplified +="x^"+i;
            }
        }
        if (i > -1) {
            ans +="x^"+i;
        }
        if (i != 0) {
            ansSimplified += " + ";
            ans += " + ";
        }        
    }

    const numberProdR = numberProd.reverse();
    numberProdR.forEach(num => {
        prodObj[exp++] = num;
    })

    return console.log(`${JSON.stringify(prodObj)} which\ncorresponds to ${ans} => ${ansSimplified}`);
}

// let A = [1,2,3];
// let B = [2, 4];

// console.log(Polymul(A, B));


