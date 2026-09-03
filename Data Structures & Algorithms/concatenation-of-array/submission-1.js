class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // return [...nums, ...nums];
        const result = [...nums];
        for (let i = 0; i <= nums.length -1; i ++) {
            result.push(nums[i]);
        }
        return result;
    }
}
