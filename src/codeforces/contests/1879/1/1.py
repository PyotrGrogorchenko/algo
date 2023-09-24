import os
import sys


def solve(n, power):
    s = power[0][0]
    e = power[0][1]
    m = 0
    for i in range(1, n):
        if power[i][1] < e:
            continue
        m = power[i][0] + 1

    print(m if s > m else -1)


def read_data(data):
    k = int(data.readline().strip())
    for i in range(k):
        n = int(data.readline().strip())
        power = []
        for j in range(n):
            power.append(list(map(int, data.readline().strip().split())))
        solve(n, power)


for file_name in os.listdir(path='tests'):
    file_data = open(f'tests/{file_name}')
    read_data(file_data)

# read_data(sys.stdin)

