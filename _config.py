import os

#path desta pasta
basedir=os.path.abspath(os.path.dirname(__file__))

DATABASE='sondagemISR.db'
USERNAME='admin'
PASSWORD='admin'
WTF_CSRF_ENABLED= True
SECRET_KEY ='\xc6S\xd4q\xa8G\x01\x0e\x92\xb7\xd4\xd8\xbd%T\x08H\xc9#Yq\x13\xbcH'

#email
MAIL_SERVER = 'smtp.googlemail.com'
MAIL_PORT = 587
MAIL_USE_SSL=False
MAIL_USE_TLS=True
MAIL_USERNAME = os.environ.get('isrsondagem@gmail.com')
MAIL_PASSWORD = os.environ.get('midafentapropofolrocuronio')

#administrador
ADMINS = ['nflveiga@gmail.com']

#path para a DB
DATABASE_PATH=os.path.join(basedir, DATABASE)
