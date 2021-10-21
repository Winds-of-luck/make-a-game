Score = 0

def on_button_pressed_a():
    global Score
    Score += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Score
    Score += 3
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Score
    Score += 2
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global Score
    if Score == 7:
        Score = 0
        basic.show_leds("""
            . . # . .
                        # . . # .
                        . . . # .
                        # . . # .
                        . . # . .
        """)
        basic.show_string("Winner")
basic.forever(on_forever)
