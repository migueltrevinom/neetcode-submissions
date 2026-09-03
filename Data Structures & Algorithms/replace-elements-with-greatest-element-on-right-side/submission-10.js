class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        // let greaterElement = -1;
       
        // for (let index = arr.length-1; index >= 0; index--) {
        //     if (greaterElement > arr[index]) {
        //         const temp = arr[index];
        //         arr[index] = greaterElement;
        //         greaterElement = Math.max(greaterElement, temp);
        //     } else {
        //         greaterElement = arr[index]; // 2 = 3
        //     }
        // }

        // arr.push(-1);
        // arr.shift(0);

        // return arr;

         let maxVal = -1;
       
        for (let index = arr.length -1; index >= 0; index--) {
            const currentValue = arr[index];
            arr[index] = maxVal;

            maxVal = Math.max(maxVal, currentValue);
        }

        return arr;
    }
}
