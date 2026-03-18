n = int(input())
k = int(input())

def factorial(x):
    f = 1
    for i in range(1, x + 1):
        f *= i
    return f

print(factorial(n) // (factorial(k) * factorial(n - k)))
