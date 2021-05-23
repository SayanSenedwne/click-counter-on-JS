const btn = document.querySelector('.button');

function hendleBtnClick(event) {
    event.preventDefault();
    let counteCLickBtn = btn.textContent;
    btn.textContent = parseInt(counteCLickBtn) + 1;
}

btn.addEventListener('click', hendleBtnClick);