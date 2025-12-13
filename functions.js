function singAllTheSongs(singer) {
    var songs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        songs[_i - 1] = arguments[_i];
    }
    for (var _a = 0, songs_1 = songs; _a < songs_1.length; _a++) {
        var song = songs_1[_a];
        console.log("".concat(song, " \u2014 sung by ").concat(singer));
    }
}
singAllTheSongs("Alicia Keys");
singAllTheSongs("Lady Gaga", "Bad Romance", "Alicia Keys", "st Dance", "Poker Face");
//const names = ['kofi','ama','john']
function ghana(song) {
    var writter = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        writter[_i - 1] = arguments[_i];
    }
    for (var _a = 0, writter_1 = writter; _a < writter_1.length; _a++) {
        var mynames = writter_1[_a];
        console.log(song + "this is my name:" + mynames);
    }
}
ghana("shatta", "sark", 'bhim');
