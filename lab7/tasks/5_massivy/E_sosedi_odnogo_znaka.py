a = list(map(int, input().split()))
result = []
for i in range(1, len(a) - 1):
    same_left  = (a[i] > 0 and a[i-1] > 0) or (a[i] < 0 and a[i-1] < 0)
    same_right = (a[i] > 0 and a[i+1] > 0) or (a[i] < 0 and a[i+1] < 0)
    if same_left and same_right:
        result.append(a[i])
print(*result)
