

def play_with_lists():
    print('I am in play_with_lists')
    # Create a list
    my_buds = ['Ray', 'Barry', 'Rosz']
    # Print the length of the list
    print('My list has ' + str(len(my_buds)) + ' entries')
    # Print the list. I pass the name of the list 
    # as the argument of the function print
    print(my_buds)
    # Add and entry to the end of the list
    # and a print statement to check if it worked
    my_buds.append('Ryker')
    #print your new list
    print(my_buds)
    #print only the third entry of your list
    print(my_buds[3])
    #print only the second entry of your list
    print(my_buds[2])
    #loop through the list and print each entry in a separate line
    for x in my_buds:
        print(x)
   #print before switch list
    print('before switch',my_buds)
    #switch the entry in position 1 with the entry in position 2;
    y = my_buds[1] 
    my_buds[1] = my_buds[2]
    my_buds[2] = y
    #print the new list that show the switch
    print(my_buds)
    #add an entry between position 2 and 3 
    my_buds.insert(2, "Lemi")
    #print to check that your code is working
    print(my_buds)



#Create a method to sum all the numbers on a list
def someNumbers(my_list):
    total = 0
    for i in my_list:
        total += i
    print(total)
    return total
#Create a method to average the numbers in the list
def averageNum(my_list):
    total = 0
    for i in my_list:
        total += i
    return total / len(my_list)

def play_with_dictionaries():
    print("I'm in play_with_dictionaries")

    #create a dictionary
    my_provs = {
    "bc": "British Columbia",
    "ab": "Alberta",
    "sk": "Saskatchewan"
    }
    #print dictionary
    print(my_provs)
    #print the name of a province using its code
    x = my_provs["ab"]
    print('I live in ' + x)
    #print the name of the province to our left
    x = my_provs.get("bc")
    print(x + ' is the name of the province to our left')
    #print the name of the province to our east
    print(my_provs.get("sk") + ' is the province to our east')
    #h. ways to acces the value based on the key
    my_provs["mb"] = "Manitoba"
    print(my_provs)

    x = my_provs["mb"]
    print(x)
    print(my_provs.get("mb"))
    #j.Adding nl to my_provs
    my_provs["nl"] = "Newfoundland and Labrador"
    print(my_provs)
    #k.using a loop print all the keys of the dictionary on a separate line
    for x in my_provs:
        print(x)
    #l.using a loop print all the keys and values of the dictionary on a separate line     
    for x in my_provs:
        print(my_provs[x])
    # m. print the dictionary nothing fancy just the dictionary  
    print(my_provs)
    #n.creating a new dictiionary using the same provincial key that have a value that is = the length of the province name
    my_provs_lenghts = {}
    for x in my_provs:
        my_provs_lenghts[x] = len(my_provs[x])
    print('The lenght of the Province',(my_provs_lenghts))
    #o.loop through the list of provinces with lengths and / 2 and + 10 to each one in the list   
    print('this is a crazy loop')
    for x in my_provs_lenghts:
        print(len(my_provs[x])/2 + 10)
    #q.add two more provinces to the dictionary of provinces and names
    my_provs["qc"] = "Quebec"
    my_provs["on"] = "Ontario"
    print('final list', my_provs)

# def add_unique(my_list):
#     unique = {}
#     for x in my_list:
#         if x in unique:
#             unique[x] = 1 + unique[x]
#         else:
#             unique[x] = 1
#     print('Unique Dictionary', unique)
#     return unique

def add_unique(my_list):
    unique = {}
    for x in my_list:
        if x not in unique:
            unique[x] = 0
        unique[x] += 1 
    return unique   



play_with_lists()
play_with_dictionaries()
print(add_unique([1,1,1,1,1,1,1,2,2,2,2,2,1,4,4,4,3,3,3,5,5,5,2789,890,2789,890,2789,890,2789,890,9]))


