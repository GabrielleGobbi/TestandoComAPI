import { useEffect, useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]); // Estado para os usuários
  const [busca, setBusca] = useState(""); // Estado para a busca

  useEffect(() => {
    // Busca os usuários da API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposta) => resposta.json()) // Converte a resposta em JSON
      .then((dados) => setUsuarios(dados)); // Atualiza o estado com os dados
  }, []);

  // Filtra os usuários com base no campo de busca
  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <input
        type="text"
        placeholder="Digite o nome que busca"
        value={busca}
        onChange={(e) => setBusca(e.target.value)} // Atualiza o estado da busca
      />
      <ul>
        {usuariosFiltrados.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li> // Corrigido para usar usuario.id
        ))}
      </ul>
    </div>
  );
}

export default App;
