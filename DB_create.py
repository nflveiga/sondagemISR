
import sqlite3
from _config import DATABASE_PATH

with sqlite3.connect(DATABASE_PATH) as connection:
    
    #cursor
    c=connection.cursor()
    
    #criar tabela
    c.execute("""CREATE TABLE respostas(resposta_id INTEGER PRIMARY KEY AUTOINCREMENT, cat_prof TEXT NOT NULL, anos_xp INTEGER NOT NULL, posicionamento TEXT NOT NULL, preox TEXT NOT NULL, sellick TEXT NOT NULL, no_sellick TEXT, ventila TEXT NOT NULL, relaxante TEXT NOT NULL, fascicula TEXT, sugammadex TEXT, priming TEXT)""")
    
    #dummy DAta
    #c.execute('INSERT INTO  tasks (name, due_date, priority, status, user) VALUES("finish real python course", "24/08/2016", 10, 1,"Nuno")')