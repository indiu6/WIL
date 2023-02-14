import sys
from load_numbers import load_numbers

numbers = load_numbers(sys.argv[1])

# Let's implement the function that will do our selection sort.
# We're going to pass in our Python list containing all the unsorted
# numbers.
def selection_sort(values: list):
    sorted_list = []
    print("%-25s %-25s" % (values, sorted_list))

    for i in range(0, len(values)):
        index_to_move = index_of_min(values)
        sorted_list.append(values.pop(index_to_move))
        print("%-25s %-25s" % (values, sorted_list))
    return sorted_list


# Now we need to write the function that picks out the minimum value.
# We pass in the list we're going to search.
def index_of_min(values: list):
    min_index = 0
    for i in range(1, len(values)):
        if values[i] < values[min_index]:
            min_index = i
    return min_index


# Lastly, we need to actually run our selection sort method, and
# print the sorted list it returns.
print(selection_sort(numbers))
