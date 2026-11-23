# Importa a classe Flask (cria a aplicação) e a função jsonify (gera respostas JSON)
from flask import Flask, jsonify

# Cria a aplicação Flask. __name__ indica ao Flask onde está o módulo principal.
app = Flask(__name__)

# Lista Python com os três livros (dados fixos, sem banco de dados)
livros = [
    {"id": 1, "titulo": "Dom Casmurro", "autor": "Machado de Assis", "ano": 1899},
    {"id": 2, "titulo": "O Cortiço", "autor": "Aluísio Azevedo", "ano": 1890},
    {"id": 3, "titulo": "A Hora da Estrela", "autor": "Clarice Lispector", "ano": 1977},
]


# Rota /livros que aceita apenas o método GET
@app.route("/livros", methods=["GET"])
def listar_livros():
    # jsonify converte o dicionário Python em uma resposta HTTP JSON
    return jsonify({"livros": livros})


# Inicia o servidor local (http://127.0.0.1:5000) em modo de depuração
if __name__ == "__main__":
    app.run(debug=True)
