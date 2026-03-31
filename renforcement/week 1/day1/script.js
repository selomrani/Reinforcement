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
  // console.log(song.titre);
});
// ex 02
let rockSongs = songs.filter((song) => song.genre == "Rock");
rockSongs.forEach((song) => {
  // console.log(song.titre);
});

// ex 03

let songsInMins = songs.map((song) => song.durationInSeconds / 60);

songsInMins.forEach((element) => {
  // console.log(element);
});
// ex 04

function calculDureTotal(array) {
  let TotalS = 0;
  array.forEach((element) => {
    TotalS += element.durationInSeconds;
  });
  let TotalM = Math.floor(TotalS / 60) + (TotalS % 60);
  console.log(TotalM);
}
calculDureTotal(songs);

// ex 05
function longestSong(array) {
  let top = 0;
  array.forEach((element) => {
    if (element.durationInSeconds > top) {
      top = element;
    }
  });
  console.log(top);
}
longestSong(songs);

//......///
// ## R-Challenge 2 — L'analyse des ventes

// Tu es data analyst dans un magasin. Tu as un tableau de 12 objets représentant les ventes mensuelles (mois, chiffre_affaires, nb_clients, ville).

// 1. Calcule le chiffre d'affaires total de l'année
// 2. Calcule le chiffre d'affaires moyen par mois
// 3. Trouve le mois avec le meilleur chiffre d'affaires
// 4. Trouve le mois avec le moins de clients
// 5. Crée un nouveau tableau avec uniquement les mois où le CA dépasse 50 000€
// 6. Crée un résumé par ville : pour chaque ville, le CA total et le nombre total de clients
// 7. Trie les mois par chiffre d'affaires décroissant
// 8. Calcule la croissance entre chaque mois (CA mois N - CA mois N-1) et affiche-la

// ex 01

let oco = [
  {
    mois: "janvier",
    chiffre_affaires: 20021,
    nb_clients: 425,
    ville: "Casa",
  },
  {
    mois: "févirier",
    chiffre_affaires: 12345,
    nb_clients: 425,
    ville: "Casa",
  },
  {
    mois: "Mars",
    chiffre_affaires: 4564,
    nb_clients: 425,
    ville: "Casa",
  },
  {
    mois: "Avrile",
    chiffre_affaires: 424422,
    nb_clients: 425,
    ville: "Casa",
  },
  {
    mois: "Mai",
    chiffre_affaires: 24562444,
    nb_clients: 425,
    ville: "Casa",
  },
  {
    mois: "juin",
    chiffre_affaires: 42442,
    nb_clients: 425,
    ville: "Casa",
  },
  {
    mois: "juillet",
    chiffre_affaires: 20021,
    nb_clients: 334,
    ville: "Casa",
  },
  {
    mois: "aout ",
    chiffre_affaires: 42444,
    nb_clients: 345,
    ville: "Casa",
  },
  {
    mois: "septembre",
    chiffre_affaires: 442424,
    nb_clients: 13453,
    ville: "Casa",
  },
  {
    mois: "octobre",
    chiffre_affaires: 334567,
    nb_clients: 4325,
    ville: "Casa",
  },
  {
    mois: "novembre",
    chiffre_affaires: 345134,
    nb_clients: 113456,
    ville: "Casa",
  },
  {
    mois: "décembre1",
    chiffre_affaires: 84213,
    nb_clients: 952,
    ville: "Casa",
  },
];

function calculCaTotal(array) {
  let total = 0;
  array.forEach((element) => {
    total += element.chiffre_affaires;
  });
  return total;
}
console.log(calculCaTotal(oco));

function calculMoyeneCA(array) {
  let avg = calculCaTotal(array) / array.length;
  return avg;
}
console.log(calculMoyeneCA(oco));

function moinsClient(array) {
  let min = Math.min.apply(
    Math,
    array.map(function (event) {
      return event.nb_clients;
    }),
  );
  // array.forEach((element) => {
  //   min = element;
  //   if (element.nb_clients < min) {
  //     min = element;
  //   }
  // });
}
console.log(moinsClient(oco));

// ## R-Challenge 3 — Le système de notation 🔥

// Un site web de recettes a un tableau d'avis utilisateurs (pseudo, note de 1 à 5, commentaire, date). Tu as 15 avis.

// 1. Calcule la note moyenne arrondie à 1 décimale
// 2. Compte combien d'avis par note (combien de 1 étoile, combien de 2 étoiles, etc.)
// 3. Filtre les avis positifs (≥ 4) et les avis négatifs (≤ 2)
// 4. Trie les avis du plus récent au plus ancien
// 5. Trouve l'avis le plus long (en nombre de caractères dans le commentaire)
// 6. Crée un résumé : "4.2/5 basé sur 15 avis — 8 positifs, 3 négatifs, 4 neutres"

let reviews = [
  {
    pseudo: "anon1",
    noteFrom1To5: 3,
    commentaire: "goood service",
    date: "12/05/2025",
  },
  {
    pseudo: "user22",
    noteFrom1To5: 5,
    commentaire: "Excellent experience!",
    date: "13/05/2025",
  },
  {
    pseudo: "tech_guy",
    noteFrom1To5: 4,
    commentaire: "Very fast delivery.",
    date: "14/05/2025",
  },
  {
    pseudo: "biker88",
    noteFrom1To5: 2,
    commentaire: "Product arrived damaged.",
    date: "15/05/2025",
  },
  {
    pseudo: "sara_m",
    noteFrom1To5: 5,
    commentaire: "Highly recommended!",
    date: "16/05/2025",
  },
  {
    pseudo: "johndoe",
    noteFrom1To5: 1,
    commentaire: "Terrible customer support.",
    date: "17/05/2025",
  },
  {
    pseudo: "traveler",
    noteFrom1To5: 4,
    commentaire: "Great value for money.",
    date: "18/05/2025",
  },
  {
    pseudo: "foodie",
    noteFrom1To5: 3,
    commentaire: "Average quality.",
    date: "19/05/2025",
  },
  {
    pseudo: "gamer99",
    noteFrom1To5: 5,
    commentaire: "Perfect, no issues.",
    date: "20/05/2025",
  },
  {
    pseudo: "nature_lover",
    noteFrom1To5: 2.2,
    commentaire: "Disappointed with the size.",
    date: "21/05/2025",
  },
  {
    pseudo: "bookworm",
    noteFrom1To5: 4,
    commentaire: "Good read, fast shipping.",
    date: "22/05/2025",
  },
  {
    pseudo: "fitness_freak",
    noteFrom1To5: 5,
    commentaire: "Best purchase this year!",
    date: "23/05/2025",
  },
  {
    pseudo: "coder_x",
    noteFrom1To5: 3,
    commentaire: "It's okay, does the job.",
    date: "24/05/2025",
  },
  {
    pseudo: "artist_a",
    noteFrom1To5: 4.4,
    commentaire: "Beautiful packaging.",
    date: "25/05/2025",
  },
  {
    pseudo: "music_fan",
    noteFrom1To5: 1,
    commentaire: "Never received my order.",
    date: "26/05/2025",
  },
];

//ex01
function roundedAvg(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element.noteFrom1To5;
  });
  let avg = sum / array.length;
  return avg.toFixed(1);
}
console.log(roundedAvg(reviews));

//ex 02
