import os
import sys


def dsu_find(p, v):
    if p[v] == v:
        return v
    return dsu_find(p, p[v])


def dsu_unite(p, a, b):
    a = dsu_find(p, a)
    b = dsu_find(p, b)
    if a != b:
        p[a] = p[b]


def solve(n, points):
    g = []
    for i in range(n):
        x1, y1 = points[i]
        for j in range(i + 1, n):
            x2, y2 = points[j]
            x = abs(x1 - x2)
            y = abs(y1 - y2)
            d = (x**2 + y**2) ** 0.5
            if d == 0:
                continue
            g.append((i, j, d))
    g.sort(key=lambda v: v[2])

    res = 0
    p = [i for i in range(n)]
    for e in g:
        a = e[0]
        b = e[1]
        d = e[2]
        if dsu_find(p, a) != dsu_find(p, b):
            res += d
            dsu_unite(p, a, b)

    print(str(round(res, 10)))


def read_data(data):
    n = int(data.readline().strip())
    points = []
    for i in range(n):
        points.append(list(map(int, data.readline().strip().split())))
    solve(n, points)


for file_name in os.listdir(path='tests'):
    file_data = open(f'tests/{file_name}')
    read_data(file_data)

# read_data(sys.stdin)

