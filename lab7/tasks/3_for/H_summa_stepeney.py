n = int(input())
k = int(input())
total = 0
for i in range(1, n + 1):
    total += i ** k
print(total)
