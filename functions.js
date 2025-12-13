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
singAllTheSongs("Lady Gaga", "Bad Romance", "Alicia Keys", "Just Dance", "Poker Face");
