enum EnRomanNumbers {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000,
}

function sumRomanNumbers(arr: string[]) {}

function calculateRomanNumbers(s: string) {
  const romanNumbers = s.toUpperCase().split("");

  let total = 0;
  for (let i = 0; i < romanNumbers.length; i++) {
    EnRomanNumbers[romanNumbers[i]] < EnRomanNumbers[romanNumbers[i + 1]]
      ? (total -= EnRomanNumbers[romanNumbers[i]])
      : (total += EnRomanNumbers[romanNumbers[i]]);
  }

  console.log("total ", total);
}

calculateRomanNumbers("MCMXCIV");
