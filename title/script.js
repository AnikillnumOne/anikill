// Переход на главную
function home() {
    window.location.href = "/main/"
}

// Единожды производим анимацию
const text = document.querySelector("#main-text")
text.classList.add("main-text-anim")
text.addEventListener("animationend", () => {
    text.classList.remove("main-text-anim")
})