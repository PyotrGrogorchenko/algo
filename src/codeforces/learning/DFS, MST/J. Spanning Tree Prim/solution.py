import heapq
import os
import sys
from operator import itemgetter


def solve(n, m, edges):
    g = [[] for i in range(n)]
    for e in edges:
        g[e[0]-1].append([e[1]-1, e[2]])
        g[e[1]-1].append([e[0]-1, e[2]])

    visited = set()
    heap = [[0, 0]]
    res = 0
    while len(visited) < n:
        d, i = heapq.heappop(heap)
        if i in visited:
            continue
        visited.add(i)
        res += d
        for I, D in g[i]:
            if I not in visited:
                heapq.heappush(heap, [D, I])

    print(res)


def read_data(data):
    nm = list(map(int, data.readline().strip().split()))
    edges = []
    for i in range(nm[1]):
        edges.append(list(map(int, data.readline().strip().split())))
    solve(nm[0], nm[1], edges)


for file_name in os.listdir(path='tests'):
    file_data = open(f'tests/{file_name}')
    read_data(file_data)

# read_data(sys.stdin)

