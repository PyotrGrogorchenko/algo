import math
from typing import List


class Solution:

    def countSmaller(self, nums: List[int]) -> List[int]:
        def build(l, r):
            if l == r:
                return {'l': l, 'r': r, 'v': nums[l], 'c': 0}
            else:
                m = math.floor((l + r) / 2)
                n = {
                    'L': build(l, m),
                    'R': build(m + 1, r),
                    'l': l,
                    'r': r,
                    'c': 0
                }
                # n['c'] = n['L']['c'] + n['R']['c']
                if nums[l] > nums[r]:
                    n['c'] += 1
                    n['c'] += n['R']['c'] + n['L']['c']

                return n

        def get_sum(n, l, r):
            if n['l'] >= l and n['r'] <= r:
                return n['c']
            if n['l'] < l and n['r'] < r:
                return 0
            s = get_sum(n['L'], l, r) + get_sum(n['R'], l, r)
            # if nums[n['L']['r']] > nums[n['R']['l']]:
            #     s += 1
            return s


        root = build(0, len(nums) - 1)

        res = []
        for i in range(len(nums)):
            res.append(get_sum(root, i, len(nums) - 1))
        print(res)


s = Solution()
s.countSmaller([4,3,2,1])
s.countSmaller([3,2,1])
s.countSmaller([10,9,8,7,6,5,4,3,2,1,0])
s.countSmaller([5,2,6,1])
s.countSmaller([-1])
s.countSmaller([-1,-1])
s.countSmaller([-1,-2,-3,-4,-5,-6,-7,-8,-9])