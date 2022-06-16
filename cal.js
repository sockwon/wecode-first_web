function tenTwo(){
    const num = document.getElementById("ten").value;
    let number = num;
    let answer =[], check = true;
    while(check){
        if(number === 1) check = false;
        answer.unshift(number%2);
        number = Math.floor(number/2);
    }
    return insertWebTenTwo(answer.reduce((e, acc)=>{return String(e)+acc}, ""));
}

function twoTen(){
    //num 은 처음부터 문자열이어야 한다. 그렇지 않으면 2^53 보다 큰 수는 정수로 인식하지 못한다.
    const num = document.getElementById("two").value;
    let sum=0
    const arr = [...num];
    const f = arr.length-1;
    for(let i= f; i>=0; i--){
        sum += (2**(f-i))*(parseInt(arr[i]))
    }
    return insertWebTwoTen(sum)
}

function twoSixteen(){
    const num = document.getElementById("twosixteen").value;
    const arr = [...num];
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
    return insertWebTwoSixTeen(stringSixteen);
}

function sixteenTwo(){
    const num = document.getElementById("sixteentwo").value;
    const arr = [...num];
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
    return insertWebSixTeenTwo(answer.reduce((e,acc)=>{return String(e)+acc},""))
}

function calPlus(){
    const num = document.getElementById("Plus").value;
    const arr = num.split("+");
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
    return bigCalPlus(reverseAndConcat(sum));
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

const data = {10: 'A', 11:'B', 12:'C', 13:'D', 14:'E', 15:'F'};
