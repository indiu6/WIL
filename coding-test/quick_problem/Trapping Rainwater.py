# Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
# Output: 6


def trap(height):
    n = len(height)
    total_water = 0

    for i in range(n):
        left_max = max(height[: i + 1])  # 현재 인덱스까지 왼쪽에서 가장 높은 벽
        right_max = max(height[i:])  # 현재 인덱스부터 오른쪽에서 가장 높은 벽
        total_water += max(0, min(left_max, right_max) - height[i])  # 물의 높이

    return total_water


# 테스트
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
print(trap(height))  # 출력: 6

# time n^2 (각 인덱스마다 좌우 최대값 계산), space 1

# ------------------------------------------------


def trap(height):
    n = len(height)
    if n == 0:
        return 0

    left_max = [0] * n
    right_max = [0] * n
    total_water = 0

    # 왼쪽 최대값 계산
    left_max[0] = height[0]
    for i in range(1, n):
        left_max[i] = max(left_max[i - 1], height[i])

    # 오른쪽 최대값 계산
    right_max[n - 1] = height[n - 1]
    for i in range(n - 2, -1, -1):
        right_max[i] = max(right_max[i + 1], height[i])

    # 물의 총량 계산
    for i in range(n):
        total_water += max(0, min(left_max[i], right_max[i]) - height[i])

    return total_water


# 테스트
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
print(trap(height))  # 출력: 6

# time n (좌우 최대값 계산), space n (좌우 최대값 계산)

# ------------------------------------------------


def trap(height):
    n = len(height)
    if n == 0:
        return 0

    left, right = 0, n - 1
    left_max, right_max = 0, 0
    total_water = 0

    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                total_water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                total_water += right_max - height[right]
            right -= 1

    return total_water


# 테스트
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
print(trap(height))  # 출력: 6

# time n (한 번의 순회), space 1 (추가 배열 없음)
