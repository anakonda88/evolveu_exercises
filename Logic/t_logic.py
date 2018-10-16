 
#4.- A function is a block of code which only runs when it is called. 
#  These blocks begin with the keyword def followed by the function
#  name and parentheses ( ( ) ). 
#  The 2 things that a function does are: define and run.
#  The input are the arguments inside brackets() and the return 
#   is the output

# Python knows how many lines are in a function depending on the indentention.

#5.- To execute a function you put the name of the function and in brackets 
#   the arguments that you wnat to pass to your function.

#8.- Steps to create a function:
#   def-name of the function-(input/arguments):
#       Indented should be your 

#9.- Python math operators:
#   + Addition
#   - Subtraction
#   * Multiplication
#   / Division
#   % Modulus
#   ** Exponent
#   // Floor division

#9-10
def t_logic2(a, b):
    
    x = a + b
    y = a - b
    z = a * b
    k = a / b 
    l = a % b
    m = a ** b
    n = a // b

    return x, y, z, k, l, m, n
  


print(t_logic2(3, 2))



def largest_num(my_list):
    if len(my_list) == 0:
        return None
    largest = my_list[0]
    for i in my_list[1:]:
        if i > largest:
            largest = i
    return largest
print(largest_num([3, 2, 89]))


#12.- The range() function returns a sequence of numbers, 
# starting from 0 by default, and increments by 1 (by default),
# and ends at a specified number
# Syntax range(start, stop, step)


#13
def some_range(a, b):   
    out = []
    for i in range(a + 1, b):
        out.append(i)
    print(out)
    return out

some_range(5, 9)


def some_range2(a, b):
    out = []
    i = a 
    while i < b - 1:
        i = i + 1
        out.append(i)
    print("hello", out)
    return out

some_range2(5, 9)

def odd_num(a, b):   
    out = []
    for i in range(a, b):
        if i % 2 != 0:
            out.append(i)
    print(out)
    return out

odd_num(5, 19)

#15.- Python comparison operators:
# == If the values of two operands are equal, 
#       then the condition becomes true
# != If values of two operands are not equal, 
#       then condition becomes true
# <> If values of two operands are not equal, 
#       then condition becomes true
# >  If the value of left operand is greater 
#       than the value of right operand, 
#       then condition becomes true
# <  If the value of left operand is less than the value of right operand, 
#       then condition becomes true
# >= If the value of left operand is greater than or 
#       equal to the value of right operand, 
#       then condition becomes true
# <= If the value of left operand is less than or equal to the value of right operand, 
#       then condition becomes true.

def comp_op(a, b):
    if a != b and a < b: 
        print(a)
    if b >= a:
        print(b)
    if a == a and b > a:
        print(a, b)
    if b <= a:
        print(b)      

comp_op(5, 7) 

def cont_list(my_list):
    print(my_list)

cont_list([2, 4, 6, 7])

def longest_string(my_list):
    if len(my_list) == 0:
        return None
    longest = my_list[0]
    for i in my_list[1:]:
        if len(i) > len(longest):
            longest = i
        return longest

print(longest_string(['dog', 'pancakes', 'sweet'])) 

def line_by_line(filepath):  
    my_file = open(filepath, "r")  
    lines = my_file.readlines()
    for line in lines:
        print(line)
    



line_by_line('test_t_logic.py')
#line_by_line('~/.profile')
line_by_line('../tdd/tdd2.py')
line_by_line('/home/evolveu/Repositories/evolveU_exercises/Logic/t_logic.py')