var captcha = (input) => {
    var inp = input.toString();
    var x = (y) => {
        var yy = y.toString() + y.toString();
        console.log(yy)
        if (yy.length <= 0) return (inp.length + 1);
        var n = 0,
            pos = 0;
        while (true) {
            pos = inp.indexOf(yy, pos);
            if (pos >= 0) {
                ++n;
                pos++;
            } else break;
        }
        return n * y;
    }
    var output = (x(1) + x(2) + x(3) + x(4) + x(5) + x(6) + x(7) + x(8) + x(9));
    var inpArr = inp.split("");
    if (inpArr[inpArr.length - 1] == inpArr[0]) {
        output += Number(inpArr[0])
    }
    return output
}
