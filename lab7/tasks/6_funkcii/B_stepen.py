def power(a, n):
    result = 1.0
    for _ in range(n):
        result *= a
    return result

line = input().split()
a = float(line[0])
n = int(line[1])
res = power(a, n)
if res == int(res):
    print(int(res))
else:
    print(res)
