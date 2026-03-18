def double_char(str_val):
    return "".join(c * 2 for c in str_val)

def count_hi(str_val):
    return str_val.count("hi")

def cat_dog(str_val):
    return str_val.count("cat") == str_val.count("dog")

def count_code(str_val):
    count = 0
    for i in range(len(str_val) - 3):
        if str_val[i] == 'c' and str_val[i+3] == 'e':
            count += 1
    return count

def end_other(a, b):
    a, b = a.lower(), b.lower()
    return a.endswith(b) or b.endswith(a)

def xyz_there(str_val):
    for i in range(len(str_val) - 2):
        if str_val[i:i+3] == "xyz":
            if i == 0 or str_val[i-1] != '.':
                return True
    return False
