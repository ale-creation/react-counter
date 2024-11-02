import React, { useState } from 'react';

// Componente funcional Counter
const Counter = () => {
    // Declara uma variável de estado 'count' inicializada com 0
    const [count, setCount] = useState(0);

    // Função para incrementar o valor do contador
    const increment = () => setCount(count + 1);

    // Função para decrementar o valor do contador
    const decrement = () => setCount(count - 1);

    // Renderiza o componente
    return (
        <div>
            {/* Exibe o valor atual do contador */}
            <h1>{count}</h1>
            {/* Botão para incrementar o contador */}
            <button onClick={increment}>Incrementar</button>
            {/* Botão para decrementar o contador */}
            <button onClick={decrement}>Decrementar</button>
        </div>
    );
};

// Exporta o componente Counter para ser utilizado em outros arquivos
export default Counter;