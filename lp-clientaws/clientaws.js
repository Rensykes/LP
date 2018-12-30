if (typeof process.argv[2] !== 'undefined' && process.argv[2] !== null) {
    var idA = process.argv[2];
    
    const
        secret = require('../secret'),
        io = require("socket.io-client"),
        socket = io.connect(secret);
    var comando = { id: idA, callType: 'ricerca', valore: 'pippo' };


    socket.on('connect', function () {
        // Connected, let's sign-up for to receive messages for this room
        socket.emit('aws', idA);
        console.info("on.connect client AWS, send id: " + idA);
        console.info("on.connect client AWS, comando: " + comando.callType+" " + comando.valore);
        socket.emit('comando', comando);
    });
    
}
else {
    console.info('inserisci il tuo id');
}
