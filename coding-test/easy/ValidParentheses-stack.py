def isValid(s: str) -> bool:
    stack = []
    closeToOpen = {"(": ")", "{": "}", "[": "]"}

    for c in s:
        if c in closeToOpen:  # means it's closing one
            stack.append(c)
            print(stack)
        elif not stack or closeToOpen[stack.pop()] != c:
            return False

    return len(stack) == 0


s = "()[]"
print(isValid(s))


def isValid(s: str) -> bool:
    stack = []
    closeToOpen = {")": "(", "}": "{", "]": "["}

    for c in s:
        if c in closeToOpen:  # means the key(c) is a closing one
            if stack and stack[-1] == closeToOpen[c]:  # -1 is last index
                stack.pop()
            else:
                return False
        else:
            stack.append(c)

    return True if not stack else False
