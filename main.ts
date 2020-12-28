let tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
tm.showDP(0, true)
basic.forever(function () {
    tm.showNumber(0)
})
