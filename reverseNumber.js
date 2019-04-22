
function reverseNumber(num){
    if(num > 0){
        number = num.toString();
        numArr = number.split('');
        reversedArr  = numArr.reverse();
        newNum  = Number(reversedArr.join(''));
        return newNum
    } else if(num < 0){
        number = (num * -1).toString();
        numArr = number.split('');
        reversedArr  = numArr.reverse();
        newNum  = Number(reversedArr.join(''));
        reversedNum = newNum * (-1);
        return  reversedNum;
    }
}