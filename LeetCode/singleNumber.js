var singleNumber = function(nums) {
  debugger;
  let total = 0;
   
for(let i = 0; i < nums.length; i++){
let num = nums[i]
total ^= num
   }
   return total;
};