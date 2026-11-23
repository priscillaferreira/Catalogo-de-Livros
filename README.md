# API de Livros — Python + Flask

## Objetivo
API mínima desenvolvida com Python e Flask que disponibiliza, pela rota `GET /livros`, um JSON com os dados de três livros (id, titulo, autor e ano).

## Requisitos
- Python 3.10 ou superior

## Instalação das dependências
```bash
# 1. Criar o ambiente virtual
python -m venv venv

# 2. Ativar o ambiente virtual
# Windows:
venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

# 3. Instalar as dependências
pip install -r requirements.txt
```

## Execução
```bash
python app.py
```

## Rota disponibilizada
| Método | Endereço | Descrição |
|--------|----------|-----------|
| GET | http://127.0.0.1:5000/livros | Retorna os três livros em JSON |

### Exemplo de resposta
```json
{
  "livros": [
    {"id": 1, "titulo": "Dom Casmurro", "autor": "Machado de Assis", "ano": 1899},
    {"id": 2, "titulo": "O Cortiço", "autor": "Aluísio Azevedo", "ano": 1890},
    {"id": 3, "titulo": "A Hora da Estrela", "autor": "Clarice Lispector", "ano": 1977}
  ]
}
```
