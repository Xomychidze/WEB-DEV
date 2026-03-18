b1 = int(input())
q  = int(input())
n  = int(input())
total = 0
current = b1
for _ in range(n):
    total += current
    current *= q
print(total)
