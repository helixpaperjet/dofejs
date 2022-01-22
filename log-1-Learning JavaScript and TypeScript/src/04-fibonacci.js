function fibonacci(startIndex, endIndex) {
    var i = startIndex;
    var firstElement = 0;
    var secondElement = 1;
    var elementsArray = [firstElement, secondElement];
    while (i < endIndex) {
        var n = elementsArray.length;
        elementsArray[n] = elementsArray[n - 1] + elementsArray[n - 2];
        i++;
    }
    var output = "";
    for (var _i = 0, elementsArray_1 = elementsArray; _i < elementsArray_1.length; _i++) {
        var element = elementsArray_1[_i];
        output += element.toString();
        output += "\n";
    }
    console.log(output);
}
fibonacci(1, 100)