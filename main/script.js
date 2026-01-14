// Назад
function back() {
    window.location.href = "/title/"
}

// Настройка границы списка
const border = document.querySelector("#border")
border.style.height = window.innerHeight - border.offsetTop - 22 + "px"