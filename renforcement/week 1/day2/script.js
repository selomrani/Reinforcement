// Tu crées un CRM simplifié. Chaque contact est un objet avec : nom, entreprise, email, telephone, ville, et un objet imbriqué `adresse` (rue, code_postal, ville, pays).
// 1. Crée 6 contacts avec des adresses complètes
// 2. Affiche le nom et la ville de chaque contact
// 3. Regroupe les contacts par ville : pour chaque ville, la liste des noms
// 4. Cherche tous les contacts d'une entreprise donnée
// 5. Modifie l'adresse d'un contact (il a déménagé)
// 6. Ajoute un champ "dernierContact" (date) à chaque contact
// 7. Affiche les contacts que tu n'as pas contactés depuis plus de 30 jours

let contacts = [
  {
    nom: "Rick Astley",
    entreprise: "Never Gonna Give You Up Inc.",
    email: "no-desertion@rickroll.com",
    telephone: "+44 123 456 789",
    ville: "The Internet",
    adresse: {
      rue: "1 Link That Looks Safe",
      code_postal: "ROLL-ED",
      ville: "YouTube",
      pays: "Cyberspace",
    },
  },
  {
    nom: "Dwight Schrute",
    entreprise: "Schrute Farms (Beets & Paper)",
    email: "assistant-to-the-manager@dundermifflin.com",
    telephone: "570-555-0199",
    ville: "Scranton",
    adresse: {
      rue: "123 Beet Root Lane",
      code_postal: "18501",
      ville: "Scranton",
      pays: "USA",
    },
  },
  {
    nom: "Big Smoke",
    entreprise: "Cluckin' Bell Enthusiasts",
    email: "two-number-nines@grove-street.com",
    telephone: "555-ORDER-UP",
    ville: "Los Santos",
    adresse: {
      rue: "15 Grove Street",
      code_postal: "LS-90210",
      ville: "Los Santos",
      pays: "San Andreas",
    },
  },
  {
    nom: "The Impostor",
    entreprise: "The Skeld Maintenance",
    email: "definitely-not-sus@amongus.vnt",
    telephone: "000-VENT",
    ville: "Electrical",
    adresse: {
      rue: "Ventilation Shaft 4",
      code_postal: "SUS",
      ville: "Space Station",
      pays: "The Void",
    },
  },
  {
    nom: "Geralt of Rivia",
    entreprise: "Witcher for Hire",
    email: "toss-a-coin@roach.mail",
    telephone: "+888-MMM-WIND-HOWLING",
    ville: "Kaer Morhen",
    adresse: {
      rue: "The Path (No Fixed Address)",
      code_postal: "1273",
      ville: "Novigrad",
      pays: "The Continent",
    },
  },
  {
    nom: "Mr. Beast",
    entreprise: "Extreme Giveaways Ltd.",
    email: "last-to-leave-the-array@beast.com",
    telephone: "+1 999-CASH-OUT",
    ville: "Greenville",
    adresse: {
      rue: "10,000,000 Dollar Mansion Blvd",
      code_postal: "YOUTUBE",
      ville: "North Carolina",
      pays: "USA",
    },
  },
];
// ex 01
contacts.forEach((contact) => {
  console.log("name : " + contact.nom + "ville : " + contact.adresse.ville);
});
// ex 02

//...

//ex 03

function findContactsByCity(contacts, entreprise) {
  return contacts.filter((contact) => contact.entreprise == entreprise);
}

console.log(findContactsByCity(contacts, "Electrical"));

// ex 04

function editAdress(nom, newAdress) {
  contacts.forEach((contact) => {
    if (contact.nom == nom) {
      contact.adresse.ville = newAdress;
    }
  });
}
editAdress("Geralt of Rivia");

// ## R-Challenge 5 — La gestion de stock d'un restaurant

// Tu gères le stock d'ingrédients d'un restaurant. Chaque ingrédient est un objet : nom, quantite, unite (kg, litres, pièces), prix_unitaire, seuil_alerte, categorie (légume, viande, épice, boisson).

// 1. Crée 12 ingrédients de 4 catégories différentes
// 2. Affiche les ingrédients dont la quantité est en dessous du seuil d'alerte (alerte stock bas)
// 3. Calcule la valeur totale du stock (quantité × prix unitaire pour chaque ingrédient)
// 4. Affiche la valeur du stock par catégorie
// 5. Simule une commande : un plat nécessite une liste d'ingrédients avec des quantités. Vérifie si tous les ingrédients sont disponibles en quantité suffisante. Si oui, décrémente le stock. Si non, affiche ce qui manque.
// 6. Génère une liste de courses : tous les ingrédients sous le seuil d'alerte, avec la quantité à commander pour revenir au double du seuil

// ex 01

