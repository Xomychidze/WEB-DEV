def hello_name(name):
    return f"Hello {name}!"

def make_abba(a, b):
    return a + b + b + a

def make_tags(tag, word):
    return f"<{tag}>{word}</{tag}>"

def make_out_word(out, word):
    return out[:2] + word + out[2:]

def extra_end(str_val):
    return str_val[-2:] * 3

def first_two(str_val):
    return str_val[:2]

def first_half(str_val):
    return str_val[:len(str_val) // 2]

def without_end(str_val):
    return str_val[1:-1]

def combo_string(a, b):
    if len(a) <= len(b):
        return a + b + a
    return b + a + b

def non_start(a, b):
    return a[1:] + b[1:]

def left2(str_val):
    return str_val[2:] + str_val[:2]
