import math
from typing import List


class TreeNode:
    def __init__(self, v=0, l=None, r=None, L=None, R=None):
        self.v = v
        self.l = l
        self.r = r
        self.L = L
        self.R = R
        self.set = None


class NumArray:
    def __init__(self, nums: List[int]):
        def build(l, r):
            if l == r:
                return TreeNode(nums[l], l, r)
            else:
                m = math.floor((l + r) / 2)
                node = TreeNode(0, l, r)
                node.L = build(l, m)
                node.R = build(m + 1, r)
                node.v = node.L.v + node.R.v
                return node

        self.root = build(0, len(nums) - 1)

    def update(self, index: int, val: int) -> None:
        def upd(node):
            if node.l == node.r == index:
                node.v = val
                return node.v
            if node.l <= index <= node.r:
                node.v = upd(node.L) + upd(node.R)
            return node.v

        upd(self.root)

    def sumRange(self, left: int, right: int) -> int:
        def calc_sum(node):
            if node.l >= left and node.r <= right:
                return node.v
            if node.r < left or node.l > right:
                return 0
            return calc_sum(node.L) + calc_sum(node.R)
        return calc_sum(self.root)


def test(cmd, nums):
    numArray = NumArray(nums[0][0])
    for i in range(1, len(cmd)):
        print(getattr(numArray, cmd[i])(*nums[i]))


# print('test 1')
# test(["NumArray", "sumRange", "update", "sumRange"],
#         [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]])

print('test 2')
test(["NumArray","update","sumRange","sumRange","update","sumRange"],
        [[[9,-8]],[0,3],[1,1],[0,1],[1,-3],[0,1]])
