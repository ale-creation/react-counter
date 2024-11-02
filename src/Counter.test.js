import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // Importa funções da React Testing Library
import Counter from './Counter'; // Importa o componente Counter que será testado

// Teste para verificar se o contador renderiza o valor inicial corretamente
test('renderiza o contador com valor inicial de 0', () => {
    render(<Counter />); // Renderiza o componente Counter no ambiente de teste
    const counterValue = screen.getByRole('heading'); // Seleciona o elemento que exibe o valor do contador
    expect(counterValue).toHaveTextContent('0'); // Verifica se o texto do contador é '0'
});

// Teste para verificar se o contador incrementa o valor ao clicar no botão
test('incrementa o contador ao clicar no botão', () => {
    render(<Counter />); // Renderiza o componente Counter novamente
    const incrementButton = screen.getByText(/incrementar/i); // Seleciona o botão de incrementar (case insensitive)
    fireEvent.click(incrementButton); // Simula o clique no botão de incrementar
    const counterValue = screen.getByRole('heading'); // Seleciona novamente o elemento do contador
    expect(counterValue).toHaveTextContent('1'); // Verifica se o texto do contador foi atualizado para '1'
});

// Teste para verificar se o contador decrementa o valor ao clicar no botão
test('decrementa o contador ao clicar no botão', () => {
    render(<Counter />); // Renderiza o componente Counter
    const decrementButton = screen.getByText(/decrementar/i); // Seleciona o botão de decrementar (case insensitive)
    fireEvent.click(decrementButton); // Simula o clique no botão de decrementar
    const counterValue = screen.getByRole('heading'); // Seleciona novamente o elemento do contador
    expect(counterValue).toHaveTextContent('-1'); // Verifica se o texto do contador foi atualizado para '-1'
});
