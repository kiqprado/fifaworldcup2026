import {Player} from '@/app/components/card-squad-lineup'

export interface ISquad {
  title?: string
  code: string;
  formation: string;
  starters: Player[];
  reserves: Player[];
}

// Positions on the pitch for common formations (percentage-based x,y)
export const formationPositions: Record<string, { x: number; y: number }[]> = {
  "4-3-3": [
    { x: 50, y: 90 },   // GK
    { x: 15, y: 70 },   // LB
    { x: 38, y: 72 },   // CB
    { x: 62, y: 72 },   // CB
    { x: 85, y: 70 },   // RB
    { x: 30, y: 50 },   // CM
    { x: 50, y: 45 },   // CM
    { x: 70, y: 50 },   // CM
    { x: 15, y: 25 },   // LW
    { x: 50, y: 20 },   // ST
    { x: 85, y: 25 },   // RW
  ],
  "4-4-2": [
    { x: 50, y: 90 },
    { x: 15, y: 70 },
    { x: 38, y: 72 },
    { x: 62, y: 72 },
    { x: 85, y: 70 },
    { x: 15, y: 48 },
    { x: 38, y: 50 },
    { x: 62, y: 50 },
    { x: 85, y: 48 },
    { x: 38, y: 22 },
    { x: 62, y: 22 },
  ],
  "3-5-2": [
    { x: 50, y: 90 },
    { x: 25, y: 72 },
    { x: 50, y: 74 },
    { x: 75, y: 72 },
    { x: 10, y: 50 },
    { x: 35, y: 52 },
    { x: 50, y: 46 },
    { x: 65, y: 52 },
    { x: 90, y: 50 },
    { x: 38, y: 22 },
    { x: 62, y: 22 },
  ],
  "4-2-3-1": [
    { x: 50, y: 90 },
    { x: 15, y: 70 },
    { x: 38, y: 72 },
    { x: 62, y: 72 },
    { x: 85, y: 70 },
    { x: 38, y: 55 },
    { x: 62, y: 55 },
    { x: 15, y: 35 },
    { x: 50, y: 32 },
    { x: 85, y: 35 },
    { x: 50, y: 18 },
  ],
  "3-4-2-1": [
    { x: 50, y: 90 }, // GK

    { x: 25, y: 72 }, // LCB
    { x: 50, y: 74 }, // CB
    { x: 75, y: 72 }, // RCB

    { x: 10, y: 50 }, // LWB
    { x: 38, y: 52 }, // CM
    { x: 62, y: 52 }, // CM
    { x: 90, y: 50 }, // RWB

    { x: 35, y: 30 }, // LAM
    { x: 65, y: 30 }, // RAM

    { x: 50, y: 18 }, // ST
  ],
};

