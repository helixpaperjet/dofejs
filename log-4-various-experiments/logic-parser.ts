const validTokens: string[] = ['NOT', 'OR', 'AND', 'NAND', 'NOR', 'XOR']
const testingValues2: Array<boolean[]> = [
    [false, false],//00 
    [false, true], //01
    [true, false], //10
    [true, true]   //11
]
const testingValues3: Array<boolean[]> = [
    [false, false, false], //000
    [false, false, true], //001
    [false, true, false], //010
    [false, true, true], //011
    [true, false, false],//100
    [true, false, true], //101
    [true, true, false], //110
    [true, true, true] //111
]
const not = (a: boolean) => {
    let res = undefined
    if (a) {
        res = false
    }
    else {
        res = true
    }
    return res
}
const or = (a: boolean, b: boolean) => {
    let res = undefined
    if (a) {
        res = true
    }
    if (b) {
        res = true
    }
    else {
        res = false
    }
    return res
}
const nor = (a: boolean, b: boolean) => {
    return not(or(a, b))
}
const and = (a: boolean, b: boolean) => {
    let res = undefined
    if (!a) {res = false}
    if (!b) {res = false}
    else {res = true}
    return res
}
const nand = (a: boolean, b: boolean) => {
    return not(and(a, b))
}
const xor = (a: boolean, b: boolean) => {
    return or(and(a, not(b)), and(not(a), b))
}
const test = () => {
    let a: boolean;
    let b: boolean;
    testingValues2.forEach(element => {
        a = element[0]
        b = element[1]
        console.log(xor(nand(not(nor(a, b)), b), xor(a, b)))
    })
}
test()