import { IMatch } from '@/app/components/card-match'

export const matches: IMatch[] = [
  // ── Grupo A ──
  { id: 1, group: "A", date: "11/06", time: "16:00", home: { name: "México", code: "MEX", flag: "/flags/mx.png" }, away: { name: "África do Sul", code: "RSA", flag: "/flags/za.png" }, stadium: "Estadio Azteca", stadiumView: "/stadiums/Azteca.png", city: "Cidade do México", result: { home: 2, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=YCNysrewn7k" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 2, group: "A", date: "11/06", time: "23:00", home: { name: "Coreia do Sul", code: "KOR", flag: "/flags/kr.png" }, away: { name: "Tchéquia", code: "CZE", flag: "/flags/cz.png" }, stadium: "Estadio Akron", stadiumView: "/stadiums/Akron.png", city: "Guadalajara", result: { home: 2, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=LjEP9frJ2CE" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 3, group: "A", date: "18/06", time: "13:00", home: { name: "Tchéquia", code: "CZE", flag: "/flags/cz.png" }, away: { name: "África do Sul", code: "RSA", flag: "/flags/za.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta", result: { home: 1, away: 1},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=61qIjGER86Q" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 4, group: "A", date: "18/06", time: "22:00", home: { name: "México", code: "MEX", flag: "/flags/mx.png" }, away: { name: "Coreia do Sul", code: "KOR", flag: "/flags/kr.png" }, stadium: "Estadio Akron", stadiumView: "/stadiums/Akron.png", city: "Cidade do México", result: {home: 1, away: 0},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=SVwg-Aiy2po" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 5, group: "A", date: "24/06", time: "22:00", home: { name: "África do Sul", code: "RSA", flag: "/flags/za.png" }, away: { name: "Coreia do Sul", code: "KOR", flag: "/flags/kr.png" }, stadium: "Estadio BBVA", stadiumView: "/stadiums/BBVA.png", city: "Monterrey", result: { home: 1, away: 0},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=cFu_iI4h1to" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 6, group: "A", date: "24/06", time: "22:00", home: { name: "Tchéquia", code: "CZE", flag: "/flags/cz.png" }, away: { name: "México", code: "MEX", flag: "/flags/mx.png" }, stadium: "Estadio Azteca", stadiumView: "/stadiums/Azteca.png", city: "Cidade do México", result: { home: 0, away: 3},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=D0947hff-G0" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },

  // ── Grupo B ──
  { id: 7, group: "B", date: "12/06", time: "16:00", home: { name: "Canadá", code: "CAN", flag: "/flags/ca.png" }, away: { name: "Bósnia e Herzegovina", code: "BIH", flag: "/flags/ba.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto", result: { home: 1, away: 1},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=CRtjePKnGvA" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 8, group: "B", date: "13/06", time: "16:00", home: { name: "Catar", code: "QAT", flag: "/flags/qa.png" }, away: { name: "Suíça", code: "SUI", flag: "/flags/ch.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco", result: {home: 1, away: 1},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=ljah6d9m7Z0" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 9, group: "B", date: "18/06", time: "16:00", home: { name: "Suiça", code: "SUI", flag: "/flags/ch.png" }, away: { name: "Bósnia e Herzegovina", code: "BIH", flag: "/flags/ba.png" }, stadium: "Sofi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles", result: { home: 4, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=DL372r8XEDg" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]
},
  { id: 10, group: "B", date: "18/06", time: "19:00", home: { name: "Canada", code: "CAN", flag: "/flags/ca.png" }, away: { name: "Catar", code: "QAT", flag: "/flags/qa.png" }, stadium: "BC PLace Stadium", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver", result: { home: 6, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=fOLiF5uK2og" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 11, group: "B", date: "24/06", time: "16:00", home: { name: "Suíça", code: "SUI", flag: "/flags/ch.png" }, away: { name: "Canada", code: "CAN", flag: "/flags/ca.png" }, stadium: "BC Place Stadium", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver", result: { home: 2, away: 1},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=ioH5k4ss_tY" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 12, group: "B", date: "24/06", time: "16:00", home: { name: "Bósnia e Herzegovina", code: "BIH", flag: "/flags/ba.png" }, away: { name: "Catar", code: "QAT", flag: "/flags/qa.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle", result: { home: 3, away: 1},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=YAa0XEHZCys" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },

  // ── Grupo C ──
  { id: 13, group: "C", date: "13/06", time: "19:00", home: { name: "Brasil", code: "BRA", flag: "/flags/br.png" }, away: { name: "Marrocos", code: "MAR", flag: "/flags/ma.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York / Nova Jersey", result: { home: 1, away: 1 },
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=vC3fV_awcWE&pp=0gcJCTkLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 14, group: "C", date: "13/06", time: "22:00", home: { name: "Haiti", code: "HAI", flag: "/flags/ht.png" }, away: { name: "Escócia", code: "SCO", flag: "/flags/sc.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston",result: { home: 0, away: 1 },
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=yBUg81qhrNo" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 15, group: "C", date: "19/06", time: "19:00", home: { name: "Escócia", code: "SCO", flag: "/flags/sc.png" }, away: { name: "Marrocos", code: "MAR", flag: "/flags/ma.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston", result: { home: 0, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=d1q2o990TZE" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 16, group: "C", date: "19/06", time: "21:30", home: { name: "Brasil", code: "BRA", flag: "/flags/br.png" }, away: { name: "Haiti", code: "HAI", flag: "/flags/ht.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia", result: { home: 3, away: 0},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=DUuWdi0r1RI" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 17, group: "C", date: "24/06", time: "19:00", home: { name: "Marrocos", code: "MAR", flag: "/flags/ma.png" }, away: { name: "Haiti", code: "HAI", flag: "/flags/ht.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta", result: { home: 4, away: 2},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=Cy-JKocMCf8&pp=0gcJCT8LAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 18, group: "C", date: "24/06", time: "19:00", home: { name: "Escócia", code: "SCO", flag: "/flags/sc.png" }, away: { name: "Brasil", code: "BRA", flag: "/flags/br.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami", result: { home: 0, away: 3},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=dxYTTxhgVNU" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },

  // ── Grupo D ──
  { id: 19, group: "D", date: "12/06", time: "22:00", home: { name: "Estados Unidos", code: "USA", flag: "/flags/us.png" }, away: { name: "Paraguai", code: "PAR", flag: "/flags/py.png" }, stadium: "SoFi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles", result: { home: 4, away: 2},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=7EFTDmwcleI" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 20, group: "D", date: "14/06", time: "01:00", home: { name: "Austrália", code: "AUS", flag: "/flags/au.png" }, away: { name: "Turquia", code: "TUR", flag: "/flags/tr.png" }, stadium: "BC Place", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver", result: { home: 2, away: 0},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=8rr-857IbHA" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 21, group: "D", date: "19/06", time: "16:00", home: { name: "Estados Unidos", code: "USA", flag: "/flags/us.png" }, away: { name: "Austrália", code: "AUS", flag: "/flags/au.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle", result: { home: 2, away: 0},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=_6cfUXA1UUw" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 22, group: "D", date: "20/06", time: "01:00", home: { name: "Turquia", code: "TUR", flag: "/flags/tr.png" }, away: { name: "Paraguai", code: "PAR", flag: "/flags/py.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco (Santa Clara)", result: { home: 0, away: 1 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=vHIqfIpEr7U" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 23, group: "D", date: "25/06", time: "23:00", home: { name: "Turquia", code: "TUR", flag: "/flags/tr.png" }, away: { name: "Estados Unidos", code: "USA", flag: "/flags/us.png" }, stadium: "Rose Bowl", stadiumView: "/stadiums/RoseBowl.png", city: "Los Angeles (Pasadena)", result: { home: 3, away: 2 },
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=cAl4PErpiuE" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 24, group: "D", date: "25/06", time: "23:00", home: { name: "Paraguai", code: "PAR", flag: "/flags/py.png" }, away: { name: "Austrália", code: "AUS", flag: "/flags/au.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco (Santa Clara)", result: { home: 0, away: 0 },
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=YUNznGUccxc&pp=0gcJCT8LAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },

  // ── Grupo E ──
  { id: 25, group: "E", date: "14/06", time: "14:00", home: { name: "Alemanha", code: "GER", flag: "/flags/de.png" }, away: { name: "Curaçau", code: "CUW", flag: "/flags/cw.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston", result: { home: 7, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=byP1peOCkzI" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 26, group: "E", date: "14/06", time: "20:00", home: { name: "Costa do Marfim", code: "CIV", flag: "/flags/ci.png" }, away: { name: "Equador", code: "ECU", flag: "/flags/ec.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia", result: { home: 1, away:0},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=IFh8Nuuhgcc&pp=0gcJCTkLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 27, group: "E", date: "20/06", time: "17:00", home: { name: "Alemanha", code: "GER", flag: "/flags/de.png" }, away: { name: "Costa do Marfim", code: "CIV", flag: "/flags/ci.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto", result: { home: 2, away: 1 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=V3wVoI3itnE" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
{ id: 28, group: "E", date: "20/06", time: "21:00", home: { name: "Equador", code: "ECU", flag: "/flags/ec.png" }, away: { name: "Curaçau", code: "CUW", flag: "/flags/cw.png" }, stadium: "Arrowhead Stadium", stadiumView: "/stadiums/ArrowHead.png", city: "Kansas city", result: { home: 0, away: 0 },
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=Yemi7Q2f5MA" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
{ id: 29, group: "E", date: "25/06", time: "17:00", home: { name: "Equador", code: "ECU", flag: "/flags/ec.png" }, away: { name: "Alemanha", code: "GER", flag: "/flags/de.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York / Nova Jersey", result: { home: 2, away: 1},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=DeIPppohrnQ" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
{ id: 30, group: "E", date: "25/06", time: "17:00", home: { name: "Curaçau", code: "CUW", flag: "/flags/cw.png" }, away: { name: "Costa do Marfim", code: "CIV", flag: "/flags/ci.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia", result: { home: 0, away: 2 },
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=yiq5VPpo34U" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},

  // ── Grupo F ──
  { id: 31, group: "F", date: "14/06", time: "17:00", home: { name: "Holanda", code: "NED", flag: "/flags/nl.png" }, away: { name: "Japão", code: "JPN", flag: "/flags/jp.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas", result: { home: 2, away: 2},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=byP1peOCkzI" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 32, group: "F", date: "14/06", time: "23:00", home: { name: "Suécia", code: "SWE", flag: "/flags/se.png" }, away: { name: "Tunísia", code: "TUN", flag: "/flags/tn.png" }, stadium: "Estadio BBVA", stadiumView: "/stadiums/BBVA.png", city: "Monterrey", result: { home: 5, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=o2wC007Jp-A" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 33, group: "F", date: "20/06", time: "14:00", home: { name: "Holanda", code: "NED", flag: "/flags/nl.png" }, away: { name: "Suécia", code: "SWE", flag: "/flags/se.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston", result: { home: 5, away: 1 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=xN4B1527vDc" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 34, group: "F", date: "21/06", time: "01:00", home: { name: "Tunisia", code: "TUN", flag: "/flags/tn.png" }, away: { name: "Japão", code: "JPN", flag: "/flags/jp.png" }, stadium: "Estadio BBVA", stadiumView: "/stadiums/BBVA.png", city: "Monterrey", result: { home: 0, away: 4 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=wEQfiiPmMSM" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 35, group: "F", date: "25/06", time: "20:00", home: { name: "Tunisia", code: "TUN", flag: "/flags/tn.png" }, away: { name: "Holanda", code: "NED", flag: "/flags/nl.png" }, stadium: "Arrowhead Stadium", stadiumView: "/stadiums/ArrowHead.png", city: "Kansas City", result: { home: 1, away: 3},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=meWCRh7LE-0" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 36, group: "F", date: "25/06", time: "20:00", home: { name: "Japão", code: "JPN", flag: "/flags/jp.png" }, away: { name: "Suécia", code: "SWE", flag: "/flags/se.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas", result: { home: 1, away: 1 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=qCcrzzz3bVk" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},

  // ── Grupo G ──
  { id: 37, group: "G", date: "15/06", time: "16:00", home: { name: "Bélgica", code: "BEL", flag: "/flags/be.png" }, away: { name: "Egito", code: "EGY", flag: "/flags/eg.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle", result: {home: 1, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=aclBHrhLQr4" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 38, group: "G", date: "15/06", time: "22:00", home: { name: "Irã", code: "IRN", flag: "/flags/ir.png" }, away: { name: "Nova Zelândia", code: "NZL", flag: "/flags/nz.png" }, stadium: "So-fi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles", result: { home: 2, away: 2 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=vrY_cXwm--g" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 39, group: "G", date: "21/06", time: "16:00", home: { name: "Bélgica", code: "BEL", flag: "/flags/be.png" }, away: { name: "Irã", code: "IRN", flag: "/flags/ir.png" }, stadium: "SoFi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles", result: { home: 0, away: 0 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=X3QQGOE2RA4" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]
},
  { id: 40, group: "G", date: "21/06", time: "22:00", home: { name: "Nova Zelândia", code: "NZE", flag: "/flags/nz.png" }, away: { name: "Egito", code: "EGY", flag: "/flags/eg.png" }, stadium: "BC Place", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver", result: { home: 1, away: 3},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=nLFPUeA-Naw&pp=0gcJCT8LAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 41, group: "G", date: "27/06", time: "00:00", home: { name: "Egito", code: "EGY", flag: "/flags/eg.png" }, away: { name: "Irã", code: "IRN", flag: "/flags/ir.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle", result: { home: 1, away: 1 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=eeSdrrpKVlY&pp=0gcJCT8LAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 42, group: "G", date: "27/06", time: "00:00", home: { name: "Nova Zelândia", code: "NZE", flag: "/flags/nz.png" }, away: { name: "Bélgica", code: "BEL", flag: "/flags/be.png" }, stadium: "BC Place Stadium", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver", result: { home: 1, away: 5},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=W9axGxeojYo" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},

  // ── Grupo H ──
  { id: 43, group: "H", date: "15/06", time: "13:00", home: { name: "Espanha", code: "ESP", flag: "/flags/es.png" }, away: { name: "Cabo Verde", code: "CPV", flag: "/flags/cv.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta", result: { home: 0, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=EYStZQ5FsVk" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 44, group: "H", date: "15/06", time: "19:00", home: { name: "Arábia Saudita", code: "KSA", flag: "/flags/sa.png" }, away: { name: "Uruguai", code: "URY", flag: "/flags/uy.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami", result: { home: 1, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=Mh-iBLsiYDw" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 45, group: "H", date: "21/06", time: "13:00", home: { name: "Espanha", code: "ESP", flag: "/flags/es.png" }, away: { name: "Arábia Saudita", code: "KSA", flag: "/flags/sa.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta", result: { home: 4, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=lMtrJbAfEaY" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 46, group: "H", date: "21/06", time: "19:00", home: { name: "Uruguai", code: "URY", flag: "/flags/uy.png" }, away: { name: "Cabo Verde", code: "CPV", flag: "/flags/cv.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami", result: { home: 2, away: 2},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=1Z-J49TdQNs" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 47, group: "H", date: "26/06", time: "21:00", home: { name: "Cabo Verde", code: "CPV", flag: "/flags/cv.png" }, away: { name: "Arábia Saudita", code: "KSA", flag: "/flags/sa.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston", result: { home: 0, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=7kdzXhc90xw" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 48, group: "H", date: "26/06", time: "21:00", home: { name: "Uruguai", code: "URY", flag: "/flags/uy.png" }, away: { name: "Espanha", code: "ESP", flag: "/flags/es.png" }, stadium: "Estadio Akron", stadiumView: "/stadiums/Akron.png", city: "Guadalajara", result: { home: 0, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=efouH_0cBVs" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},

  // ── Grupo I ──
  { id: 49, group: "I", date: "16/06", time: "16:00", home: { name: "França", code: "FRA", flag: "/flags/fr.png" }, away: { name: "Senegal", code: "SEN", flag: "/flags/sn.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York / Nova Jersey", result: { home: 3, away: 1},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=m1vplAfSs_A" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 50, group: "I", date: "16/06", time: "19:00", home: { name: "Iraque", code: "IRQ", flag: "/flags/iq.png" }, away: { name: "Noruega", code: "NOR", flag: "/flags/no.png" } , stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston (Foxborough)", result: { home: 1, away: 4},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=Dgvz5nHdttk&pp=0gcJCTkLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 51, group: "I", date: "22/06", time: "18:00", home: { name: "França", code: "FRA", flag: "/flags/fr.png" }, away: { name: "Iraque", code: "IRQ", flag: "/flags/iq.png" } , stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia", result: { home: 3, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=tvijPHlN9WE" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 52, group: "I", date: "22/06", time: "21:00", home: { name: "Noruega", code: "NOR", flag: "/flags/no.png" }, away: { name: "Senegal", code: "SEN", flag: "/flags/sn.png" } , stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York / Nova Jersey", result: { home: 3, away: 2 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=dFPUO7Vdh6Q" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
 { id: 53, group: "I", date: "26/06", time: "16:00", home: { name: "Senegal", code: "SEN", flag: "/flags/sn.png" }, away: { name: "Iraque", code: "IRQ", flag: "/flags/iq.png" } , stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto", result: { home: 5, away: 0},
 broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=VFF2tuap6mo" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 54, group: "I", date: "26/06", time: "16:00", home: { name: "Noruega", code: "NOR", flag: "/flags/no.png" }, away: { name: "França", code: "FRA", flag: "/flags/fr.png" } , stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston", result: { home: 1, away: 4 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=mAcTmVkI0Kw" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},

  // ── Grupo J ──
  { id: 55, group: "J", date: "16/06", time: "22:00", home: { name: "Argentina", code: "ARG", flag: "/flags/ar.png" }, away: { name: "Argélia", code: "ALG", flag: "/flags/dz.png" }, stadium: "Arrowhead Stadium", stadiumView: "/stadiums/ArrowHead.png", city: "Kansas City", result: { home: 3, away: 0},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=RhpNoBWVQGA" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 56, group: "J", date: "17/06", time: "01:00", home: { name: "Áustria", code: "AUT", flag: "/flags/at.png" }, away: { name: "Jordânia", code: "JOR", flag: "/flags/jo.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco (Santa Clara)", result: {home: 3, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=r97R-p-TlNM" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 57, group: "J", date: "22/06", time: "14:00", home: { name: "Argentina", code: "ARG", flag: "/flags/ar.png" }, away: { name: "Áustria", code: "AUT", flag: "/flags/at.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas", result: { home: 2, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=OweGZocHnjk" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 58, group: "J", date: "23/06", time: "00:00", home: { name: "Jordânia", code: "JOR", flag: "/flags/jo.png" }, away: { name: "Argélia", code: "ALG", flag: "/flags/dz.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco (Santa Clara)", result: { home: 1, away: 2},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=ptoJO9bn8T4" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 59, group: "J", date: "27/06", time: "23:00", home: { name: "Jordânia", code: "JOR", flag: "/flags/jo.png" }, away: { name: "Argentina", code: "ARG", flag: "/flags/ar.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas", result: { home: 1, away: 3},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=4z5dXHjJ6K8" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 60, group: "J", date: "27/06", time: "23:00", home: { name: "Argélia", code: "ALG", flag: "/flags/dz.png" }, away: { name: "Áustria", code: "AUT", flag: "/flags/at.png" }, stadium: "Arrowhead Stadium", stadiumView: "/stadiums/ArrowHead.png", city: "Kansas City", result: { home: 3, away: 3},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=Q8peX8rkeD0" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},

  // ── Grupo K ──
  { id: 61, group: "K", date: "17/06", time: "14:00", home: { name: "Portugal", code: "POR", flag: "/flags/pt.png" }, away:{ name: "RD Congo", code: "COD", flag: "/flags/cd.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston", result: { home: 1, away: 1 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=HpzKFDctbNw" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]
},
  { id: 62, group: "K", date: "17/06", time: "23:00", home: { name: "Uzbequistão", code: "UZB", flag: "/flags/uz.png" }, away: { name: "Colômbia", code: "COL", flag: "/flags/co.png" }, stadium: "Estadio Azteca", stadiumView: "/stadiums/Azteca.png", city: "Cidade do México", result: { home: 1, away: 3},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=BWsf2c4zKZs&pp=0gcJCTkLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 63, group: "K", date: "23/06", time: "14:00", home: { name: "Portugal", code: "POR", flag: "/flags/pt.png" }, away:{ name: "Uzbequistão", code: "UZB", flag: "/flags/uz.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston", result: { home: 5, away: 0 }, 
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=pmWqrAV3PXo" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]
},
  { id: 64, group: "K", date: "23/06", time: "23:00", home: { name: "Colômbia", code: "COL", flag: "/flags/co.png" }, away:{ name: "RD Congo", code: "COD", flag: "/flags/cd.png" }, stadium: "Estadio Akron", stadiumView: "/stadiums/Akron.png", city: "Guadalajara", result: { home: 1, away: 0 },
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=WUvxr2xCpjQ" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 65, group: "K", date: "27/06", time: "20:30", home: { name: "RD Congo", code: "COD", flag: "/flags/cd.png" }, away:{ name: "Uzbequistão", code: "UZB", flag: "/flags/uz.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta", result: { home: 3, away: 1 },
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=QHHK06-b7aI"},
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 66, group: "K", date: "27/06", time: "20:30", home: { name: "Colômbia", code: "COL", flag: "/flags/co.png" }, away:{ name: "Portugal", code: "POR", flag: "/flags/pt.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami",  result: { home: 0, away: 0 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=x-ftF0Pm1oo" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  // ── Grupo L ──
  { id: 67, group: "L", date: "17/06", time: "17:00", home: { name: "Inglaterra", code: "ENG", flag: "/flags/en.png" }, away:{ name: "Croácia", code: "CRO", flag: "/flags/hr.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas", result: { home: 4, away: 2},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=DaAFndjKuf8" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 68, group: "L", date: "17/06", time: "20:00", home: { name: "Gana", code: "GHA", flag: "/flags/gh.png" }, away: { name: "Panamá", code: "PAN", flag: "/flags/pa.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto", result: { home: 1, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=t7XBWsD5p6A" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 69, group: "L", date: "23/06", time: "17:00", home: { name: "Inglaterra", code: "ENG", flag: "/flags/en.png" }, away: { name: "Gana", code: "GHA", flag: "/flags/gh.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston (Foxborough)", result: { home: 0, away: 0},
broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=vTnBwT_hN5o" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] },
  { id: 70, group: "L", date: "23/06", time: "20:00", home: { name: "Panamá", code: "PAN", flag: "/flags/pa.png" }, away: { name: "Croácia", code: "CRO", flag: "/flags/hr.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto", result: {home: 0, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=o0PHBI9QAdY" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 71, group: "L", date: "27/06", time: "18:00", home: { name: "Croácia", code: "CRO", flag: "/flags/hr.png" }, away: { name: "Gana", code: "GHA", flag: "/flags/gh.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia", result: { home: 2, away: 1 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=mBZMegb2r90&pp=0gcJCT8LAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ] 
},
  { id: 72, group: "L", date: "27/06", time: "18:00", home: { name: "Panamá", code: "PAN", flag: "/flags/pa.png" }, away: { name: "Inglaterra", code: "ENG", flag: "/flags/en.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York / Nova Jersey", result: { home: 0, away: 2},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=FDCM9HggRlM" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  // -----------------------
  // 16 avos
  // -----------------------

  { id: 100, stage: "16 avos", date: "28/06", time: "16:00", home: { name: "África do Sul", code: "RSA", flag: "/flags/za.png" }, away: { name: "Canada", code: "CAN", flag: "/flags/ca.png" }, stadium: "SoFi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles", result: { home: 0, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=FDCM9HggRlM" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  { id: 101, stage: "16 avos", date: "29/06", time: "14:00", home: { name: "Brasil", code: "BRA", flag: "/flags/br.png" }, away: { name: "Japão", code: "JPN", flag: "/flags/jp.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston", result: { home: 2, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=XL2jTQdj134" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
   { id: 102, stage: "16 avos", date: "29/06", time: "17:30", home: { name: "Alemanha", code: "GER", flag: "/flags/de.png" }, away: { name: "Paraguai", code: "PAR", flag: "/flags/py.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston (Foxborough)", result: { home: 3 , away: 4}, penalty: true,
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=619QGpUBV3o" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 103, stage: "16 avos", date: "29/06", time: "22:00", home: { name: "Holanda", code: "NED", flag: "/flags/nl.png" }, away: { name: "Marrocos", code: "MAR", flag: "/flags/ma.png" }, stadium: "Gigante de Acero", stadiumView: "/stadiums/BBVA.png", city: "Guadalupe, Nuevo León", result: { home: 2, away: 3}, penalty: true,
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=SWLm3YgA418" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  { id: 104, stage: "16 avos", date: "30/06", time: "14:00", home: { name: "Costa do Marfim", code: "CIV", flag: "/flags/ci.png" }, away: { name: "Noruega", code: "NOR", flag: "/flags/no.png"}, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas", result: { home: 1, away: 2 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=-1LksEX-4Ig" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 105, stage: "16 avos", date: "30/06", time: "18:00", home: { name: "França", code: "FRA", flag: "/flags/fr.png" }, away: {  name: "Suécia", code: "SWE", flag: "/flags/se.png"}, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York / Nova Jersey", result: { home: 3, away: 0 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=4qbRFozLQhE" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 106, stage: "16 avos", date: "30/06", time: "22:00", home: { name: "México", code: "MEX", flag: "/flags/mx.png" }, away: {  name: "Equador", code: "ECU", flag: "/flags/ec.png"}, stadium: "Estadio Azteca", stadiumView: "/stadiums/Azteca.png", city: "Cidade do México", result:  { home: 2, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=FDCM9HggRlM" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  
  { id: 107, stage: "16 avos", date: "01/07", time: "13:00", home: { name: "Inglaterra", code: "ENG", flag: "/flags/en.png" }, away: { name: "RD Congo", code: "COD", flag: "/flags/cd.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta", result: { home: 2, away: 1 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=aSXLerQStXA" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 108, stage: "16 avos", date: "01/07", time: "17:00", home: { name: "Bélgica", code: "BEL", flag: "/flags/be.png" }, away: { name: "Senegal", code: "SEN", flag: "/flags/sn.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle", result: { home: 3, away: 2},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=JAwz4EsvJEA" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 109, stage: "16 avos", date: "01/07", time: "21:00", home: { name: "Estados Unidos", code: "USA", flag: "/flags/us.png" }, away: { name: "Bósnia e Herzegovina", code: "BIH", flag: "/flags/ba.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco (Santa Clara)", result: { home: 2, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=CWo3HBSvQSg" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  { id: 110, stage: "16 avos", date: "02/07", time: "16:00", home: { name: "Espanha", code: "ESP", flag: "/flags/es.png" }, away: { name: "Áustria", code: "AUT", flag: "/flags/at.png" }, stadium: "Rose Bowl", stadiumView: "/stadiums/RoseBowl.png", city: "Los Angeles (Pasadena)", result: { home: 3, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=__xDLB2Pi0w" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
   { id: 111, stage: "16 avos", date: "02/07", time: "20:00", home: { name: "Portugal", code: "POR", flag: "/flags/pt.png" }, away: { name: "Croácia", code: "CRO", flag: "/flags/hr.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto", result: { home: 2, away: 1 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=jg4xEFUnFmk&pp=0gcJCUwLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  { id: 112, stage: "16 avos", date: "03/07", time: "00:00", home: { name: "Suiça", code: "SUI", flag: "/flags/ch.png" }, away: { name: "Argélia", code: "ALG", flag: "/flags/dz.png" }, stadium: "BC Place", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver", result: { home: 2, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=jzjZOLYj4oY&pp=0gcJCUwLAYcqIYzvv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 113, stage: "16 avos", date: "03/07", time: "15:00", home: { name: "Austrália", code: "AUS", flag: "/flags/au.png" }, away: { name: "Egito", code: "EGY", flag: "/flags/eg.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas", result: { home: 2, away: 4}, penalty: true,
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=OwVHSCdF37g" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 114, stage: "16 avos", date: "03/07", time: "19:00", home: { name: "Argentina", code: "ARG", flag: "/flags/ar.png" }, away: { name: "Cabo Verde", code: "CPV", flag: "/flags/cv.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami", result: { home: 3, away: 2},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=hfenWvZ5HAU" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 115, stage: "16 avos", date: "03/07", time: "22:30", home: { name: "Colômbia", code: "COL", flag: "/flags/co.png" }, away: { name: "Gana", code: "GHA", flag: "/flags/gh.png" }, stadium: "Arrowhead Stadium", stadiumView: "/stadiums/ArrowHead.png", city: "Kansas City", result: { home: 1, away: 0},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=pgm5kUr6EVU&pp=0gcJCUwLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  // -----------------------
  // Oitavas
  // -----------------------

  { id: 116, stage: "Oitavas", date: "04/07", time: "14:00", home: { name: "Canada", code: "CAN", flag: "/flags/ca.png" }, away: { name: "Marrocos", code: "MAR", flag: "/flags/ma.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston", result: { home: 0, away: 3},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=mOv8dFdAqI0" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
  { id: 117, stage: "Oitavas", date: "04/07", time: "18:00", home: { name: "Paraguai", code: "PAR", flag: "/flags/py.png" }, away: { name: "França", code: "FRA", flag: "/flags/fr.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia", result: { home: 0, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=iE1_W7Oj_LA" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  { id: 118, stage: "Oitavas", date: "05/07", time: "17:00", home: { name: "Brasil", code: "BRA", flag: "/flags/br.png" }, away: { name: "Noruega", code: "NOR", flag: "/flags/no.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York / Nova Jersey", result: { home: 1, away: 2},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=nJtyshk43Xo" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
   { id: 119, stage: "Oitavas", date: "05/07", time: "21:00", home: { name: "México", code: "MEX", flag: "/flags/mx.png" }, away: { name: "Inglaterra", code: "ENG", flag: "/flags/en.png" }, stadium: "Cidade do México", stadiumView: "/stadiums/Azteca.png", city: "Cidade do México", result: { home: 2, away: 3 },
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=WFjglRQSPd8" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  { id: 120, stage: "Oitavas", date: "06/07", time: "16:00", home: { name: "Portugal", code: "POR", flag: "/flags/pt.png" }, away: { name: "Espanha", code: "ESP", flag: "/flags/es.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas", result: { home: 0, away: 1},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=pgm5kUr6EVU&pp=0gcJCUwLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
   { id: 121, stage: "Oitavas", date: "06/07", time: "21:00", home: { name: "Estados Unidos", code: "USA", flag: "/flags/us.png" }, away: { name: "Bélgica", code: "BEL", flag: "/flags/be.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle", result: { home: 1, away: 4},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=lACWwfL5QaI" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  { id: 122, stage: "Oitavas", date: "07/07", time: "13:00", home: { name: "Argentina", code: "ARG", flag: "/flags/ar.png" }, away: { name: "Egito", code: "EGY", flag: "/flags/eg.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta", result: { home: 3, away: 2},
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=pgm5kUr6EVU&pp=0gcJCUwLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},
   { id: 123, stage: "Oitavas", date: "07/07", time: "17:00", home: { name: "Suiça", code: "SUI", flag: "/flags/ch.png"  }, away: { name: "Colômbia", code: "COL", flag: "/flags/co.png" }, stadium: "BC Place", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver",
   result: { home: 4, away: 3}, penalty: true,
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=pgm5kUr6EVU&pp=0gcJCUwLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  // -----------------------
  // Oitavas
  // -----------------------

  { id: 124, stage: "Quartas", date: "09/07", time: "17:00", home: { name: "França", code: "FRA", flag: "/flags/fr.png" }, away: { name: "Marrocos", code: "MAR", flag: "/flags/ma.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston (Foxborough)",
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=pgm5kUr6EVU&pp=0gcJCUwLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  { id: 125, stage: "Quartas", date: "10/07", time: "18:00", home: { name: "Espanha", code: "ESP", flag: "/flags/es.png" }, away: { name: "Bélgica", code: "BEL", flag: "/flags/be.png" }, stadium: "SoFi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles",
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=pgm5kUr6EVU&pp=0gcJCUwLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  { id: 126, stage: "Quartas", date: "11/07", time: "18:00", home: { name: "Noruega", code: "NOR", flag: "/flags/no.png" }, away: { name: "Inglaterra", code: "ENG", flag: "/flags/en.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami",
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=pgm5kUr6EVU&pp=0gcJCUwLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},

  { id: 127, stage: "Quartas", date: "11/07", time: "22:00", home: { name: "Argentina", code: "ARG", flag: "/flags/ar.png" }, away: { name: "Suiça", code: "SUI", flag: "/flags/ch.png" }, stadium: "Arrowhead Stadium", stadiumView: "/stadiums/ArrowHead.png", city: "Kansas City",
  broadcasts: [
    { name: "CazéTV", logo: "/midia/caze-tv.png", url: "https://www.youtube.com/watch?v=pgm5kUr6EVU&pp=0gcJCUwLAYcqIYzv" },
    { name: "SBT Sports", logo: "/midia/sbtsports.png", url: "https://sports.sbt.com.br/" },
    { name: "ge TV", logo: "/midia/getv.png", url: "https://ge.globo.com/"},
    { name: "sportv", logo: "/midia/sportv.png", url: "https://globoplay.globo.com/sportv/ao-vivo/7339108/"}
  ]},


];