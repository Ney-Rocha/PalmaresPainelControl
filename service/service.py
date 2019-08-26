from flask import Flask, render_template, request
import pymysql
app = Flask(__name__,template_folder='../')

conn = pymysql.connect(db='RCP', user='root', passwd='root')

cursor = conn.cursor()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/cadInteressado',methods=['POST'])
def resultado():
    if request.method == 'POST':
        nome = request.form.to_dict('nome_interessado')
        telefone = request.form.to_dict('telefone_interessado')
        email = request.form.to_dict('email_interessadol')
        # interesse = request.form.to_dict('interesse')
        descricao = request.form.to_dict('mensagem_Interessado')
        lista=[(nome,telefone,email,descricao)]
        cursor.execute('INSERT INTO INTERESSADO(NOME_INTERESSADO, TELEFONE_INTERESSADO, EMAIL_INTERESSADO, DESCRICAO) VALUE(?,?,?,?)',lista)
        conn.commit()
        return redirect("index.html")

if __name__ == "__main__":
    app.run(debug=True)
conn.close()