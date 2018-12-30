const path = '';
const val = '';
var shell = require('shelljs');


var nomefalso = {
    ricerca: function (cerca) {
        shell.echo('exec chrome with search');
        shell.exec('start chrome "? ' + cerca + '"');
    },
    ricercayoutube: function (cerca) {
        shell.echo('exec chrome with youtube search');
        var videotmp= cerca.split(' ');
        var video='';
        for (let i=0; i<videotmp.length; i++){
            if(i<video.length-1) video += videotmp[i]+'+';
            else video += videotmp[i];
        }
        shell.echo('video: ' + video);
        shell.exec('start chrome.exe https://www.youtube.com/results?search_query='+ video);
    },


    openProgram: function (programma) {
        if (programma == 'league of legends') {
            shell.exec('"C://Riot Games//League of Legends//LeagueClient.exe"');
            console.log("apro lol");

        }
        if (programma == 'chrome') {
            shell.exec('start chrome');
            console.log("apro chrome");
        }
    
    }

};

module.exports = nomefalso;
