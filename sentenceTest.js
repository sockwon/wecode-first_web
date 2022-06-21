let answer = [];
let countAll=0, countTrue=0;
function testOS(){

}
function checkSubmission(){
    let result
    let check;
    const answerTo = answer.pop()
    const submission = document.querySelector("#submissionSentence");
    if(answerTo === submission.value){
        result = "정답.";
        check = true;
        countTrue++; countAll++
    }
    else{
        result = "오답.";
        check = false;
        countAll++;
    }
    return answerPrintAndCheck(result, check, answerTo);
}
function question(){
    const dataLength = Object.keys(data).length;
    let num = Math.floor(Math.random()*dataLength);
    return questionPrintAndSetAnswer(data[num][1],data[num][0]);
}
function questionPrintAndSetAnswer(q, a){
    const questionSen = document.querySelector("#question");
    questionSen.innerText=`${q}`;
    answer.push(a)
}
function answerPrintAndCheck(result, check, answerTo){
    const checkAnswer = document.querySelector("#checkAnswer");
    const checkFalse = document.querySelector("#checkfalse");
    checkAnswer.innerText=`${result} 총 문제${countAll}, 맞춘 개수 ${countTrue}`;
    if(!check){
        checkFalse.innerText=`정답은 ${answerTo}`;
    }
}


const data = {
    0:["블록체인", "P2P(Peer to Peer) 네트워크를 통해서 관리되는 분산 데이터베이스의 한 형태로, 거래 정보를 담은 장부를 중앙 서버 한 곳에 저장하는 것이 아니라 네트워크에 연결된 여러 컴퓨터에 저장 및 보관하는 기술로 다양한 분야에 활용이 가능한 기술이다"],
    1:["객체", "자바스크립트의 기본 타입(data type)은 (?)입니다."],
    2:["객체", "이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합입니다."],
    3:["메소드","객체 프로퍼티의 값으로 함수가 올 수도 있는데, 이러한 프로퍼티를 (?)라고 합니다."],
    4:["웹퍼블리싱","웹사이트 하나를 만들기 위해 디자인을 기획, 기획한 디자인을 웹 브라우저에서 바로 볼 수 있도록 코딩 작업을 하는 것을 말합니다."],
    5:["반응형웹","다양한 디바이스, 창, 화면 크기에서 원활하게 렌더링되는 웹 페이지를 제작하는 것을 말합니다. 웹 사이트의 일관성을 유지합니다."],
    6:["http","HTML과 같은 하이퍼미디어 문서를 전송하기위한 애플리케이션 레이어 프로토콜입니다. 웹 브라우저와 웹 서버간의 커뮤니케이션을위해 디자인되었지만, 다른 목적으로도 사용될 수 있습니다."],
    7:["https","사용자 컴퓨터와 방문한 사이트 간에 전송되는 사용자 데이터의 무결성과 기밀성을 유지할 수 있게 해주는 인터넷 통신 프로토콜입니다. 사용자는 웹사이트를 이용할 때 안전한 비공개 온라인 환경을 기대합니다."],
    8:["자바스크립트","객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. ECMA스크립트(ECMAScript)의 표준 사양을 가장 잘 구현한 언어로 인정받고 있으며 ECMAScript 5(ES5)까지는 대부분의 브라우저에서 기본적으로 지원되었으나 ECMAScript 6 이후부터는 브라우저 호환성을 위해 트랜스파일러로 컴파일된다."],
    9:["부트캠프","신병 훈련소"],
    10:["TDD","테스트 코드를 먼저 작성하는 개발 방법론"],
    11:["폭포수모델","순서대로 일이 진행되고 다시 되돌아 갈 수 없는 구조로 일하는 방식.모델의 흐름은 소프트웨어 요구사항 분석 단계에서 시작하여, 소프트웨어 설계, 소프트웨어 구현, 소프트웨어 시험, 소프트웨어 통합 단계 등을 거쳐, 소프트웨어 유지보수 단계에까지 이른다."],
    12:["애자일"," 소프트웨어 엔지니어링에 대한 개념적인 얼개로, 프로젝트의 생명주기동안 반복적인 개발을 촉진한다. 최근에는 소프트웨어 엔지니어링 뿐 아니라 다양한 전문 분야에서 실용주의적 사고를 가진 사람들이 적용하려는 시도를 하고 있다."],
    13:["객체지향","컴퓨터 프로그래밍의 패러다임 중 하나이다. 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러 개의 독립된 단위, 즉 '객체'들의 모임으로 파악하고자 하는 것이다. 각각의 객체는 메시지를 주고받고, 데이터를 처리할 수 있다."]
}

