// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

function isValid(s: string): boolean {
    //! Using ArrayDeque is faster
    //! than using Stack class
    let stack: string[] = []

    // Traversing the session
    for (let i = 0; i < s.length; i++) {
        let x = s[i]

        if (x == '(' || x == '[' || x == '{') {
            // Push the element in the stack
            stack.push(x)
            continue
        }

        // If current character is not opening
        // bracket, then it must be closing.
        // So stack cannot be empty at this point.
        if (stack.length == 0) return false

        let check: string | undefined
        switch (x) {
            case ')':
                check = stack.pop()
                if (check == '{' || check == '[') return false
                break

            case '}':
                check = stack.pop()
                if (check == '(' || check == '[') return false
                break

            case ']':
                check = stack.pop()
                if (check == '(' || check == '{') return false
                break
        }
    }

    // Check Empty Stack
    return stack.length == 0
}
