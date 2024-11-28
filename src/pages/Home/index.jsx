import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link para navegação

const Home = () => {
    return (
        <div className="content">
            <h1>Bem Vindo !!!</h1>
            <p>Você está em Home</p>
            {/* Botão para navegação */}
            <Link to="/Login">
                <button type="button">Ir para Login</button>
            </Link>
            <Link to="/TestUser">
                <button type="button">Ir para Teste de usuario</button>
            </Link>
        </div>
    );
};

export default Home;
