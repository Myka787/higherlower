let spielAktiv = false
let neueZahl = 0
let aktuelleZahl = 0
input.onButtonPressed(Button.A, function () {
    if (spielAktiv) {
        neueZahl = randint(1, 9)
        basic.showNumber(neueZahl)
        if (neueZahl < aktuelleZahl) {
            game.addScore(1)
            aktuelleZahl = neueZahl
            basic.pause(1000)
            basic.showNumber(aktuelleZahl)
        } else {
            game.gameOver()
            spielAktiv = false
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    // Spiel zurücksetzen
    spielAktiv = true
    aktuelleZahl = randint(1, 9)
    game.setScore(0)
    basic.showNumber(aktuelleZahl)
})
input.onButtonPressed(Button.B, function () {
    if (spielAktiv) {
        neueZahl = randint(1, 9)
        basic.showNumber(neueZahl)
        if (neueZahl > aktuelleZahl) {
            game.addScore(1)
            aktuelleZahl = neueZahl
            basic.pause(1000)
            basic.showNumber(aktuelleZahl)
        } else {
            game.gameOver()
            spielAktiv = false
        }
    }
})
