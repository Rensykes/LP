if (typeof process.argv[2] !== 'undefined' && process.argv[2] !== null) {
    var idA = process.argv[2];
    if (typeof process.argv[3] !== 'undefined' && process.argv[3] !== null){
        if (typeof process.argv[4] !== 'undefined' && process.argv[4] !== null){
            var comando = { id: idA, callType: process.argv[3], valore: process.argv[4] };
        } else {
            var comando = { id: idA, callType: process.argv[3], valore: "Pippo pelo re del mondo" };
        }
    } else {
        var comando = { id: idA, callType: 'ricerca', valore: 'pippo pelo re del mondo' };
    }
    const
        secret = require('../secret'),
        io = require("socket.io-client"),
        socket = io.connect(secret);

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
