function carita_feliz () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        # # # # #
        . # # # .
        `)
}
function carita_dumiendo () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        . # # . .
        . # # . .
        `)
}
function carita_enojada () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # # # # #
        # . # . #
        `)
}
function triste () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
let agua = 1
let luz = 1
let sueño = 1
let temperatura = 1
basic.forever(function () {
    if (agua == 1) {
        basic.showString("¿darle agua?")
        basic.showString("si")
        carita_feliz()
        if (luz == 1) {
            basic.showString("¿ponerla en la luz?")
            basic.showString("si")
            carita_feliz()
            if (sueño == 1) {
                basic.showString("¿ponerla a dormir?")
                basic.showString("si")
                carita_dumiendo()
                if (temperatura == 1) {
                    basic.showString("¿estar en la temperatura que ella quiere?")
                    basic.showString("si")
                    carita_feliz()
                }
            }
        }
    }
})
basic.forever(function () {
    if (agua == 1) {
        basic.showString("¿darle agua?")
        basic.showString("si")
        carita_feliz()
        if (luz == 1) {
            basic.showString("¿ponerla en la luz?")
            basic.showString("si")
            carita_feliz()
            if (sueño == 1) {
                basic.showString("¿ponerla a dormir?")
                basic.showString("si")
                carita_dumiendo()
                if (temperatura == 1) {
                    basic.showString("¿estar en la temperatura que ella quiere?")
                    basic.showString("si")
                    carita_feliz()
                }
            }
        }
    }
})
