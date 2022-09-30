// id가 clock인 문서객체를 들고옴
const clock = document.querySelector("#clock");

// 인터벌 함수에 콜백함수로 넣어주기 위함
function getClock () {
    // 현재 시간을 가져오는 객체
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // return을 통해서 현재 시간을 내보내줌
    return`${hours}:${minutes}:${seconds}`;
}
// 함부를 통해 시간 문자열을 할당
clock.innerHTML = getClock();
// 인터벌 함수를 사용하여 1초마다 반복
setInterval(()=>{clock.innerHTML=getClock();},1000);