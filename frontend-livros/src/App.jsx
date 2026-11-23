import { useState } from 'react'
import './App.css'

function App() {
  // Estados do componente
  const [livros, setLivros] = useState([])        // livros recebidos da API
  const [carregando, setCarregando] = useState(false) // consulta em andamento?
  const [erro, setErro] = useState('')            // mensagem de erro

  // Função executada SOMENTE quando o botão é clicado
  async function buscarLivros() {
    setCarregando(true)
    setErro('')
    setLivros([])

    try {
      // Requisição GET à API Flask (via proxy do Vite: /api/livros -> /livros)
      const response = await fetch('/api/livros')

      // Verifica se a resposta HTTP foi bem-sucedida (status 200-299)
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      // Converte o corpo da resposta de JSON para objeto JavaScript
      const dados = await response.json()

      // Atualiza o estado -> o React renderiza os livros na tela
      setLivros(dados.livros)
    } catch (e) {
      setErro('Não foi possível buscar os livros. Verifique se a API Flask está em execução.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="container">
      <h1>Catálogo de Livros</h1>

      <button onClick={buscarLivros} disabled={carregando}>
        Buscar Livros
      </button>

      {/* Área de mensagens */}
      {carregando && <p className="mensagem">Carregando livros...</p>}
      {erro && <p className="mensagem erro">{erro}</p>}

      {/* Área de exibição dos livros */}
      <div className="lista">
        {livros.map((livro) => (
          <div className="livro" key={livro.id}>
            <p><strong>ID:</strong> {livro.id}</p>
            <p><strong>Título:</strong> {livro.titulo}</p>
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Ano:</strong> {livro.ano}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
