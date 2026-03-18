import math

a = int(input())
b = int(input())
result = []
for i in range(a, b + 1):
    sq = int(math.isqrt(i))
    if sq * sq == i:
        result.append(str(i))
print(" ".join(result))
