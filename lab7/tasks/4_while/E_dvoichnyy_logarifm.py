n = int(input())
k = 0
while (1 << (k + 1)) <= n:
    k += 1
print(k)
