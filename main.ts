timeanddate.onMinuteChanged(function () {
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
})
timeanddate.set24HourTime(12, 12, 12)
let tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
tm.showDP(0, true)
basic.forever(function () {
    tm.showNumber(parseFloat("" + convertToText(parseFloat(timeanddate.time(timeanddate.TimeFormat.HMM).substr(0, 2))) + convertToText(parseFloat(timeanddate.time(timeanddate.TimeFormat.HMM).substr(3, 2)))))
})
