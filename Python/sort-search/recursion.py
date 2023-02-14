def sum_initial(numbers):
    total = 0
    for number in numbers:
        total += number
    return total


def sum(numbers):
    # Python treats a list that contains one or more values as a "true" value,
    # and it treats a list containing _no_ values as a "false" value.
    # So we'll add an "if" statement that says if there are no numbers in
    # the list, we should return a sum of 0. That way, the function will exit
    # immediately, without making any further recursive calls to itself.
    if not numbers:
        return 0
    # We leave the code for the recursive case unchanged. If there are still
    # numbers in the list, the function will call itself with any numbers
    # after the first, then add the return value to the first number in the
    # list.
    remaining_sum = sum(numbers[1:])
    return numbers[0] + remaining_sum


print(sum([1, 2, 7, 9]))
