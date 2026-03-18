def sleep_in(weekday, vacation):
    return not weekday or vacation

def monkey_trouble(a_smile, b_smile):
    return a_smile == b_smile

def sum_double(a, b):
    if a == b:
        return (a + b) * 2
    return a + b

def diff21(n):
    if n > 21:
        return (n - 21) * 2
    return 21 - n

def parrot_trouble(talking, hour):
    return talking and (hour < 7 or hour > 20)

def pos_neg(a, b, negative):
    if negative:
        return a < 0 and b < 0
    return (a < 0) != (b < 0)

def makes10(a, b):
    return a == 10 or b == 10 or a + b == 10

def near_hundred(n):
    return abs(n - 100) <= 10 or abs(n - 200) <= 10

def string_e(str_val):
    count = str_val.count('e')
    return count == 1 or count == 3

def last2(str_val):
    if len(str_val) < 2:
        return 0
    end = str_val[-2:]
    count = 0
    for i in range(len(str_val) - 2):
        if str_val[i:i+2] == end:
            count += 1
    return count
