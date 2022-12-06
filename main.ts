input.onButtonPressed(Button.A, function () {
    muzica(120, 120)
})
input.onButtonPressed(Button.AB, function () {
    muzica(1, 1)
})
input.onButtonPressed(Button.B, function () {
    muzica(60, 60)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    muzica(200, 200)
})
function muzica (tempo: number, volum: number) {
    music.setVolume(volum)
    for (let index = 0; index < 4; index++) {
        music.playMelody("C5 B A G F E D C ", tempo)
    }
}
basic.forever(function () {
	
})
