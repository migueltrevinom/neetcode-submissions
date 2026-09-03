class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mapping = {};
        for (let i = 0; i < nums.length; i++) {
            if (mapping[nums[i]]) {
                return true;
            }

            mapping[nums[i]] = true;
        }
        return false;
    }
}
