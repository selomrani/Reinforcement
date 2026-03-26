// ## R-Challenge 7 — Le système de réservation de restaurant

// Tu développes le système de réservation d'un restaurant (30 places max).

// 1. Crée une structure pour gérer les réservations : chaque réservation a un id, un nom_client, un nombre_personnes, une date, une heure, un statut (confirmée, en attente, annulée) et un telephone
// 2. Fonction pour ajouter une réservation : vérifie que le nombre total de personnes pour ce créneau (date + heure) ne dépasse pas 30. Si c'est plein, mets la réservation en "en attente"
// 3. Fonction pour annuler une réservation : change le statut en "annulée" et vérifie s'il y a des réservations en attente pour ce créneau qui peuvent maintenant être confirmées
// 4. Fonction pour lister les réservations d'une date donnée, triées par heure
// 5. Fonction pour calculer le taux d'occupation d'une journée (nombre de places réservées / 30 par créneau)
// 6. Ajoute 8 réservations en testant les cas limites (créneau plein, annulation libérant une place)

class Reservation {
  static ress = [];
  constructor(
    id,
    nomClient,
    nbPersonnes,
    date,
    heure,
    telephone,
    statut = "en attente",
  ) {
    this.id = id;
    this.nom_client = nomClient;
    if (nbPersonnes > 30) console.log("Max is 30");
    else {
      this.nbPersonnes = nbPersonnes;
    }
    this.date = date;
    this.heure = heure;
    this.telephone = telephone;
    this.statut = statut;
    Reservation.ress.push(this);
  }
  //   modifierStatut() {
  //     const statutsValides = ["confirmée", "en attente", "annulée"];
  //     if (statutsValides.includes(nouveauStatut)) {
  //       this.statut = nouveauStatut;
  //     }
  //   }
  annullerReservation() {
    this.statut = "annulé";
  }
  listerEtFiltrerParheour(date) {
    return Reservation.ress
      .filter((item) => item.date == date)
      .sort((a, b) => b.heure - a.heure);
  }
}
let rservation = new Reservation(
  "11",
  "soufyane",
  12,
  "2025/02",
  "09:24",
  "07228363533",
);
// console.log(rservation);
let rsservation = new Reservation(
  "11",
  "soufyane",
  12,
  "2025/02",
  "09:23",
  "07228363533",
);
rsservation.annullerReservation();
// console.log(rsservation.listerEtFiltrerParheour("2025/02"));

// ## R-Challenge 8 — Le panier e-commerce intelligent

// Tu développes la logique du panier d'un site e-commerce.

// 1. Le panier contient un tableau d'articles. Chaque article référence un produit (id, nom, prix, stock_disponible) et une quantité
// 2. Fonction pour ajouter un produit : si déjà dans le panier, augmente la quantité (sans dépasser le stock disponible). Si pas dans le panier, ajoute-le
// 3. Fonction pour modifier la quantité : vérifie que la nouvelle quantité ne dépasse pas le stock
// 4. Fonction pour supprimer un article du panier
// 5. Fonctions de calcul : sous-total par article (prix × quantité), total du panier, nombre total d'articles
// 6. Système de codes promo : "BIENVENUE" = -15% sur le premier achat, "NOEL2025" = -10€ si le total > 50€, "LIVGRATUITE" = -7€ (frais de livraison offerts). Un seul code applicable à la fois
// 7. Récapitulatif complet : chaque ligne, sous-total, remise (si code promo), frais de livraison (7€ gratuits si total > 100€), TVA (20%), total TTC

let panier = [
  {
    produit: {
      id: 1,
      nom: "Cafetière à piston",
      prix: 29.99,
      stock_disponible: 15,
    },
    quantite: 2,
  },
  {
    produit: {
      id: 2,
      nom: "Mug en céramique",
      prix: 12.5,
      stock_disponible: 42,
    },
    quantite: 4,
  },
];
// function ajouterUnProduit(array, produit) {
//   if (array.includes(produit)) {
//     produit.quantite++;
//   } else {
//     array.push(produit);
//   }
// }
let produit = {
  produit: {
    id: 5,
    nom: "Cafetière à piston",
    prix: 29.99,
    stock_disponible: 15,
  },
  quantite: 2,
};
// ajouterUnProduit(panier, produit);
// console.log(panier);

