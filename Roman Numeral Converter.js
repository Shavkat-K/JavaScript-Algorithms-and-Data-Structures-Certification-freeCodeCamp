function convertToRoman(num) {
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let romanStr = ''
  for(let i = 0; i < numbers.length; i++){
    while(numbers[i] <= num){
      romanStr += romanNums[i]
      num -= numbers[i]
    }
  }

  console.log(romanStr)
 return romanStr;
}
convertToRoman(44)
convertToRoman(2);
convertToRoman(1004)
convertToRoman(3999)