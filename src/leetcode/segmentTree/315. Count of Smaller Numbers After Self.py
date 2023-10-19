import math
from typing import List

class Node:
    def __init__(self, v=0, l=None, r=None, L=None, R=None):
        self.v = v
        self.L = L
        self.R = R
        self.count = 0
        self.smaller = 0

class Solution:

    def countSmaller(self, nums: List[int]) -> List[int]:
        def ins(num):
            node = root
            sum = 0

            while node.v != num:
                if num < node.v:
                    if not node.L:
                        node.L = Node(num)
                    node.smaller += 1
                    node = node.L
                else:
                    sum += node.smaller + node.count
                    if not node.R:
                        node.R = Node(num)
                    node = node.R
            node.count += 1
            return sum + node.smaller

        root = Node(nums[-1])
        res = [0] * len(nums)
        for i in range(len(nums)-1, -1, -1):
            res[i] = ins(nums[i])
        return res

s = Solution()
print(s.countSmaller([4,3,2,1]))
print(s.countSmaller([3,2,1]))
print(s.countSmaller([10,9,8,7,6,5,4,3,2,1,0]))
print(s.countSmaller([5,2,6,1]))
print(s.countSmaller([-1]))
print(s.countSmaller([-1,-1]))
print(s.countSmaller([-1,-2,-3,-4,-5,-6,-7,-8,-9]))
