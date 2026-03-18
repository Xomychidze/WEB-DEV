a = list(map(int, input().split()))
result = [a[i] for i in range(1, len(a)) if a[i] > a[i - 1]]
print(*result)
