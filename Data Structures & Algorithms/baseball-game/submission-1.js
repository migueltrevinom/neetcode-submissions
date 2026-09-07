class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let result = 0;
        const stack = [];

        for (let index = 0; index < operations.length; index++) {
            const operation = operations[index];

            switch (operation) {
                case '+':
                    stack.push(Number(stack[stack.length-1] || 0) + Number(stack[stack.length-2] || 0)); 
                    continue;
                case 'D':
                    stack.push(stack[stack.length -1] * 2);
                    continue;

                case 'C':
                    stack.pop();
                    continue;

                default:
                    stack.push(Number(operations[index]));
                
            }

        }

        for (let x = 0; x < stack.length; x++) {
            result += Number(stack[x] ? stack[x] : 0);
            console.log({stack, x: stack[x], result});
        }

        return result;
    } 
}
