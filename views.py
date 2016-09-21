# -*- coding: utf-8 -*-
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
import sqlite3
from functools import wraps
import datetime
import smtplib


from flask import Flask, flash, redirect, render_template, request, session, url_for, g



#config
app=Flask(__name__)
app.config.from_object('_config')


def connect_db():
    return sqlite3.connect(app.config['DATABASE_PATH'])

def login_required(test):
    @wraps(test)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return test(*args, **kwargs)
        else:
            flash('You need to login first.')
            return redirect(url_for('login'))
    return wrap


@app.route('/', methods=['GET', 'POST'])
def show_form():
    return render_template('form.html')

@app.route('/submit',methods=['POST'])
def submit_form():
    g.db=connect_db()

    try:
        cat_prof=request.form['catProf']
        posicionamento=request.form['posicionamento']
        preox=request.form['preox']
        sellick=request.form['sellick']

        if cat_prof=='especialista':
            anos_xp=request.form['anosXp']
        else:
            anos_xp=0
        if sellick =='n':
            why_no_sellick=request.form.getlist('whyNoSellick')
            why_no_sellick=','.join(why_no_sellick)
        else:
            why_no_sellick=0
        vent=request.form['vent']
        opioid=request.form['opioid']
        sequence=request.form['sequence']
        relax=request.form['relax']
        if relax=='sux':
            fascicula=request.form['fasc']
        else:
            fascicula=0
        if relax=='roc':
            suga=request.form['suga']
            dose=request.form['dose']
        else:
            suga=0
        if relax=='other' or relax=='roc':
            prime=request.form['prime']
        else:
            prime=0
        laringo=request.form['laringo']
    except:
        flash('Faltam dados...')
        return redirect(url_for('show_form'))
    time_submitted=datetime.datetime.utcnow().isoformat()
    user_ip=request.remote_addr

   # if not name or not cat_prof or not posicionamento or not preox or not sellick or not vent or not relax:
    #    flash('Preenche todos os campos!!')
     #   return redirect(url_for('show_form'))
    #else:
    g.db.execute('insert into respostas (cat_prof, anos_xp, posicionamento, preox, sellick, no_sellick, ventila, opioid, sequence, relaxante, fascicula, sugammadex, dose, priming,laringo, time_submitted,user_ip) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
        cat_prof,
        anos_xp,
        posicionamento,
        preox,
        sellick,
        why_no_sellick,
        vent,
        opioid,
        sequence,
        relax,
        fascicula,
        suga,
        dose,
        prime,
        laringo,
        time_submitted,
        user_ip

        ]
    )
    g.db.commit()
    g.db.close()
    obrigado=u'Questionário submetido! Obrigado!'
    flash(obrigado)
    return redirect(url_for('show_form'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] != app.config['USERNAME'] or request.form['password'] != app.config['PASSWORD']:
            error = 'Invalid Credentials. Please try again.'
            flash(error)
        else:
            session['logged_in'] = True
            return redirect(url_for('admin'))
    return render_template('login.html', error=error)

@app.route('/admin')
@login_required
def admin():
    return render_template('admin.html')





@app.route('/mail', methods=['POST'])
def send_mail():
    user_email=request.form['email']
    message=request.form['message']
    email_to = 'nflveiga@gmail.com'
    username = 'isrsondagem@gmail.com'
    password = 'midafentapropofolrocuronio'

    if not user_email or not message:
        flash("Preencha o seu email e mensagem!")
    else:
        try:
            server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
            server.ehlo()
            server.login(username, password)
            header = 'To:' + email_to + '\n' + 'From: ' + username + '\n' + 'Subject: '+user_email+'\n'
            msg = header + '\n\n' + message
            server.sendmail(username, email_to, msg)
            server.close()
            flash('Mensagem enviada!')
        except:
            flash('Erro no envio da mensagem...tente outra vez!')
    return redirect(url_for('show_form'))
