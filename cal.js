
function calOS(){
    const tenTwoNum = document.getElementById("ten").value;
    const twoTenNum = document.getElementById("two").value;
    const twoSixteenNum = document.getElementById("twosixteen").value;
    const sixteenTwoNum = document.getElementById("sixteentwo").value;
    const calPlusNum = document.getElementById("Plus").value;
    const calMultiNum = document.getElementById("Multi").value;
    const calDivideNum = document.getElementById("Divide").value;
    const calMinusNum = document.getElementById("Minus").value;
    if(tenTwoNum) insertWebTenTwo(tenTwo(tenTwoNum));
    if(twoTenNum) insertWebTwoTen(twoTen(twoTenNum));
    if(twoSixteenNum) insertWebTwoSixTeen(twoSixteen(twoSixteenNum));
    if(sixteenTwoNum) insertWebSixTeenTwo(sixteenTwo(sixteenTwoNum));
    if(calPlusNum) bigCalPlus(calPlus(calPlusNum));
    if(calMultiNum) bigCalMulti(calMulti(calMultiNum));
    if(calDivideNum) bigCalDivide(calDivide(calDivideNum));
    if(calMinusNum) bigCalMinus(calMinus(calMinusNum));
}


function tenTwo(tenTwoNum){
    let number = tenTwoNum;
    let answer =[], check = true;
    while(check){
        if(number === 1) check = false;
        answer.unshift(number%2);
        number = Math.floor(number/2);
    }
    return answer.reduce((e, acc)=>{return String(e)+acc}, "");
}

function twoTen(twoTenNum){
    //num 은 처음부터 문자열이어야 한다. 그렇지 않으면 2^53 보다 큰 수는 정수로 인식하지 못한다.
    let sum=0
    const arr = [...twoTenNum];
    const f = arr.length-1;
    for(let i= f; i>=0; i--){
        sum += (2**(f-i))*(parseInt(arr[i]))
    }
    return sum
}

function twoSixteen(twoSixteenNum){
    const arr = [...twoSixteenNum];
    let sum=0, i=arr.length-1,j=0,stringSixteen='';
    while(i>=0){
        if(j === 4) {j=0;}
        sum += (2**j)*parseInt(arr[i])
        if(j === 3 && sum > 9) {
            sum = data[sum];
        }
        if(j === 3){stringSixteen = String(sum) + stringSixteen; sum=0;}
        else if(arr[i-1]===undefined){stringSixteen = String(sum) + stringSixteen;}
        i--;
        j++;
    }
    return stringSixteen;
}

function sixteenTwo(sixteenTwoNum){
    const arr = [...sixteenTwoNum];
    const answer = [];
    let i=arr.length-1, j=0, number='';
    while(i>=0){
        number = arr[i];
        if(number==="A"||number==="B"||number==="C"||number==="D"||number==="E"||number==="F") 
        {number = Object.keys(data).find(key => data[key] === number)};
        number = parseInt(number);
        while(j<4){
            if(i===0 && number ===0) break;
            answer.unshift(number%2);
            number = Math.floor(number/2);
            j++;
        }
        j=0;
        i--;
    }
    return answer.reduce((e,acc)=>{return String(e)+acc},"");
}

