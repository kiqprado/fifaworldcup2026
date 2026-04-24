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
};

export const squads: ISquad[] = [
  {
    code: "BRA",
    formation: "4-3-3",
    starters: [
      { name: "Alisson", number: 1, position: "GOL" },

      { name: "Danilo", number: 2, position: "LAT" },
      { name: "Marquinhos", number: 4, position: "ZAG" },
      { name: "Gabriel Magalhães", number: 3, position: "ZAG" },
      { name: "Guilherme Arana", number: 6, position: "LAT" },

      { name: "Bruno Guimarães", number: 5, position: "VOL" },
      { name: "João Gomes", number: 8, position: "MEI" },
      { name: "Lucas Paquetá", number: 10, position: "MEI" },

      { name: "Raphinha", number: 11, position: "ATA" },
      { name: "Rodrygo", number: 9, position: "ATA" },
      { name: "Vinícius Jr.", number: 7, position: "ATA" },
    ],
    reserves: [
      { name: "Ederson", number: 23, position: "GOL" },
      { name: "Bento", number: 12, position: "GOL" },

      { name: "Éder Militão", number: 14, position: "ZAG" },
      { name: "Beraldo", number: 13, position: "ZAG" },

      { name: "Vanderson", number: 22, position: "LAT" },
      { name: "Wendell", number: 16, position: "LAT" },

      { name: "André", number: 15, position: "VOL" },
      { name: "Douglas Luiz", number: 18, position: "MEI" },

      { name: "Savinho", number: 19, position: "ATA" },
      { name: "Gabriel Martinelli", number: 21, position: "ATA" },
      { name: "Endrick", number: 20, position: "ATA" },
      { name: "João Pedro", number: 17, position: "ATA" },
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
      { name: "Franco Armani", number: 1, position: "GOL" },
      { name: "Gerónimo Rulli", number: 12, position: "GOL" },

      { name: "Germán Pezzella", number: 6, position: "ZAG" },
      { name: "Nehuén Pérez", number: 4, position: "ZAG" },

      { name: "Marcos Acuña", number: 8, position: "LAT" },
      { name: "Gonzalo Montiel", number: 4, position: "LAT" },

      { name: "Leandro Paredes", number: 14, position: "VOL" },
      { name: "Giovani Lo Celso", number: 16, position: "MEI" },

      { name: "Ángel Di María", number: 11, position: "ATA" },
      { name: "Lautaro Martínez", number: 22, position: "ATA" },
      { name: "Alejandro Garnacho", number: 17, position: "ATA" },
      { name: "Valentín Carboni", number: 19, position: "ATA" },
    ],
  },
  {
    code: "CAN",
    formation: "4-2-3-1",
    starters: [
      { name: "Milan Borjan", number: 1, position: "GOL" },

      { name: "Alistair Johnston", number: 2, position: "LAT" },
      { name: "Moïse Bombito", number: 15, position: "ZAG" },
      { name: "Derek Cornelius", number: 13, position: "ZAG" },
      { name: "Alphonso Davies", number: 19, position: "LAT" },

      { name: "Stephen Eustáquio", number: 7, position: "VOL" },
      { name: "Ismaël Koné", number: 8, position: "VOL" },

      { name: "Tajon Buchanan", number: 17, position: "MEI" },
      { name: "Jonathan David", number: 10, position: "MEI" },
      { name: "Liam Millar", number: 11, position: "MEI" },

      { name: "Cyle Larin", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Dayne St. Clair", number: 16, position: "GOL" },
      { name: "Maxime Crépeau", number: 18, position: "GOL" },

      { name: "Kamal Miller", number: 4, position: "ZAG" },
      { name: "Steven Vitória", number: 5, position: "ZAG" },

      { name: "Richie Laryea", number: 22, position: "LAT" },
      { name: "Sam Adekugbe", number: 3, position: "LAT" },

      { name: "Atiba Hutchinson", number: 6, position: "VOL" },
      { name: "Mathieu Choinière", number: 14, position: "MEI" },

      { name: "Junior Hoilett", number: 21, position: "ATA" },
      { name: "Jacob Shaffelburg", number: 12, position: "ATA" },
      { name: "Jonathan Osorio", number: 20, position: "MEI" },
      { name: "Theo Bair", number: 23, position: "ATA" },
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
      { name: "Yunus Musah", number: 10, position: "MEI" },

      { name: "Timothy Weah", number: 21, position: "ATA" },
      { name: "Folarin Balogun", number: 9, position: "ATA" },
      { name: "Christian Pulisic", number: 7, position: "ATA" },
    ],
    reserves: [
      { name: "Ethan Horvath", number: 18, position: "GOL" },
      { name: "Drake Callender", number: 25, position: "GOL" },

      { name: "Cameron Carter-Vickers", number: 20, position: "ZAG" },
      { name: "Miles Robinson", number: 12, position: "ZAG" },

      { name: "Joe Scally", number: 19, position: "LAT" },
      { name: "Kristoffer Lund", number: 23, position: "LAT" },

      { name: "Johnny Cardoso", number: 4, position: "VOL" },
      { name: "Gio Reyna", number: 11, position: "MEI" },

      { name: "Brenden Aaronson", number: 14, position: "MEI" },
      { name: "Malik Tillman", number: 17, position: "MEI" },
      { name: "Ricardo Pepi", number: 16, position: "ATA" },
      { name: "Josh Sargent", number: 24, position: "ATA" },
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

      { name: "Hirving Lozano", number: 22, position: "ATA" },
      { name: "Santiago Giménez", number: 9, position: "ATA" },
      { name: "Uriel Antuna", number: 21, position: "ATA" },
    ],
    reserves: [
      { name: "Luis Malagón", number: 1, position: "GOL" },
      { name: "Carlos Acevedo", number: 12, position: "GOL" },

      { name: "Víctor Guzmán", number: 15, position: "ZAG" },
      { name: "Néstor Araujo", number: 14, position: "ZAG" },

      { name: "Kevin Álvarez", number: 19, position: "LAT" },
      { name: "Gerardo Arteaga", number: 6, position: "LAT" },

      { name: "Erick Sánchez", number: 8, position: "MEI" },
      { name: "Luis Romo", number: 7, position: "VOL" },

      { name: "Diego Lainez", number: 10, position: "ATA" },
      { name: "Henry Martín", number: 20, position: "ATA" },
      { name: "Julián Quiñones", number: 11, position: "ATA" },
      { name: "Roberto Alvarado", number: 16, position: "ATA" },
    ],
  },
  {
    code: "CUW",
    formation: "4-2-3-1",
    starters: [
      { name: "Eloy Room", number: 1, position: "GOL" },

      { name: "Jurien Gaari", number: 2, position: "LAT" },
      { name: "Cuco Martina", number: 3, position: "ZAG" },
      { name: "Vurnon Anita", number: 4, position: "ZAG" },
      { name: "Rangelo Janga", number: 5, position: "LAT" },

      { name: "Leandro Bacuna", number: 8, position: "VOL" },
      { name: "Juninho Bacuna", number: 10, position: "VOL" },

      { name: "Brandley Kuwas", number: 11, position: "MEI" },
      { name: "Gervane Kastaneer", number: 7, position: "MEI" },
      { name: "Elson Hooi", number: 14, position: "MEI" },

      { name: "Jürgen Locadia", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Tyrick Bodak", number: 12, position: "GOL" },
      { name: "Joshua Smits", number: 16, position: "GOL" },

      { name: "Sherel Floranus", number: 15, position: "LAT" },
      { name: "Darryl Lachman", number: 6, position: "ZAG" },

      { name: "Kenji Gorré", number: 17, position: "ATA" },
      { name: "Charlison Benschop", number: 18, position: "ATA" },

      { name: "Roly Bonevacia", number: 20, position: "MEI" },
      { name: "Michael Maria", number: 19, position: "LAT" },

      { name: "Jeremy Antonisse", number: 21, position: "ATA" },
      { name: "Jearl Margaritha", number: 22, position: "ATA" },
      { name: "Kevin Felida", number: 23, position: "VOL" },
      { name: "Godfried Roemeratoe", number: 13, position: "MEI" },
    ],
  },
  {
    code: "HAI",
    formation: "4-4-2",
    starters: [
      { name: "Johny Placide", number: 1, position: "GOL" },

      { name: "Carlens Arcus", number: 2, position: "LAT" },
      { name: "Ricardo Adé", number: 4, position: "ZAG" },
      { name: "Jean-Kévin Duverne", number: 22, position: "ZAG" },
      { name: "Martin Expérience", number: 3, position: "LAT" },

      { name: "Danley Jean-Jacques", number: 17, position: "VOL" },
      { name: "Leverton Pierre", number: 14, position: "VOL" },
      { name: "Jean-Ricner Bellegarde", number: 10, position: "MEI" },
      { name: "Derrick Étienne Jr.", number: 7, position: "MEI" },

      { name: "Frantzdy Pierrot", number: 9, position: "ATA" },
      { name: "Duckens Nazon", number: 20, position: "ATA" },
    ],
    reserves: [
      { name: "Alexandre Pierre", number: 12, position: "GOL" },
      { name: "Josué Duverger", number: 23, position: "GOL" },

      { name: "Hannes Delcroix", number: 5, position: "ZAG" },
      { name: "Garven Metusala", number: 13, position: "ZAG" },

      { name: "Wilguens Paugain", number: 18, position: "LAT" },
      { name: "Duke Lacroix", number: 6, position: "LAT" },

      { name: "Christopher Attys", number: 8, position: "MEI" },
      { name: "Carl Sainté", number: 15, position: "VOL" },

      { name: "Louicius Deedson", number: 11, position: "ATA" },
      { name: "Ruben Providence", number: 19, position: "ATA" },
      { name: "Yassin Fortuné", number: 21, position: "ATA" },
      { name: "Mondy Prunier", number: 16, position: "ATA" },
    ],
  },
  {
    code: "PAN",
    formation: "5-4-1",
    starters: [
      { name: "Orlando Mosquera", number: 1, position: "GOL" },

      { name: "Michael Murillo", number: 2, position: "LAT" },
      { name: "Fidel Escobar", number: 3, position: "ZAG" },
      { name: "Andrés Andrade", number: 4, position: "ZAG" },
      { name: "José Córdoba", number: 5, position: "ZAG" },
      { name: "Éric Davis", number: 15, position: "LAT" },

      { name: "Adalberto Carrasquilla", number: 8, position: "MEI" },
      { name: "Aníbal Godoy", number: 20, position: "VOL" },
      { name: "Cristian Martínez", number: 10, position: "MEI" },
      { name: "Yoel Bárcenas", number: 11, position: "MEI" },

      { name: "José Fajardo", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Luis Mejía", number: 12, position: "GOL" },
      { name: "César Samudio", number: 22, position: "GOL" },

      { name: "Harold Cummings", number: 6, position: "ZAG" },
      { name: "Jiovany Ramos", number: 13, position: "ZAG" },

      { name: "Roderick Miller", number: 16, position: "ZAG" },
      { name: "Omar Valencia", number: 18, position: "LAT" },

      { name: "César Yanis", number: 7, position: "MEI" },
      { name: "Abdiel Ayarza", number: 14, position: "VOL" },

      { name: "Ismael Díaz", number: 17, position: "ATA" },
      { name: "Alfredo Stephens", number: 19, position: "ATA" },
      { name: "Cecilio Waterman", number: 21, position: "ATA" },
      { name: "Eduardo Guerrero", number: 23, position: "ATA" },
    ],
  },
  {
    code: "GER",
    formation: "4-2-3-1",
    starters: [
      { name: "Marc-André ter Stegen", number: 1, position: "GOL" },

      { name: "Joshua Kimmich", number: 6, position: "LAT" },
      { name: "Antonio Rüdiger", number: 2, position: "ZAG" },
      { name: "Jonathan Tah", number: 4, position: "ZAG" },
      { name: "David Raum", number: 3, position: "LAT" },

      { name: "Ilkay Gündogan", number: 8, position: "VOL" },
      { name: "Robert Andrich", number: 23, position: "VOL" },

      { name: "Jamal Musiala", number: 10, position: "MEI" },
      { name: "Florian Wirtz", number: 17, position: "MEI" },
      { name: "Leroy Sané", number: 19, position: "ATA" },

      { name: "Kai Havertz", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Manuel Neuer", number: 22, position: "GOL" },
      { name: "Oliver Baumann", number: 12, position: "GOL" },

      { name: "Nico Schlotterbeck", number: 15, position: "ZAG" },
      { name: "Niklas Süle", number: 5, position: "ZAG" },

      { name: "Benjamin Henrichs", number: 20, position: "LAT" },
      { name: "Maximilian Mittelstädt", number: 18, position: "LAT" },

      { name: "Aleksandar Pavlović", number: 16, position: "VOL" },
      { name: "Leon Goretzka", number: 14, position: "MEI" },

      { name: "Serge Gnabry", number: 11, position: "ATA" },
      { name: "Niclas Füllkrug", number: 13, position: "ATA" },
      { name: "Chris Führich", number: 21, position: "ATA" },
      { name: "Deniz Undav", number: 24, position: "ATA" },
    ],
  },
  {
    code: "AUT",
    formation: "4-2-3-1",
    starters: [
      { name: "Alexander Schlager", number: 1, position: "GOL" },

      { name: "Stefan Posch", number: 5, position: "LAT" },
      { name: "Kevin Danso", number: 4, position: "ZAG" },
      { name: "Maximilian Wöber", number: 2, position: "ZAG" },
      { name: "Phillipp Mwene", number: 16, position: "LAT" },

      { name: "Konrad Laimer", number: 20, position: "VOL" },
      { name: "Nicolas Seiwald", number: 6, position: "VOL" },

      { name: "Marcel Sabitzer", number: 9, position: "MEI" },
      { name: "Christoph Baumgartner", number: 19, position: "MEI" },
      { name: "Patrick Wimmer", number: 23, position: "ATA" },

      { name: "Marko Arnautović", number: 7, position: "ATA" },
    ],
    reserves: [
      { name: "Heinz Lindner", number: 12, position: "GOL" },
      { name: "Patrick Pentz", number: 13, position: "GOL" },

      { name: "Gernot Trauner", number: 3, position: "ZAG" },
      { name: "Philipp Lienhart", number: 15, position: "ZAG" },

      { name: "Flavius Daniliuc", number: 21, position: "LAT" },
      { name: "Andreas Weimann", number: 10, position: "ATA" },

      { name: "Romano Schmid", number: 18, position: "MEI" },
      { name: "Matthias Seidl", number: 17, position: "MEI" },

      { name: "Michael Gregoritsch", number: 11, position: "ATA" },
      { name: "Junior Adamu", number: 14, position: "ATA" },
      { name: "Sasa Kalajdzic", number: 25, position: "ATA" },
      { name: "Leopold Querfeld", number: 22, position: "ZAG" },
    ],
  },
  {
    code: "BEL",
    formation: "4-2-3-1",
    starters: [
      { name: "Koen Casteels", number: 1, position: "GOL" },

      { name: "Timothy Castagne", number: 21, position: "LAT" },
      { name: "Wout Faes", number: 4, position: "ZAG" },
      { name: "Jan Vertonghen", number: 5, position: "ZAG" },
      { name: "Arthur Theate", number: 3, position: "LAT" },

      { name: "Amadou Onana", number: 18, position: "VOL" },
      { name: "Youri Tielemans", number: 8, position: "VOL" },

      { name: "Johan Bakayoko", number: 19, position: "ATA" },
      { name: "Kevin De Bruyne", number: 7, position: "MEI" },
      { name: "Jérémy Doku", number: 22, position: "ATA" },

      { name: "Romelu Lukaku", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Matz Sels", number: 13, position: "GOL" },
      { name: "Thomas Kaminski", number: 12, position: "GOL" },

      { name: "Zeno Debast", number: 2, position: "ZAG" },
      { name: "Arthur Vermeeren", number: 6, position: "VOL" },

      { name: "Yannick Carrasco", number: 11, position: "LAT" },
      { name: "Leandro Trossard", number: 17, position: "ATA" },

      { name: "Orel Mangala", number: 15, position: "VOL" },
      { name: "Aster Vranckx", number: 20, position: "MEI" },

      { name: "Loïs Openda", number: 10, position: "ATA" },
      { name: "Charles De Ketelaere", number: 16, position: "MEI" },
      { name: "Dodi Lukebakio", number: 14, position: "ATA" },
      { name: "Malick Fofana", number: 23, position: "ATA" },
    ],
  },
  {
    code: "BIH",
    formation: "3-5-2",
    starters: [
      { name: "Ibrahim Šehić", number: 1, position: "GOL" },

      { name: "Anel Ahmedhodžić", number: 16, position: "ZAG" },
      { name: "Sead Kolašinac", number: 5, position: "ZAG" },
      { name: "Dennis Hadžikadunić", number: 3, position: "ZAG" },

      { name: "Amar Dedić", number: 7, position: "LAT" },
      { name: "Benjamin Tahirović", number: 6, position: "VOL" },
      { name: "Rade Krunić", number: 8, position: "MEI" },
      { name: "Haris Hajradinović", number: 10, position: "MEI" },
      { name: "Eldar Ćivić", number: 13, position: "LAT" },

      { name: "Edin Džeko", number: 11, position: "ATA" },
      { name: "Ermedin Demirović", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Kenan Pirić", number: 12, position: "GOL" },
      { name: "Nikola Vasilj", number: 23, position: "GOL" },

      { name: "Adrian Leon Barišić", number: 4, position: "ZAG" },
      { name: "Stjepan Radeljić", number: 15, position: "ZAG" },

      { name: "Jusuf Gazibegović", number: 2, position: "LAT" },
      { name: "Miha Mevlja", number: 18, position: "ZAG" },

      { name: "Gojko Cimirot", number: 14, position: "VOL" },
      { name: "Amir Hadžiahmetović", number: 21, position: "MEI" },

      { name: "Luka Menalo", number: 20, position: "ATA" },
      { name: "Smail Prevljak", number: 19, position: "ATA" },
      { name: "Kenan Kodro", number: 22, position: "ATA" },
      { name: "Dario Šarić", number: 17, position: "MEI" },
    ],
  },
  {
    code: "CRO",
    formation: "4-3-3",
    starters: [
      { name: "Dominik Livaković", number: 1, position: "GOL" },

      { name: "Josip Juranović", number: 22, position: "LAT" },
      { name: "Joško Gvardiol", number: 4, position: "ZAG" },
      { name: "Josip Šutalo", number: 6, position: "ZAG" },
      { name: "Borna Sosa", number: 3, position: "LAT" },

      { name: "Marcelo Brozović", number: 11, position: "VOL" },
      { name: "Mateo Kovačić", number: 8, position: "MEI" },
      { name: "Luka Modrić", number: 10, position: "MEI" },

      { name: "Mario Pašalić", number: 15, position: "ATA" },
      { name: "Andrej Kramarić", number: 9, position: "ATA" },
      { name: "Ivan Perišić", number: 14, position: "ATA" },
    ],
    reserves: [
      { name: "Ivica Ivušić", number: 23, position: "GOL" },
      { name: "Nediljko Labrović", number: 12, position: "GOL" },

      { name: "Domagoj Vida", number: 21, position: "ZAG" },
      { name: "Martin Erlić", number: 5, position: "ZAG" },

      { name: "Josip Stanišić", number: 2, position: "LAT" },
      { name: "Borna Barišić", number: 19, position: "LAT" },

      { name: "Luka Sučić", number: 17, position: "MEI" },
      { name: "Lovro Majer", number: 7, position: "MEI" },

      { name: "Bruno Petković", number: 16, position: "ATA" },
      { name: "Marko Livaja", number: 18, position: "ATA" },
      { name: "Josip Brekalo", number: 20, position: "ATA" },
      { name: "Nikola Vlašić", number: 13, position: "MEI" },
    ],
  },
  {
    code: "SCO",
    formation: "3-4-2-1",
    starters: [
      { name: "Angus Gunn", number: 1, position: "GOL" },

      { name: "Ryan Porteous", number: 5, position: "ZAG" },
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
      { name: "Zander Clark", number: 12, position: "GOL" },
      { name: "Liam Kelly", number: 21, position: "GOL" },

      { name: "Jack Hendry", number: 13, position: "ZAG" },
      { name: "Scott McKenna", number: 15, position: "ZAG" },

      { name: "Aaron Hickey", number: 22, position: "LAT" },
      { name: "Greg Taylor", number: 19, position: "LAT" },

      { name: "Kenny McLean", number: 23, position: "MEI" },
      { name: "Callum McGregor", number: 14, position: "VOL" },

      { name: "Che Adams", number: 10, position: "ATA" },
      { name: "Lawrence Shankland", number: 20, position: "ATA" },
      { name: "Stuart Armstrong", number: 17, position: "MEI" },
      { name: "Lewis Ferguson", number: 16, position: "MEI" },
    ],
  },
  {
    code: "ESP",
    formation: "4-3-3",
    starters: [
      { name: "Unai Simón", number: 23, position: "GOL" },

      { name: "Pedro Porro", number: 2, position: "LAT" },
      { name: "Robin Le Normand", number: 5, position: "ZAG" },
      { name: "Pau Cubarsí", number: 4, position: "ZAG" },
      { name: "Marc Cucurella", number: 3, position: "LAT" },

      { name: "Rodri", number: 16, position: "VOL" },
      { name: "Pedri", number: 8, position: "MEI" },
      { name: "Fabián Ruiz", number: 10, position: "MEI" },

      { name: "Lamine Yamal", number: 19, position: "ATA" },
      { name: "Álvaro Morata", number: 7, position: "ATA" },
      { name: "Nico Williams", number: 11, position: "ATA" },
    ],
    reserves: [
      { name: "David Raya", number: 1, position: "GOL" },
      { name: "Álex Remiro", number: 13, position: "GOL" },

      { name: "Aymeric Laporte", number: 14, position: "ZAG" },
      { name: "Dean Huijsen", number: 6, position: "ZAG" },

      { name: "Alejandro Grimaldo", number: 12, position: "LAT" },
      { name: "Marcos Llorente", number: 20, position: "LAT" },

      { name: "Martín Zubimendi", number: 18, position: "VOL" },
      { name: "Gavi", number: 9, position: "MEI" },

      { name: "Dani Olmo", number: 21, position: "MEI" },
      { name: "Mikel Oyarzabal", number: 22, position: "ATA" },
      { name: "Ferran Torres", number: 17, position: "ATA" },
      { name: "Joselu", number: 15, position: "ATA" },
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
      { name: "Antoine Griezmann", number: 7, position: "MEI" },
      { name: "Kylian Mbappé", number: 10, position: "ATA" },

      { name: "Olivier Giroud", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Brice Samba", number: 1, position: "GOL" },
      { name: "Alphonse Areola", number: 23, position: "GOL" },

      { name: "Ibrahima Konaté", number: 15, position: "ZAG" },
      { name: "Lucas Hernández", number: 21, position: "ZAG" },

      { name: "Benjamin Pavard", number: 2, position: "LAT" },
      { name: "Ferland Mendy", number: 3, position: "LAT" },

      { name: "Eduardo Camavinga", number: 6, position: "MEI" },
      { name: "Warren Zaïre-Emery", number: 18, position: "MEI" },

      { name: "Kingsley Coman", number: 20, position: "ATA" },
      { name: "Randal Kolo Muani", number: 12, position: "ATA" },
      { name: "Marcus Thuram", number: 13, position: "ATA" },
      { name: "Bradley Barcola", number: 19, position: "ATA" },
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

      { name: "Xavi Simons", number: 7, position: "ATA" },
      { name: "Memphis Depay", number: 10, position: "ATA" },
      { name: "Cody Gakpo", number: 11, position: "ATA" },
    ],
    reserves: [
      { name: "Mark Flekken", number: 13, position: "GOL" },
      { name: "Justin Bijlow", number: 23, position: "GOL" },

      { name: "Matthijs de Ligt", number: 3, position: "ZAG" },
      { name: "Stefan de Vrij", number: 6, position: "ZAG" },

      { name: "Lutsharel Geertruida", number: 2, position: "LAT" },
      { name: "Daley Blind", number: 17, position: "LAT" },

      { name: "Joey Veerman", number: 8, position: "MEI" },
      { name: "Quinten Timber", number: 19, position: "MEI" },

      { name: "Donyell Malen", number: 18, position: "ATA" },
      { name: "Brian Brobbey", number: 9, position: "ATA" },
      { name: "Steven Bergwijn", number: 20, position: "ATA" },
      { name: "Noa Lang", number: 12, position: "ATA" },
    ],
  },
  {
    code: "ENG",
    formation: "4-2-3-1",
    starters: [
      { name: "Jordan Pickford", number: 1, position: "GOL" },

      { name: "Kyle Walker", number: 2, position: "LAT" },
      { name: "John Stones", number: 5, position: "ZAG" },
      { name: "Marc Guéhi", number: 6, position: "ZAG" },
      { name: "Luke Shaw", number: 3, position: "LAT" },

      { name: "Declan Rice", number: 4, position: "VOL" },
      { name: "Trent Alexander-Arnold", number: 8, position: "MEI" },

      { name: "Bukayo Saka", number: 7, position: "ATA" },
      { name: "Jude Bellingham", number: 10, position: "MEI" },
      { name: "Phil Foden", number: 11, position: "ATA" },

      { name: "Harry Kane", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Aaron Ramsdale", number: 13, position: "GOL" },
      { name: "Dean Henderson", number: 23, position: "GOL" },

      { name: "Ezri Konsa", number: 14, position: "ZAG" },
      { name: "Lewis Dunk", number: 15, position: "ZAG" },

      { name: "Kieran Trippier", number: 12, position: "LAT" },
      { name: "Ben Chilwell", number: 21, position: "LAT" },

      { name: "Kalvin Phillips", number: 16, position: "VOL" },
      { name: "Conor Gallagher", number: 18, position: "MEI" },

      { name: "Jack Grealish", number: 17, position: "ATA" },
      { name: "Jarrod Bowen", number: 20, position: "ATA" },
      { name: "Ollie Watkins", number: 19, position: "ATA" },
      { name: "Ivan Toney", number: 22, position: "ATA" },
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
      { name: "Birger Meling", number: 5, position: "LAT" },

      { name: "Patrick Berg", number: 6, position: "VOL" },
      { name: "Sander Berge", number: 8, position: "MEI" },
      { name: "Martin Ødegaard", number: 10, position: "MEI" },

      { name: "Antonio Nusa", number: 20, position: "ATA" },
      { name: "Erling Haaland", number: 9, position: "ATA" },
      { name: "Alexander Sørloth", number: 7, position: "ATA" },
    ],
    reserves: [
      { name: "Mathias Dyngeland", number: 12, position: "GOL" },
      { name: "Egil Selvik", number: 23, position: "GOL" },

      { name: "Stian Gregersen", number: 2, position: "ZAG" },
      { name: "Fredrik Bjørkan", number: 15, position: "LAT" },

      { name: "Marcus Pedersen", number: 16, position: "LAT" },
      { name: "Andreas Hanche-Olsen", number: 17, position: "ZAG" },

      { name: "Morten Thorsby", number: 18, position: "VOL" },
      { name: "Kristian Thorstvedt", number: 19, position: "MEI" },

      { name: "Jørgen Strand Larsen", number: 11, position: "ATA" },
      { name: "Mohamed Elyounoussi", number: 22, position: "ATA" },
      { name: "Ola Solbakken", number: 13, position: "ATA" },
      { name: "Aron Dønnum", number: 21, position: "ATA" },
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

      { name: "João Palhinha", number: 6, position: "VOL" },
      { name: "Bruno Fernandes", number: 8, position: "MEI" },
      { name: "Vitinha", number: 23, position: "MEI" },

      { name: "Bernardo Silva", number: 10, position: "ATA" },
      { name: "Cristiano Ronaldo", number: 7, position: "ATA" },
      { name: "Rafael Leão", number: 17, position: "ATA" },
    ],
    reserves: [
      { name: "José Sá", number: 12, position: "GOL" },
      { name: "Rui Patrício", number: 22, position: "GOL" },

      { name: "Pepe", number: 3, position: "ZAG" },
      { name: "António Silva", number: 5, position: "ZAG" },

      { name: "Diogo Dalot", number: 2, position: "LAT" },
      { name: "Raphaël Guerreiro", number: 13, position: "LAT" },

      { name: "Rúben Neves", number: 18, position: "VOL" },
      { name: "Matheus Nunes", number: 16, position: "MEI" },

      { name: "João Félix", number: 11, position: "ATA" },
      { name: "Gonçalo Ramos", number: 9, position: "ATA" },
      { name: "Diogo Jota", number: 21, position: "ATA" },
      { name: "Pedro Neto", number: 15, position: "ATA" },
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
      { name: "Alex Král", number: 21, position: "VOL" },

      { name: "Václav Černý", number: 17, position: "ATA" },
      { name: "Adam Hložek", number: 9, position: "MEI" },
      { name: "Lukáš Provod", number: 14, position: "ATA" },

      { name: "Patrik Schick", number: 10, position: "ATA" },
    ],
    reserves: [
      { name: "Matěj Kovář", number: 23, position: "GOL" },
      { name: "Tomáš Vaclík", number: 12, position: "GOL" },

      { name: "Ladislav Krejčí", number: 2, position: "ZAG" },
      { name: "Jakub Brabec", number: 6, position: "ZAG" },

      { name: "Pavel Kadeřábek", number: 18, position: "LAT" },
      { name: "Jaroslav Zelený", number: 19, position: "LAT" },

      { name: "Antonín Barák", number: 8, position: "MEI" },
      { name: "Michal Sadílek", number: 20, position: "MEI" },

      { name: "Jan Kuchta", number: 11, position: "ATA" },
      { name: "Mojmír Chytil", number: 16, position: "ATA" },
      { name: "Tomáš Čvančara", number: 22, position: "ATA" },
      { name: "Ondřej Lingr", number: 7, position: "MEI" },
    ],
  },
  {
    code: "SWE",
    formation: "4-4-2",
    starters: [
      { name: "Robin Olsen", number: 1, position: "GOL" },

      { name: "Viktor Claesson", number: 17, position: "LAT" },
      { name: "Victor Lindelöf", number: 3, position: "ZAG" },
      { name: "Isak Hien", number: 4, position: "ZAG" },
      { name: "Ludwig Augustinsson", number: 6, position: "LAT" },

      { name: "Dejan Kulusevski", number: 21, position: "MEI" },
      { name: "Emil Forsberg", number: 10, position: "MEI" },
      { name: "Albin Ekdal", number: 8, position: "VOL" },
      { name: "Jesper Karlsson", number: 11, position: "MEI" },

      { name: "Alexander Isak", number: 9, position: "ATA" },
      { name: "Viktor Gyökeres", number: 19, position: "ATA" },
    ],
    reserves: [
      { name: "Viktor Johansson", number: 12, position: "GOL" },
      { name: "Kristoffer Nordfeldt", number: 23, position: "GOL" },

      { name: "Carl Starfelt", number: 5, position: "ZAG" },
      { name: "Filip Helander", number: 15, position: "ZAG" },

      { name: "Emil Krafth", number: 2, position: "LAT" },
      { name: "Gabriel Gudmundsson", number: 13, position: "LAT" },

      { name: "Jens Cajuste", number: 14, position: "VOL" },
      { name: "Mattias Svanberg", number: 16, position: "MEI" },

      { name: "Anthony Elanga", number: 20, position: "ATA" },
      { name: "Jordan Larsson", number: 18, position: "ATA" },
      { name: "Alexander Bernhardsson", number: 22, position: "ATA" },
      { name: "Hugo Larsson", number: 7, position: "MEI" },
    ],
  },
  {
    code: "SUI",
    formation: "3-4-2-1",
    starters: [
      { name: "Yann Sommer", number: 1, position: "GOL" },

      { name: "Manuel Akanji", number: 5, position: "ZAG" },
      { name: "Nico Elvedi", number: 4, position: "ZAG" },
      { name: "Ricardo Rodríguez", number: 13, position: "ZAG" },

      { name: "Silvan Widmer", number: 3, position: "LAT" },
      { name: "Granit Xhaka", number: 10, position: "VOL" },
      { name: "Remo Freuler", number: 8, position: "VOL" },
      { name: "Ruben Vargas", number: 17, position: "LAT" },

      { name: "Xherdan Shaqiri", number: 23, position: "MEI" },
      { name: "Dan Ndoye", number: 19, position: "MEI" },

      { name: "Breel Embolo", number: 7, position: "ATA" },
    ],
    reserves: [
      { name: "Gregor Kobel", number: 12, position: "GOL" },
      { name: "Yvon Mvogo", number: 21, position: "GOL" },

      { name: "Fabian Schär", number: 22, position: "ZAG" },
      { name: "Cedric Zesiger", number: 15, position: "ZAG" },

      { name: "Kevin Mbabu", number: 2, position: "LAT" },
      { name: "Ulisses Garcia", number: 6, position: "LAT" },

      { name: "Denis Zakaria", number: 18, position: "VOL" },
      { name: "Ardon Jashari", number: 14, position: "MEI" },

      { name: "Noah Okafor", number: 11, position: "ATA" },
      { name: "Zeki Amdouni", number: 20, position: "ATA" },
      { name: "Andi Zeqiri", number: 9, position: "ATA" },
      { name: "Michel Aebischer", number: 16, position: "MEI" },
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

      { name: "Cenk Tosun", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Altay Bayındır", number: 12, position: "GOL" },
      { name: "Doğan Alemdar", number: 23, position: "GOL" },

      { name: "Ozan Kabak", number: 5, position: "ZAG" },
      { name: "Samet Akaydin", number: 14, position: "ZAG" },

      { name: "Mert Müldür", number: 18, position: "LAT" },
      { name: "Eren Elmalı", number: 13, position: "LAT" },

      { name: "Salih Özcan", number: 15, position: "VOL" },
      { name: "İsmail Yüksek", number: 16, position: "VOL" },

      { name: "Yunus Akgün", number: 17, position: "ATA" },
      { name: "Kerem Aktürkoğlu", number: 19, position: "ATA" },
      { name: "Enes Ünal", number: 21, position: "ATA" },
      { name: "Bertuğ Yıldırım", number: 22, position: "ATA" },
    ],
  },
  {
    code: "RSA",
    formation: "4-2-3-1",
    starters: [
      { name: "Ronwen Williams", number: 1, position: "GOL" },

      { name: "Khuliso Mudau", number: 20, position: "LAT" },
      { name: "Siyanda Xulu", number: 5, position: "ZAG" },
      { name: "Mothobi Mvala", number: 14, position: "ZAG" },
      { name: "Aubrey Modiba", number: 6, position: "LAT" },

      { name: "Teboho Mokoena", number: 4, position: "VOL" },
      { name: "Sphephelo Sithole", number: 13, position: "VOL" },

      { name: "Elias Mokwana", number: 17, position: "ATA" },
      { name: "Percy Tau", number: 10, position: "MEI" },
      { name: "Themba Zwane", number: 11, position: "ATA" },

      { name: "Evidence Makgopa", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Veli Mothwa", number: 12, position: "GOL" },
      { name: "Ricardo Goss", number: 23, position: "GOL" },

      { name: "Grant Kekana", number: 3, position: "ZAG" },
      { name: "Nkosinathi Sibisi", number: 15, position: "ZAG" },

      { name: "Terrence Mashego", number: 21, position: "LAT" },
      { name: "Nyiko Mobbie", number: 2, position: "LAT" },

      { name: "Thabang Monare", number: 8, position: "VOL" },
      { name: "Bathusi Aubaas", number: 16, position: "VOL" },

      { name: "Zakhele Lepasa", number: 19, position: "ATA" },
      { name: "Oswin Appollis", number: 22, position: "ATA" },
      { name: "Thapelo Morena", number: 7, position: "ATA" },
      { name: "Mduduzi Shabalala", number: 18, position: "MEI" },
    ],
  },
  {
    code: "ALG",
    formation: "4-3-3",
    starters: [
      { name: "Anthony Mandréa", number: 1, position: "GOL" },

      { name: "Aïssa Mandi", number: 2, position: "LAT" },
      { name: "Ramiz Zerrouki", number: 4, position: "ZAG" },
      { name: "Mohamed Amine Tougai", number: 5, position: "ZAG" },
      { name: "Rayan Aït-Nouri", number: 3, position: "LAT" },

      { name: "Ismaël Bennacer", number: 8, position: "VOL" },
      { name: "Houssem Aouar", number: 10, position: "MEI" },
      { name: "Nabil Bentaleb", number: 14, position: "MEI" },

      { name: "Riyad Mahrez", number: 7, position: "ATA" },
      { name: "Baghdad Bounedjah", number: 9, position: "ATA" },
      { name: "Saïd Benrahma", number: 11, position: "ATA" },
    ],
    reserves: [
      { name: "Alexandre Oukidja", number: 12, position: "GOL" },
      { name: "Raïs M'Bolhi", number: 23, position: "GOL" },

      { name: "Youcef Atal", number: 20, position: "LAT" },
      { name: "Fares Chaïbi", number: 6, position: "MEI" },

      { name: "Ahmed Touba", number: 15, position: "ZAG" },
      { name: "Djamel Benlamri", number: 21, position: "ZAG" },

      { name: "Himad Abdelli", number: 17, position: "MEI" },
      { name: "Adam Ounas", number: 18, position: "ATA" },

      { name: "Amine Gouiri", number: 19, position: "ATA" },
      { name: "Islam Slimani", number: 13, position: "ATA" },
      { name: "Youcef Belaïli", number: 22, position: "ATA" },
      { name: "Yacine Brahimi", number: 16, position: "MEI" },
    ],
  },
  {
    code: "CPV",
    formation: "4-3-3",
    starters: [
      { name: "Vozinha", number: 1, position: "GOL" },

      { name: "Steven Moreira", number: 22, position: "LAT" },
      { name: "Logan Costa", number: 5, position: "ZAG" },
      { name: "Roberto Lopes", number: 4, position: "ZAG" },
      { name: "Stopira", number: 2, position: "LAT" },

      { name: "Kevin Pina", number: 8, position: "VOL" },
      { name: "Deroy Duarte", number: 14, position: "MEI" },
      { name: "Kenny Rocha Santos", number: 6, position: "MEI" },

      { name: "Garry Rodrigues", number: 11, position: "ATA" },
      { name: "Ryan Mendes", number: 7, position: "ATA" },
      { name: "Bebé", number: 10, position: "ATA" },
    ],
    reserves: [
      { name: "Marcio Rosa", number: 12, position: "GOL" },
      { name: "Dylan Silva", number: 23, position: "GOL" },

      { name: "Diney Borges", number: 3, position: "ZAG" },
      { name: "Jefferson Encada", number: 19, position: "LAT" },

      { name: "Patrick Andrade", number: 16, position: "MEI" },
      { name: "Jovane Cabral", number: 17, position: "ATA" },

      { name: "Willy Semedo", number: 21, position: "ATA" },
      { name: "Zé Luís", number: 9, position: "ATA" },

      { name: "Lisandro Semedo", number: 18, position: "ATA" },
      { name: "Heldon Ramos", number: 20, position: "ATA" },
      { name: "João Paulo Fernandes", number: 15, position: "VOL" },
      { name: "Sidny Cabral", number: 13, position: "MEI" },
    ],
  },
  {
    code: "CIV",
    formation: "4-3-3",
    starters: [
      { name: "Yahia Fofana", number: 1, position: "GOL" },

      { name: "Serge Aurier", number: 17, position: "LAT" },
      { name: "Evan Ndicka", number: 21, position: "ZAG" },
      { name: "Ousmane Diomande", number: 2, position: "ZAG" },
      { name: "Ghislain Konan", number: 3, position: "LAT" },

      { name: "Seko Fofana", number: 8, position: "MEI" },
      { name: "Franck Kessié", number: 6, position: "VOL" },
      { name: "Jean Michaël Seri", number: 4, position: "MEI" },

      { name: "Nicolas Pépé", number: 19, position: "ATA" },
      { name: "Sébastien Haller", number: 22, position: "ATA" },
      { name: "Simon Adingra", number: 24, position: "ATA" },
    ],
    reserves: [
      { name: "Badra Ali Sangaré", number: 12, position: "GOL" },
      { name: "Charles Folly", number: 23, position: "GOL" },

      { name: "Willy Boly", number: 5, position: "ZAG" },
      { name: "Odilon Kossounou", number: 7, position: "ZAG" },

      { name: "Wilfried Singo", number: 18, position: "LAT" },
      { name: "Hassane Kamara", number: 13, position: "LAT" },

      { name: "Ibrahim Sangaré", number: 15, position: "VOL" },
      { name: "Lazare Amani", number: 10, position: "MEI" },

      { name: "Jonathan Bamba", number: 11, position: "ATA" },
      { name: "Maxwel Cornet", number: 20, position: "ATA" },
      { name: "Christian Kouamé", number: 9, position: "ATA" },
      { name: "Karim Konaté", number: 14, position: "ATA" },
    ],
  },
  {
    code: "EGY",
    formation: "4-3-3",
    starters: [
      { name: "Mohamed El Shenawy", number: 1, position: "GOL" },

      { name: "Mohamed Hany", number: 2, position: "LAT" },
      { name: "Ahmed Hegazi", number: 6, position: "ZAG" },
      { name: "Mohamed Abdelmonem", number: 24, position: "ZAG" },
      { name: "Ahmed Fattouh", number: 13, position: "LAT" },

      { name: "Mohamed Elneny", number: 17, position: "VOL" },
      { name: "Hamdi Fathi", number: 8, position: "VOL" },
      { name: "Emam Ashour", number: 22, position: "MEI" },

      { name: "Mohamed Salah", number: 10, position: "ATA" },
      { name: "Mostafa Mohamed", number: 11, position: "ATA" },
      { name: "Omar Marmoush", number: 7, position: "ATA" },
    ],

    reserves: [
      { name: "Mohamed Sobhi", number: 16, position: "GOL" },
      { name: "Mahmoud Gad", number: 23, position: "GOL" },

      { name: "Yasser Ibrahim", number: 5, position: "ZAG" },
      { name: "Osama Galal", number: 4, position: "ZAG" },

      { name: "Omar Kamal", number: 3, position: "LAT" },
      { name: "Karim Fouad", number: 14, position: "LAT" },

      { name: "Zizo", number: 21, position: "MEI" },
      { name: "Marwan Attia", number: 19, position: "VOL" },

      { name: "Trezeguet", number: 15, position: "ATA" },
      { name: "Mostafa Fathi", number: 18, position: "ATA" },
      { name: "Ahmed Hassan Kouka", number: 9, position: "ATA" },
      { name: "Ibrahim Adel", number: 20, position: "ATA" },
    ],
  },
  {
    code: "GHA",
    formation: "4-2-3-1",
    starters: [
      { name: "Lawrence Ati-Zigi", number: 1, position: "GOL" },

      { name: "Tariq Lamptey", number: 2, position: "LAT" },
      { name: "Daniel Amartey", number: 18, position: "ZAG" },
      { name: "Alexander Djiku", number: 23, position: "ZAG" },
      { name: "Gideon Mensah", number: 14, position: "LAT" },

      { name: "Thomas Partey", number: 5, position: "VOL" },
      { name: "Mohammed Kudus", number: 20, position: "MEI" },

      { name: "Jordan Ayew", number: 9, position: "ATA" },
      { name: "André Ayew", number: 10, position: "MEI" },
      { name: "Inaki Williams", number: 19, position: "ATA" },

      { name: "Antoine Semenyo", number: 25, position: "ATA" },
    ],
    reserves: [
      { name: "Richard Ofori", number: 12, position: "GOL" },
      { name: "Jojo Wollacott", number: 16, position: "GOL" },

      { name: "Nicholas Opoku", number: 4, position: "ZAG" },
      { name: "Joseph Aidoo", number: 15, position: "ZAG" },

      { name: "Denis Odoi", number: 3, position: "LAT" },
      { name: "Kingsley Schindler", number: 17, position: "LAT" },

      { name: "Salis Abdul Samed", number: 21, position: "VOL" },
      { name: "Elisha Owusu", number: 6, position: "VOL" },

      { name: "Ernest Nuamah", number: 11, position: "ATA" },
      { name: "Osman Bukari", number: 7, position: "ATA" },
      { name: "Kamaldeen Sulemana", number: 22, position: "ATA" },
      { name: "Ransford-Yeboah Königsdörffer", number: 13, position: "ATA" },
    ],
  },
  {
    code: "MAR",
    formation: "4-3-3",
    starters: [
      { name: "Yassine Bounou", number: 1, position: "GOL" },

      { name: "Achraf Hakimi", number: 2, position: "LAT" },
      { name: "Romain Saïss", number: 6, position: "ZAG" },
      { name: "Nayef Aguerd", number: 5, position: "ZAG" },
      { name: "Noussair Mazraoui", number: 3, position: "LAT" },

      { name: "Sofyan Amrabat", number: 4, position: "VOL" },
      { name: "Azzedine Ounahi", number: 8, position: "MEI" },
      { name: "Selim Amallah", number: 15, position: "MEI" },

      { name: "Hakim Ziyech", number: 7, position: "ATA" },
      { name: "Youssef En-Nesyri", number: 9, position: "ATA" },
      { name: "Sofiane Boufal", number: 17, position: "ATA" },
    ],
    reserves: [
      { name: "Munir El Kajoui", number: 12, position: "GOL" },
      { name: "Yassine Bounou", number: 22, position: "GOL" },

      { name: "Jawad El Yamiq", number: 18, position: "ZAG" },
      { name: "Chadi Riad", number: 24, position: "ZAG" },

      { name: "Yahya Attiat-Allah", number: 25, position: "LAT" },
      { name: "Noussair Mazraoui", number: 26, position: "LAT" },

      { name: "Bilal El Khannouss", number: 23, position: "MEI" },
      { name: "Amine Harit", number: 10, position: "MEI" },

      { name: "Abde Ezzalzouli", number: 16, position: "ATA" },
      { name: "Tarik Tissoudali", number: 19, position: "ATA" },
      { name: "Ayoub El Kaabi", number: 20, position: "ATA" },
      { name: "Ilias Chair", number: 11, position: "MEI" },
    ],
  },
  {
    code: "COD",
    formation: "4-3-3",
    starters: [
      { name: "Lionel Mpasi", number: 1, position: "GOL" },

      { name: "Gédéon Kalulu", number: 2, position: "LAT" },
      { name: "Chancel Mbemba", number: 5, position: "ZAG" },
      { name: "Dylan Batubinsika", number: 4, position: "ZAG" },
      { name: "Arthur Masuaku", number: 3, position: "LAT" },

      { name: "Samuel Moutoussamy", number: 8, position: "VOL" },
      { name: "Charles Pickel", number: 18, position: "MEI" },
      { name: "Grady Diangana", number: 11, position: "MEI" },

      { name: "Yoane Wissa", number: 20, position: "ATA" },
      { name: "Cédric Bakambu", number: 17, position: "ATA" },
      { name: "Silas Katompa Mvumpa", number: 7, position: "ATA" },
    ],
    reserves: [
      { name: "Joël Kiassumbua", number: 16, position: "GOL" },
      { name: "Timothy Fayulu", number: 23, position: "GOL" },

      { name: "Christian Luyindama", number: 6, position: "ZAG" },
      { name: "Henock Inonga", number: 15, position: "ZAG" },

      { name: "Joris Kayembe", number: 12, position: "LAT" },
      { name: "Vital Nsimba", number: 21, position: "LAT" },

      { name: "Gaël Kakuta", number: 14, position: "MEI" },
      { name: "Edo Kayembe", number: 22, position: "VOL" },

      { name: "Dieumerci Mbokani", number: 9, position: "ATA" },
      { name: "Meschack Elia", number: 13, position: "ATA" },
      { name: "Fiston Mayele", number: 19, position: "ATA" },
      { name: "Ben Malango", number: 10, position: "ATA" },
    ],
  },
  {
    code: "SEN",
    formation: "4-3-3",
    starters: [
      { name: "Édouard Mendy", number: 16, position: "GOL" },

      { name: "Kalidou Koulibaly", number: 3, position: "ZAG" },
      { name: "Abdou Diallo", number: 22, position: "ZAG" },
      { name: "Krèpin Diatta", number: 15, position: "LAT" },
      { name: "Ismail Jakobs", number: 14, position: "LAT" },

      { name: "Idrissa Gueye", number: 5, position: "VOL" },
      { name: "Pape Matar Sarr", number: 17, position: "MEI" },
      { name: "Nampalys Mendy", number: 6, position: "VOL" },

      { name: "Ismaïla Sarr", number: 18, position: "ATA" },
      { name: "Nicolas Jackson", number: 7, position: "ATA" },
      { name: "Sadio Mané", number: 10, position: "ATA" },
    ],
    reserves: [
      { name: "Alfred Gomis", number: 1, position: "GOL" },
      { name: "Seny Dieng", number: 23, position: "GOL" },

      { name: "Pape Abou Cissé", number: 4, position: "ZAG" },
      { name: "Formose Mendy", number: 2, position: "ZAG" },

      { name: "Fodé Ballo-Touré", number: 12, position: "LAT" },
      { name: "Youssouf Sabaly", number: 21, position: "LAT" },

      { name: "Cheikhou Kouyaté", number: 8, position: "VOL" },
      { name: "Lamine Camara", number: 26, position: "MEI" },

      { name: "Habib Diallo", number: 9, position: "ATA" },
      { name: "Boulaye Dia", number: 19, position: "ATA" },
      { name: "Iliman Ndiaye", number: 11, position: "ATA" },
      { name: "Bamba Dieng", number: 20, position: "ATA" },
    ],
  },
  {
    code: "TUN",
    formation: "4-3-3",
    starters: [
      { name: "Aymen Dahmen", number: 1, position: "GOL" },

      { name: "Wajdi Kechrida", number: 21, position: "LAT" },
      { name: "Yassine Meriah", number: 4, position: "ZAG" },
      { name: "Montassar Talbi", number: 3, position: "ZAG" },
      { name: "Ali Abdi", number: 24, position: "LAT" },

      { name: "Ellyes Skhiri", number: 17, position: "VOL" },
      { name: "Aïssa Laïdouni", number: 14, position: "MEI" },
      { name: "Hannibal Mejbri", number: 10, position: "MEI" },

      { name: "Anis Ben Slimane", number: 7, position: "ATA" },
      { name: "Seifeddine Jaziri", number: 9, position: "ATA" },
      { name: "Youssef Msakni", number: 11, position: "ATA" },
    ],
    reserves: [
      { name: "Bechir Ben Said", number: 23, position: "GOL" },
      { name: "Mouez Hassen", number: 16, position: "GOL" },

      { name: "Dylan Bronn", number: 5, position: "ZAG" },
      { name: "Nader Ghandri", number: 6, position: "ZAG" },

      { name: "Hamza Mathlouthi", number: 2, position: "LAT" },
      { name: "Oussama Haddadi", number: 12, position: "LAT" },

      { name: "Ferjani Sassi", number: 13, position: "MEI" },
      { name: "Ghaylen Chaalali", number: 18, position: "VOL" },

      { name: "Issam Jebali", number: 19, position: "ATA" },
      { name: "Taha Yassine Khenissi", number: 20, position: "ATA" },
      { name: "Naim Sliti", number: 15, position: "ATA" },
      { name: "Haythem Jouini", number: 22, position: "ATA" },
    ],
  },
  {
    code: "KSA",
    formation: "4-3-3",
    starters: [
      { name: "Mohammed Al-Owais", number: 1, position: "GOL" },

      { name: "Saud Abdulhamid", number: 12, position: "LAT" },
      { name: "Ali Al-Bulaihi", number: 5, position: "ZAG" },
      { name: "Hassan Al-Tambakti", number: 4, position: "ZAG" },
      { name: "Yasser Al-Shahrani", number: 13, position: "LAT" },

      { name: "Abdullah Al-Khaibari", number: 6, position: "VOL" },
      { name: "Mohammed Kanno", number: 23, position: "MEI" },
      { name: "Salem Al-Dawsari", number: 10, position: "MEI" },

      { name: "Firas Al-Buraikan", number: 9, position: "ATA" },
      { name: "Saleh Al-Shehri", number: 11, position: "ATA" },
      { name: "Abdulrahman Ghareeb", number: 7, position: "ATA" },
    ],
    reserves: [
      { name: "Nawaf Al-Aqidi", number: 21, position: "GOL" },
      { name: "Mohammed Al-Yami", number: 22, position: "GOL" },

      { name: "Abdulelah Al-Amri", number: 2, position: "ZAG" },
      { name: "Osama Hawsawi", number: 3, position: "ZAG" },

      { name: "Sultan Al-Ghannam", number: 8, position: "LAT" },
      { name: "Hamad Al-Yami", number: 20, position: "LAT" },

      { name: "Ali Al-Hassan", number: 14, position: "MEI" },
      { name: "Nasser Al-Dawsari", number: 18, position: "VOL" },

      { name: "Hattan Bahebri", number: 19, position: "ATA" },
      { name: "Fahad Al-Muwallad", number: 15, position: "ATA" },
      { name: "Abdullah Al-Hamdan", number: 16, position: "ATA" },
      { name: "Ayman Yahya", number: 17, position: "ATA" },
    ],
  },
  {
    code: "AUS",
    formation: "4-2-3-1",
    starters: [
      { name: "Mathew Ryan", number: 1, position: "GOL" },

      { name: "Nathaniel Atkinson", number: 3, position: "LAT" },
      { name: "Harry Souttar", number: 19, position: "ZAG" },
      { name: "Kye Rowles", number: 4, position: "ZAG" },
      { name: "Aziz Behich", number: 16, position: "LAT" },

      { name: "Jackson Irvine", number: 22, position: "VOL" },
      { name: "Keanu Baccus", number: 17, position: "VOL" },

      { name: "Martin Boyle", number: 6, position: "ATA" },
      { name: "Ajdin Hrustić", number: 10, position: "MEI" },
      { name: "Craig Goodwin", number: 23, position: "ATA" },

      { name: "Mitchell Duke", number: 15, position: "ATA" },
    ],
    reserves: [
      { name: "Joe Gauci", number: 18, position: "GOL" },
      { name: "Andrew Redmayne", number: 12, position: "GOL" },

      { name: "Milos Degenek", number: 2, position: "ZAG" },
      { name: "Cameron Burgess", number: 20, position: "ZAG" },

      { name: "Fran Karačić", number: 21, position: "LAT" },
      { name: "Joel King", number: 14, position: "LAT" },

      { name: "Aiden O'Neill", number: 13, position: "VOL" },
      { name: "Riley McGree", number: 7, position: "MEI" },

      { name: "Connor Metcalfe", number: 8, position: "MEI" },
      { name: "Brandon Borrello", number: 11, position: "ATA" },
      { name: "Kusini Yengi", number: 9, position: "ATA" },
      { name: "Garang Kuol", number: 25, position: "ATA" },
    ],
  },
  {
    code: "QAT",
    formation: "3-5-2",
    starters: [
      { name: "Meshaal Barsham", number: 1, position: "GOL" },

      { name: "Pedro Miguel", number: 2, position: "ZAG" },
      { name: "Boualem Khoukhi", number: 16, position: "ZAG" },
      { name: "Tarek Salman", number: 5, position: "ZAG" },

      { name: "Homam Ahmed", number: 14, position: "LAT" },
      { name: "Ismaeel Mohammad", number: 7, position: "LAT" },

      { name: "Karim Boudiaf", number: 12, position: "VOL" },
      { name: "Abdulaziz Hatem", number: 6, position: "MEI" },
      { name: "Ahmed Fathy", number: 20, position: "MEI" },

      { name: "Akram Afif", number: 10, position: "ATA" },
      { name: "Almoez Ali", number: 19, position: "ATA" },
    ],
    reserves: [
      { name: "Saad Al Sheeb", number: 21, position: "GOL" },
      { name: "Salah Zakaria", number: 22, position: "GOL" },

      { name: "Bassam Al-Rawi", number: 15, position: "ZAG" },
      { name: "Jassem Gaber", number: 3, position: "ZAG" },

      { name: "Hassan Al-Haydos", number: 11, position: "MEI" },
      { name: "Assim Madibo", number: 23, position: "VOL" },

      { name: "Mohammed Muntari", number: 9, position: "ATA" },
      { name: "Ahmed Alaaeldin", number: 17, position: "ATA" },

      { name: "Yusuf Abdurisag", number: 18, position: "ATA" },
      { name: "Naif Al-Hadhrami", number: 8, position: "MEI" },
      { name: "Khaled Mohammed", number: 13, position: "MEI" },
      { name: "Musab Kheder", number: 4, position: "ZAG" },
    ],
  },
  {
    code: "KOR",
    formation: "4-2-3-1",
    starters: [
      { name: "Kim Seung-gyu", number: 1, position: "GOL" },

      { name: "Kim Tae-hwan", number: 23, position: "LAT" },
      { name: "Kim Min-jae", number: 4, position: "ZAG" },
      { name: "Jung Seung-hyun", number: 15, position: "ZAG" },
      { name: "Kim Jin-su", number: 3, position: "LAT" },

      { name: "Hwang In-beom", number: 6, position: "VOL" },
      { name: "Park Yong-woo", number: 5, position: "VOL" },

      { name: "Lee Kang-in", number: 18, position: "MEI" },
      { name: "Son Heung-min", number: 7, position: "ATA" },
      { name: "Hwang Hee-chan", number: 11, position: "ATA" },

      { name: "Cho Gue-sung", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Jo Hyeon-woo", number: 21, position: "GOL" },
      { name: "Song Bum-keun", number: 12, position: "GOL" },

      { name: "Kim Young-gwon", number: 19, position: "ZAG" },
      { name: "Kwon Kyung-won", number: 20, position: "ZAG" },

      { name: "Seol Young-woo", number: 2, position: "LAT" },
      { name: "Lee Ki-je", number: 22, position: "LAT" },

      { name: "Lee Jae-sung", number: 10, position: "MEI" },
      { name: "Hong Hyun-seok", number: 8, position: "MEI" },

      { name: "Oh Hyeon-gyu", number: 16, position: "ATA" },
      { name: "Hwang Ui-jo", number: 17, position: "ATA" },
      { name: "Jeong Woo-yeong", number: 13, position: "ATA" },
      { name: "Yang Hyun-jun", number: 14, position: "ATA" },
    ],
  },
  {
    code: "IRN",
    formation: "4-3-3",
    starters: [
      { name: "Alireza Beiranvand", number: 1, position: "GOL" },

      { name: "Sadegh Moharrami", number: 2, position: "LAT" },
      { name: "Hossein Kanaani", number: 5, position: "ZAG" },
      { name: "Morteza Pouraliganji", number: 4, position: "ZAG" },
      { name: "Milad Mohammadi", number: 3, position: "LAT" },

      { name: "Saeid Ezatolahi", number: 6, position: "VOL" },
      { name: "Ahmad Nourollahi", number: 8, position: "MEI" },
      { name: "Alireza Jahanbakhsh", number: 7, position: "MEI" },

      { name: "Mehdi Taremi", number: 9, position: "ATA" },
      { name: "Sardar Azmoun", number: 20, position: "ATA" },
      { name: "Mehdi Ghayedi", number: 10, position: "ATA" },
    ],
    reserves: [
      { name: "Payam Niazmand", number: 12, position: "GOL" },
      { name: "Hossein Hosseini", number: 22, position: "GOL" },

      { name: "Shoja Khalilzadeh", number: 3, position: "ZAG" },
      { name: "Majid Hosseini", number: 19, position: "ZAG" },

      { name: "Ramin Rezaeian", number: 23, position: "LAT" },
      { name: "Ali Karimi", number: 18, position: "MEI" },

      { name: "Omid Ebrahimi", number: 15, position: "VOL" },
      { name: "Saman Ghoddos", number: 14, position: "MEI" },

      { name: "Karim Ansarifard", number: 11, position: "ATA" },
      { name: "Allahyar Sayyadmanesh", number: 16, position: "ATA" },
      { name: "Amirhossein Hosseinzadeh", number: 17, position: "ATA" },
      { name: "Reza Asadi", number: 21, position: "ATA" },
    ],
  },
  {
    code: "IRQ",
    formation: "4-2-3-1",
    starters: [
      { name: "Jalal Hassan", number: 1, position: "GOL" },

      { name: "Zaid Tahseen", number: 2, position: "LAT" },
      { name: "Rebin Sulaka", number: 4, position: "ZAG" },
      { name: "Mustafa Nadhim", number: 5, position: "ZAG" },
      { name: "Frans Dhia Putros", number: 3, position: "LAT" },

      { name: "Amjad Attwan", number: 6, position: "VOL" },
      { name: "Osama Rashid", number: 8, position: "MEI" },

      { name: "Ali Jasim", number: 17, position: "ATA" },
      { name: "Ibrahim Bayesh", number: 10, position: "MEI" },
      { name: "Youssef Amyn", number: 11, position: "ATA" },

      { name: "Aymen Hussein", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Ahmed Basil", number: 12, position: "GOL" },
      { name: "Fahad Talib", number: 23, position: "GOL" },

      { name: "Saad Natiq", number: 15, position: "ZAG" },
      { name: "Ali Faez", number: 14, position: "ZAG" },

      { name: "Hussein Ali", number: 21, position: "LAT" },
      { name: "Mustafa Mohammed", number: 16, position: "LAT" },

      { name: "Ahmed Al-Hajjaj", number: 18, position: "VOL" },
      { name: "Danilo Al-Saeed", number: 20, position: "MEI" },

      { name: "Mohanad Ali", number: 19, position: "ATA" },
      { name: "Alaa Abbas", number: 22, position: "ATA" },
      { name: "Ali Al-Hamadi", number: 13, position: "ATA" },
      { name: "Zidane Iqbal", number: 7, position: "MEI" },
    ],
  },
  {
    code: "JPN",
    formation: "4-3-3",
    starters: [
      { name: "Zion Suzuki", number: 23, position: "GOL" },

      { name: "Takehiro Tomiyasu", number: 16, position: "LAT" },
      { name: "Ko Itakura", number: 4, position: "ZAG" },
      { name: "Takehiro Tomiyasu", number: 22, position: "ZAG" },
      { name: "Hiroki Ito", number: 21, position: "LAT" },

      { name: "Wataru Endo", number: 6, position: "VOL" },
      { name: "Hidemasa Morita", number: 5, position: "MEI" },
      { name: "Daichi Kamada", number: 15, position: "MEI" },

      { name: "Takefusa Kubo", number: 20, position: "ATA" },
      { name: "Ayase Ueda", number: 9, position: "ATA" },
      { name: "Kaoru Mitoma", number: 7, position: "ATA" },
    ],
    reserves: [
      { name: "Daniel Schmidt", number: 12, position: "GOL" },
      { name: "Keisuke Osako", number: 1, position: "GOL" },

      { name: "Yuta Nakayama", number: 3, position: "ZAG" },
      { name: "Maya Yoshida", number: 19, position: "ZAG" },

      { name: "Yukihiro Sugawara", number: 2, position: "LAT" },
      { name: "Daiki Hashioka", number: 14, position: "LAT" },

      { name: "Ao Tanaka", number: 17, position: "MEI" },
      { name: "Reo Hatate", number: 8, position: "MEI" },

      { name: "Ritsu Doan", number: 10, position: "ATA" },
      { name: "Takuma Asano", number: 18, position: "ATA" },
      { name: "Kyogo Furuhashi", number: 11, position: "ATA" },
      { name: "Junya Ito", number: 13, position: "ATA" },
    ],
  },
  {
    code: "JOR",
    formation: "3-4-2-1",
    starters: [
      { name: "Yazeed Abulaila", number: 1, position: "GOL" },

      { name: "Abdallah Nasib", number: 3, position: "ZAG" },
      { name: "Yazan Al-Arab", number: 5, position: "ZAG" },
      { name: "Salem Al-Ajalin", number: 23, position: "ZAG" },

      { name: "Ehsan Haddad", number: 4, position: "LAT" },
      { name: "Mohammad Abu Hasheesh", number: 12, position: "LAT" },

      { name: "Nizar Al-Rashdan", number: 21, position: "VOL" },
      { name: "Noor Al-Rawabdeh", number: 8, position: "MEI" },

      { name: "Mousa Al-Taamari", number: 10, position: "ATA" },
      { name: "Ali Olwan", number: 9, position: "ATA" },

      { name: "Yazan Al-Naimat", number: 11, position: "ATA" },
    ],
    reserves: [
      { name: "Ahmad Abed", number: 22, position: "GOL" },
      { name: "Abdullah Al-Fakhouri", number: 16, position: "GOL" },

      { name: "Bara Marei", number: 15, position: "ZAG" },
      { name: "Hamza Al-Dardour", number: 6, position: "ZAG" },

      { name: "Feras Shelbayeh", number: 13, position: "LAT" },
      { name: "Yousef Abu Jalboush", number: 20, position: "LAT" },

      { name: "Mahmoud Al-Mardi", number: 17, position: "MEI" },
      { name: "Anas Bani Yaseen", number: 2, position: "ZAG" },

      { name: "Ibrahim Sadeh", number: 7, position: "ATA" },
      { name: "Oday Dabbagh", number: 14, position: "ATA" },
      { name: "Baha Faisal", number: 18, position: "ATA" },
      { name: "Yazan Abu Al-Arab", number: 19, position: "MEI" },
    ],
  },
  {
    code: "UZB",
    formation: "4-2-3-1",
    starters: [
      { name: "Utkir Yusupov", number: 1, position: "GOL" },

      { name: "Khozhimat Erkinov", number: 7, position: "LAT" },
      { name: "Rustam Ashurmatov", number: 5, position: "ZAG" },
      { name: "Abdukodir Khusanov", number: 2, position: "ZAG" },
      { name: "Farrukh Sayfiev", number: 3, position: "LAT" },

      { name: "Otabek Shukurov", number: 6, position: "VOL" },
      { name: "Jaloliddin Masharipov", number: 10, position: "MEI" },

      { name: "Abbosbek Fayzullaev", number: 22, position: "ATA" },
      { name: "Odiljon Hamrobekov", number: 8, position: "MEI" },
      { name: "Jasurbek Jaloliddinov", number: 17, position: "ATA" },

      { name: "Eldor Shomurodov", number: 14, position: "ATA" },
    ],
    reserves: [
      { name: "Ignatiy Nesterov", number: 12, position: "GOL" },
      { name: "Abduvohid Nematov", number: 16, position: "GOL" },

      { name: "Islom Tukhtahujaev", number: 4, position: "ZAG" },
      { name: "Davron Ergashev", number: 15, position: "ZAG" },

      { name: "Zafarmurod Abdirakhmatov", number: 21, position: "LAT" },
      { name: "Dostonbek Tursunov", number: 20, position: "LAT" },

      { name: "Azizbek Turgunboev", number: 11, position: "MEI" },
      { name: "Ikromjon Alibaev", number: 18, position: "MEI" },

      { name: "Igor Sergeev", number: 9, position: "ATA" },
      { name: "Sherzod Nasrullaev", number: 13, position: "ATA" },
      { name: "Bobur Abdukholikov", number: 19, position: "ATA" },
      { name: "Umidjon Hamrobekov", number: 23, position: "MEI" },
    ],
  },
  {
    code: "COL",
    formation: "4-2-3-1",
    starters: [
      { name: "Camilo Vargas", number: 1, position: "GOL" },

      { name: "Daniel Muñoz", number: 21, position: "LAT" },
      { name: "Davinson Sánchez", number: 23, position: "ZAG" },
      { name: "Carlos Cuesta", number: 2, position: "ZAG" },
      { name: "Johan Mojica", number: 17, position: "LAT" },

      { name: "Jefferson Lerma", number: 16, position: "VOL" },
      { name: "Richard Ríos", number: 6, position: "MEI" },

      { name: "Jhon Arias", number: 11, position: "ATA" },
      { name: "James Rodríguez", number: 10, position: "MEI" },
      { name: "Luis Díaz", number: 7, position: "ATA" },

      { name: "Rafael Santos Borré", number: 19, position: "ATA" },
    ],
    reserves: [
      { name: "Álvaro Montero", number: 12, position: "GOL" },
      { name: "Kevin Mier", number: 22, position: "GOL" },

      { name: "Yerry Mina", number: 13, position: "ZAG" },
      { name: "Jhon Lucumí", number: 3, position: "ZAG" },

      { name: "Santiago Arias", number: 4, position: "LAT" },
      { name: "Deiver Machado", number: 15, position: "LAT" },

      { name: "Mateus Uribe", number: 8, position: "MEI" },
      { name: "Jorge Carrascal", number: 18, position: "MEI" },

      { name: "Luis Sinisterra", number: 20, position: "ATA" },
      { name: "Jhon Durán", number: 9, position: "ATA" },
      { name: "Miguel Borja", number: 14, position: "ATA" },
      { name: "Yaser Asprilla", number: 5, position: "MEI" },
    ],
  },
  {
    code: "ECU",
    formation: "4-3-3",
    starters: [
      { name: "Alexander Domínguez", number: 22, position: "GOL" },

      { name: "Ángelo Preciado", number: 17, position: "LAT" },
      { name: "Piero Hincapié", number: 3, position: "ZAG" },
      { name: "Félix Torres", number: 2, position: "ZAG" },
      { name: "Pervis Estupiñán", number: 7, position: "LAT" },

      { name: "Moisés Caicedo", number: 23, position: "VOL" },
      { name: "Carlos Gruezo", number: 8, position: "VOL" },
      { name: "Kendry Páez", number: 10, position: "MEI" },

      { name: "Gonzalo Plata", number: 19, position: "ATA" },
      { name: "Enner Valencia", number: 13, position: "ATA" },
      { name: "Jeremy Sarmiento", number: 16, position: "ATA" },
    ],
    reserves: [
      { name: "Hernán Galíndez", number: 1, position: "GOL" },
      { name: "Moisés Ramírez", number: 12, position: "GOL" },

      { name: "Willian Pacho", number: 6, position: "ZAG" },
      { name: "Robert Arboleda", number: 4, position: "ZAG" },

      { name: "José Hurtado", number: 15, position: "LAT" },
      { name: "Diego Palacios", number: 18, position: "LAT" },

      { name: "Jhegson Méndez", number: 20, position: "VOL" },
      { name: "Alan Franco", number: 21, position: "MEI" },

      { name: "Kevin Rodríguez", number: 11, position: "ATA" },
      { name: "John Yeboah", number: 9, position: "ATA" },
      { name: "Ángel Mena", number: 14, position: "ATA" },
      { name: "Leonardo Campana", number: 24, position: "ATA" },
    ],
  },
  {
    code: "PAR",
    formation: "4-2-3-1",
    starters: [
      { name: "Carlos Coronel", number: 1, position: "GOL" },

      { name: "Robert Rojas", number: 2, position: "LAT" },
      { name: "Gustavo Gómez", number: 15, position: "ZAG" },
      { name: "Omar Alderete", number: 3, position: "ZAG" },
      { name: "Blas Riveros", number: 4, position: "LAT" },

      { name: "Andrés Cubas", number: 14, position: "VOL" },
      { name: "Mathías Villasanti", number: 8, position: "VOL" },

      { name: "Miguel Almirón", number: 10, position: "MEI" },
      { name: "Julio Enciso", number: 19, position: "MEI" },
      { name: "Ramón Sosa", number: 11, position: "ATA" },

      { name: "Adam Bareiro", number: 9, position: "ATA" },
    ],
    reserves: [
      { name: "Gatito Fernández", number: 12, position: "GOL" },
      { name: "Santiago Rojas", number: 22, position: "GOL" },

      { name: "Fabián Balbuena", number: 5, position: "ZAG" },
      { name: "Junior Alonso", number: 6, position: "ZAG" },

      { name: "Iván Piris", number: 13, position: "LAT" },
      { name: "Santiago Arzamendia", number: 17, position: "LAT" },

      { name: "Richard Sánchez", number: 16, position: "MEI" },
      { name: "Diego Gómez", number: 18, position: "MEI" },

      { name: "Antonio Sanabria", number: 7, position: "ATA" },
      { name: "Gabriel Ávalos", number: 20, position: "ATA" },
      { name: "Carlos González", number: 21, position: "ATA" },
      { name: "Braian Ojeda", number: 23, position: "VOL" },
    ],
  },
  {
    code: "URU",
    formation: "4-3-3",
    starters: [
      { name: "Sergio Rochet", number: 1, position: "GOL" },

      { name: "Nahitan Nández", number: 8, position: "LAT" },
      { name: "Ronald Araújo", number: 4, position: "ZAG" },
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
      { name: "Franco Israel", number: 23, position: "GOL" },
      { name: "Santiago Mele", number: 12, position: "GOL" },

      { name: "Sebastián Cáceres", number: 3, position: "ZAG" },
      { name: "Matías Olivera", number: 16, position: "LAT" },

      { name: "Guillermo Varela", number: 13, position: "LAT" },
      { name: "Agustín Canobbio", number: 14, position: "ATA" },

      { name: "Rodrigo Bentancur", number: 6, position: "MEI" },
      { name: "Giorgian De Arrascaeta", number: 10, position: "MEI" },

      { name: "Brian Rodríguez", number: 18, position: "ATA" },
      { name: "Cristian Olivera", number: 19, position: "ATA" },
      { name: "Luis Suárez", number: 21, position: "ATA" },
      { name: "Edinson Cavani", number: 22, position: "ATA" },
    ],
  },
  {
    code: "NZL",
    formation: "4-4-2",
    starters: [
      { name: "Max Crocombe", number: 1, position: "GOL" },

      { name: "Tim Payne", number: 2, position: "LAT" },
      { name: "Michael Boxall", number: 5, position: "ZAG" },
      { name: "Liberato Cacace", number: 13, position: "ZAG" },
      { name: "Sam Sutton", number: 3, position: "LAT" },

      { name: "Joe Bell", number: 6, position: "MEI" },
      { name: "Clayton Lewis", number: 8, position: "MEI" },
      { name: "Matthew Garbett", number: 7, position: "MEI" },
      { name: "Elijah Just", number: 11, position: "MEI" },

      { name: "Chris Wood", number: 9, position: "ATA" },
      { name: "Ben Waine", number: 10, position: "ATA" },
    ],

    reserves: [
      { name: "Stefan Marinovic", number: 12, position: "GOL" },
      { name: "Oliver Sail", number: 23, position: "GOL" },

      { name: "Tommy Smith", number: 4, position: "ZAG" },
      { name: "Bill Tuiloma", number: 14, position: "ZAG" },

      { name: "Niko Kirwan", number: 15, position: "LAT" },
      { name: "Deklan Wynne", number: 16, position: "LAT" },

      { name: "Marko Stamenic", number: 17, position: "MEI" },
      { name: "Alex Greive", number: 18, position: "ATA" },

      { name: "Callum McCowatt", number: 19, position: "ATA" },
      { name: "Sarpreet Singh", number: 20, position: "MEI" },
      { name: "Logan Rogerson", number: 21, position: "ATA" },
      { name: "Kosta Barbarouses", number: 22, position: "ATA" },
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