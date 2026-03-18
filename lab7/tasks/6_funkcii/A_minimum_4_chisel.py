def minimum4(a, b, c, d):
    return min(a, b, c, d)

nums = list(map(int, input().split()))
print(minimum4(nums[0], nums[1], nums[2], nums[3]))
