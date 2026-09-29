class Solution {
    /**
     * @param {number[]} nums
     * @param {number} lower
     * @param {number} upper
     * @return {number[][]}
     */
    findMissingRanges(nums, lower, upper) {
        const missing = [];
        let belowLower = lower -1;

        for (let index = 0; index <= nums.length; index++) {
            const current = index === nums.length ? upper + 1 : nums[index];

            if (current - belowLower > 1) {
                missing.push([belowLower + 1, current -1]);
            } 

            belowLower = current;
        }

        return missing;
    }
}
