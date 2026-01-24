if (localStorage.getItem("isRemove") == "true") {
    document.body.remove();
    document.documentElement.background = "repeat";
    const element = document.createElement("p");
    element.innerHTML = "Сайт снесён";
    document.documentElement.appendChild(element);
}

// Переход на главную
function home() {
    window.location.href = "/main/";
}

// Единожды производим анимацию
const text = document.querySelector("#main-text")
text.classList.add("main-text-anim")
text.addEventListener("animationend", () => {
    text.classList.remove("main-text-anim")
})

function snos() {
    document.body.remove();
    document.documentElement.background = "repeat";
    const element = document.createElement("p");
    element.innerHTML = "Сайт снесён");
    document.documentElement.appendChild(element);
    localStorage.setItem("isRemove", "true");
}
