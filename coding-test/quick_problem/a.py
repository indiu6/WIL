from collections import Counter


def can_be_doubled(nums):
    nums.sort(key=abs)  # 절대값 기준으로 정렬
    count = Counter(nums)  # 원소의 개수를 저장

    for num in nums:
        if count[num] == 0:
            continue  # 이미 매칭된 경우 건너뜀

        if count[2 * num] == 0:
            return False  # 두 배 값이 없는 경우 False 반환

        count[num] -= 1  # 매칭 처리
        count[2 * num] -= 1

    return True
