/**
*   Return the second largest number in the array.
**/
const getSecondLargest = nums => {
    // Complete the function
    nums.sort((a,b) => b-a);
    for (let i = 0; i < nums.length; i++){
      if (nums[i] > nums[i+1]) 
        return nums[i+1];
    }
}