class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            "}": "{",
            ")": "(",
            "]": "["
        }

        if (s.length === 1) return false;

        for (let index = 0; index < s.length; index++) {
            if (!closeToOpen[s[index]]) {
                stack.push(s[index]);
                continue;
            }
            if (stack.length && stack[stack.length -1] === closeToOpen[s[index]]) {
                stack.pop();
                continue
            }

            return false;
        }

        return stack.length ? false : true;
    }
}
