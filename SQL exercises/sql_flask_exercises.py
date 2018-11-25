import psycopg2


class Client:
    def __init__(self, clientTuple):
        (self.idnum, self.name, self.email, self.city, self.birth_year) = clientTuple

def print_clients(dct):
    print("clients from table")
    for clientId, client in dct.items():
        print("({}){}".format(clientId, client.name))

def get_all_clients():
    conn = psycopg2.connect("dbname = evolveu")
    cur = conn.cursor()
    cur.execute("Select * from clients")
    clientInfoArray = cur.fetchall()
    clientDict = {}
    print(clientInfoArray)
    for client in clientInfoArray:
        print(client)
        C = Client(client)
        id = client[0]
        clientDict[id] = C

    print(cur.fetchall())
    cur.close()
    conn.close()
    return clientDict

def get_july_clients():
    conn = psycopg2.connect("dbname = evolveu")
    cur = conn.cursor()

    cur.executed("Select clients.client_id, name, email, city, birth_year\
                from clients left join credits\
                on clients.client_id = credits.client_id \
                where month = '2018-07';")
    clientInfoArray = cur.fetchall()

    clientDict = {}
    for client in clientInfoArray:
        idnum = client[0]
        clientDict[idnum] = Client(client)

    cur.close()
    conn.close()

    return clientDict

def get_null_credits():
    conn = psycopg2.connect("dbname = evolveu")
    cur = conn.cursor()

    cur.executed("Select clients.client_id, name, email, city, birth_year\
                from clients left join credits\
                on clients.client_id = credits.client_id\
                where credits is NULL;")
    clientInfoArray = cur.fetchall()

    clientDict = {}
    for client in clientInfoArray:
        idnum = client[0]
        clientDict[idnum] = Client(client)

    cur.close()
    conn.close()

    return clientDict

def get_null_credit_clients():
    conn = psycopg2.connect("dbname = evolveu")
    cur = conn.cursor()

    cur.executed("Select clients.client_id, name, email, city, birth_year \
                from clients right join credits \
                on clients.client_id = credits.client_id \
                where name is NULL;")
    clientInfoArray = cur.fetchall()

    clientDict = {}
    for client in clientInfoArray:
        idnum = client[0]
        clientDict[idnum] = Client(client)

    cur.close()
    conn.close()

    return clientDict

# all_clients = get_all_clients()
# print_clients(all_clients)
