# Time complexity: O(N)
# Space complexity: O(N)
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        result = []
        carry = 0
        i = len(a) - 1
        j = len(b) - 1

        while i >= 0 or j >= 0 or carry:
            total = carry

            if i >= 0:
                total += int(a[i])
                i -= 1

            if j >= 0:
                total += int(b[j])
                j -= 1

            result.append(str(total % 2))
            carry = total // 2

        return "".join(reversed(result))


# Time complexity: O(a + b)
# Space complexity: O(1)
class Solution2:
    def addBinary(self, a: str, b: str) -> str:
        a, b = int(a, 2), int(b, 2)

        # Update for Next Iteration: a is updated to the sum without carry, and b is updated to the carry. This process repeats until there are no more carry bits.
        while b:
            # bitwise XOR (exclusive OR) operator (^) to compute the sum of two integers a and b without accounting for carry bits
            wo_carry = a ^ b

            # In binary addition, the XOR operation computes the sum of bits without considering carry bits. To obtain the final sum, one must also compute the carry bits and add them appropriately. The carry can be calculated using the bitwise AND (&) operator followed by a left shift (<<):
            carry = (a & b) << 1

            a, b = wo_carry, carry

        # Convert the final sum back to a binary string and remove the '0b' prefix
        # [2:] slices off the '0b' prefix that Python uses to denote binary literals.
        return bin(a)[2:]
