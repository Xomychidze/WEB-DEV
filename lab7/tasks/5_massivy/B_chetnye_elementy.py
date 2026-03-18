a = list(map(int, input().split()))
result = [x for x in a if x % 2 == 0]
print(*result)
