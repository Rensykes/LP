const
    http = require('http'),
    socketio = require('socket.io'),
    server = http.createServer(),
    io = socketio.listen(server);

let connections = new Map();
let idA = '';

server.listen('7367', function () {
    console.log('sono qui su porta:7367' );
});



/**********************************/


// event fired every time a new client connects:
io.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    // initialize this client's sequence number
    socket.on('credenziali', function (id) {
        connections.set(id, socket);
        console.log("on.credenziali, id:" + id + " socket: " + socket.id);
        idA = id;
    });
    socket.on('aws', function (id) {
        console.log("on.aws, id:" + id + " socket: " + socket.id);
        idA = id;
    });
    // when socket disconnects, remove it from the list:
    socket.on("disconnect", () => {
        connections.delete(socket);
        console.info(`Client gone [id=${socket.id}]`);
    });



    socket.on('comando', function (comando) {
        for (const [idClient, socketClient] of connections.entries()) {
            if (idClient === comando.id) {
                socketClient.emit('pc', comando);
            }
        }
    });
});