function ajouterUnProduit(array, nouveauProduit) {
  let produitExistant = array.find(
    (item) => item.produit.id === nouveauProduit.produit.id,
  );

  if (produitExistant) {
    produitExistant.quantite += nouveauProduit.quantite;
  } else {
    array.push(nouveauProduit);
  }
}
ajouterUnProduit(panier, produit);
console.log(panier);

function modifierQuantite(produit, newQuantity) {
  if (newQuantity <= produit.stock_disponible) produit.quantite = newQuantity;
  else console.log("Stock insiffusant");
}
function supprimerUnProduit(produit, array) {
  indexToDelete = array.indexOf(produit);
  array.splice(indexToDelete, 1);
}
supprimerUnProduit(produit, panier);
console.log(panier);

function calculerSousTotal(array, codePromo) {
  array.forEach((item) => {
    console.log(
      "Article : " +
        item.produit.nom +
        "Sous-total : " +
        item.produit.prix * item.quantite,
    );
  });
  let toto = 0;
  let titi = 0;
  array.forEach((element) => {
    toto += element.produit.prix * element.quantite;
    titi += element.quantite;
  });
  if (codePromo == "BIENVENUE") {
    toto -= toto * 0.15;
  } else if (codePromo == "NOEL2025" && toto >= 50) {
    toto -= 10;
  } else if (codePromo == "LIVGRATUITE") {
    toto -= 7;
  }
  console.log("Nombre des articles : " + titi);
  console.log("Total : " + toto);
}
console.log(calculerSousTotal(panier, "LIVGRATUITE"));

// ## R-Challenge 9 — Le convertisseur de devises 🔥

// Tu crées un convertisseur multi-devises pour une application de finance.

// 1. Crée un objet contenant les taux de change par rapport à l'euro : USD (1.08), GBP (0.86), MAD (10.85), JPY (162.5), CAD (1.47)
// 2. Fonction `convertir(montant, deviseSource, deviseCible)` : convertit d'abord en euros puis dans la devise cible
// 3. Fonction `convertirPanier(panier, deviseSource, deviseCible)` : prend un tableau de prix dans une devise et retourne les prix convertis
// 4. Fonction `meilleurTaux(montant, deviseSource)` : affiche la valeur du montant dans TOUTES les devises disponibles
// 5. Historique des conversions : chaque conversion est stockée avec la date, les montants et les devises. Affiche l'historique
// 6. Statistiques : devise la plus demandée, montant total converti, conversion la plus fréquente

const tauxDeChange = {
  USD: 1.08,
  GBP: 0.86,
  MAD: 10.85,
  JPY: 162.5,
  CAD: 1.47,
};
function convertir(montant, deviseSource, deviseCible) {
  let montantEnEuro = montant / tauxDeChange[deviseSource];
  return montantEnEuro * tauxDeChange[deviseCible];
}
console.log(convertir(12, "USD", "MAD"));

function convertirPanier(panier, deviseSource, deviseCible) {
  panier.forEach((element) => {
    console.log(convertir(element.produit.prix, deviseSource, deviseCible));
  });
}
convertirPanier(panier, "CAD", "MAD");
function meilleurTaux(montant, deviseSource) {
  let ccc = [];
  let c1 = convertir(montant, deviseSource, "CAD");
  let c2 = convertir(montant, deviseSource, "JPY");
  let c3 = convertir(montant, deviseSource, "MAD");
  let c4 = convertir(montant, deviseSource, "GBP");
  let c5 = convertir(montant, deviseSource, "USD");
  ccc.push(c1, c2, c3, c4, c5);
  let top = Math.max(...ccc);
  return top;
}
console.log("Le meilleur montant est :", meilleurTaux(12, "MAD"));

//ex05 historique des convertions
