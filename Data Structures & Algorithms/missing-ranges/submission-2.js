class Solution {
    /**
     * @param {number[]} nums
     * @param {number} lower
     * @param {number} upper
     * @return {number[][]}
     */
    findMissingRanges(nums, lower, upper) {
         const res = [];
        let prev = lower - 1;                 // virtual element just below lower
        const n = nums.length;

        for (let i = 0; i <= n; i++) {
            const cur = (i === n) ? upper + 1 : nums[i];
            if (cur - prev > 1) {
                res.push([prev + 1, cur - 1]);
            }
            prev = cur;
        }
        
        return res;
    }
}
