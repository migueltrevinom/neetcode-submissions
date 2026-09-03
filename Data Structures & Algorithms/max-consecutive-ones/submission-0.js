class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxOnes = 0;
        let count = 0;

        if (!nums.length) return maxOnes;

        if (nums.length === 1) return nums[0];

        for (let index = 0; index <= nums.length; index++) {
            if (nums[index] === 1) count++;
            else {
                maxOnes = Math.max(maxOnes, count);
                count = 0;
            }
            
        }


        return maxOnes;
    }
}
