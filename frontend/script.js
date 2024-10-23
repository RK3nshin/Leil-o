document.addEventListener('DOMContentLoaded', () => {
    const url = 'http://localhost:9082/usuarios';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#userTable tbody');
            
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
