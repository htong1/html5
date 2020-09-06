var missingNumber = function(nums) {
    let expectedSum = 0, actualSum = 0;
    for(let i = 0; i <= nums.length; i++){
        expectedSum += i;
    }
    
    for(let x = 0; x < nums.length; x++){
        actualSum += nums[x];
    }
    
    return expectedSum - actualSum;
};