a = float(input())
n = int(input())
result = 1.0
for _ in range(n):
    result *= a
print(int(result) if result == int(result) else result)
