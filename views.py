import sqlite3
from functools import wraps

from flask import Flask, flash, redirect, render_template, request, session, url_for, g

#config
app=Flask(__name__)
app.config.from_object('_config')

def connect_db():
    return sqlite3.connect(app.config['DATABASE_PATH'])

@app.route('/', methods=['GET', 'POST'])
def show_form():
    return render_template('form.html')

@app.route('/submit',methods=['POST'])
def submit_form():
    g.db=connect_db()
    
    
    cat_prof=request.form['catProf']
    posicionamento=request.form['posicionamento']
    preox=request.form['preox']
    sellick=request.form['sellick']
    if sellick =='n':
        why_no_sellick=request.form.getlist('whyNoSellick')
        why_no_sellick=','.join(why_no_sellick)
    else:
        why_no_sellick=0
    vent=request.form['vent']
    relax=request.form['relax']
    if relax=='sux':
        fascicula=request.form['fasc']
    else:
        fascicula=0
    if relax=='roc':
        suga=request.form['suga']
    else:
        suga=0
    if relax=='other' or relax=='roc':
        prime=request.form['prime']
    else:
        prime=0
    
   # if not name or not cat_prof or not posicionamento or not preox or not sellick or not vent or not relax:
    #    flash('Preenche todos os campos!!')
     #   return redirect(url_for('show_form'))
    #else:
    g.db.execute('insert into respostas (cat_prof, anos_xp, posicionamento, preox, sellick, no_sellick, ventila, relaxante, fascicula, sugammadex, priming) values (?,0,?,?,?,?,?,?,?,?,?)',[
        cat_prof,
        posicionamento,
        preox,
        sellick,
        why_no_sellick,
        vent,
        relax,
        fascicula,
        suga,
        prime

        ]
    )
    g.db.commit()
    g.db.close()
    flash('Nova tarefa adicionada!')
    return redirect(url_for('show_form'))

