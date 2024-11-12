from collections import deque


def shortest_path_in_maze(maze, start, end):
    rows, cols = len(maze), len(maze[0])
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # 동, 남, 서, 북 이동
    queue = deque([(start[0], start[1], 0)])  # (x, y, 거리)
    visited = set([start])

    while queue:
        x, y, dist = queue.popleft()

        if (x, y) == end:
            return dist  # 목표 위치에 도달 시 거리 반환

        for dx, dy in directions:
            nx, ny = x + dx, y + dy

            if (
                0 <= nx < rows
                and 0 <= ny < cols
                and maze[nx][ny] == 0
                and (nx, ny) not in visited
            ):
                visited.add((nx, ny))
                queue.append((nx, ny, dist + 1))

    return -1  # 목표 위치에 도달하지 못한 경우 -1 반환
