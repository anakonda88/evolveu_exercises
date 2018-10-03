#to be used to import dates to convert string to a date
import datetime
import openpyxl as xl

def add_five(bbbb):
    xxxx = bbbb + 5
    return xxxx
    
def my_max(myList):
    maximum = myList[0]
    for i in myList[1:]:
        if i > maximum:
            maximum = i
    return maximum

def my_min(myList):
    minimum = myList[0]
    for x in myList[1:]:
        if x < minimum:
            minimum = x 
    return minimum

def has_string(s_list, string):
    out = []
    for sentence in s_list:
        if string in sentence:
            out.append(sentence)
    return out
         
def to_date(string_date):
    parts = string_date.split('-') # split the string into three substrings
    # invoke function date from datetime with numbers from the substrings
    return datetime.date(int(parts[0]), 
                         int(parts[1]), 
                         int(parts[2]))

def date_diff(string_date_1, string_date_2):
    return (to_date(string_date_1) - to_date(string_date_2)).days

def contains(a, b):
    return (b in a)
    #return has_string(a, b)

def add_contents(my_list):
    total = 0
    for i in my_list:
        total += i
    return total

def lookup(my_dict, code):
    return my_dict[code] + ' mine'

def verify_client(date, name):
    wb = xl.load_workbook('/home/evolveu/Downloads/cSpace_Bookingv1.xlsx', read_only=True)
# The worksheet needed is called 'Clients'
    test_clients = wb['Clients']
print(test_clients)
    
  