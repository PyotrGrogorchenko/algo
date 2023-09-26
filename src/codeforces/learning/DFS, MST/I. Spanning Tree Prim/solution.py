import heapq
import os
import sys


def solve(n, points):
    g = {i:[] for i in range(n)}
    for i in range(n):
        x1, y1 = points[i]
        for j in range(n):
            x2, y2 = points[j]
            x = abs(x1 - x2)
            y = abs(y1 - y2)
            d = round((x**2 + y**2) ** 0.5, 10)
            if d == 0:
                continue
            g[i].append((d, j))
            g[j].append((d, i))

    visited = set()
    heap = [[0, 0]]
    res = 0
    while len(visited) < n:
        d, i = heapq.heappop(heap)
        if i in visited:
            continue
        visited.add(i)
        res += d
        for D, I in g[i]:
            if I not in visited:
                heapq.heappush(heap, [D, I])
    print(str(round(res, 10)))


def read_data(data):
    n = int(data.readline().strip())
    points = []
    for i in range(n):
        points.append(list(map(int, data.readline().strip().split())))
    solve(n, points)


# for file_name in os.listdir(path='tests'):
#     file_data = open(f'tests/{file_name}')
#     read_data(file_data)

read_data(sys.stdin)

