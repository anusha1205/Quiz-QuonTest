document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.querySelector('.start-btn');
    const popupInfo = document.querySelector('.popup-info');
    const exitBtn = document.querySelector('.go-back');
    const main = document.querySelector('.main');


    startBtn.onclick = () => {
        popupInfo.classList.add('active');
        main.classList.add('active');
    }
    exitBtn.onclick = ()=>{
        popupInfo.classList.remove('active');
        main.classList.remove('active')
    }
});