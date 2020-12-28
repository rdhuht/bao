timeanddate.set24HourTime(13, 30, 0)
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
