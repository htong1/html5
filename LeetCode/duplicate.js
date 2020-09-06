var containsDuplicate = function(nums) {
   const dupMap = new Map();
    for(let i = 0; i < nums.length; i++){
        if(dupMap.has(nums[i])){
            return true;
        } else {
            dupMap.set(nums[i], 1);
        }
    }
    return false;
};