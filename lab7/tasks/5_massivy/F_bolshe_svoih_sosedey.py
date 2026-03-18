a = list(map(int, input().split()))
result = []
for i in range(1, len(a) - 1):
    if a[i] > a[i - 1] and a[i] > a[i + 1]:
        result.append(a[i])
print(*result)
