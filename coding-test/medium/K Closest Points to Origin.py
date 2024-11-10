import heapq
from typing import List


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        minHeap = []
        for x, y in points:
            dist = (x**2) + (y**2)
            minHeap.append([dist, x, y])

        heapq.heapify(minHeap)
        res = []
        while k > 0:
            dist, x, y = heapq.heappop(minHeap)
            res.append([x, y])
            k -= 1

        return res


# 여기서 k는 주어진 points 중에서 가장 가까운 k개의 좌표를 찾기 위해 필요한 매개변수입니다. 즉, k는 결과 리스트에 포함될 가장 가까운 좌표의 개수를 의미합니다.

# 이 함수 kClosest의 동작을 간단히 설명하면:

# 각 좌표 (x, y)에 대해 원점 (0, 0)에서의 거리를 계산하여, 해당 거리와 좌표를 minHeap 리스트에 추가합니다. 거리는 유클리드 거리 공식을 사용하여 (x^2 + y^2)로 계산합니다.

# heapq.heapify(minHeap)를 통해 minHeap을 최소 힙으로 만듭니다. 이렇게 하면 힙의 최상단에는 항상 가장 짧은 거리를 가진 좌표가 위치하게 됩니다.

# k번 동안 힙에서 최솟값을 heappop으로 추출하여 res 리스트에 추가합니다. 이 과정에서 거리가 짧은 순서대로 좌표가 res에 저장됩니다.

# res에는 원점에서 가장 가까운 k개의 좌표가 포함되며, 이를 반환합니다.

# 요약
# k는 가장 가까운 좌표의 개수로, 함수가 결과로 반환할 좌표의 수를 결정하는 역할을 합니다.
