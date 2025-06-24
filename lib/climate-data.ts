export interface ClimateAction {
  name: string;
  impact: number; // en tonnes CO2 équivalent par an
  description: string;
}

export const individualActions: ClimateAction[] = [
  {
    name: "Éviter un vol long-courrier",
    impact: 2.3,
    description: "Remplacer un vol Paris-New York par des vacances locales"
  },
  {
    name: "Passer au chauffage électrique",
    impact: 1.8,
    description: "Remplacer le chauffage au gaz par une pompe à chaleur"
  },
  {
    name: "Adopter un régime végétarien",
    impact: 1.5,
    description: "Réduire sa consommation de viande de 80%"
  },
  {
    name: "Utiliser les transports en commun",
    impact: 1.2,
    description: "Remplacer 50% des trajets en voiture par les transports"
  },
  {
    name: "Isoler son logement",
    impact: 1.0,
    description: "Améliorer l'isolation thermique de son domicile"
  },
  {
    name: "Acheter une voiture électrique",
    impact: 0.9,
    description: "Remplacer sa voiture thermique par un véhicule électrique"
  },
  {
    name: "Réduire le chauffage de 2°C",
    impact: 0.8,
    description: "Baisser la température de consigne de 21°C à 19°C"
  },
  {
    name: "Privilégier les produits locaux",
    impact: 0.6,
    description: "Acheter 80% de produits locaux et de saison"
  },
  {
    name: "Réduire les achats neufs",
    impact: 0.5,
    description: "Privilégier l'occasion et la réparation"
  },
  {
    name: "Limiter le streaming vidéo",
    impact: 0.3,
    description: "Réduire de moitié sa consommation de vidéos en ligne"
  }
];

export const nationalActions: ClimateAction[] = [
  {
    name: "Rénover les bâtiments DPE F-G",
    impact: 45.0,
    description: "Rénover 7 millions de logements énergivores"
  },
  {
    name: "Mix énergétique décarboné",
    impact: 38.0,
    description: "100% d'électricité renouvelable et nucléaire"
  },
  {
    name: "Électrification du parc auto",
    impact: 32.0,
    description: "Remplacer 30 millions de véhicules thermiques"
  },
  {
    name: "Développer le transport ferroviaire",
    impact: 28.0,
    description: "Doubler le réseau TER et créer des lignes TGV"
  },
  {
    name: "Agriculture bas-carbone",
    impact: 25.0,
    description: "Réduire les émissions agricoles de 50%"
  },
  {
    name: "Industrie verte",
    impact: 22.0,
    description: "Décarboner les processus industriels lourds"
  },
  {
    name: "Reforestation massive",
    impact: 18.0,
    description: "Planter 1 milliard d'arbres d'ici 2030"
  },
  {
    name: "Économie circulaire",
    impact: 15.0,
    description: "Recycler 80% des déchets et réduire la production"
  },
  {
    name: "Transport de marchandises",
    impact: 12.0,
    description: "Développer le fret ferroviaire et fluvial"
  },
  {
    name: "Rénovation tertiaire",
    impact: 10.0,
    description: "Rénover tous les bâtiments publics et bureaux"
  }
]; 