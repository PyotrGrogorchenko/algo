import sys


def solve(resource):
    s = resource.readline().strip()
    print('finish', s)

print('test 001')
solve(open('tests/001.txt'))

# solve(sys.stdin)