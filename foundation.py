
#
# For this assignment ensure you code using the best
# practices we have talked about. Do this cycle for each
# function you develop. Write the code in this module and
# create the appropriate test file.
# order:
# - write the stub
# - write the tests
# - run the tests (they must fail)
# - make them work
#

#
# All code must be in a function. Write all the code in this
# file and in the test code file. Create one function and several
# tests (in one method) to test the function.
#
def foundation_add(a,b):
    if a >= 0 and b >= 0:
        return a + b
    else:
        return None
#
# Write the code to prove to me you understand a function. Create
# your own function that has at least 5 lines in it. Create the tests
# to prove the function is doing what you expect.
#
def foundation_op(a, b):
    if b != 0:
        x = a + b
        y = a - b
        z = a * b
        k = a / b 
        l = a % b
        m = a ** b
        n = a // b
        print([x, y, z, k, l , m, n])
        return [x, y, z, k, l, m, n]
#
# Write the code to prove you understand if statements and else
# statements. Make sure there are several statements in the if 
# and else. Write the code that proves to me you understand it.
#
def foundation_if(temper_a_ture):
    if temper_a_ture >= 6 and temper_a_ture < 27:
        print('go outside and enjoy the day')
        return 'go outside and enjoy the day'
   
    if temper_a_ture >= 27:
        print('do something else')
        return 'do something else'

    if temper_a_ture <= 5:
        print('stay at home, it is too cold')
        return'stay at home, it is too cold'

def foundation_if2(temper_a_ture):
    if temper_a_ture <= 5:
        print('stay at home, it is too cold')
        return'stay at home, it is too cold'

    if temper_a_ture >= 27:
        print('do something else')
        return 'do something else'

    print('go outside and enjoy the day')
    return 'go outside and enjoy the day'
   
def foundation_if_else(temper_a_ture):
    if temper_a_ture <= -15:
        return 'go to Hawaii hehehe'

    elif temper_a_ture >= 27:
        return 'get an air conditioning'

    else:
        return 'go outside and enjoy the day'
#
# while
#
def foundation_mientras(times, number):
    counter = 0
    sum = 0
    while counter < times:
        counter = counter + 1
        sum = sum + number
        print(sum)
    return sum
    

def foundation_while(num):
    while  num > 0 and num < 10:
        print('counting up to ' + str(num))
        return 'counting up to ' + str(num)
    
    else:
        print('finito')
        return 'finito'

foundation_while(5)

#
# range + array/list
#

def foundation_range(a, b):
    out = []
    i = a 
    while i < b - 1:
        i = i + 1
        out.append(i)
    print("hello", out)
    return out
foundation_range(5, 9)

def foundation_range2(a, b):  
    out = []
    for i in range(a, b):
        if i % 2 == 0:
            out.append(i)
    print(out)
    return out

foundation_range2(5, 19)
#
# dictionary
#
def foundation_dict(my_word):
    if my_word == None:
        return None

    meaning = {'mom': 'mamá', 
               'dad': 'papá', 
               'uncle': 'tío', 
               'auntie': 'tía'}
    print('In spanish means, ' + meaning[my_word.lower()] + '!')
    return 'In spanish means, ' + meaning[my_word.lower()] + '!'
    
foundation_dict('Uncle')
#
# string and string functions
#
def foundation_longest_string(my_list):
    if len(my_list) == 0:
        return None
    longest = my_list[0]
    for i in my_list[1:]:
        if len(i) >= len(longest):
            longest = i
    return longest

print(foundation_longest_string(['dancer', 'salsa', 'sweet', 'assets']))
#
# pick another concept to write a test about.
#
def foundation_while2():
    max_tries = 4
    counter = 0
    password = input('password: ')
    while password != 'home' and counter < max_tries:
        password = input('please try again: ')
        counter += 1
    if password == 'home':
        print('come on in')
        return 'come on in'
    else:
        print('get out')
        return 'get out'

