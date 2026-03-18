// ## R-Challenge 1 — Le gestionnaire de playlist

// Tu développes un lecteur de musique. Tu as un tableau de 10 chansons (chaque chanson est un objet : titre, artiste, durée en secondes, genre).

// 1. Affiche uniquement les titres de toutes les chansons
// 2. Crée un nouveau tableau contenant uniquement les chansons de genre "Rock"
// 3. Crée un nouveau tableau où chaque durée est convertie en format "3:45" (minutes:secondes)
// 4. Calcule la durée totale de la playlist en minutes et secondes
// 5. Trouve la chanson la plus longue
// 6. Vérifie si toutes les chansons durent moins de 6 minutes
// 7. Vérifie si au moins une chanson est du genre "Jazz"
// 8. Trie les chansons par durée, de la plus courte à la plus longue

// Challenge 1
let songs = [
  {
    titre: "s1",
    artiste: "art1",
    durationInSeconds: 240,
    genre: "Rock",
  },
  {
    titre: "s2",
    artiste: "art2",
    durationInSeconds: 360,
    genre: "Rock",
  },
  {
    titre: "s3",
    artiste: "art3",
    durationInSeconds: 480,
    genre: "Pop",
  },
  {
    titre: "s4",
    artiste: "art4",
    durationInSeconds: 90,
    genre: "Pop",
  },
  {
    titre: "s5",
    artiste: "art5",
    durationInSeconds: 235,
    genre: "Pop",
  },
  {
    titre: "s10",
    artiste: "art10",
    durationInSeconds: 333,
    genre: "Jazz",
  },
  {
    titre: "s6",
    artiste: "art6",
    durationInSeconds: 113,
    genre: "Jazz",
  },
  {
    titre: "s7",
    artiste: "art7",
    durationInSeconds: 123,
    genre: "Jazz",
  },
  {
    titre: "s8",
    artiste: "art8",
    durationInSeconds: 240,
    genre: "Hip Hop",
  },
  {
    titre: "s9",
    artiste: "art9",
    durationInSeconds: 240,
    genre: "Hip Hop",
  },
];
// ex 01
songs.forEach((song) => {
  console.log(song.titre);
});
// ex 02
let rockSongs = songs.filter((song) => song.genre == "Rock");
rockSongs.forEach((song) => {
  console.log(song.titre);
});

// ex 03

let songsInMins = songs.map((song) => song.durationInSeconds / 60);

songsInMins.forEach((element) => {
  console.log(element);
});
