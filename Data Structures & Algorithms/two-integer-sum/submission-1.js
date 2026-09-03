class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) { // [4,5,6] = target = 10;
        const mapping = {};

        if (!nums.length) return null;

        for (let i = 0; i <= nums.length -1; i++) {
            const nI = nums[i]; // 4 [0]
            // store a map of positions where target needs the other like target = 10
            // then we will store [target - numero] = i;
            if (mapping[nI] !== undefined) { // mapping[4] 
                return [mapping[nI], i]; // mapping[6] = 0, 2
            }

            mapping[target - nI] = i; // mapping[6] = 0 || mapping[5] = 1 || 
        }

        return null;
    }
}
