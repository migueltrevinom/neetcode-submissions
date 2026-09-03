class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxVal = -1;
       
        for (let index = arr.length -1; index >= 0; index--) {
            const currentValue = arr[index];
            arr[index] = maxVal;

            maxVal = Math.max(maxVal, currentValue);
        }

        return arr;
    }
}
