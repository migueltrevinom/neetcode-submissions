class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closeToOpen = {
            "}": "{",
            "]": "[",
            ")": "("
        }

        for parenthesis in s:
            if parenthesis not in closeToOpen:
                stack.append(parenthesis)
            elif  stack and stack[-1] == closeToOpen[parenthesis]:
                stack.pop()
            else:
                return False
            
        return False if stack else True
                