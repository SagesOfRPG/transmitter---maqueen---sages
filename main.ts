let radioNum = 0
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(1)
        radioNum = 1
    } else {
        if (input.buttonIsPressed(Button.A)) {
            radio.sendNumber(2)
            radioNum = 2
        } else {
            if (input.buttonIsPressed(Button.B)) {
                radio.sendNumber(3)
                radioNum = 3
            } else {
                if (input.rotation(Rotation.Pitch) > 20) {
                    radio.sendNumber(4)
                    radioNum = 4
                } else {
                    if (input.rotation(Rotation.Pitch) < -20) {
                        radio.sendNumber(5)
                        radioNum = 5
                    } else {
                        radio.sendNumber(0)
                        radioNum = 0
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (radioNum == 0) {
        basic.showIcon(IconNames.Heart)
    }
    if (radioNum == 1) {
        basic.showArrow(ArrowNames.North)
    }
    if (radioNum == 2) {
        basic.showArrow(ArrowNames.West)
    }
    if (radioNum == 3) {
        basic.showArrow(ArrowNames.East)
    }
    if (radioNum == 4) {
        basic.showString("U")
    }
    if (radioNum == 5) {
        basic.showString("D")
    }
})
