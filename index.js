function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
}

function simp() {
    var numA = document.getElementById("numA").value;
    var numB = document.getElementById("numB").value;
    var diviNum;
    while ((diviNum = gcd(numA, numB)) != 1) {
        numA /= diviNum;
        numB /= diviNum;
    }
    var res = document.getElementById("res");
    res.value = numA + " / " + numB;
    res.style.width = res.value.length * 8 + "px";
}

function changed(inputId) {
    var inputElem = document.getElementById(inputId);
    inputElem.style.width = inputElem.value.length * 8 + "px";
}