export const squads: ISquad[] = [
  {
    code: "BRA",
    formation: "4-3-3",
    starters: [
      { name: "Alisson", number: 1, position: "GOL" },

      { name: "Wesley", number: 2, position: "LAT" },
      { name: "Marquinhos", number: 4, position: "ZAG" },
      { name: "Gabriel Magalhães", number: 3, position: "ZAG" },
      { name: "Alex Sandro", number: 6, position: "LAT" },

      { name: "Casemiro", number: 5, position: "VOL" },
      { name: "Bruno Guimarães", number: 8, position: "MEI" },
      { name: "Lucas Paquetá", number: 10, position: "MEI" },

      { name: "Raphinha", number: 11, position: "ATA" },
      { name: "Vinícius Jr.", number: 7, position: "ATA" },
      { name: "Neymar", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Ederson", number: 23, position: "GOL" },
      { name: "Weverton", number: 12, position: "GOL" },

      { name: "Bremer", number: 14, position: "ZAG" },
      { name: "Léo Pereira", number: 13, position: "ZAG" },
      { name: "Ibañez", number: 15, position: "ZAG" },

      { name: "Danilo", number: 22, position: "LAT" },
      { name: "Douglas Santos", number: 16, position: "LAT" },

      { name: "Fabinho", number: 18, position: "VOL" },
      { name: "Danilo Santos", number: 17, position: "MEI" },

      { name: "Gabriel Martinelli", number: 19, position: "ATA" },
      { name: "Matheus Cunha", number: 20, position: "ATA" },
      { name: "Endrick", number: 21, position: "ATA" },
      { name: "Luiz Henrique", number: 24, position: "ATA" },
      { name: "Igor Thiago", number: 25, position: "ATA" },
      { name: "Rayan", number: 26, position: "ATA" },
    ],
  },
  {
    code: "ARG",
    formation: "4-3-3",
    starters: [
      { name: "Emiliano Martínez", number: 23, position: "GOL" },

      { name: "Nahuel Molina", number: 2, position: "LAT" },
      { name: "Cristian Romero", number: 13, position: "ZAG" },
      { name: "Lisandro Martínez", number: 25, position: "ZAG" },
      { name: "Nicolás Tagliafico", number: 3, position: "LAT" },

      { name: "Enzo Fernández", number: 5, position: "VOL" },
      { name: "Rodrigo De Paul", number: 7, position: "MEI" },
      { name: "Alexis Mac Allister", number: 20, position: "MEI" },

      { name: "Lionel Messi", number: 10, position: "ATA" },
      { name: "Julián Álvarez", number: 9, position: "ATA" },
      { name: "Nicolás González", number: 15, position: "ATA" },
    ],

    reserves: [
      { name: "Gerónimo Rulli", number: 12, position: "GOL" },
      { name: "Juan Musso", number: 1, position: "GOL" },

      { name: "Nicolás Otamendi", number: 6, position: "ZAG" },
      { name: "Leonardo Balerdi", number: 4, position: "ZAG" },
      { name: "Facundo Medina", number: 18, position: "ZAG" },

      { name: "Gonzalo Montiel", number: 14, position: "LAT" },
      { name: "Valentín Barco", number: 16, position: "LAT" },

      { name: "Leandro Paredes", number: 8, position: "VOL" },
      { name: "Giovani Lo Celso", number: 11, position: "MEI" },
      { name: "Exequiel Palacios", number: 17, position: "MEI" },
      { name: "Thiago Almada", number: 19, position: "MEI" },
      { name: "Nico Paz", number: 21, position: "MEI" },

      { name: "Lautaro Martínez", number: 22, position: "ATA" },
      { name: "Giuliano Simeone", number: 24, position: "ATA" },
      { name: "Flaco Lopez", number: 26, position: "ATA" },
    ],
  },
  {
    code: "CAN",
    formation: "4-2-3-1",
    starters: [
      { name: "Dayne St. Clair", number: 1, position: "GOL" },

      { name: "Alistair Johnston", number: 2, position: "LAT" },
      { name: "Moise Bombito", number: 15, position: "ZAG" },
      { name: "Derek Cornelius", number: 13, position: "ZAG" },
      { name: "Alphonso Davies", number: 19, position: "LAT" },

      { name: "Stephen Eustáquio", number: 7, position: "VOL" },
      { name: "Ismael Koné", number: 8, position: "VOL" },

      { name: "Tajon Buchanan", number: 17, position: "MEI" },
      { name: "Jonathan David", number: 10, position: "MEI" },
      { name: "Liam Millar", number: 11, position: "MEI" },

      { name: "Cyle Larin", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Maxim Crépeau", number: 16, position: "GOL" },
      { name: "Owen Goodman", number: 18, position: "GOL" },

      { name: "Joel Waterman", number: 4, position: "ZAG" },
      { name: "Alfie Jones", number: 5, position: "ZAG" },
      { name: "Luc de Fougerolles", number: 6, position: "ZAG" },

      { name: "Richie Laryea", number: 22, position: "LAT" },
      { name: "Kiko Sigur", number: 3, position: "LAT" },

      { name: "Mathieu Choinière", number: 14, position: "MEI" },
      { name: "Jonathan Osorio", number: 20, position: "MEI" },
      { name: "Nathan Saliba", number: 21, position: "MEI" },
      { name: "Ali Ahmed", number: 24, position: "MEI" },

      { name: "Jacob Shaffelburg", number: 12, position: "ATA" },
      { name: "Marcelo Flores", number: 23, position: "ATA" },
      { name: "Tani Oluwaseyi", number: 25, position: "ATA" },
      { name: "Promise David", number: 26, position: "ATA" },
    ],
  },
  {
    code: "USA",
    formation: "4-3-3",
    starters: [
      { name: "Matt Turner", number: 1, position: "GOL" },

      { name: "Sergiño Dest", number: 2, position: "LAT" },
      { name: "Chris Richards", number: 3, position: "ZAG" },
      { name: "Tim Ream", number: 13, position: "ZAG" },
      { name: "Antonee Robinson", number: 5, position: "LAT" },

      { name: "Tyler Adams", number: 6, position: "VOL" },
      { name: "Weston McKennie", number: 8, position: "MEI" },
      { name: "Gio Reyna", number: 10, position: "MEI" },

      { name: "Tim Weah", number: 21, position: "ATA" },
      { name: "Folarin Balogun", number: 9, position: "ATA" },
      { name: "Christian Pulisic", number: 7, position: "ATA" },
    ],

    reserves: [
      { name: "Chris Brady", number: 18, position: "GOL" },
      { name: "Matt Freese", number: 25, position: "GOL" },

      { name: "Miles Robinson", number: 12, position: "ZAG" },
      { name: "Mark McKenzie", number: 20, position: "ZAG" },
      { name: "Auston Trusty", number: 22, position: "ZAG" },

      { name: "Joe Scally", number: 19, position: "LAT" },
      { name: "Alex Freeman", number: 23, position: "LAT" },
      { name: "Max Arfsten", number: 24, position: "LAT" },

      { name: "Cristian Roldan", number: 4, position: "VOL" },
      { name: "Brenden Aaronson", number: 14, position: "MEI" },
      { name: "Malik Tillman", number: 17, position: "MEI" },

      { name: "Ricardo Pepi", number: 16, position: "ATA" },
      { name: "Haji Wright", number: 11, position: "ATA" },
      { name: "Alex Zendejas", number: 15, position: "ATA" },
    ],
  },
  {
    code: "MEX",
    formation: "4-3-3",
    starters: [
      { name: "Guillermo Ochoa", number: 13, position: "GOL" },

      { name: "Jorge Sánchez", number: 2, position: "LAT" },
      { name: "Johan Vásquez", number: 5, position: "ZAG" },
      { name: "César Montes", number: 3, position: "ZAG" },
      { name: "Jesús Gallardo", number: 23, position: "LAT" },

      { name: "Edson Álvarez", number: 4, position: "VOL" },
      { name: "Luis Chávez", number: 24, position: "MEI" },
      { name: "Orbelín Pineda", number: 17, position: "MEI" },

      { name: "Raúl Jiménez", number: 9, position: "ATA" },
      { name: "Santiago Giménez", number: 11, position: "ATA" },
      { name: "Julián Quiñones", number: 21, position: "ATA" },
    ],

    reserves: [
      { name: "Raúl Rangel", number: 1, position: "GOL" },
      { name: "Carlos Acevedo", number: 12, position: "GOL" },

      { name: "Israel Reyes", number: 14, position: "ZAG" },
      { name: "Erik Lira", number: 15, position: "ZAG" },

      { name: "Mateo Chávez", number: 6, position: "LAT" },
      { name: "Luis Romo", number: 7, position: "LAT" },

      { name: "Álvaro Fidalgo", number: 8, position: "MEI" },
      { name: "Obed Vargas", number: 18, position: "MEI" },
      { name: "Gilberto Mora", number: 19, position: "MEI" },

      { name: "Roberto Alvarado", number: 16, position: "ATA" },
      { name: "César Huerta", number: 20, position: "ATA" },
      { name: "Brian Gutiérrez", number: 22, position: "ATA" },
      { name: "Alexis Vega", number: 25, position: "ATA" },
      { name: "Guillermo Martínez", number: 26, position: "ATA" },
      { name: "Armando González", number: 27, position: "ATA" },
    ],
  },
  {
    code: "CUW",
    formation: "4-2-3-1",
    starters: [
      { name: "Eloy Room", number: 1, position: "GOL" },

      { name: "Jurien Gaari", number: 2, position: "LAT" },
      { name: "Riechedly Bazoer", number: 3, position: "ZAG" },
      { name: "Armando Obispo", number: 4, position: "ZAG" },
      { name: "Sherel Floranus", number: 5, position: "LAT" },

      { name: "Leandro Bacuna", number: 8, position: "VOL" },
      { name: "Juninho Bacuna", number: 10, position: "VOL" },

      { name: "Brandley Kuwas", number: 11, position: "MEI" },
      { name: "Gervane Kastaneer", number: 7, position: "MEI" },
      { name: "Tahith Chong", number: 14, position: "MEI" },

      { name: "Jurgen Locadia", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Tyrick Bodak", number: 12, position: "GOL" },
      { name: "Trevor Doornbusch", number: 16, position: "GOL" },

      { name: "Joshua Brenet", number: 15, position: "LAT" },
      { name: "Roshon Van Eijma", number: 6, position: "ZAG" },
      { name: "Shurandy Sambo", number: 19, position: "LAT" },
      { name: "Deveron Fonville", number: 24, position: "ZAG" },

      { name: "Kevin Felida", number: 23, position: "VOL" },
      { name: "Godfried Roemeratoe", number: 13, position: "MEI" },
      { name: "Livano Comenencia", number: 20, position: "MEI" },

      { name: "Kenji Gorré", number: 17, position: "ATA" },
      { name: "Jeremy Antonisse", number: 21, position: "ATA" },
      { name: "Jearl Margaritha", number: 22, position: "ATA" },
      { name: "Tyrese Noslin", number: 18, position: "ATA" },
      { name: "Sontje Hansen", number: 25, position: "ATA" },
      { name: "AR'Jany Martha", number: 26, position: "ATA" },
    ],
  },
  {
    code: "HAI",
    formation: "4-4-2",
    starters: [
      { name: "Johnny Placide", number: 1, position: "GOL" },

      { name: "Carlens Arcus", number: 2, position: "LAT" },
      { name: "Ricardo Adé", number: 4, position: "ZAG" },
      { name: "Jean-Kévin Duverne", number: 22, position: "ZAG" },
      { name: "Martin Expérience", number: 3, position: "LAT" },

      { name: "Danley Jean-Jacques", number: 17, position: "VOL" },
      { name: "Leverton Pierre", number: 14, position: "VOL" },
      { name: "Jean-Ricner Bellegarde", number: 10, position: "MEI" },
      { name: "Derrick Étienne", number: 7, position: "MEI" },

      { name: "Frantzdy Pierrot", number: 9, position: "ATA" },
      { name: "Duckens Nazon", number: 20, position: "ATA" },
    ],

    reserves: [
      { name: "Alexandre Pierre", number: 12, position: "GOL" },
      { name: "Josué Duverger", number: 23, position: "GOL" },

      { name: "Hannes Delcroix", number: 5, position: "ZAG" },
      { name: "Keeto Thermoncy", number: 13, position: "ZAG" },

      { name: "Wilguens Paugain", number: 18, position: "LAT" },
      { name: "Duke Lacroix", number: 6, position: "LAT" },

      { name: "Carl-Fred Sainthe", number: 15, position: "VOL" },
      { name: "Pierre Woodenski", number: 8, position: "MEI" },

      { name: "Louicius Deedson", number: 11, position: "ATA" },
      { name: "Ruben Providence", number: 19, position: "ATA" },
      { name: "Yassin Fortune", number: 21, position: "ATA" },
      { name: "Dominique Simon", number: 16, position: "ATA" },
      { name: "Wilson Isidor", number: 24, position: "ATA" },
      { name: "Lenny Joseph", number: 25, position: "ATA" },
    ],
  },
  {
    code: "PAN",
    formation: "5-4-1",
    starters: [
      { name: "Orlando Mosquera", number: 1, position: "GOL" },

      { name: "Amir Murillo", number: 2, position: "LAT" },
      { name: "Fidel Escobar", number: 3, position: "ZAG" },
      { name: "Andrés Andrade", number: 4, position: "ZAG" },
      { name: "José Córdoba", number: 5, position: "ZAG" },
      { name: "Eric David", number: 15, position: "LAT" },

      { name: "Adalberto Carrasquilla", number: 8, position: "MEI" },
      { name: "Aníbal Godoy", number: 20, position: "VOL" },
      { name: "Cristian Martínez", number: 10, position: "MEI" },
      { name: "Yoel Bárcenas", number: 11, position: "MEI" },

      { name: "José Fajardo", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Luis Mejía", number: 12, position: "GOL" },
      { name: "César Samudio", number: 22, position: "GOL" },

      { name: "Jiovany Ramos", number: 13, position: "ZAG" },
      { name: "Roderick Miller", number: 16, position: "ZAG" },
      { name: "Edgardo Fariña", number: 6, position: "ZAG" },

      { name: "César Blackman", number: 18, position: "LAT" },
      { name: "Jorge Gutiérrez", number: 14, position: "LAT" },

      { name: "Carlos Harvey", number: 7, position: "VOL" },
      { name: "César Yanis", number: 17, position: "MEI" },

      { name: "Ismael Díaz", number: 19, position: "ATA" },
      { name: "Cecilio Waterman", number: 21, position: "ATA" },
      { name: "José Luis Rodríguez", number: 23, position: "ATA" },
      { name: "Alberto Quintero", number: 24, position: "ATA" },
      { name: "Tomás Rodríguez", number: 25, position: "ATA" },
      { name: "Azarías Londoño", number: 26, position: "ATA" },
    ],
  },
  {
    code: "GER",
    formation: "4-2-3-1",
    starters: [
      { name: "Manuel Neuer", number: 1, position: "GOL" },

      { name: "Joshua Kimmich", number: 6, position: "LAT" },
      { name: "Antonio Rüdiger", number: 2, position: "ZAG" },
      { name: "Jonathan Tah", number: 4, position: "ZAG" },
      { name: "David Raum", number: 3, position: "LAT" },

      { name: "Aleksandar Pavlović", number: 23, position: "VOL" },
      { name: "Leon Goretzka", number: 8, position: "VOL" },

      { name: "Jamal Musiala", number: 10, position: "MEI" },
      { name: "Florian Wirtz", number: 17, position: "MEI" },
      { name: "Leroy Sané", number: 19, position: "ATA" },

      { name: "Kai Havertz", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Oliver Baumann", number: 12, position: "GOL" },
      { name: "Alexander Nübel", number: 22, position: "GOL" },

      { name: "Nico Schlotterbeck", number: 15, position: "ZAG" },
      { name: "Waldemar Anton", number: 5, position: "ZAG" },
      { name: "Malick Thiaw", number: 13, position: "ZAG" },

      { name: "Nathaniel Brown", number: 18, position: "LAT" },

      { name: "Angelo Stiller", number: 16, position: "VOL" },
      { name: "Pascal Gross", number: 20, position: "MEI" },
      { name: "Felix Nmecha", number: 14, position: "MEI" },
      { name: "Nadiem Amiri", number: 21, position: "MEI" },

      { name: "Deniz Undav", number: 24, position: "ATA" },
      { name: "Maximilian Beier", number: 11, position: "ATA" },
      { name: "Jamie Leweling", number: 25, position: "ATA" },
      { name: "Nick Woltemade", number: 26, position: "ATA" },
      { name: "Lennart Karl", number: 27, position: "ATA" },
    ],
  },
  {
    code: "AUT",
    formation: "4-2-3-1",
    starters: [
      { name: "Alexander Schlager", number: 1, position: "GOL" },

      { name: "Stefan Posch", number: 5, position: "LAT" },
      { name: "Kevin Danso", number: 4, position: "ZAG" },
      { name: "David Alaba", number: 2, position: "ZAG" },
      { name: "Phillipp Mwene", number: 16, position: "LAT" },

      { name: "Konrad Laimer", number: 20, position: "VOL" },
      { name: "Nicolas Seiwald", number: 6, position: "VOL" },

      { name: "Marcel Sabitzer", number: 9, position: "MEI" },
      { name: "Christoph Baumgartner", number: 19, position: "MEI" },
      { name: "Patrick Wimmer", number: 23, position: "ATA" },

      { name: "Marko Arnautović", number: 7, position: "ATA" },
    ],

    reserves: [
      { name: "Patrick Pentz", number: 13, position: "GOL" },
      { name: "Florian Wiegele", number: 12, position: "GOL" },

      { name: "Philipp Lienhart", number: 15, position: "ZAG" },
      { name: "David Affengruber", number: 3, position: "ZAG" },
      { name: "Marco Friedl", number: 22, position: "ZAG" },
      { name: "Michael Svoboda", number: 24, position: "ZAG" },

      { name: "Alexander Prass", number: 21, position: "LAT" },

      { name: "Romano Schmid", number: 18, position: "MEI" },
      { name: "Florian Grillitsch", number: 17, position: "VOL" },
      { name: "Alessandro Schopf", number: 10, position: "MEI" },
      { name: "Carney Chukwuemeka", number: 14, position: "MEI" },

      { name: "Michael Gregoritsch", number: 11, position: "ATA" },
      { name: "Sasa Kalajdzic", number: 25, position: "ATA" },
      { name: "Paul Wanner", number: 26, position: "ATA" },
    ],
  },
  {
    code: "BEL",
    formation: "4-2-3-1",
    starters: [
      { name: "Courtois", number: 1, position: "GOL" },

      { name: "Timothy Castagne", number: 21, position: "LAT" },
      { name: "Zeno Debast", number: 2, position: "ZAG" },
      { name: "Koni De Winter", number: 4, position: "ZAG" },
      { name: "Arthur Theate", number: 3, position: "LAT" },

      { name: "Amadou Onana", number: 18, position: "VOL" },
      { name: "Youri Tielemans", number: 8, position: "VOL" },

      { name: "Jeremy Doku", number: 22, position: "ATA" },
      { name: "Kevin De Bruyne", number: 7, position: "MEI" },
      { name: "Leandro Trossard", number: 17, position: "ATA" },

      { name: "Romelu Lukaku", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Lammens", number: 12, position: "GOL" },
      { name: "Mike Penders", number: 13, position: "GOL" },

      { name: "Brandon Mechele", number: 5, position: "ZAG" },
      { name: "Nathan Ngoy", number: 15, position: "ZAG" },

      { name: "Thomas Meunier", number: 11, position: "LAT" },
      { name: "Maxim De Cuyper", number: 20, position: "LAT" },
      { name: "Joaquin Seys", number: 23, position: "LAT" },

      { name: "Nicolas Raskin", number: 6, position: "VOL" },
      { name: "Hans Vanaken", number: 14, position: "MEI" },
      { name: "Axel Witsel", number: 16, position: "VOL" },

      { name: "Charles De Ketelaere", number: 10, position: "MEI" },
      { name: "Dodi Lukebakio", number: 19, position: "ATA" },
      { name: "Alexis Saelemaekers", number: 24, position: "ATA" },
      { name: "Mathias Fernandez-Pardo", number: 25, position: "ATA" },
      { name: "Diego Moreira", number: 26, position: "ATA" },
    ],
  },
  {
    code: "BIH",
    formation: "3-5-2",
    starters: [
      { name: "Nikola Vasilj", number: 1, position: "GOL" },

      { name: "Dennis Hadžikadunić", number: 3, position: "ZAG" },
      { name: "Sead Kolašinac", number: 5, position: "ZAG" },
      { name: "Tarik Muharemović", number: 16, position: "ZAG" },

      { name: "Amar Dedić", number: 7, position: "LAT" },
      { name: "Benjamin Tahirović", number: 6, position: "VOL" },
      { name: "Amir Hadžiahmetović", number: 21, position: "MEI" },
      { name: "Armin Gigović", number: 8, position: "MEI" },
      { name: "Dženis Burnić", number: 13, position: "LAT" },

      { name: "Edin Džeko", number: 11, position: "ATA" },
      { name: "Ermedin Demirović", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Martin Zlomislić", number: 12, position: "GOL" },
      { name: "Osman Hadžikić", number: 23, position: "GOL" },

      { name: "Stjepan Radeljić", number: 15, position: "ZAG" },
      { name: "Nikola Katić", number: 4, position: "ZAG" },
      { name: "Nihad Mujakić", number: 18, position: "ZAG" },
      { name: "Nidal Čelik", number: 2, position: "ZAG" },

      { name: "Ivan Šunjić", number: 14, position: "VOL" },
      { name: "Ivan Bašić", number: 17, position: "MEI" },
      { name: "Kerim Alajbegović", number: 20, position: "MEI" },

      { name: "Esmir Bajraktarević", number: 19, position: "ATA" },
      { name: "Amar Memić", number: 22, position: "ATA" },
      { name: "Haris Tabaković", number: 24, position: "ATA" },
      { name: "Samed Baždar", number: 25, position: "ATA" },
      { name: "Jovo Lukić", number: 26, position: "ATA" },
      { name: "Ermin Mahmić", number: 27, position: "ATA" },
    ],
  },
  {
    code: "CRO",
    formation: "4-3-3",
    starters: [
      { name: "Dominik Livaković", number: 1, position: "GOL" },

      { name: "Josip Stanišić", number: 2, position: "LAT" },
      { name: "Joško Gvardiol", number: 4, position: "ZAG" },
      { name: "Josip Šutalo", number: 6, position: "ZAG" },
      { name: "Duje Ćaleta-Car", number: 3, position: "LAT" },

      { name: "Mateo Kovačić", number: 8, position: "VOL" },
      { name: "Luka Modrić", number: 10, position: "MEI" },
      { name: "Petar Sučić", number: 11, position: "MEI" },

      { name: "Mario Pašalić", number: 15, position: "ATA" },
      { name: "Andrej Kramarić", number: 9, position: "ATA" },
      { name: "Ivan Perišić", number: 14, position: "ATA" },
    ],

    reserves: [
      { name: "Dominik Kotarski", number: 12, position: "GOL" },
      { name: "Ivor Pandur", number: 23, position: "GOL" },

      { name: "Martin Erlić", number: 5, position: "ZAG" },
      { name: "Marin Pongračić", number: 21, position: "ZAG" },
      { name: "Luka Vušković", number: 22, position: "ZAG" },

      { name: "Joško Gvardiol", number: 19, position: "LAT" },

      { name: "Luka Sučić", number: 17, position: "MEI" },
      { name: "Nikola Vlašić", number: 13, position: "MEI" },
      { name: "Martin Baturina", number: 7, position: "MEI" },
      { name: "Nikola Moro", number: 18, position: "VOL" },
      { name: "Kristijan Jakić", number: 20, position: "VOL" },

      { name: "Ante Budimir", number: 16, position: "ATA" },
      { name: "Petar Musa", number: 24, position: "ATA" },
      { name: "Igor Matanović", number: 25, position: "ATA" },
      { name: "Marco Pašalić", number: 26, position: "ATA" },
      { name: "Toni Fruk", number: 27, position: "ATA" },
    ],
  },
  {
    code: "SCO",
    formation: "3-4-2-1",
    starters: [
      { name: "Angus Gunn", number: 1, position: "GOL" },

      { name: "Jack Hendry", number: 13, position: "ZAG" },
      { name: "Grant Hanley", number: 6, position: "ZAG" },
      { name: "Kieran Tierney", number: 3, position: "ZAG" },

      { name: "Nathan Patterson", number: 2, position: "LAT" },
      { name: "Scott McTominay", number: 4, position: "VOL" },
      { name: "Billy Gilmour", number: 8, position: "MEI" },
      { name: "Andy Robertson", number: 11, position: "LAT" },

      { name: "John McGinn", number: 7, position: "MEI" },
      { name: "Ryan Christie", number: 10, position: "MEI" },

      { name: "Lyndon Dykes", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Craig Gordon", number: 12, position: "GOL" },
      { name: "Liam Kelly", number: 21, position: "GOL" },

      { name: "Scott McKenna", number: 15, position: "ZAG" },
      { name: "John Souttar", number: 5, position: "ZAG" },
      { name: "Dom Hyam", number: 18, position: "ZAG" },

      { name: "Aaron Hickey", number: 22, position: "LAT" },
      { name: "Anthony Ralston", number: 19, position: "LAT" },

      { name: "Kenny McLean", number: 23, position: "MEI" },
      { name: "Lewis Ferguson", number: 16, position: "MEI" },

      { name: "Che Adams", number: 17, position: "ATA" },
      { name: "Lawrence Shankland", number: 20, position: "ATA" },
      { name: "George Hirst", number: 24, position: "ATA" },
      { name: "Ross Stewart", number: 25, position: "ATA" },
      { name: "Ben Doak", number: 14, position: "ATA" },
      { name: "Findlay Curtis", number: 26, position: "ATA" },
    ],
  },
  {
    code: "ESP",
    formation: "4-3-3",
    starters: [
      { name: "Unai Simón", number: 23, position: "GOL" },

      { name: "Pedro Porro", number: 2, position: "LAT" },
      { name: "Aymeric Laporte", number: 5, position: "ZAG" },
      { name: "Pau Cubarsí", number: 4, position: "ZAG" },
      { name: "Marc Cucurella", number: 3, position: "LAT" },

      { name: "Rodri", number: 16, position: "VOL" },
      { name: "Pedri", number: 8, position: "MEI" },
      { name: "Fabián Ruiz", number: 10, position: "MEI" },

      { name: "Lamine Yamal", number: 19, position: "ATA" },
      { name: "Mikel Oyarzabal", number: 7, position: "ATA" },
      { name: "Nico Williams", number: 11, position: "ATA" },
    ],

    reserves: [
      { name: "David Raya", number: 1, position: "GOL" },
      { name: "Joan García", number: 13, position: "GOL" },

      { name: "Eric García", number: 6, position: "ZAG" },
      { name: "Álvaro Carreras Pubill", number: 14, position: "ZAG" },

      { name: "Alejandro Grimaldo", number: 12, position: "LAT" },
      { name: "Marcos Llorente", number: 20, position: "LAT" },

      { name: "Martín Zubimendi", number: 18, position: "VOL" },
      { name: "Gavi", number: 9, position: "MEI" },
      { name: "Mikel Merino", number: 15, position: "MEI" },
      { name: "Álex Baena", number: 24, position: "MEI" },

      { name: "Dani Olmo", number: 21, position: "MEI" },
      { name: "Ferran Torres", number: 17, position: "ATA" },
      { name: "Yeremy Pino", number: 22, position: "ATA" },
      { name: "Borja Iglesias", number: 25, position: "ATA" },
      { name: "Víctor Muñoz", number: 26, position: "ATA" },
    ],
  },
  {
    code: "FRA",
    formation: "4-2-3-1",
    starters: [
      { name: "Mike Maignan", number: 16, position: "GOL" },

      { name: "Jules Koundé", number: 5, position: "LAT" },
      { name: "Dayot Upamecano", number: 4, position: "ZAG" },
      { name: "William Saliba", number: 17, position: "ZAG" },
      { name: "Theo Hernández", number: 22, position: "LAT" },

      { name: "Aurélien Tchouaméni", number: 8, position: "VOL" },
      { name: "Adrien Rabiot", number: 14, position: "VOL" },

      { name: "Ousmane Dembélé", number: 11, position: "ATA" },
      { name: "Michael Olise", number: 7, position: "MEI" },
      { name: "Kylian Mbappé", number: 10, position: "ATA" },

      { name: "Marcus Thuram", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Brice Samba", number: 1, position: "GOL" },
      { name: "Robin Risser", number: 23, position: "GOL" },

      { name: "Ibrahima Konaté", number: 15, position: "ZAG" },
      { name: "Lucas Hernández", number: 21, position: "ZAG" },
      { name: "Maxence Lacroix", number: 24, position: "ZAG" },

      { name: "Lucas Digne", number: 3, position: "LAT" },
      { name: "Malo Gusto", number: 2, position: "LAT" },

      { name: "N'Golo Kanté", number: 6, position: "VOL" },
      { name: "Warren Zaïre-Emery", number: 18, position: "MEI" },
      { name: "Manu Koné", number: 12, position: "MEI" },

      { name: "Bradley Barcola", number: 19, position: "ATA" },
      { name: "Désiré Doué", number: 20, position: "ATA" },
      { name: "Rayan Cherki", number: 25, position: "MEI" },
      { name: "Maghnes Akliouche", number: 26, position: "ATA" },
      { name: "Jean-Philippe Mateta", number: 13, position: "ATA" },
    ],
  },
  {
    code: "NED",
    formation: "4-3-3",
    starters: [
      { name: "Bart Verbruggen", number: 1, position: "GOL" },

      { name: "Denzel Dumfries", number: 22, position: "LAT" },
      { name: "Virgil van Dijk", number: 4, position: "ZAG" },
      { name: "Nathan Aké", number: 5, position: "ZAG" },
      { name: "Micky van de Ven", number: 15, position: "LAT" },

      { name: "Frenkie de Jong", number: 21, position: "VOL" },
      { name: "Teun Koopmeiners", number: 14, position: "MEI" },
      { name: "Tijjani Reijnders", number: 16, position: "MEI" },

      { name: "Justin Kluivert", number: 7, position: "ATA" },
      { name: "Memphis Depay", number: 10, position: "ATA" },
      { name: "Cody Gakpo", number: 11, position: "ATA" },
    ],

    reserves: [
      { name: "Mark Flekken", number: 13, position: "GOL" },
      { name: "Robin Roefs", number: 23, position: "GOL" },

      { name: "Jan Paul van Hecke", number: 3, position: "ZAG" },
      { name: "Jorrel Hato", number: 6, position: "ZAG" },

      { name: "Jurriën Timber", number: 2, position: "LAT" },

      { name: "Ryan Gravenberch", number: 8, position: "MEI" },
      { name: "Quinten Timber", number: 19, position: "MEI" },
      { name: "Marten de Roon", number: 17, position: "VOL" },
      { name: "Mats Wieffer", number: 24, position: "VOL" },
      { name: "Guus Til", number: 25, position: "MEI" },

      { name: "Donyell Malen", number: 18, position: "ATA" },
      { name: "Brian Brobbey", number: 9, position: "ATA" },
      { name: "Noa Lang", number: 12, position: "ATA" },
      { name: "Crysencio Summerville", number: 20, position: "ATA" },
      { name: "Wout Weghorst", number: 26, position: "ATA" },
    ],
  },
  {
    code: "ENG",
    formation: "4-2-3-1",
    starters: [
      { name: "Jordan Pickford", number: 1, position: "GOL" },

      { name: "Reece James", number: 2, position: "LAT" },
      { name: "John Stones", number: 5, position: "ZAG" },
      { name: "Marc Guéhi", number: 6, position: "ZAG" },
      { name: "Tino Livramento", number: 3, position: "LAT" },

      { name: "Declan Rice", number: 4, position: "VOL" },
      { name: "Kobbie Mainoo", number: 8, position: "MEI" },

      { name: "Bukayo Saka", number: 7, position: "ATA" },
      { name: "Jude Bellingham", number: 10, position: "MEI" },
      { name: "Anthony Gordon", number: 11, position: "ATA" },

      { name: "Harry Kane", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Dean Henderson", number: 23, position: "GOL" },
      { name: "James Trafford", number: 13, position: "GOL" },

      { name: "Ezri Konsa", number: 14, position: "ZAG" },
      { name: "Jarell Quansah", number: 15, position: "ZAG" },
      { name: "Dan Burn", number: 21, position: "ZAG" },

      { name: "Djed Spence", number: 12, position: "LAT" },
      { name: "Nico O'Reilly", number: 16, position: "LAT" },

      { name: "Jordan Henderson", number: 18, position: "VOL" },
      { name: "Elliot Anderson", number: 17, position: "MEI" },
      { name: "Morgan Rogers", number: 20, position: "MEI" },
      { name: "Eberechi Eze", number: 19, position: "MEI" },

      { name: "Marcus Rashford", number: 22, position: "ATA" },
      { name: "Ollie Watkins", number: 24, position: "ATA" },
      { name: "Ivan Toney", number: 25, position: "ATA" },
      { name: "Noni Madueke", number: 26, position: "ATA" },
    ],
  },
  {
    code: "NOR",
    formation: "4-3-3",
    starters: [
      { name: "Ørjan Nyland", number: 1, position: "GOL" },

      { name: "Julian Ryerson", number: 14, position: "LAT" },
      { name: "Kristoffer Ajer", number: 3, position: "ZAG" },
      { name: "Leo Østigård", number: 4, position: "ZAG" },
      { name: "Fredrik Bjørkan", number: 5, position: "LAT" },

      { name: "Patrick Berg", number: 6, position: "VOL" },
      { name: "Sander Berge", number: 8, position: "MEI" },
      { name: "Martin Ødegaard", number: 10, position: "MEI" },

      { name: "Antonio Nusa", number: 20, position: "ATA" },
      { name: "Erling Haaland", number: 9, position: "ATA" },
      { name: "Alexander Sørloth", number: 7, position: "ATA" },
    ],

    reserves: [
      { name: "Egil Selvik", number: 23, position: "GOL" },
      { name: "Sander Tangvik", number: 12, position: "GOL" },

      { name: "Henrik Falchener", number: 2, position: "ZAG" },
      { name: "Sondre Langås", number: 15, position: "ZAG" },
      { name: "Torbjørn Heggem", number: 17, position: "ZAG" },

      { name: "Holmgren Pedersen", number: 16, position: "LAT" },

      { name: "Morten Thorsby", number: 18, position: "VOL" },
      { name: "Kristian Thorstvedt", number: 19, position: "MEI" },
      { name: "Fredrik Aursnes", number: 21, position: "MEI" },
      { name: "Thelo Aasgaard", number: 22, position: "MEI" },
      { name: "David Møller Wolfe", number: 24, position: "LAT" },

      { name: "Jørgen Strand Larsen", number: 11, position: "ATA" },
      { name: "Oscar Bobb", number: 13, position: "ATA" },
      { name: "Andreas Schjelderup", number: 25, position: "ATA" },
      { name: "Jens Petter Hauge", number: 26, position: "ATA" },
    ],
  },
  {
    code: "POR",
    formation: "4-3-3",
    starters: [
      { name: "Diogo Costa", number: 1, position: "GOL" },

      { name: "João Cancelo", number: 20, position: "LAT" },
      { name: "Rúben Dias", number: 4, position: "ZAG" },
      { name: "Gonçalo Inácio", number: 14, position: "ZAG" },
      { name: "Nuno Mendes", number: 19, position: "LAT" },

      { name: "João Neves", number: 6, position: "VOL" },
      { name: "Bruno Fernandes", number: 8, position: "MEI" },
      { name: "Vitinha", number: 23, position: "MEI" },

      { name: "Bernardo Silva", number: 10, position: "ATA" },
      { name: "Cristiano Ronaldo", number: 7, position: "ATA" },
      { name: "Rafael Leão", number: 17, position: "ATA" },
    ],

    reserves: [
      { name: "José Sá", number: 12, position: "GOL" },
      { name: "Rui Silva", number: 22, position: "GOL" },
      { name: "Ricardo Velho", number: 24, position: "GOL" },

      { name: "Tomás Araújo", number: 3, position: "ZAG" },
      { name: "Renato Veiga", number: 5, position: "ZAG" },

      { name: "Diogo Dalot", number: 2, position: "LAT" },
      { name: "Nélson Semedo", number: 13, position: "LAT" },

      { name: "Rúben Neves", number: 18, position: "VOL" },
      { name: "Matheus Nunes", number: 16, position: "MEI" },
      { name: "Samuel Costa", number: 25, position: "VOL" },

      { name: "João Félix", number: 11, position: "ATA" },
      { name: "Gonçalo Ramos", number: 9, position: "ATA" },
      { name: "Pedro Neto", number: 15, position: "ATA" },
      { name: "Francisco Conceição", number: 21, position: "ATA" },
      { name: "Trincão", number: 26, position: "ATA" },
      { name: "Gonçalo Guedes", number: 27, position: "ATA" },
    ],
  },
  {
    code: "CZE",
    formation: "4-2-3-1",
    starters: [
      { name: "Jindřich Staněk", number: 1, position: "GOL" },

      { name: "Vladimír Coufal", number: 5, position: "LAT" },
      { name: "Tomáš Holeš", number: 3, position: "ZAG" },
      { name: "Robin Hranáč", number: 4, position: "ZAG" },
      { name: "David Jurásek", number: 13, position: "LAT" },

      { name: "Tomáš Souček", number: 15, position: "VOL" },
      { name: "Michal Sadílek", number: 20, position: "VOL" },

      { name: "Pavel Šulc", number: 17, position: "ATA" },
      { name: "Adam Hložek", number: 9, position: "MEI" },
      { name: "Lukáš Provod", number: 14, position: "ATA" },

      { name: "Patrik Schick", number: 10, position: "ATA" },
    ],

    reserves: [
      { name: "Matěj Kovář", number: 23, position: "GOL" },
      { name: "Lukáš Horníček", number: 12, position: "GOL" },

      { name: "Ladislav Krejčí", number: 2, position: "ZAG" },
      { name: "David Zima", number: 6, position: "ZAG" },

      { name: "David Douděra", number: 18, position: "LAT" },
      { name: "Jaroslav Zelený", number: 19, position: "LAT" },

      { name: "Lukáš Červ", number: 8, position: "VOL" },
      { name: "Vladimír Darida", number: 21, position: "MEI" },

      { name: "Jan Kuchta", number: 11, position: "ATA" },
      { name: "Mojmír Chytil", number: 16, position: "ATA" },
      { name: "Tomáš Chorý", number: 22, position: "ATA" },
      { name: "Denis Višinský", number: 7, position: "ATA" },
    ],
  },
  {
    code: "SWE",
    formation: "4-4-2",
    starters: [
      { name: "Viktor Johansson", number: 1, position: "GOL" },

      { name: "Emil Holm", number: 2, position: "LAT" },
      { name: "Victor Nilsson Lindelöf", number: 3, position: "ZAG" },
      { name: "Isak Hien", number: 4, position: "ZAG" },
      { name: "Gabriel Gudmundsson", number: 6, position: "LAT" },

      { name: "Anthony Elanga", number: 21, position: "MEI" },
      { name: "Lucas Bergvall", number: 8, position: "MEI" },
      { name: "Yasin Ayari", number: 14, position: "VOL" },
      { name: "Benjamin Nygren", number: 11, position: "MEI" },

      { name: "Alexander Isak", number: 9, position: "ATA" },
      { name: "Viktor Gyökeres", number: 19, position: "ATA" },
    ],

    reserves: [
      { name: "Kristoffer Nordfeldt", number: 12, position: "GOL" },
      { name: "Jacob Widell Zetterström", number: 23, position: "GOL" },

      { name: "Carl Starfelt", number: 5, position: "ZAG" },
      { name: "Hjalmar Ekdal", number: 15, position: "ZAG" },

      { name: "Daniel Svensson", number: 13, position: "LAT" },
      { name: "Elliot Stroud", number: 18, position: "LAT" },

      { name: "Mattias Svanberg", number: 16, position: "VOL" },
      { name: "Jesper Karlström", number: 17, position: "VOL" },

      { name: "Alexander Bernhardsson", number: 20, position: "ATA" },
      { name: "Gustaf Nilsson", number: 22, position: "ATA" },
      { name: "Taha Ali", number: 7, position: "ATA" },
      { name: "Ken Sema", number: 10, position: "MEI" },
    ],
  },
  {
    code: "SUI",
    formation: "3-4-2-1",
    starters: [
      { name: "Gregor Kobel", number: 1, position: "GOL" },

      { name: "Manuel Akanji", number: 5, position: "ZAG" },
      { name: "Nico Elvedi", number: 4, position: "ZAG" },
      { name: "Ricardo Rodríguez", number: 13, position: "ZAG" },

      { name: "Silvan Widmer", number: 3, position: "LAT" },
      { name: "Granit Xhaka", number: 10, position: "VOL" },
      { name: "Remo Freuler", number: 8, position: "VOL" },
      { name: "Ruben Vargas", number: 17, position: "LAT" },

      { name: "Dan Ndoye", number: 19, position: "MEI" },
      { name: "Zeki Amdouni", number: 20, position: "MEI" },

      { name: "Breel Embolo", number: 7, position: "ATA" },
    ],

    reserves: [
      { name: "Yvon Mvogo", number: 12, position: "GOL" },
      { name: "Marvin Keller", number: 21, position: "GOL" },

      { name: "Aurèle Amenda", number: 22, position: "ZAG" },
      { name: "Eray Cömert", number: 15, position: "ZAG" },

      { name: "Miro Muheim", number: 2, position: "LAT" },
      { name: "Luca Jaquez", number: 6, position: "ZAG" },

      { name: "Denis Zakaria", number: 18, position: "VOL" },
      { name: "Ardon Jashari", number: 14, position: "MEI" },

      { name: "Noah Okafor", number: 11, position: "ATA" },
      { name: "Cedric Itten", number: 9, position: "ATA" },
      { name: "Fabian Rieder", number: 16, position: "ATA" },
      { name: "Michel Aebischer", number: 23, position: "MEI" },
    ],
  },
  {
    code: "TUR",
    formation: "4-2-3-1",
    starters: [
      { name: "Uğurcan Çakır", number: 1, position: "GOL" },

      { name: "Zeki Çelik", number: 2, position: "LAT" },
      { name: "Merih Demiral", number: 3, position: "ZAG" },
      { name: "Abdülkerim Bardakcı", number: 4, position: "ZAG" },
      { name: "Ferdi Kadıoğlu", number: 20, position: "LAT" },

      { name: "Hakan Çalhanoğlu", number: 10, position: "VOL" },
      { name: "Orkun Kökçü", number: 6, position: "MEI" },

      { name: "Arda Güler", number: 8, position: "MEI" },
      { name: "Kenan Yıldız", number: 11, position: "ATA" },
      { name: "Barış Alper Yılmaz", number: 7, position: "ATA" },

      { name: "Kerem Aktürkoğlu", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Altay Bayındır", number: 12, position: "GOL" },
      { name: "Mert Günok", number: 23, position: "GOL" },

      { name: "Çağlar Söyüncü", number: 5, position: "ZAG" },
      { name: "Samet Akaydin", number: 14, position: "ZAG" },

      { name: "Mert Müldür", number: 18, position: "LAT" },
      { name: "Eren Elmalı", number: 13, position: "LAT" },

      { name: "Salih Özcan", number: 15, position: "VOL" },
      { name: "İsmail Yüksek", number: 16, position: "VOL" },

      { name: "Yunus Akgün", number: 17, position: "ATA" },
      { name: "Can Uzun", number: 19, position: "ATA" },
      { name: "İrfan Can Kahveci", number: 21, position: "ATA" },
      { name: "Oğuz Aydın", number: 22, position: "ATA" },
    ],
  },
  {
    code: "RSA",
    formation: "4-2-3-1",
    starters: [
      { name: "Ronwen Williams", number: 1, position: "GOL" },

      { name: "Khuliso Mudau", number: 20, position: "LAT" },
      { name: "Nkosinathi Sibisi", number: 5, position: "ZAG" },
      { name: "Ime Okon", number: 14, position: "ZAG" },
      { name: "Aubrey Modiba", number: 6, position: "LAT" },

      { name: "Teboho Mokoena", number: 4, position: "VOL" },
      { name: "Sphephelo Sithole", number: 13, position: "VOL" },

      { name: "Oswin Appollis", number: 17, position: "ATA" },
      { name: "Themba Zwane", number: 10, position: "MEI" },
      { name: "Relebohile Mofokeng", number: 11, position: "ATA" },

      { name: "Evidence Makgopa", number: 9, position: "ATA" },
    ],
    
    reserves: [
      { name: "Ricardo Goss", number: 12, position: "GOL" },
      { name: "Sipho Chaine", number: 23, position: "GOL" },

      { name: "Khulumani Ndamane", number: 3, position: "ZAG" },
      { name: "Samukelo Kabini", number: 15, position: "ZAG" },

      { name: "Bradley Cross", number: 21, position: "LAT" },
      { name: "Thabang Matuludi", number: 2, position: "LAT" },

      { name: "Jayden Adams", number: 8, position: "VOL" },
      { name: "Thalente Mbatha", number: 16, position: "VOL" },

      { name: "Lyle Foster", number: 19, position: "ATA" },
      { name: "Iqraam Rayners", number: 22, position: "ATA" },
      { name: "Thapelo Maseko", number: 7, position: "ATA" },
      { name: "Tshepang Moremi", number: 18, position: "ATA" },
    ],
  },
  {
    code: "ALG",
    formation: "4-3-3",
    starters: [
      { name: "Luca Zidane", number: 1, position: "GOL" },

      { name: "Aïssa Mandi", number: 2, position: "LAT" },
      { name: "Mohamed Amine Tougai", number: 5, position: "ZAG" },
      { name: "Ramy Bensebaini", number: 4, position: "ZAG" },
      { name: "Rayan Aït-Nouri", number: 3, position: "LAT" },

      { name: "Ramiz Zerrouki", number: 8, position: "VOL" },
      { name: "Houssem Aouar", number: 10, position: "MEI" },
      { name: "Nabil Bentaleb", number: 14, position: "MEI" },

      { name: "Riyad Mahrez", number: 7, position: "ATA" },
      { name: "Amine Gouiri", number: 9, position: "ATA" },
      { name: "Mohamed Amine Amoura", number: 11, position: "ATA" },
    ],
    
    reserves: [
      { name: "Oussama Benbot", number: 12, position: "GOL" },
      { name: "Abdelatif Ramdane", number: 23, position: "GOL" },

      { name: "Zineddine Belaid", number: 15, position: "ZAG" },
      { name: "Samir Chergui", number: 21, position: "ZAG" },

      { name: "Jaouen Hadjam", number: 20, position: "LAT" },
      { name: "Rafik Belghali", number: 13, position: "LAT" },

      { name: "Farès Chaïbi", number: 6, position: "MEI" },
      { name: "Ibrahim Maza", number: 17, position: "MEI" },

      { name: "Anis Hadj Moussa", number: 18, position: "ATA" },
      { name: "Adil Boulbina", number: 19, position: "ATA" },
      { name: "Nadhir Benbouali", number: 22, position: "ATA" },
      { name: "Farès Ghedjemis", number: 16, position: "ATA" },
    ],
  },
  {
    code: "CPV",
    formation: "4-3-3",
    starters: [
      { name: "Josimar Dias", number: 1, position: "GOL" },

      { name: "Steven Moreira", number: 22, position: "LAT" },
      { name: "Logan Costa", number: 5, position: "ZAG" },
      { name: "Roberto Lopes", number: 4, position: "ZAG" },
      { name: "Stopira", number: 2, position: "LAT" },

      { name: "Kevin Pina", number: 8, position: "VOL" },
      { name: "Deroy Duarte", number: 14, position: "MEI" },
      { name: "Jamiro Monteiro", number: 6, position: "MEI" },

      { name: "Garry Rodrigues", number: 11, position: "ATA" },
      { name: "Ryan Mendes", number: 7, position: "ATA" },
      { name: "Jovane Cabral", number: 10, position: "ATA" },
    ],

    reserves: [
      { name: "Márcio Rosa", number: 12, position: "GOL" },
      { name: "Carlos Santos", number: 23, position: "GOL" },

      { name: "Diney Borges", number: 3, position: "ZAG" },
      { name: "Kelvin Pires", number: 19, position: "ZAG" },

      { name: "Wagner Pina", number: 21, position: "LAT" },
      { name: "Sidny Cabral", number: 13, position: "LAT" },

      { name: "João Paulo Fernandes", number: 15, position: "VOL" },
      { name: "Laros Duarte", number: 16, position: "MEI" },

      { name: "Willy Semedo", number: 17, position: "ATA" },
      { name: "Dailon Livramento", number: 9, position: "ATA" },
      { name: "Gilson Benchimol", number: 18, position: "ATA" },
      { name: "Hélio Varela", number: 20, position: "ATA" },
    ],
  },
  {
    code: "CIV",
    formation: "4-3-3",
    starters: [
      { name: "Yahia Fofana", number: 1, position: "GOL" },

      { name: "Guela Doué", number: 17, position: "LAT" },
      { name: "Evan Ndicka", number: 21, position: "ZAG" },
      { name: "Ousmane Diomandé", number: 2, position: "ZAG" },
      { name: "Ghislain Konan", number: 3, position: "LAT" },

      { name: "Franck Kessié", number: 6, position: "VOL" },
      { name: "Seko Fofana", number: 8, position: "MEI" },
      { name: "Jean Michaël Seri", number: 4, position: "MEI" },

      { name: "Amad Diallo", number: 10, position: "ATA" },
      { name: "Elye Wahi", number: 22, position: "ATA" },
      { name: "Simon Adingra", number: 24, position: "ATA" },
    ],
    
    reserves: [
      { name: "Mohamed Koné", number: 12, position: "GOL" },
      { name: "Alban Lafont", number: 23, position: "GOL" },

      { name: "Odilon Kossounou", number: 7, position: "ZAG" },
      { name: "Emmanuel Agbadou", number: 5, position: "ZAG" },

      { name: "Wilfried Singo", number: 18, position: "LAT" },
      { name: "Clément Akpa", number: 13, position: "LAT" },

      { name: "Ibrahim Sangaré", number: 15, position: "VOL" },
      { name: "Parfait Guiagon", number: 16, position: "MEI" },

      { name: "Nicolas Pépé", number: 19, position: "ATA" },
      { name: "Evann Guessand", number: 20, position: "ATA" },
      { name: "Ange-Yoan Bonny", number: 9, position: "ATA" },
      { name: "Bazoumana Touré", number: 14, position: "ATA" },
    ],
  },
  {
    code: "EGY",
    formation: "4-3-3",
    starters: [
      { name: "Mohamed El Shenawy", number: 1, position: "GOL" },

      { name: "Mohamed Hany", number: 2, position: "LAT" },
      { name: "Mohamed Abdelmonem", number: 24, position: "ZAG" },
      { name: "Ramy Rabia", number: 6, position: "ZAG" },
      { name: "Ahmed Fatouh", number: 13, position: "LAT" },

      { name: "Hamdi Fathi", number: 8, position: "VOL" },
      { name: "Marwan Attia", number: 19, position: "VOL" },
      { name: "Emam Ashour", number: 22, position: "MEI" },

      { name: "Mohamed Salah", number: 10, position: "ATA" },
      { name: "Omar Marmoush", number: 7, position: "ATA" },
      { name: "Mahmoud Trezeguet", number: 15, position: "ATA" },
    ],

    reserves: [
      { name: "Mostafa Shobeir", number: 16, position: "GOL" },
      { name: "El Mahdy Soliman", number: 23, position: "GOL" },

      { name: "Yasser Ibrahim", number: 5, position: "ZAG" },
      { name: "Hossam Abdelmaguid", number: 4, position: "ZAG" },

      { name: "Karim Hafez", number: 14, position: "LAT" },
      { name: "Tarek Alaa", number: 3, position: "LAT" },

      { name: "Ahmed Sayed Zizo", number: 21, position: "MEI" },
      { name: "Mohannad Lasheen", number: 17, position: "VOL" },

      { name: "Ibrahim Adel", number: 20, position: "ATA" },
      { name: "Haitham Hassan", number: 18, position: "ATA" },
      { name: "Mostafa Ziko", number: 11, position: "ATA" },
      { name: "Hamza Abdel Karim", number: 9, position: "ATA" },
    ],
  },
  {
    code: "GHA",
    formation: "4-2-3-1",
    starters: [
      { name: "Lawrence Ati-Zigi", number: 1, position: "GOL" },

      { name: "Marvin Senaya", number: 2, position: "LAT" },
      { name: "Jerome Opoku", number: 18, position: "ZAG" },
      { name: "Abdul Mumin", number: 23, position: "ZAG" },
      { name: "Gideon Mensah", number: 14, position: "LAT" },

      { name: "Thomas Partey", number: 5, position: "VOL" },
      { name: "Elisha Owusu", number: 6, position: "VOL" },

      { name: "Jordan Ayew", number: 9, position: "ATA" },
      { name: "Ernest Nuamah", number: 11, position: "ATA" },
      { name: "Inaki Williams", number: 19, position: "ATA" },

      { name: "Antoine Semenyo", number: 25, position: "ATA" },
    ],

    reserves: [
      { name: "Benjamin Asare", number: 12, position: "GOL" },
      { name: "Joseph Anang", number: 16, position: "GOL" },

      { name: "Alidu Seidu", number: 4, position: "ZAG" },
      { name: "Jonas Adjetey", number: 15, position: "ZAG" },

      { name: "Baba Abdul Rahman", number: 3, position: "LAT" },
      { name: "Derrick Luckassen", number: 17, position: "LAT" },

      { name: "Kwasi Sibo", number: 21, position: "VOL" },
      { name: "Augustine Boakye", number: 8, position: "MEI" },

      { name: "Kamaldeen Sulemana", number: 22, position: "ATA" },
      { name: "Abdul Fatawu Issahaku", number: 7, position: "ATA" },
      { name: "Brandon Thomas-Asante", number: 13, position: "ATA" },
      { name: "Christopher Bonsu Baah", number: 20, position: "ATA" },
    ],
  },
  {
    code: "MAR",
    formation: "4-3-3",
    starters: [
      { name: "Yassine Bounou", number: 1, position: "GOL" },

      { name: "Achraf Hakimi", number: 2, position: "LAT" },
      { name: "Nayef Aguerd", number: 5, position: "ZAG" },
      { name: "Chadi Riad", number: 6, position: "ZAG" },
      { name: "Adam Aznou", number: 3, position: "LAT" },

      { name: "Sofyan Amrabat", number: 4, position: "VOL" },
      { name: "Bilal El Khannouss", number: 8, position: "MEI" },
      { name: "Ismael Saibari", number: 15, position: "MEI" },

      { name: "Brahim Díaz", number: 10, position: "ATA" },
      { name: "Ayoub El Kaabi", number: 9, position: "ATA" },
      { name: "Abde Ezzalzouli", number: 17, position: "ATA" },
    ],

    reserves: [
      { name: "Munir El Kajoui", number: 12, position: "GOL" },
      { name: "Ahmed Reda Tagnaouti", number: 22, position: "GOL" },

      { name: "Omar El Hilali", number: 18, position: "LAT" },
      { name: "Abdel Abqar", number: 24, position: "ZAG" },

      { name: "Noussair Mazraoui", number: 25, position: "LAT" },
      { name: "Jamal Harkass", number: 26, position: "ZAG" },

      { name: "Neil El Aynaoui", number: 23, position: "MEI" },
      { name: "Azzedine Ounahi", number: 14, position: "MEI" },

      { name: "Chemsdine Talbi", number: 16, position: "ATA" },
      { name: "Soufiane Rahimi", number: 19, position: "ATA" },
      { name: "Hamza Igamane", number: 20, position: "ATA" },
      { name: "Ayman Azhil", number: 11, position: "MEI" },
    ],
  },
  {
    code: "COD",
    formation: "4-3-3",
    starters: [
      { name: "Lionel Mpasi", number: 1, position: "GOL" },

      { name: "Aaron Wan-Bissaka", number: 2, position: "LAT" },
      { name: "Chancel Mbemba", number: 5, position: "ZAG" },
      { name: "Dylan Batubinsika", number: 4, position: "ZAG" },
      { name: "Arthur Masuaku", number: 3, position: "LAT" },

      { name: "Samuel Moutoussamy", number: 8, position: "VOL" },
      { name: "Charles Pickel", number: 18, position: "MEI" },
      { name: "Noah Sadiki", number: 11, position: "MEI" },

      { name: "Yoane Wissa", number: 20, position: "ATA" },
      { name: "Simon Banza", number: 9, position: "ATA" },
      { name: "Théo Bongonda", number: 7, position: "ATA" },
    ],

    reserves: [
      { name: "Timothy Fayulu", number: 23, position: "GOL" },
      { name: "Matthieu Epolo", number: 16, position: "GOL" },

      { name: "Steve Kapuadi", number: 6, position: "ZAG" },
      { name: "Axel Tuanzebe", number: 15, position: "ZAG" },

      { name: "Gédéon Kalulu", number: 12, position: "LAT" },
      { name: "Joris Kayembe", number: 21, position: "LAT" },

      { name: "Edo Kayembe", number: 22, position: "VOL" },
      { name: "Ngal'ayel Mukau", number: 14, position: "MEI" },

      { name: "Cédric Bakambu", number: 17, position: "ATA" },
      { name: "Meschack Elia", number: 13, position: "ATA" },
      { name: "Fiston Mayele", number: 19, position: "ATA" },
      { name: "Gaël Kakuta", number: 10, position: "MEI" },
    ],
  },
  {
    code: "SEN",
    formation: "4-3-3",
    starters: [
      { name: "Édouard Mendy", number: 16, position: "GOL" },

      { name: "Krépin Diatta", number: 15, position: "LAT" },
      { name: "Kalidou Koulibaly", number: 3, position: "ZAG" },
      { name: "Moussa Niakhaté", number: 19, position: "ZAG" },
      { name: "Ismail Jakobs", number: 14, position: "LAT" },

      { name: "Idrissa Gana Gueye", number: 5, position: "VOL" },
      { name: "Pape Matar Sarr", number: 17, position: "MEI" },
      { name: "Lamine Camara", number: 26, position: "MEI" },

      { name: "Ismaila Sarr", number: 18, position: "ATA" },
      { name: "Nicolas Jackson", number: 7, position: "ATA" },
      { name: "Sadio Mané", number: 10, position: "ATA" },
    ],

    reserves: [
      { name: "Mory Diaw", number: 1, position: "GOL" },
      { name: "Yehvann Diouf", number: 23, position: "GOL" },

      { name: "Mamadou Sarr", number: 4, position: "ZAG" },
      { name: "Abdoulaye Seck", number: 2, position: "ZAG" },

      { name: "Antoine Mendy", number: 12, position: "LAT" },
      { name: "El Hadji Malick Diouf", number: 21, position: "LAT" },

      { name: "Pape Gueye", number: 8, position: "VOL" },
      { name: "Habib Diarra", number: 6, position: "MEI" },

      { name: "Iliman Ndiaye", number: 11, position: "ATA" },
      { name: "Assane Diao", number: 9, position: "ATA" },
      { name: "Bamba Dieng", number: 20, position: "ATA" },
      { name: "Chérif Ndiaye", number: 22, position: "ATA" },
    ],
  },
  {
    code: "TUN",
    formation: "4-3-3",
    starters: [
      { name: "Aymen Dahmen", number: 1, position: "GOL" },

      { name: "Valery", number: 21, position: "LAT" },
      { name: "Dylan Bronn", number: 5, position: "ZAG" },
      { name: "Montassar Talbi", number: 3, position: "ZAG" },
      { name: "Ali Abdi", number: 24, position: "LAT" },

      { name: "Ellyes Skhiri", number: 17, position: "VOL" },
      { name: "Hannibal Mejbri", number: 10, position: "MEI" },
      { name: "Anis Ben Slimane", number: 7, position: "MEI" },

      { name: "Elias Achouri", number: 11, position: "ATA" },
      { name: "Hazem Mastouri", number: 9, position: "ATA" },
      { name: "Sayfallah Ltaief", number: 20, position: "ATA" },
    ],

    reserves: [
      { name: "Ben Hassen", number: 16, position: "GOL" },
      { name: "Chamakh", number: 23, position: "GOL" },

      { name: "Alaa Ghram", number: 4, position: "ZAG" },
      { name: "Rekik", number: 6, position: "ZAG" },

      { name: "Neffati", number: 2, position: "LAT" },
      { name: "Ben Hmida", number: 12, position: "LAT" },

      { name: "Mohamed Ali Ben Romdhane", number: 13, position: "MEI" },
      { name: "Aymen Ben Mohamed", number: 18, position: "MEI" },

      { name: "Youssef Snana", number: 19, position: "ATA" },
      { name: "Chaouat", number: 22, position: "ATA" },
      { name: "Ayari", number: 15, position: "ATA" },
      { name: "Gharbi", number: 14, position: "MEI" },
    ],
  },
  {
    code: "KSA",
    formation: "4-3-3",
    starters: [
      { name: "Mohammed Al Owais", number: 1, position: "GOL" },

      { name: "Saud Abdulhamid", number: 12, position: "LAT" },
      { name: "Hassan Tambakti", number: 4, position: "ZAG" },
      { name: "Ali Lajami", number: 5, position: "ZAG" },
      { name: "Moteb Al Harbi", number: 13, position: "LAT" },

      { name: "Abdullah Al Khaibari", number: 6, position: "VOL" },
      { name: "Mohammed Kanno", number: 23, position: "MEI" },
      { name: "Nasser Al Dawsari", number: 18, position: "MEI" },

      { name: "Salem Al Dawsari", number: 10, position: "ATA" },
      { name: "Feras Al Brikan", number: 9, position: "ATA" },
      { name: "Ayman Yahya", number: 7, position: "ATA" },
    ],

    reserves: [
      { name: "Ahmed Al Kassar", number: 21, position: "GOL" },
      { name: "Nawaf Al Aqidi", number: 22, position: "GOL" },

      { name: "Abdulelah Al Amri", number: 2, position: "ZAG" },
      { name: "Hassan Kadesh", number: 3, position: "ZAG" },

      { name: "Nawaf Boushal", number: 8, position: "LAT" },
      { name: "Ali Majrashi", number: 20, position: "LAT" },

      { name: "Ziyad Al Johani", number: 14, position: "MEI" },
      { name: "Musab Al Juwayr", number: 16, position: "MEI" },

      { name: "Abdullah Al Hamdan", number: 11, position: "ATA" },
      { name: "Saleh Al Shehri", number: 15, position: "ATA" },
      { name: "Sultan Mandash", number: 17, position: "ATA" },
      { name: "Alaa Al Hajji", number: 19, position: "MEI" },
    ],
  },
  {
    code: "AUS",
    formation: "4-2-3-1",
    starters: [
      { name: "Maty Ryan", number: 1, position: "GOL" },

      { name: "Jason Geria", number: 3, position: "LAT" },
      { name: "Harry Souttar", number: 19, position: "ZAG" },
      { name: "Alessandro Circati", number: 4, position: "ZAG" },
      { name: "Aziz Behich", number: 16, position: "LAT" },

      { name: "Jackson Irvine", number: 22, position: "VOL" },
      { name: "Aiden O'Neill", number: 13, position: "VOL" },

      { name: "Nestory Irankunda", number: 7, position: "ATA" },
      { name: "Ajdin Hrustic", number: 10, position: "MEI" },
      { name: "Mathew Leckie", number: 23, position: "ATA" },

      { name: "Tete Yengi", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Paul Izzo", number: 18, position: "GOL" },
      { name: "Patrick Beach", number: 12, position: "GOL" },

      { name: "Milos Degenek", number: 2, position: "ZAG" },
      { name: "Cameron Burgess", number: 20, position: "ZAG" },

      { name: "Jordan Bos", number: 21, position: "LAT" },
      { name: "Kai Trewin", number: 14, position: "LAT" },

      { name: "Connor Metcalfe", number: 8, position: "MEI" },
      { name: "Cameron Devlin", number: 17, position: "VOL" },

      { name: "Cristian Volpato", number: 11, position: "ATA" },
      { name: "Awer Mabil", number: 25, position: "ATA" },
      { name: "Mohamed Toure", number: 15, position: "ATA" },
      { name: "Nishan Velupillay", number: 6, position: "ATA" },
    ],
  },
  {
    code: "QAT",
    formation: "3-5-2",
    starters: [
      { name: "Meshaal Barsham", number: 1, position: "GOL" },

      { name: "Pedro Miguel", number: 2, position: "ZAG" },
      { name: "Boualem Khoukhi", number: 16, position: "ZAG" },
      { name: "Lucas Mendes", number: 5, position: "ZAG" },

      { name: "Homam Al-Amin", number: 14, position: "LAT" },
      { name: "Ayoub Al-Alawi", number: 7, position: "LAT" },

      { name: "Karim Boudiaf", number: 12, position: "VOL" },
      { name: "Abdulaziz Hatem", number: 6, position: "MEI" },
      { name: "Ahmed Fathy", number: 20, position: "MEI" },

      { name: "Akram Afif", number: 10, position: "ATA" },
      { name: "Almoez Ali", number: 19, position: "ATA" },
    ],

    reserves: [
      { name: "Mahmoud Abunada", number: 21, position: "GOL" },
      { name: "Salah Zakaria", number: 22, position: "GOL" },

      { name: "Al-Hashmi Al-Hussain", number: 15, position: "ZAG" },
      { name: "Sultan Al-Brake", number: 3, position: "ZAG" },

      { name: "Issa Laye", number: 4, position: "LAT" },
      { name: "Jassem Gaber", number: 23, position: "MEI" },

      { name: "Assim Madibo", number: 8, position: "VOL" },
      { name: "Mohamed Mannaj", number: 13, position: "MEI" },

      { name: "Ahmed Al-Ganehi", number: 11, position: "ATA" },
      { name: "Ahmed Alaa", number: 17, position: "ATA" },
      { name: "Mohammed Muntari", number: 9, position: "ATA" },
      { name: "Youssef Abdulrazzaq", number: 18, position: "ATA" },
    ],
  },
  {
    code: "KOR",
    formation: "4-2-3-1",
    starters: [
      { name: "Kim Seunggyu", number: 1, position: "GOL" },

      { name: "Kim Moonhwan", number: 23, position: "LAT" },
      { name: "Kim Min-jae", number: 4, position: "ZAG" },
      { name: "Cho Yumin", number: 15, position: "ZAG" },
      { name: "Seol Youngwoo", number: 3, position: "LAT" },

      { name: "Hwang Inbeom", number: 6, position: "VOL" },
      { name: "Paik Seungho", number: 5, position: "VOL" },

      { name: "Lee Kang-in", number: 18, position: "MEI" },
      { name: "Son Heung-min", number: 7, position: "ATA" },
      { name: "Hwang Heechan", number: 11, position: "ATA" },

      { name: "Cho Gue-sung", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Jo Hyeonwoo", number: 21, position: "GOL" },
      { name: "Song Bumkeun", number: 12, position: "GOL" },

      { name: "Lee Hanbeom", number: 19, position: "ZAG" },
      { name: "Kim Taehyeon", number: 20, position: "ZAG" },

      { name: "Lee Taeseok", number: 22, position: "LAT" },
      { name: "Lee Kihyuk", number: 2, position: "LAT" },

      { name: "Lee Jaesung", number: 10, position: "MEI" },
      { name: "Bae Junho", number: 8, position: "MEI" },

      { name: "Oh Hyeongyu", number: 16, position: "ATA" },
      { name: "Yang Hyunjun", number: 14, position: "ATA" },
      { name: "Lee Donggyeong", number: 13, position: "MEI" },
      { name: "Eom Jisung", number: 17, position: "ATA" },
    ],
  },
  {
    code: "IRN",
    formation: "4-3-3",
    starters: [
      { name: "Alireza Beiranvand", number: 1, position: "GOL" },

      { name: "Ramin Rezaeiyan", number: 23, position: "LAT" },
      { name: "Hossein Kanaani", number: 5, position: "ZAG" },
      { name: "Shoja Khalilzadeh", number: 3, position: "ZAG" },
      { name: "Milad Mohammadi", number: 13, position: "LAT" },

      { name: "Saeid Ezatollahi", number: 6, position: "VOL" },
      { name: "Rouzbeh Cheshmi", number: 15, position: "VOL" },
      { name: "Saman Ghoddos", number: 14, position: "MEI" },

      { name: "Alireza Jahanbakhsh", number: 7, position: "ATA" },
      { name: "Mohammad Mohebbi", number: 11, position: "ATA" },
      { name: "Mehdi Ghayedi", number: 10, position: "ATA" },
    ],

    reserves: [
      { name: "Hossein Hosseini", number: 22, position: "GOL" },
      { name: "Payam Niazmand", number: 12, position: "GOL" },

      { name: "Ali Nemati", number: 4, position: "ZAG" },
      { name: "Daniyal Eiri", number: 19, position: "ZAG" },

      { name: "Saleh Hardani", number: 2, position: "LAT" },
      { name: "Ehsan Hajisafi", number: 21, position: "LAT" },

      { name: "Mohammad Ghorbani", number: 18, position: "VOL" },
      { name: "Amir Mohammad Razagah Niya", number: 8, position: "MEI" },

      { name: "Mehdi Torabi", number: 17, position: "ATA" },
      { name: "Ariya Yousefi", number: 20, position: "ATA" },
      { name: "Sardar Azmoun", number: 9, position: "ATA" },
      { name: "Mehdi Taremi", number: 16, position: "ATA" },
    ],
  },
  {
    code: "IRQ",
    formation: "4-2-3-1",
    starters: [
      { name: "Jalal Hassan", number: 1, position: "GOL" },

      { name: "Hussein Ali", number: 21, position: "LAT" },
      { name: "Rebin Sulaka", number: 4, position: "ZAG" },
      { name: "Zaid Tahsin", number: 2, position: "ZAG" },
      { name: "Mirkhas Doski", number: 3, position: "LAT" },

      { name: "Amir Al-Ammari", number: 6, position: "VOL" },
      { name: "Zidane Iqbal", number: 7, position: "MEI" },

      { name: "Ali Jassim", number: 17, position: "ATA" },
      { name: "Ibrahim Bayesh", number: 10, position: "MEI" },
      { name: "Yousef Amin", number: 11, position: "ATA" },

      { name: "Aymen Hussein", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Ahmed Basil", number: 12, position: "GOL" },
      { name: "Fahad Talib", number: 23, position: "GOL" },

      { name: "Frans Putros", number: 14, position: "ZAG" },
      { name: "Manaf Younis", number: 15, position: "ZAG" },

      { name: "Ahmed Yahya", number: 16, position: "LAT" },
      { name: "Mustafa Saadoun", number: 18, position: "LAT" },

      { name: "Aimar Sher", number: 20, position: "VOL" },
      { name: "Kevin Yaqoub", number: 22, position: "MEI" },

      { name: "Ali Al-Hamadi", number: 13, position: "ATA" },
      { name: "Mohanad Ali", number: 19, position: "ATA" },
      { name: "Ahmed Qasim", number: 24, position: "ATA" },
      { name: "Marco Faraj", number: 25, position: "ATA" },
    ],
  },
  {
    code: "JPN",
    formation: "4-3-3",
    starters: [
      { name: "Zion Suzuki", number: 23, position: "GOL" },

      { name: "Takehiro Tomiyasu", number: 16, position: "LAT" },
      { name: "Ko Itakura", number: 4, position: "ZAG" },
      { name: "Shogo Taniguchi", number: 22, position: "ZAG" },
      { name: "Hiroki Ito", number: 21, position: "LAT" },

      { name: "Wataru Endo", number: 6, position: "VOL" },
      { name: "Ao Tanaka", number: 17, position: "MEI" },
      { name: "Daichi Kamada", number: 15, position: "MEI" },

      { name: "Takefusa Kubo", number: 20, position: "ATA" },
      { name: "Ayase Ueda", number: 9, position: "ATA" },
      { name: "Junya Ito", number: 13, position: "ATA" },
    ],

    reserves: [
      { name: "Keisuke Osako", number: 1, position: "GOL" },
      { name: "Tomoki Hayakawa", number: 12, position: "GOL" },

      { name: "Ayumu Seko", number: 3, position: "ZAG" },
      { name: "Tsuyoshi Watanabe", number: 19, position: "ZAG" },

      { name: "Yukinari Sugawara", number: 2, position: "LAT" },
      { name: "Yuto Nagatomo", number: 14, position: "LAT" },

      { name: "Kaishu Sano", number: 8, position: "VOL" },
      { name: "Yuito Suzuki", number: 18, position: "MEI" },

      { name: "Ritsu Doan", number: 10, position: "ATA" },
      { name: "Daizen Maeda", number: 11, position: "ATA" },
      { name: "Keito Nakamura", number: 7, position: "ATA" },
      { name: "Koki Ogawa", number: 24, position: "ATA" },
    ],
  },
  {
    code: "JOR",
    formation: "3-4-2-1",
    starters: [
      { name: "Yazeed Abu Laila", number: 1, position: "GOL" },

      { name: "Abdallah Nasib", number: 3, position: "ZAG" },
      { name: "Yazan Al-Arab", number: 5, position: "ZAG" },
      { name: "Mohammad Abu Hashish", number: 12, position: "ZAG" },

      { name: "Ihsan Haddad", number: 4, position: "LAT" },
      { name: "Mohannad Abu Taha", number: 13, position: "LAT" },

      { name: "Nizar Al-Rashdan", number: 21, position: "VOL" },
      { name: "Nour Al-Rawabdeh", number: 8, position: "MEI" },

      { name: "Mahmoud Al-Mardi", number: 17, position: "ATA" },
      { name: "Musa Al-Taamari", number: 10, position: "ATA" },

      { name: "Ali Olwan", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Abdullah Al-Fakhouri", number: 16, position: "GOL" },
      { name: "Nour Bani Attiah", number: 22, position: "GOL" },

      { name: "Saleem Obaid", number: 15, position: "ZAG" },
      { name: "Mohammad Abualnadi", number: 6, position: "ZAG" },

      { name: "Saed Al-Rosan", number: 20, position: "LAT" },
      { name: "Husam Abu Dahab", number: 23, position: "LAT" },

      { name: "Rajaei Ayed", number: 2, position: "VOL" },
      { name: "Odeh Fakhouri", number: 19, position: "MEI" },

      { name: "Ibrahim Sadeh", number: 7, position: "ATA" },
      { name: "Mohammad Abu Zrayq", number: 14, position: "ATA" },
      { name: "Ali Al-Azaizeh", number: 18, position: "ATA" },
      { name: "Mohammad Al-Dawoud", number: 11, position: "ATA" },
    ],
  },
  {
    code: "UZB",
    formation: "4-2-3-1",
    starters: [
      { name: "Otkir Yusupov", number: 1, position: "GOL" },

      { name: "Hojiakbar Alijonov", number: 7, position: "LAT" },
      { name: "Rustam Ashurmatov", number: 5, position: "ZAG" },
      { name: "Abdukodir Husanov", number: 2, position: "ZAG" },
      { name: "Farruh Sayfiyev", number: 3, position: "LAT" },

      { name: "Otabek Shukurov", number: 6, position: "VOL" },
      { name: "Odil Hamrobekov", number: 8, position: "MEI" },

      { name: "Abbosbek Fayzullayev", number: 22, position: "ATA" },
      { name: "Jaloliddin Masharipov", number: 10, position: "MEI" },
      { name: "Oston O'runov", number: 17, position: "ATA" },

      { name: "Eldor Shomurodov", number: 14, position: "ATA" },
    ],

    reserves: [
      { name: "Abduvohid Nematov", number: 16, position: "GOL" },
      { name: "Botirali Ergashev", number: 12, position: "GOL" },

      { name: "Umar Eshmurodov", number: 4, position: "ZAG" },
      { name: "Sherzod Nasrullayev", number: 13, position: "LAT" },
      { name: "Abdulla Abdullayev", number: 15, position: "ZAG" },
      { name: "Avazbek Olmasaliyev", number: 20, position: "ZAG" },
      { name: "Jahongir Orozov", number: 21, position: "ZAG" },
      { name: "Behruz Karimov", number: 24, position: "ZAG" },

      { name: "Akmal Mozgovoy", number: 11, position: "MEI" },
      { name: "Jamshid Iskanderov", number: 18, position: "MEI" },
      { name: "Aziz G'aniyev", number: 23, position: "MEI" },

      { name: "Dostonbek Hamdamov", number: 19, position: "ATA" },
      { name: "Sherzod Esanov", number: 25, position: "ATA" },
      { name: "Igor Sergeyev", number: 9, position: "ATA" },
      { name: "Azizbek Omonov", number: 26, position: "ATA" },
    ],
  },
  {
    code: "COL",
    formation: "4-2-3-1",
    starters: [
      { name: "Camilo Vargas", number: 1, position: "GOL" },

      { name: "Daniel Muñoz", number: 21, position: "LAT" },
      { name: "Davinson Sánchez", number: 23, position: "ZAG" },
      { name: "Jhon Lucumí", number: 3, position: "ZAG" },
      { name: "Johan Mojica", number: 17, position: "LAT" },

      { name: "Jefferson Lerma", number: 16, position: "VOL" },
      { name: "Richard Ríos", number: 6, position: "VOL" },

      { name: "Jhon Arias", number: 11, position: "ATA" },
      { name: "James Rodríguez", number: 10, position: "MEI" },
      { name: "Luis Díaz", number: 7, position: "ATA" },

      { name: "Jhon Córdoba", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Álvaro Montero", number: 12, position: "GOL" },
      { name: "David Ospina", number: 22, position: "GOL" },

      { name: "Yerry Mina", number: 13, position: "ZAG" },
      { name: "Willer Ditta", number: 2, position: "ZAG" },

      { name: "Santiago Arias", number: 4, position: "LAT" },
      { name: "Deiver Machado", number: 15, position: "LAT" },

      { name: "Kevin Castaño", number: 8, position: "VOL" },
      { name: "Gustavo Puerta", number: 18, position: "MEI" },
      { name: "Jorge Carrascal", number: 20, position: "MEI" },
      { name: "Juan Quintero", number: 14, position: "MEI" },
      { name: "Juan Portilla", number: 5, position: "VOL" },
      { name: "Jaminton Campaz", number: 19, position: "ATA" },

      { name: "Cucho Hernández", number: 24, position: "ATA" },
      { name: "Luis Suárez", number: 25, position: "ATA" },
      { name: "Andrés Gómez", number: 26, position: "ATA" },
    ],
  },
  {
    code: "ECU",
    formation: "4-3-3",
    starters: [
      { name: "Hernán Galíndez", number: 1, position: "GOL" },

      { name: "Ángelo Preciado", number: 17, position: "LAT" },
      { name: "Piero Hincapié", number: 3, position: "ZAG" },
      { name: "Willian Pacho", number: 6, position: "ZAG" },
      { name: "Pervis Estupiñán", number: 7, position: "LAT" },

      { name: "Moisés Caicedo", number: 23, position: "VOL" },
      { name: "Alan Franco", number: 21, position: "VOL" },
      { name: "Kendry Páez", number: 10, position: "MEI" },

      { name: "Gonzalo Plata", number: 19, position: "ATA" },
      { name: "Enner Valencia", number: 13, position: "ATA" },
      { name: "John Yeboah", number: 9, position: "ATA" },
    ],

    reserves: [
      { name: "Moisés Ramírez", number: 12, position: "GOL" },
      { name: "Gonzalo Valle", number: 22, position: "GOL" },

      { name: "Félix Torres", number: 2, position: "ZAG" },
      { name: "Joel Ordóñez", number: 4, position: "ZAG" },
      { name: "Jackson Porozo", number: 5, position: "ZAG" },

      { name: "Yaimar Medina", number: 15, position: "LAT" },

      { name: "Jordy Alcívar", number: 8, position: "MEI" },
      { name: "Pedro Vite", number: 14, position: "MEI" },
      { name: "Denil Castillo", number: 20, position: "VOL" },
      { name: "Nilson Angulo", number: 18, position: "ATA" },

      { name: "Kevin Rodríguez", number: 11, position: "ATA" },
      { name: "Jordy Caicedo", number: 24, position: "ATA" },
      { name: "Jeremy Arévalo", number: 25, position: "ATA" },
      { name: "Anthony Valencia", number: 16, position: "ATA" },
    ],
  },
  {
    code: "PAR",
    formation: "4-2-3-1",
    starters: [
      { name: "Orlando Gill", number: 1, position: "GOL" },

      { name: "Juan Cáceres", number: 2, position: "LAT" },
      { name: "Gustavo Gómez", number: 15, position: "ZAG" },
      { name: "Omar Alderete", number: 3, position: "ZAG" },
      { name: "Junior Alonso", number: 6, position: "LAT" },

      { name: "Andrés Cubas", number: 14, position: "VOL" },
      { name: "Diego Gómez", number: 18, position: "VOL" },

      { name: "Miguel Almirón", number: 10, position: "MEI" },
      { name: "Julio Enciso", number: 19, position: "MEI" },
      { name: "Ramón Sosa", number: 11, position: "ATA" },

      { name: "Antonio Sanabria", number: 7, position: "ATA" },
    ],

    reserves: [
      { name: "Gatito Fernández", number: 12, position: "GOL" },
      { name: "Gastón Olveira", number: 22, position: "GOL" },

      { name: "Fabián Balbuena", number: 5, position: "ZAG" },
      { name: "José Canale", number: 4, position: "ZAG" },
      { name: "Gustavo Velázquez", number: 13, position: "ZAG" },
      { name: "Alexandro Maidana", number: 17, position: "ZAG" },

      { name: "Braian Ojeda", number: 23, position: "VOL" },
      { name: "Damián Bobadilla", number: 16, position: "MEI" },
      { name: "Alejandro Romero Gamarra", number: 8, position: "MEI" },
      { name: "Mauricio Galarza", number: 20, position: "MEI" },
      { name: "Matías Galarza", number: 21, position: "MEI" },

      { name: "Gabriel Ávalos", number: 9, position: "ATA" },
      { name: "Isidro Pitta", number: 24, position: "ATA" },
      { name: "Álex Arce", number: 25, position: "ATA" },
      { name: "Gustavo Caballero", number: 26, position: "ATA" },
    ],
  },
  {
    code: "URU",
    formation: "4-3-3",
    starters: [
      { name: "Sergio Rochet", number: 1, position: "GOL" },

      { name: "Guillermo Varela", number: 13, position: "LAT" },
      { name: "Ronald Araujo", number: 4, position: "ZAG" },
      { name: "José María Giménez", number: 2, position: "ZAG" },
      { name: "Matías Viña", number: 17, position: "LAT" },

      { name: "Federico Valverde", number: 15, position: "MEI" },
      { name: "Manuel Ugarte", number: 5, position: "VOL" },
      { name: "Nicolás De La Cruz", number: 7, position: "MEI" },

      { name: "Facundo Pellistri", number: 11, position: "ATA" },
      { name: "Darwin Núñez", number: 9, position: "ATA" },
      { name: "Maximiliano Araújo", number: 20, position: "ATA" },
    ],

    reserves: [
      { name: "Fernando Muslera", number: 23, position: "GOL" },
      { name: "Santiago Mele", number: 12, position: "GOL" },

      { name: "Sebastián Cáceres", number: 3, position: "ZAG" },
      { name: "Santiago Bueno", number: 14, position: "ZAG" },

      { name: "Matías Olivera", number: 16, position: "LAT" },
      { name: "Joaquín Piquerez", number: 22, position: "LAT" },

      { name: "Rodrigo Bentancur", number: 6, position: "MEI" },
      { name: "Giorgian De Arrascaeta", number: 10, position: "MEI" },
      { name: "Emiliano Martínez", number: 8, position: "MEI" },
      { name: "Juan Manuel Sanabria", number: 18, position: "MEI" },
      { name: "Rodrigo Zalazar", number: 21, position: "MEI" },

      { name: "Brian Rodríguez", number: 19, position: "ATA" },
      { name: "Agustín Canobbio", number: 24, position: "ATA" },
      { name: "Rodrigo Aguirre", number: 25, position: "ATA" },
      { name: "Federico Viñas", number: 26, position: "ATA" },
    ],
  },
  {
    code: "NZL",
    formation: "4-4-2",
    starters: [
      { name: "Max Crocombe", number: 1, position: "GOL" },

      { name: "Tim Payne", number: 2, position: "LAT" },
      { name: "Michael Boxall", number: 5, position: "ZAG" },
      { name: "Tyler Bindon", number: 4, position: "ZAG" },
      { name: "Liberato Cacace", number: 13, position: "LAT" },

      { name: "Joe Bell", number: 6, position: "MEI" },
      { name: "Marko Stamenic", number: 17, position: "MEI" },
      { name: "Matthew Garbett", number: 7, position: "MEI" },
      { name: "Ben Old", number: 10, position: "MEI" },

      { name: "Chris Wood", number: 9, position: "ATA" },
      { name: "Ben Waine", number: 11, position: "ATA" },
    ],

    reserves: [
      { name: "Alex Paulsen", number: 12, position: "GOL" },
      { name: "Michael Woud", number: 23, position: "GOL" },

      { name: "Tommy Smith", number: 14, position: "ZAG" },
      { name: "Finn Surman", number: 15, position: "ZAG" },
      { name: "Nando Pijnaker", number: 16, position: "ZAG" },

      { name: "Callan Elliot", number: 18, position: "LAT" },
      { name: "Francis de Vries", number: 19, position: "LAT" },

      { name: "Alex Rufer", number: 20, position: "MEI" },
      { name: "Sarpreet Singh", number: 21, position: "MEI" },
      { name: "Ryan Thomas", number: 22, position: "MEI" },
      { name: "Lachlan Bayliss", number: 24, position: "MEI" },

      { name: "Eli Just", number: 25, position: "ATA" },
      { name: "Callum McCowatt", number: 26, position: "ATA" },
      { name: "Kosta Barbarouses", number: 27, position: "ATA" },
      { name: "Jesse Randall", number: 28, position: "ATA" },
    ],
  }  
];

// Helper: find team's group
export function getTeamGroup(teamName: string): string | undefined {
  // Import groups data inline to avoid circular deps
  const groupsData = [
    { letter: "A", teams: ["México", "África do Sul", "Coreia do Sul", "Tchéquia"] },
    { letter: "B", teams: ["Canadá", "Bósnia e Herzegovina", "Catar", "Suíça"] },
    { letter: "C", teams: ["Brasil", "Marrocos", "Haiti", "Escócia"] },
    { letter: "D", teams: ["Estados Unidos", "Paraguai", "Austrália", "Turquia"] },
    { letter: "E", teams: ["Alemanha", "Curaçao", "Costa do Marfim", "Equador"] },
    { letter: "F", teams: ["Países Baixos", "Japão", "Suécia", "Tunísia"] },
    { letter: "G", teams: ["Bélgica", "Egito", "Irã", "Nova Zelândia"] },
    { letter: "H", teams: ["Espanha", "Cabo Verde", "Arábia Saudita", "Uruguai"] },
    { letter: "I", teams: ["França", "Senegal", "RD Congo", "Noruega"] },
    { letter: "J", teams: ["Argentina", "Argélia", "Áustria", "Jordânia"] },
    { letter: "K", teams: ["Portugal", "Iraque", "Uzbequistão", "Colômbia"] },
    { letter: "L", teams: ["Inglaterra", "Croácia", "Gana", "Panamá"] },
  ];
  for (const g of groupsData) {
    if (g.teams.includes(teamName)) return g.letter;
  }
  return undefined;
}