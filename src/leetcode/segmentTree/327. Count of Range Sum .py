import math
from typing import List


class Node:
    def __init__(self, v=0, l=None, r=None, L=None, R=None):
        self.v = v
        self.L = L
        self.R = R
        self.l = l
        self.r = r
        self.count = 0

class Solution:
    def countRangeSum(self, nums: List[int], lower: int, upper: int) -> int:
        def build(l, r):
            if l == r:
                node = Node(nums[l], l, r)
                return node
            else:
                m = math.floor((l+r)/2)
                node = Node(0, l, r)
                node.L = build(l, m)
                node.R = build(m+1, r)
                node.v = node.L.v + node.R.v
                return node

        def get_sum(node, l, r):
            if node.l >= l and node.r <= r:
                return node.v
            if max(node.l, l) > min(node.r, r):
                return 0
            return get_sum(node.L, l, r) + get_sum(node.R, l, r)

        root = build(0, len(nums)-1)

        res = 0
        for i in range(len(nums)):
            for j in range(i, len(nums)):
                sum = get_sum(root, i, j)
                if lower <= sum <= upper:
                    res += 1
        return res


s = Solution()
print(s.countRangeSum([2, -4, 5, 2,8, -9, 6, 3], -3, 5))
print(s.countRangeSum([-2,5,-1], -2, 2))
print(s.countRangeSum([0], 0, 0))



