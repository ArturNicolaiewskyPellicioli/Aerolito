let startTimer;

const toggleModal = (modalAction) => {
    let modal = document.getElementById("modal")
    let button = document.getElementById("button")
    let header = document.getElementById("header")
    let modalBackground = document.getElementById("modalBackground")

    if (modalAction === "open") {
        
        modal.setAttribute("style", "display: normal")
        button.setAttribute("style", "display: none")
        header.setAttribute("style", "filter: blur(3px)")
        modalBackground.setAttribute("style", "display: normal")

        timerFunction()
    } else {

        modal.setAttribute("style", "display: none")
        header.setAttribute("style", "filter: none")
        button.setAttribute("style", "display: normal")
        modalBackground.setAttribute("style", "display: none")

        clearInterval(startTimer)
    }
    
}

const timerFunction = () => {
    let timer = document.getElementById("timer")
    let duration = 30
    timer.textContent = "0:30"

    startTimer = setInterval(() => {
        let seconds = duration - 1
        timer.textContent = 0 + ':' + (seconds < 10 ? "0" + seconds : seconds)
        duration = seconds

        if (seconds === 0) {
            toggleModal("close")
            button.textContent = "ARQUIVO ENVIADO"
            button.setAttribute("style", "background: rgb(242,242,242); cursor: default")
            button.setAttribute("disabled", "disabled")
        }
    }, 1000)
}

function openMenuMobile() {
    let buttonMenu = document.getElementById("menuToggle")

    if (buttonMenu.className === "header__button") {
        buttonMenu.className += " open"
    } else {
        buttonMenu.className = "header__button"
    }
    
    let nav = document.getElementById("navLinks")

    if (nav.className === "header__menu") {
        nav.className += " open"
    } else {
        nav.className = "header__menu"
    }
}