let inventaire = [
  {
    nom: "Carotte",
    quantite: 15,
    unite: "kg",
    prix_unitaire: 1.5,
    seuil_alerte: 5,
    categorie: "légume",
  },
  {
    nom: "Pomme de terre",
    quantite: 30,
    unite: "kg",
    prix_unitaire: 0.8,
    seuil_alerte: 10,
    categorie: "légume",
  },
  {
    nom: "Tomate",
    quantite: 10,
    unite: "kg",
    prix_unitaire: 2.5,
    seuil_alerte: 3,
    categorie: "légume",
  },

  {
    nom: "Blanc de Poulet",
    quantite: 8,
    unite: "kg",
    prix_unitaire: 12.0,
    seuil_alerte: 2,
    categorie: "viande",
  },
  {
    nom: "Bœuf Haché",
    quantite: 5,
    unite: "kg",
    prix_unitaire: 15.0,
    seuil_alerte: 1,
    categorie: "viande",
  },
  {
    nom: "Lardons",
    quantite: 4,
    unite: "kg",
    prix_unitaire: 9.0,
    seuil_alerte: 2,
    categorie: "viande",
  },

  {
    nom: "Sel fin",
    quantite: 20,
    unite: "kg",
    prix_unitaire: 0.5,
    seuil_alerte: 2,
    categorie: "épice",
  },
  {
    nom: "Poivre noir",
    quantite: 1,
    unite: "kg",
    prix_unitaire: 25.0,
    seuil_alerte: 0.2,
    categorie: "épice",
  },
  {
    nom: "Paprika",
    quantite: 2,
    unite: "kg",
    prix_unitaire: 10.0,
    seuil_alerte: 0.5,
    categorie: "épice",
  },
  {
    nom: "Jus d'orange",
    quantite: 50,
    unite: "litres",
    prix_unitaire: 2.0,
    seuil_alerte: 10,
    categorie: "boisson",
  },
  {
    nom: "Eau Minérale",
    quantite: 100,
    unite: "litres",
    prix_unitaire: 0.3,
    seuil_alerte: 20,
    categorie: "boisson",
  },
  {
    nom: "Café en grain",
    quantite: 10,
    unite: "kg",
    prix_unitaire: 18.0,
    seuil_alerte: 3,
    categorie: "boisson",
  },
];
// ex02

function showAlertStock(array) {
  array.forEach((item) => {
    if (item.quantite == item.seuil_alerte) {
      console.log(item);
    }
  });
}
showAlertStock(inventaire);

//ex03

function calculateTotal(array) {
  let sum = 0;
  array.forEach((item) => {
    sum += item.quantite * item.prix_unitaire;
  });
  return sum;
}
console.log(calculateTotal(inventaire));

//ex04

// quantityPerQuategory(array){
//   let meatCount = 0;
//   let vegCount = 0;
//   let spiceCount = 0;
//   let drinkCount = 0;
//   array.forEach(item =>{
//     switch(item.categorie){
//       case "épice" :
//         spiceCount++
//         break;
//     }
//   });
// }

//ex05
function makeAnOrder(array, ingredient, quantite) {
  const item = array.find((item) => item.nom === ingredient);

  if (item) {
    console.log("Ingredient found");
    if (item.quantite >= quantite) {
      console.log("Stock sufficient");
    } else {
      console.log("Stock insufficient");
    }
  } else {
    console.log("Ingredient cannot be found");
  }
}
makeAnOrder(inventaire, "Jus d'orange", 2);

// ## R-Challenge 6 — Le classement sportif 🔥

// Tu gères le classement d'un tournoi de football. Chaque équipe est un objet : nom, points, buts_pour, buts_contre, matchs_joues.

// 1. Crée 8 équipes avec des statistiques variées
// 2. Calcule la différence de buts pour chaque équipe (buts_pour - buts_contre)
// 3. Trie le classement : d'abord par points décroissant, puis par différence de buts en cas d'égalité
// 4. Affiche le classement formaté avec le rang : "1. PSG — 45 pts (diff: +28)"
// 5. Simule un match entre 2 équipes (score aléatoire) : mets à jour les points (3 pour victoire, 1 pour nul, 0 pour défaite), les buts pour/contre et les matchs joués
// 6. Après 5 matchs simulés, réaffiche le classement mis à jour

const classement = [
  {
    nom: "Équipe A",
    points: 18,
    buts_pour: 22,
    buts_contre: 8,
    matchs_joues: 7,
  },
  {
    nom: "Équipe B",
    points: 15,
    buts_pour: 14,
    buts_contre: 6,
    matchs_joues: 7,
  },
  {
    nom: "Équipe C",
    points: 12,
    buts_pour: 15,
    buts_contre: 12,
    matchs_joues: 7,
  },
  {
    nom: "Équipe D",
    points: 10,
    buts_pour: 10,
    buts_contre: 10,
    matchs_joues: 7,
  },
  {
    nom: "Équipe E",
    points: 9,
    buts_pour: 8,
    buts_contre: 11,
    matchs_joues: 7,
  },
  {
    nom: "Équipe F",
    points: 7,
    buts_pour: 9,
    buts_contre: 15,
    matchs_joues: 7,
  },
  {
    nom: "Équipe G",
    points: 4,
    buts_pour: 6,
    buts_contre: 14,
    matchs_joues: 7,
  },
  {
    nom: "Équipe H",
    points: 1,
    buts_pour: 3,
    buts_contre: 20,
    matchs_joues: 7,
  },
];
function calculateDiff(classement) {
  classement.forEach((team) => {
    let diff = team.buts_pour - team.buts_contre;
    console.log("Team :" + team.nom + " " + "Goals Difference :" + diff);
  });
}
calculateDiff(classement);

function sortTeams(classement) {
  sorted = classement.sort((a, b) => b.points - a.points);
  return sorted;
}
console.log(sortTeams(classement));

function match(team1, team2) {
  let score1 = Math.floor(Math.random() * 6);
  let score2 = Math.floor(Math.random() * 6);
  team1.matchs_joues++;
  team2.matchs_joues++;
  team1.points += score1;
  team2.points += score2;
  team1.buts_pour += score1;
  team1.buts_contre += score2;
  team2.buts_pour += score2;
  team2.buts_contre += score1;
  if (score1 > score2) console.log(team1.nom + "wins");
  else if (score2 < score1) console.log(team2.nom + "wins");
  else {
    console.log("Draw");
  }
}
classement.forEach((team) => {
  team.points = 0;
  team.buts_pour = 0;
  team.buts_contre = 0;
  team.matchs_joues = 0;
});

console.log(classement);

match(classement[1], classement[3]);
match(classement[0], classement[2]);
match(classement[1], classement[4]);
match(classement[6], classement[5]);
match(classement[3], classement[2]);
console.log(classement);
