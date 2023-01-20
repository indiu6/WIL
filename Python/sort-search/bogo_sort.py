import random
import sys

# from load import load_numbers


def load_numbers(file_name):
    numbers = []
    with open(file_name) as f:
        for line in f:
            numbers.append(int(line))
    return numbers


numbers = load_numbers(sys.argv[1])


def is_sorted(values):
    for index in range(len(values) - 1):
        if values[index] > values[index + 1]:
            return False
        return True


def bogo_sort(values):
    while not is_sorted(values):
        random.shuffle(values)
    return values


print(bogo_sort(numbers))
