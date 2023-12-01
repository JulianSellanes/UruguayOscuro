const toggleBttn = document.querySelector(`.toggleBttn`);
const navDiv = document.querySelector(`.navDiv`);

toggleBttn.addEventListener(`click`, () => {
    navDiv.classList.toggle(`active`);
});