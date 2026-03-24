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



quantityPerQuategory(array){
  let meatCount = 0;
  let vegCount = 0;
  let spiceCount = 0;
  let drinkCount = 0;
  array.forEach(item =>{
    switch(item.categorie){
      case "épice" :
        spiceCount++
        break;
    }
  });
}


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