function calPlus(calPlusNum){
    const arr = calPlusNum.split("+");
    let sum = [];
    for(let i=0; i<arr.length; i++){
        arr[i] = reverseAndSplit(arr[i]);
    }
    let i=0, j=0,m=0;
    while(j<arr.length){
        if(i>=arr[j].length){
            i=0;
            j++;
        }
        if(j === arr.length) break;
        if(sum[i] === undefined){
            sum[i] = 0;
        }
        if(arr[j][i] === undefined){
            arr[j][i] = 0;
        }
        sum[i] = sum[i] + (arr[j][i]);
        if(sum[i]>9){
            sum[i] = sum[i]-10;
            if(sum[i+1] === undefined)sum[i+1]=0;
            sum[i+1] += 1;
        }
        while(m<sum.length){
            if(sum[m] > 9){
                sum[m] = sum[m]-10;
                if(sum[m+1] === undefined){sum[m+1]=0;}
                sum[m+1] +=1;
            }
            m++;
        }
        m=0;
        i++;
    }
    return reverseAndConcat(sum);
}
function calMulti(calMultiNum){
    //더하기 함수를 여러번 호출 하면 호출 스택이 너무 많이 쌓인다.
    //배열로 나눈다. 각각을 곱한다. 즉 거듭 하여 더한다. 마지막에 0을 자릿수에 알맞게 덧붙여서 더한다.
    let arr = calMultiNum.split("*");
    arr = arr.sort(function(a,b){return a.length-b.length});
    let last = arr.pop();
    let beforeLast = arr.pop();
    let newArr=[];
    while(beforeLast){
        newArr=reverseAndSplit(last);
        for(let i=0; i<newArr.length; i++){
            if(newArr[i] === 0) continue;
            newArr[i] = Array(newArr[i]).fill(beforeLast).join("+");
            newArr[i] = calPlus(newArr[i]);
            newArr[i] = newArr[i]+"0".repeat(i);
        }
        arr.push(calPlus(newArr.join("+")));
        last = arr.pop();
        beforeLast = arr.pop();
    }
    return last;
}
function calDivide(calDivideNum){
    //소수점 계산이 필요함. 어떻게 구현해야 할까?
    let arr = calDivideNum.split("/");
    let last = parseInt(arr.pop());
    let beforeLast = parseInt(arr.pop());
    while(beforeLast){
        arr.push(beforeLast/last);
        last = parseInt(arr.pop());
        beforeLast = parseInt(arr.pop());
    }
    return last;
}
function calMinus(calMinusNum){
    if(calMinusNum[0] === "-"){
        let x = calMinusNum.replace("-","").replace(/\-/g, "+");
        let y = calPlus(x);
        return "-"+y;
    }
    else{
        let arr = calMinusNum.split("-");
        let temp1 = arr.shift();
        let temp2 = calPlus(arr.join("+"));
        let temp3, check =false;
        if(temp1.length < temp2.length){
            temp3 = temp1;
            temp1 = temp2;
            temp2 = temp3;
            check = true;
        }
        else if(temp1.length === temp2.length && temp1[temp1.length-1]<temp2[temp2.length-1]){
            temp3 = temp1;
            temp1 = temp2;
            temp2 = temp3;
            check = true;
        }
        temp1 = reverseAndSplit(temp1);
        temp2 = reverseAndSplit(temp2);
        let i = 0;
        let j = temp1.length;
        let newArr = Array(j).fill(0);
        let tempArr = Array(j-temp2.length).fill(0);
        temp2 = temp2.concat(tempArr);
        while(i<j){
            if(temp1[i]>=temp2[i]){
                newArr[i] = temp1[i] - temp2[i];
            }
            else{
                newArr[i] = temp1[i]+10-temp2[i];
                if(temp1[i+1] !== 0 && temp1[i+1] !== null){
                    temp1[i+1] -= 1;
                }
                else if(temp1[i+1] === 0){
                    for(let m=i+1; m<j; m++){
                        if(temp1[m] === 0) {temp1[m] = 9;}
                        else {temp1[m] -= 1; break;}
                    }
                }
            }
            i++;
        }
        if(newArr[newArr.length-1] === 0){
            let i =newArr.length-1;
            while(newArr[i] === 0){
                newArr.pop();
                i--;
            }
        }
        let answer = reverseAndConcat(newArr);
        if(check) answer = "-" + answer;
        return answer;
    }
}

function reverseAndSplit(arr){
    const newArr =[];
    let len = arr.length;
    for(let i=0; i<len; i++){
        newArr[i] = parseInt(arr[len-i-1]);
    }
    return newArr;
}
function reverseAndConcat(arr){
    return arr.reverse().reduce((element, acc)=>{return String(element)+acc}, "")
}
function insertWebTenTwo(answer){
    const position = document.querySelector("#answerTenTwo")
    position.innerText=`변환값 : ${answer}`;
}
function insertWebTwoTen(answer){
    const position = document.querySelector("#answerTwoTen")
    position.innerText=`변환값 : ${answer}`;
}
function insertWebTwoSixTeen(answer){
    const position = document.querySelector("#answerTwoSixteen")
    position.innerText=`변환값 : ${answer}`;
}
function insertWebSixTeenTwo(answer){
    const position = document.querySelector("#answerSixTeenTwo")
    position.innerText=`변환값 : ${answer}`;
}
function bigCalPlus(answer){
    const position = document.querySelector("#calPlus")
    position.innerText=`변환값 : ${answer}`;
}
function bigCalMulti(answer){
    const position = document.querySelector("#calMulti")
    position.innerText=`변환값 : ${answer}`;
}
function bigCalDivide(answer){
    const position = document.querySelector("#calDivide")
    position.innerText=`변환값 : ${answer}`;
}
function bigCalMinus(answer){
    const position = document.querySelector("#calMinus")
    position.innerText=`변환값 : ${answer}`;
}

const data = {10: 'A', 11:'B', 12:'C', 13:'D', 14:'E', 15:'F'};
