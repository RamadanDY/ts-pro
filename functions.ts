function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song} — sung by ${singer}`);
  }
}

singAllTheSongs("Alicia Keys");
singAllTheSongs("Lady Gaga", "Bad Romance","Alicia Keys", "st Dance", "Poker Face");




/////for of loop
///A for–of loop is used to go through each value in a list (array) one by one.
// Think of it like:

// “Take one item from the list, use it, then move to the next.”

// for (const item of items) {
//   // do something with item
// }
// Means:

// “For each item inside items, do this code.”

 type names = (name: string) => string

//const names = ['kofi','ama','john']
function ghana (song: names , ...writter: string[]) {
    for (const mynames of writter) {
    console.log(song +"this is my name:"+mynames)
}

}

ghana("shatta","sark",'bhim')