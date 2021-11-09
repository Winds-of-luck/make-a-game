let Score = 0
input.onButtonPressed(Button.A, function () {
    Score += 1
})
input.onButtonPressed(Button.B, function () {
    Score += -1
})
basic.forever(function () {
    basic.showNumber(Score)
    basic.pause(200)
    if (Score >= 0) {
        basic.showLeds(`
            . . # . .
            # . . # .
            . . . # .
            # . . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . # .
            # . # . .
            . . # . .
            # . # . .
            . . . # .
            `)
    }
})
