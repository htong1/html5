var maximumProduct = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    return Math.max((nums[0]*nums[1]*nums[nums.length-1]),(nums[nums.length-1]* nums[nums.length-2]*nums[nums.length-3]));
    /*nums = nums.sort((a,b)=>a-b);
    if(nums[0] < 0 && nums[1] < 0){
        return nums[0] * nums[1] * nums[nums.length-1];
    } else {
    return nums[nums.length-1]* nums[nums.length-2]*nums[nums.length-3];
    }*/
};