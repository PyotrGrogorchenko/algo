import heapq
import os
import sys


def solve(n, m, e):
    g = {i: [] for i in range(n)}
    for i in range(m):
        g[e[i][0]-1].append([e[i][1]-1, i+1])
        g[e[i][1]-1].append([e[i][0]-1, i+1])

    def dfs(v, p):
        nonlocal t
        tin[v] = up[v] = t
        t += 1

        visited[v] = 1

        for to, i in g[v]:
            if to == p:
                continue
            if visited[to] == 1:
                up[v] = min(up[v], tin[to])
            if visited[to] == 0:
                dfs(to, v)
                up[v] = min(up[v], up[to])
                if up[to] > tin[v]:
                    res.append(i)


    res = []
    visited = [0] * n
    tin = [0] * n
    up = [0] * n
    t = 0
    for ver in g:
        if visited[ver] == 0:
            dfs(ver, -1)

    print(len(res))
    if len(res) == 0:
        return
    print(' '.join(map(str, sorted(res))))


def read_data(data):
    nm = list(map(int, data.readline().strip().split()))
    e = []
    for i in range(nm[1]):
        e.append(list(map(int, data.readline().strip().split())))
    solve(nm[0], nm[1], e)


# for file_name in os.listdir(path='tests'):
#     file_data = open(f'tests/{file_name}')

print('test 001')
read_data(open('tests/001.txt'))
print('test 002')
read_data(open('tests/002.txt'))
print('test 003')
read_data(open('tests/003.txt'))
print('test 004')
read_data(open('tests/004.txt'))
print('test 005')
read_data(open('tests/005.txt'))

# read_data(sys.stdin)
