class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let pointer = 0;

        for (let index = 0; index < nums.length; index++) {
            if (nums[index] !== val) {  // nums[index] !== 3 = 2 !== 3
                nums[pointer] = nums[index];
                pointer++;
            }
        }

        return pointer;
    }
}
