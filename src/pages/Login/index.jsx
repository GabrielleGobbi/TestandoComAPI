import './index.css';
import { useState } from 'react';

function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const enviarAlert = (e) => {
    e.preventDefault(); // Prevenir o comportamento padrão
    console.log("Dados enviados");
    console.log("Nome:", nome);
    console.log("Email:", email);
    alert(`Formulário enviado com sucesso: Nome: ${nome}, Email: ${email}`);
  };

  return (
    <div className="content">
      <h1>Cadastro</h1>
      <form id="cadastro" onSubmit={enviarAlert}>
        <p>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <input type="submit" value="Enviar" />
        </p>
      </form>
    </div>
  );
}

export default Form;
