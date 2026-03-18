def xor(x, y):
    return 1 if (x == 1) != (y == 1) else 0

line = input().split()
x = int(line[0])
y = int(line[1])
print(xor(x, y))
