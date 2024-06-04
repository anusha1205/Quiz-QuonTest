document.addEventListener("DOMContentLoaded", function () {
    const choices = document.querySelector('#choices');
    const startBtns = document.querySelectorAll('.start-btn');
    const popupInfo = document.querySelector('.popup-info');
    const exitBtn = document.querySelector('.go-back');
    const main = document.querySelector('.main');

    choices.addEventListener('change', function () {
        const selectedValue = this.value;
        document.querySelectorAll('.subject-div').forEach(div => div.style.display = 'none');
        if (selectedValue !== 'choice0') {
            document.querySelector(`.${selectedValue}`).style.display = 'flex';
        }
    });

    startBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            popupInfo.classList.add('active');
            main.classList.add('active');
        });
    });

    exitBtn.addEventListener('click', () => {
        popupInfo.classList.remove('active');
        main.classList.remove('active');
    });
});