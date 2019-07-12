function getMin() {
    let minNumber = arguments;

for (var i = 0; i < minNumber.length; i++) {
    if(minNumber[i] < minNumber[0]) {
        minNumber[0] = minNumber[i];
    }
}
return minNumber[0];
}

getMin(56, 67, 90, 4, -45);