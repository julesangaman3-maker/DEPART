// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  return depenses.reduce((total, n) => total + n, 0);
}

// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  if (depenses.length === 0) return 0;
  return depenses.reduce((total, n) => total + n, 0) / depenses.length;
}

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  return depenses.filter((M) => M > 2000);
}

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if (depenses.length === 0) return 0;
  return Math.max(...depenses);
}
const depensesTriees = [...depensesSemaine].sort((a, b) => a - b);
// TODO 5 : créer une copie triée, puis afficher le rapport demandé.

console.log("Tableau initial avant le tri : " + depensesSemaine);

console.log("Total des dépenses : " + calculerTotal(depensesSemaine) + " FCFA");
"                                                                             "
console.log("Moyenne des dépenses : " + calculerMoyenne(depensesSemaine) + " FCFA par jour");
""
console.log("Les dépenses supérieur à 2000: " + filtrerGrossesDepenses(depensesSemaine)  + " FCFA");
""
console.log("la plus grande dépense : " + trouverMaximum(depensesSemaine) + " FCFA");
""
console.log("Dépenses triées : " + depensesTriees  + " FCFA");

console.log("Tableau après le tri : " + depensesSemaine);
