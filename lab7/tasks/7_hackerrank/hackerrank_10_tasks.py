# 1. Say "Hello, World!" With Python
print("Hello, World!")


# 2. Python If-Else
n = int(input().strip())
if n % 2 != 0:
    print("Weird")
elif 2 <= n <= 5:
    print("Not Weird")
elif 6 <= n <= 20:
    print("Weird")
else:
    print("Not Weird")


# 3. Arithmetic Operators
a = int(input())
b = int(input())
print(a + b)
print(a - b)
print(a * b)


# 4. Python: Division
a = int(input())
b = int(input())
print(a // b)
print(a / b)


# 5. Loops
n = int(input())
for i in range(n):
    print(i * i)


# 6. Print Function
n = int(input())
print(*range(1, n + 1), sep="")


# 7. List Comprehensions
x = int(input())
y = int(input())
z = int(input())
n = int(input())
print([[i, j, k] for i in range(x + 1)
                  for j in range(y + 1)
                  for k in range(z + 1)
                  if i + j != n])


# 8. Find the Runner-Up Score
n = int(input())
arr = list(map(int, input().split()))
print(sorted(set(arr))[-2])


# 9. Nested Lists
students = []
for _ in range(int(input())):
    name  = input()
    score = float(input())
    students.append([name, score])
scores = sorted(set(s for _, s in students))
second_lowest = scores[1]
for name in sorted(name for name, s in students if s == second_lowest):
    print(name)


# 10. String Formatting
n = int(input())
w = len(bin(n)) - 2
for i in range(1, n + 1):
    print(str(i).rjust(w),
          oct(i)[2:].rjust(w),
          hex(i)[2:].upper().rjust(w),
          bin(i)[2:].rjust(w))
