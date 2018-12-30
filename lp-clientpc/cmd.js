const path = '';
const val = '';
var shell = require('shelljs');
var isWin = process.platform === "win32";
var isLinux = process.platform === "linux";
var isMac = process.platform === "darwin";

var nomefalso = {
    ricerca: function (cerca) {
        shell.echo('exec chrome with search');
        if (isWin) {
            shell.exec('start chrome "? ' + cerca + '"');
        } else if (isLinux) {
            console.log("Linux");
        } else if (isMac) {
            shell.exec('open -a "Google Chrome" "http://www.google.com/search?q=' + cerca + '"');
        }
    },
    ricercayoutube: function (cerca) {
        shell.echo('exec chrome with youtube search');
        var videotmp = cerca.split(' ');
        var video = '';
        for (let i = 0; i < videotmp.length; i++) {
            if (i < video.length - 1) video += videotmp[i] + '+';
            else video += videotmp[i];
        }
        shell.echo('video: ' + video);
        if (isWin) {
            shell.exec('start chrome.exe https://www.youtube.com/results?search_query=' + video);
        } else if (isLinux) {
            console.log("Linux");
        } else if (isMac) {
            shell.exec('open -a "Google Chrome" "https://www.youtube.com/results?search_query=' + cerca + '"');
        }
    },


    openProgram: function (programma) {
        if (programma == 'league of legends' || programma == 'LOL') {
            if (isWin) {
                shell.exec('"C://Riot Games//League of Legends//LeagueClient.exe"');
            } else if (isLinux) {
                console.log("Linux");
            } else if (isMac) {
                shell.exec('open -a "League of Legends"');
            }
        }
        if (programma == 'chrome') {
            if (isWin) {
                shell.exec('start chrome');
            } else if (isLinux) {
                console.log("Linux");
            } else if (isMac) {
                shell.exec('opeopen -a "Google Chrome"');
            }
        }

    }

};

module.exports = nomefalso;
