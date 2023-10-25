import heapq
import os
import sys
from operator import itemgetter


def solve(data):
    nm = list(map(int, data.readline().strip().split()))

    for i in range(nm[0]):
        pin = list(map(lambda x: 10 if x == '0' else int(x), list(data.readline().strip())))

        res = abs(pin[0] - 1) + abs(pin[1] - pin[0]) + abs(pin[2] - pin[1]) + abs(pin[3] - pin[2]) + 4
        print(res)


# print('test 001')
# solve(open('tests/001.txt'))

solve(sys.stdin)

