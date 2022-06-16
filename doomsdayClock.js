const clock = document.querySelector("h2#clockNow");
const doomsClock = document.querySelector("h2#clockRemain");
const lastClock = document.querySelector("h2#lastClock")
function clockHMS(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1);
    const day = String(date.getDate());
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const lastDate = new Date(2022, 10, 14);
    const remain = lastDate - date;
    clock.innerText = `현재시간 : ${year}. ${month}. ${day}. ${hour}:${minute}:${seconds}`;
    lastClock.innerText = `종료시간 : ${String(lastDate.getFullYear())}. ${String(lastDate.getMonth())}. ${String(lastDate.getDate())}`
    doomsClock.innerText = `남은시간 : ${String(Math.floor(remain/(1000*60*60)))}시간`;
}
clockHMS();
setInterval(clockHMS, 1000);



