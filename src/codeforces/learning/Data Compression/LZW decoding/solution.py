import sys


def solve(resource):
    codes = resource.readline().strip().split(' ')


    print('finish', codes)

print('test 001')
solve(open('tests/001.txt'))

print('test 002')
solve(open('tests/002.txt'))

print('test 003')
solve(open('tests/003.txt'))

# solve(sys.stdin)