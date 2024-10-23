document.addEventListener('DOMContentLoaded', () => {
    // URL do banco de dados (substitua pela sua)
    const url = 'http://localhost:9082/usuarios';

    // Faz a requisição fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#userTable tbody');
            
            // Loop para adicionar as linhas à tabela
            data.forEach(user => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nome}</td>
                    <td>${user.email}</td>
                    <td>${user.altura} cm</td>
                    <td>${user.peso} kg</td>
                `;
                
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
});
