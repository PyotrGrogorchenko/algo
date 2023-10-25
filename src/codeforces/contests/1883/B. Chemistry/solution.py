import heapq
import os
import sys
from operator import itemgetter


def solve(data):
    nm = list(map(int, data.readline().strip().split()))

    for i in range(nm[0]):
        nk = list(map(int, data.readline().strip().split(' ')))
        s = sorted(list(data.readline().strip()))
        print(s)


print('test 001')
solve(open('tests/001.txt'))

# solve(sys.stdin)

