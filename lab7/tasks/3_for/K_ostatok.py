a = int(input())
b = int(input())
m = int(input())
r = int(input())
result = []
for i in range(a, b + 1):
    if i % m == r:
        result.append(str(i))
print(" ".join(result))
