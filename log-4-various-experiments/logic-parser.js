var validTokens = ['NOT', 'OR', 'AND', 'NAND', 'NOR', 'XOR'];
var testingValues2 = [
    [false, false],
    [false, true],
    [true, false],
    [true, true] //11
];
var testingValues3 = [
    [false, false, false],
    [false, false, true],
    [false, true, false],
    [false, true, true],
    [true, false, false],
    [true, false, true],
    [true, true, false],
    [true, true, true] //111
];
var not = function (a) {
    var res = undefined;
    if (a) {
        res = false;
    }
    else {
        res = true;
    }
    return res;
};
var or = function (a, b) {
    var res = undefined;
    if (a) {
        res = true;
    }
    if (b) {
        res = true;
    }
    else {
        res = false;
    }
    return res;
};
var nor = function (a, b) {
    return not(or(a, b));
};
var and = function (a, b) {
    var res = undefined;
    if (!a) {
        res = false;
    }
    if (!b) {
        res = false;
    }
    else {
        res = true;
    }
    return res;
};
var nand = function (a, b) {
    return not(and(a, b));
};
var xor = function (a, b) {
    return or(and(a, not(b)), and(not(a), b));
};
var test = function () {
    var a;
    var b;
    testingValues2.forEach(function (element) {
        a = element[0];
        b = element[1];
        console.log(xor(nand(not(nor(a, b)), b), xor(a, b)));
    });
};
test();
