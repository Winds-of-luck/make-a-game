let Score = 0
input.onButtonPressed(Button.A, function () {
    Score += 1
})
input.onButtonPressed(Button.AB, function () {
    Score += 3
})
input.onButtonPressed(Button.B, function () {
    Score += 2
})
basic.forever(function () {
    if (Score == 7) {
        Score = 0
        basic.showLeds(`
            . . # . .
            # . . # .
            . . . # .
            # . . # .
            . . # . .
            `)
        basic.showString("Winner")
    }
})
