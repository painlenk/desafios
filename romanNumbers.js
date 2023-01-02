var EnRomanNumbers;
(function (EnRomanNumbers) {
    EnRomanNumbers[EnRomanNumbers["I"] = 1] = "I";
    EnRomanNumbers[EnRomanNumbers["V"] = 5] = "V";
    EnRomanNumbers[EnRomanNumbers["X"] = 10] = "X";
    EnRomanNumbers[EnRomanNumbers["L"] = 50] = "L";
    EnRomanNumbers[EnRomanNumbers["C"] = 100] = "C";
    EnRomanNumbers[EnRomanNumbers["D"] = 500] = "D";
    EnRomanNumbers[EnRomanNumbers["M"] = 1000] = "M";
})(EnRomanNumbers || (EnRomanNumbers = {}));
function sumRomanNumbers(arr) { }
function calculateRomanNumbers(s) {
    var romanNumbers = s.toUpperCase().split("");
    var total = 0;
    for (var i = 0; i < romanNumbers.length; i++) {
        EnRomanNumbers[romanNumbers[i]] < EnRomanNumbers[romanNumbers[i + 1]]
            ? (total -= EnRomanNumbers[romanNumbers[i]])
            : (total += EnRomanNumbers[romanNumbers[i]]);
    }
    console.log("total ", total);
}
calculateRomanNumbers("MCMXCIV");
