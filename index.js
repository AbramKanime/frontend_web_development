let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeResult = 0
let guestResult = 0

function add1Home() {
     homeResult += 1
     homeScore.textContent = homeResult
}

function add2Home() {
    homeResult += 2
    homeScore.textContent = homeResult
}

function add3Home() {
    homeResult += 3
    homeScore.textContent = homeResult
}

function add1Guest() {
    guestResult += 1
    guestScore.textContent = guestResult
}

function add2Guest() {
    guestResult += 2
    guestScore.textContent = guestResult
}

function add3Guest() {
    guestResult += 3
    guestScore.textContent = guestResult
}

function reset() {
    homeResult = 0
    guestResult = 0
    homeScore.textContent = homeResult
    guestScore.textContent = guestResult
}