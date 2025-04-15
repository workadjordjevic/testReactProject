export function getOperands() {
    return ["+" , "-", "/", "*"];
}

function calcCalculatorTokensFromString(str) {
    const operands = getOperands();
    let tokenArray = [];
    let number = "";
    str.split("").forEach((value,index)=> {
        if (operands.includes(value)) {
            if (number!==""){
                tokenArray.push(number);
            }
            tokenArray.push(value);
            number = "";
        }
        else if (index === str.length - 1 && !operands.includes(value)){
            number += value;
            tokenArray.push(number);
        }
        else {
            number += value;
        }
    })
    return tokenArray;
}

function calcResultFromTokes(arr) {
    let newArr = [...arr];
    const operands = getOperands();

    if (operands.includes(newArr[0])) {
        newArr.shift();
    }
    if (operands.includes(newArr[newArr.length - 1])) {
        newArr.pop();
    }

    let result = +newArr[0];
    for (let i = 1; i < newArr.length-1; i+=2) {
        switch (newArr[i]){
            case "+":
                result += +newArr[i+1];
                break;
            case "-":
                result -= +newArr[i+1];
                break;
            case "/":
                result = +((result/+newArr[i+1]).toFixed(2));
                break;
            case "*":
                result *= +newArr[i+1];
                break;
        }
    }
    return result.toString();
}

export function calcCalculatorResult(str){
    const tokens = calcCalculatorTokensFromString(str);
    return calcResultFromTokes(tokens);
}
