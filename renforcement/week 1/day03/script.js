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
  45,
  "2025/02",
  "09:23",
  "07228363533",
);
rsservation.annullerReservation();
console.log(rsservation.listerEtFiltrerParheour("2025/02"));
