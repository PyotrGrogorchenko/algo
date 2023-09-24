import os
import sys


def solve(n, vertexes):
    print('solve')


def read_data(data):
    n = int(data.readline().strip())
    vertexes = []
    for i in range(n):
        vertexes.append(list(map(int, data.readline().strip().split())))
    solve(n, vertexes)


for file_name in os.listdir(path='tests'):
    file_data = open(f'tests/{file_name}')
    read_data(file_data)

# read_data(sys.stdin)

