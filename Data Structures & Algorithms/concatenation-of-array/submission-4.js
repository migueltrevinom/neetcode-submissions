class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // return [...nums, ...nums];
        const result = Array(nums.length * 2);
        
        for (let i = 0; i <= nums.length -1; i ++) {
            result[i] = nums[i];
            result[i + nums.length] = nums[i];

        }
        return result;
    }
}
