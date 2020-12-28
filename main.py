timeanddate.set24_hour_time(12, 12, 12)
tm = TM1637.create(DigitalPin.P1, DigitalPin.P2, 7, 4)

def on_forever():
    tm.show_number(parse_float("" + convert_to_text(parse_float(timeanddate.time(timeanddate.TimeFormat.HMM).substr(0, 2))) + convert_to_text(parse_float(timeanddate.time(timeanddate.TimeFormat.HMM).substr(3, 2)))))
basic.forever(on_forever)
