const stringCalculator = (num, num2, ...nums) => {
    
    let a = num != undefined ? Number(num) : 0
    let b = num2 != undefined ? Number(num2) : 0
    let sum = a + b;
    console.log(nums)
        
    for (let i = 0; i < nums.length; i++) {
        sum += Number(nums[i]);
    }
    return  sum;


}

console.log(stringCalculator(2, 4, 5, 5, 5, 5))
    
module.exports = {stringCalculator}