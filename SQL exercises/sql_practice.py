import psycopg2
from Client import Client

conn = psycopg2.connect("dbname=evolveu")

# Open a cursor to perform database operation
cur = conn.cursor()

#execute a sql statement
cur.execute("select * from clients where client_id = 4;")
fourth_client = cur.fetchone()
print(fourth_client)

client_4 = Client(fourth_client)
print(client_4)
