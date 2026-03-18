n = int(input())
total = 0.0
fact = 1
for i in range(n + 1):
    if i > 0:
        fact *= i
    total += 1 / fact
print(total)
