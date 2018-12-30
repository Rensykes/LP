if (typeof process.argv[2] !== 'undefined' && process.argv[2] !== null) {

const ipAddress='xxx';
const port= 'xxx';

    const
        secret = require('../secret'),
        io = require("socket.io-client"),
        //socket = io.connect('http://' + ipAddress + ':' + port);
        socket = io.connect(secret),
        cmd = require('./cmd');

    var id = process.argv[2];

    socket.on('connect', function () {
        // Connected, let's sign-up for to receive messages for this room
        socket.emit('credenziali', id);
        console.info("on connect client, send id: " + id)
    });

    socket.on('pc', function (comando) {
        // Connected, let's sign-up for to receive messages for this room
        console.info("pc rcv " + comando);
        var ricercaStr = comando.valore;
        var callType = comando.callType;
        if (callType == 'ricerca') {
            console.log(ricercaStr);
            cmd.ricerca(ricercaStr);
        }
        if (callType == 'programma') {
            cmd.openProgram(ricercaStr);
        }
        if (callType == 'video') {
            cmd.ricercayoutube(ricercaStr);
        }
        if (callType == 'testo') {
            // interazione video client
            console.log("refresh della pagina : " + ricercaStr);
            resp.redirect(req.get('index'));
        }

    });


}
else {
    console.info('inserisci il tuo id');
}
