//criar formulario
import { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const enviarAlert = (e) => {
    e.preventDefault(); //Prevenir o comportamento padrão
    console.log("Dados enviados");
    console.log("Nome:", nome);
    console.log("Email:", email);
    alert(`Formulario enviado com sucesso: Nome: ${nome}, Email: ${email}`);
  };

  return (
    <div>
      <form onSubmit={enviarAlert}>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
