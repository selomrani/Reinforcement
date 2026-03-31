let produits = [
  {
    id: 1,
    nom: "Ordinateur Portable",
    prix: 899.99,
    categorie: "Électronique",
    stock: 15,
    dateAjout: "2026-01-15",
  },
  {
    id: 2,
    nom: "Souris Sans Fil",
    prix: 25.5,
    categorie: "Électronique",
    stock: 100,
    dateAjout: "2026-02-10",
  },
  {
    id: 3,
    nom: "Casque Audio",
    prix: 120.0,
    categorie: "Électronique",
    stock: 50,
    dateAjout: "2026-03-01",
  },
  {
    id: 4,
    nom: "T-shirt Coton",
    prix: 19.99,
    categorie: "Vêtements",
    stock: 200,
    dateAjout: "2026-03-15",
  },
  {
    id: 5,
    nom: "Jean Slim",
    prix: 49.99,
    categorie: "Vêtements",
    stock: 75,
    dateAjout: "2026-03-20",
  },
  {
    id: 6,
    nom: "Cafetière",
    prix: 79.9,
    categorie: "Maison",
    stock: 30,
    dateAjout: "2026-01-20",
  },
  {
    id: 7,
    nom: "Lampe Bureau",
    prix: 35.0,
    categorie: "Maison",
    stock: 60,
    dateAjout: "2026-02-25",
  },
  {
    id: 8,
    nom: "Aspirateur Robot",
    prix: 299.0,
    categorie: "Maison",
    stock: 10,
    dateAjout: "2026-03-10",
  },
];
let produit = {
  nom: "test ",
  prix: 12.34,
  categorie: "Maison",
  stock: 12,
  dateAjout: "2026-03-12",
};
let produit1 = {
  nom: "test ",
  prix: 12.34,
  categorie: "Maison",
  stock: 12,
  dateAjout: "2026-03-12",
};
function ajouterProduit(array, produit) {
  produit.id = array.length + 1;
  array.push(produit);
}
ajouterProduit(produits, produit);
ajouterProduit(produits, produit1);
// console.log(produits);

function modifierProduit(id, nom, prix, categorie, stock, dateAjout) {
  let OgObject = produits.find((Element) => (Element.id = id));
  OgObject.nom = nom;
  OgObject.prix = prix;
  OgObject.categorie = categorie;
  OgObject.stock = stock;
  OgObject.dateAjout = dateAjout;
  //   console.log(OgObject);
}
modifierProduit(2, "ss", 12.12, 2 + "HS", 12, "12/12/2001");

function supprimerProduit(id, array) {
  array.splice(id, 1);
  console.log(array);
}

supprimerProduit(1, produits);

function obtenirProduit(id) {
  let foo = produits.find((Element) => Element.id == id);
  if (foo) {
    console.log(foo);
  } else {
    console.log("Product not found");
  }
}
obtenirProduit(2);

function rechercherParNom(nomCherche, array) {
  let produitTrouve = array.find((element) => element.nom === nomCherche);

  if (produitTrouve) {
    console.log("Resultat trouvé :", produitTrouve);
  } else {
    console.log("Aucun résultat trouvé");
  }
}

rechercherParNom("banane", produits);
