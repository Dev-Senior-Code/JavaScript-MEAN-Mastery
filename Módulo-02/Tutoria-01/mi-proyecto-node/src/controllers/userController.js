const users = [
    {id: 1, name: 'Alice', role: 'admin'},
    {id: 2, name: 'Bob', role: 'client'}
]

export const getUsers = (res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
}

export const getNotFount = (res) => {
    res.writeHead(404, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({ message : 'Ruta no encontrada'}));
}
