def add_2_num(a, b):
    x = a + b
    print(x)
    return x

def div_2_num(a, b):
    x = a / b
    print(x)
    return x

def payment(hours, rate):
    x = hours * rate
    print(x)
    return x 

def num_ocurrencies(my_list):
    ocurrencies = {}
    for x in my_list:
        if x in ocurrencies:
            ocurrencies[x] +=1
        else:
            ocurrencies[x] = 1

        # if x not in ocurrencies:
        #    ocurrencies[x] = 0
        # ocurrencies[x] += 1
   # print(ocurrencies)
    return ocurrencies

def lookup_prov(code):
    prov = {"bc": "British Columbia",
            "ab": "Alberta",
            "sk": "Saskatchewan",
            "mb": "Manitoba"}
    
    return 'Welcome from ' + prov[code]
    
        
  



# add_2_num(67, 90)
# div_2_num(45, 15)
# num_ocurrencies([1,2,3,1,2,2,3,3,3])
#lookup_prov("bc")