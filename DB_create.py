
import sqlite3
from _config import DATABASE_PATH

with sqlite3.connect(DATABASE_PATH) as connection:

    #cursor
    c=connection.cursor()

    #criar tabela
    c.execute("""CREATE TABLE respostas(resposta_id INTEGER PRIMARY KEY AUTOINCREMENT, cat_prof TEXT NOT NULL, anos_xp INTEGER NOT NULL, posicionamento TEXT NOT NULL, preox TEXT NOT NULL, sellick TEXT NOT NULL, no_sellick TEXT, ventila TEXT NOT NULL, opioid TEXT NOT NULL, sequence TEXT NOT NULL, relaxante TEXT NOT NULL, fascicula TEXT, sugammadex TEXT, priming TEXT, laringo TEXT, time_submitted TEXT,user_ip TEXT)""")

#Passos para acrescentar um parametro a DB:
# 1- Adicionar no form.html e definir name
# 2 - Acrescentar no DB_create.py o nome e o tipo
# 3 - Acrescentar no views.py "xxx=request.form['name']" e no g.db.execute
# 4 acrescentar ao form_validate2.js
