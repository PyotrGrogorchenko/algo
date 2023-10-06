import heapq
import os
import sys


def solve(n, m, e):
    g = {i: [] for i in range(n)}
    for i in range(m):
        g[e[i][0]-1].append([e[i][1]-1])
        g[e[i][1]-1].append([e[i][0]-1])

    def dfs(v, p):
        nonlocal t
        visited[v] = 1
        tin[v] = t
        up[v] = t
        t += 1
        children = 0

        for [to] in g[v]:
            if v == p:
                continue
            if visited[to] == 1:
                up[v] = min(up[v], tin[to])
            if visited[to] == 0:
                dfs(to, v)
                up[v] = min(up[v], up[to])
                children += 1
                if up[to] >= tin[v] and p != -1:
                    res.append(v+1)

        if p == -1 and children > 1:
            res.append(v+1)



    res = []
    t = 0
    visited = [0] * n
    tin = [0] * n
    up = [0] * n

    for ver in g:
        if visited[ver] == 0:
            dfs(ver, -1)

    print(len(res))
    if len(res) > 0:
        print(' '.join(map(str, sorted(res))))



def read_data(data):
    nm = list(map(int, data.readline().strip().split()))
    e = []
    for i in range(nm[1]):
        e.append(list(map(int, data.readline().strip().split())))
    solve(nm[0], nm[1], e)


# for file_name in os.listdir(path='tests'):
#     file_data = open(f'tests/{file_name}')

# print('test 001')
# read_data(open('tests/001.txt'))

read_data(sys.stdin)
