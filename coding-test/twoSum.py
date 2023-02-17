def twoSum(nums: list, target: int):
    # O(nlogn)
    nums.sort()

    l, r = 0, len(nums) - 1

    # O(n)
    while l < r:
        if target > nums[l] + nums[r]:
            l += 1
        elif target < nums[l] + nums[r]:
            r -= 1
        else:
            return True

    return False


# nums = [2, 7, 11, 15]
# target = 9
# print(twoSum(nums, target))

"""_summary_
메모리를 잘 사용하면 시간효율을 높일 수 있다. 메모리를 잘 활용한다는 것은 자료구조를 적재적소에 사용한다는 것이다. 배열로 들어온 데이터를 트리나 그래프등으로 변환한 후 문제를 푸는 방식도 있을 것이다. 그 중에서도 가장 자주 사용되고 효과가 굉장히 좋은 것은 hashmap을 사용하는 것이다.    
https://www.nossi.dev/cote/time-complexity
"""

# if i in num(arr):
#   o(n)


def twoSumHashMap(nums: list, target: int):
    seen = {}  # 비어있는 hashmap 선언

    for i, v in enumerate(nums):
        print(i, v)
        complement = target - v
        if complement in seen:
            return [seen[complement], i]
        else:
            seen[v] = i

    return False


# nums = [2, 7, 11, 15]
# target = 9
# print(twoSumHashMap(nums, target))


def twoSumNew(nums: list[int], target: int) -> list[int]:
    hashmap = {}

    for i in range(len(nums)):
        complement = target - nums[i]
        if complement in hashmap:
            return [hashmap[complement], i]
        hashmap[nums[i]] = i


nums = [2, 7, 11, 15]
target = 9
print(twoSumNew(nums, target))
