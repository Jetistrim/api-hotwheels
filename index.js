import express from 'express';

const app = express();
const port = 3000
let carrinhos = [
    { id: 1, modelo: 'Corvette', ano: 1964, serie_nome: 'S-Class', serie_numero: '300' },
    { id: 2, modelo: 'Mustang', ano: 1967, serie_nome: 'E-Class', serie_numero: '200' },
    { id: 3, modelo: 'Ferrari', ano: 1960, serie_nome: 'F8', serie_numero: '100' }
]

app.get('/', (req, res) => {
    res.send(`
        <div>
            <h1>Carrinhos Hot Wheels</h1>
            <a href="/cars">Visualizar Carrinhos</a>
            <a href="/add-car">Adicionar Novo Carrinho</a>
            <a href="/edit-car/:id">Editar Carrinho</a>
            <a href="/delete-car/:id">Excluir Carrinho</a>
        </div>
        `);
});

app.get('/cars', (req, res) => {
    const carrosMapeados = carrinhos.map(car => (
        `<tr>
            <td>${car.id}</td>
            <td>${car.modelo}</td>
            <td>${car.ano}</td>
            <td>${car.serie_nome}</td>
            <td>${car.serie_numero}</td>
            <td><a href="/edit-car/${car.id}">Editar</a> | <a href="/delete-car/${car.id}">Excluir</a></td>
        </tr>`
    )).join('')

    carrinhos ? (
        res.send(`
            
            <h1>Carrinhos Hot Wheels</h1>
            <table>
                <thead>
                    <tr>
                        <th>Toy Number</th>
                        <th>Colection Number</th>
                        <th>Modelo</th>
                        <th>Year</th>
                        <th>Serie's name</th>
                        <th>Serie's number</th>
                    </tr>
                </thead>
                <tbody>
                ${carrosMapeados}
                </tbody>
            </table>
        `)
    ) : (
        res.send(`
            <h1>Carrinhos Hot Wheels</h1>
            <p>Nenhum carrinho cadastrado.</p>
        `)
    )
}
)

app.get('/add-car', (req, res) => (
    res.send(`
        <h1>Adicionar Novo Carrinho</h1>
        <form method="POST" action="/add-car" onsubmit="diretoProBD()">

            <label for="modelo">Modelo:</label>
            <input type="text" id="modelo" name="modelo" required><br><br>

            <label for="ano">Ano:</label>
            <input type="number" id="ano" name="ano" required><br><br>

            <label for="serie_nome">Nome da Série:</label>
            <input type="text" id="serie_nome" name="serie_nome" required><br><br>

            <label for="serie_numero">Número da Série:</label>
            <input type="number" id="serie_numero" name="serie_numero" required><br><br>

            <input type="submit" value="Adicionar">
        </form>

        <script>

            const diretoProBD = () => {
                carrinhos.push({
                    id: Date.now(),
                    modelo: modelo.value,
                    ano: ano.value,
                    serie_nome: serie_nome.value,
                    serie_numero: serie_numero.value
                })

                alert('Carrinho adicionado com sucesso!')
                window.location.href = '/cars'
            }
        </script>
    `)
))

app.post('/add-car', (req, res) => {
    res.redirect('/cars')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});