def string_times(str_val, n):
    return str_val * n

def front_times(str_val, n):
    return str_val[:3] * n

def string_bits(str_val):
    return str_val[::2]

def string_splosion(str_val):
    result = ""
    for i in range(len(str_val) + 1):
        result += str_val[:i]
    return result

def last2(str_val):
    if len(str_val) < 2:
        return 0
    end = str_val[-2:]
    count = 0
    for i in range(len(str_val) - 2):
        if str_val[i:i+2] == end:
            count += 1
    return count

def array_count9(nums):
    return nums.count(9)

def array_front9(nums):
    return 9 in nums[:4]

def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
            return True
    return False

def string_match(a, b):
    count = 0
    for i in range(min(len(a), len(b)) - 1):
        if a[i:i+2] == b[i:i+2]:
            count += 1
    return count
