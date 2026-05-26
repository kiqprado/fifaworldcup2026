import { IMatch } from '@/app/components/card-match'

export const matches: IMatch[] = [
  // ── Grupo A ──
  { id: 1, group: "A", date: "11/06", time: "16:00", home: { name: "México", code: "MEX", flag: "/flags/mx.png" }, away: { name: "África do Sul", code: "RSA", flag: "/flags/za.png" }, stadium: "Estadio Azteca", stadiumView: "/stadiums/Azteca.png", city: "Cidade do México" },
  { id: 2, group: "A", date: "11/06", time: "23:00", home: { name: "Coreia do Sul", code: "KOR", flag: "/flags/kr.png" }, away: { name: "Tchéquia", code: "CZE", flag: "/flags/cz.png" }, stadium: "Estadio Akron", stadiumView: "/stadiums/Akron.png", city: "Guadalajara" },
  { id: 3, group: "A", date: "18/06", time: "13:00", home: { name: "Tchéquia", code: "CZE", flag: "/flags/cz.png" }, away: { name: "África do Sul", code: "RSA", flag: "/flags/za.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta" },
  { id: 4, group: "A", date: "18/06", time: "22:00", home: { name: "México", code: "MEX", flag: "/flags/mx.png" }, away: { name: "Coreia do Sul", code: "KOR", flag: "/flags/kr.png" }, stadium: "Estadio Akron", stadiumView: "/stadiums/Akron.png", city: "Cidade do México" },
  { id: 5, group: "A", date: "24/06", time: "22:00", home: { name: "África do Sul", code: "RSA", flag: "/flags/za.png" }, away: { name: "Coreia do Sul", code: "KOR", flag: "/flags/kr.png" }, stadium: "Estadio BBVA", stadiumView: "/stadiums/BBVA.png", city: "Monterrey" },
  { id: 6, group: "A", date: "24/06", time: "22:00", home: { name: "Tchéquia", code: "CZE", flag: "/flags/cz.png" }, away: { name: "México", code: "MEX", flag: "/flags/mx.png" }, stadium: "Estadio Azteca", stadiumView: "/stadiums/Azteca.png", city: "Cidade do México" },

  // ── Grupo B ──
  { id: 7, group: "B", date: "12/06", time: "16:00", home: { name: "Canadá", code: "CAN", flag: "/flags/ca.png" }, away: { name: "Bósnia e Herzegovina", code: "BIH", flag: "/flags/ba.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto" },
  { id: 8, group: "B", date: "13/06", time: "16:00", home: { name: "Catar", code: "QAT", flag: "/flags/qa.png" }, away: { name: "Suíça", code: "SUI", flag: "/flags/ch.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco" },
  { id: 9, group: "B", date: "18/06", time: "16:00", home: { name: "Suiça", code: "SUI", flag: "/flags/ch.png" }, away: { name: "Bósnia e Herzegovina", code: "BIH", flag: "/flags/ba.png" }, stadium: "Sofi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles"
},
  { id: 10, group: "B", date: "18/06", time: "19:00", home: { name: "Canada", code: "CAN", flag: "/flags/ca.png" }, away: { name: "Catar", code: "QAT", flag: "/flags/qa.png" }, stadium: "BC PLace Stadium", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver" 
},
  { id: 11, group: "B", date: "24/06", time: "16:00", home: { name: "Suíça", code: "SUI", flag: "/flags/ch.png" }, away: { name: "Canada", code: "CAN", flag: "/flags/ca.png" }, stadium: "BC Place Stadium", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver" },
  { id: 12, group: "B", date: "24/06", time: "16:00", home: { name: "Bósnia e Herzegovina", code: "BIH", flag: "/flags/ba.png" }, away: { name: "Catar", code: "QAT", flag: "/flags/qa.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle" },

  // ── Grupo C ──
  { id: 13, group: "C", date: "13/06", time: "19:00", home: { name: "Brasil", code: "BRA", flag: "/flags/br.png" }, away: { name: "Marrocos", code: "MAR", flag: "/flags/ma.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York / Nova Jersey" },
  { id: 14, group: "C", date: "13/06", time: "22:00", home: { name: "Haiti", code: "HAI", flag: "/flags/ht.png" }, away: { name: "Escócia", code: "SCO", flag: "/flags/sc.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Nova York" },
  { id: 15, group: "C", date: "19/06", time: "19:00", home: { name: "Escócia", code: "SCO", flag: "/flags/sc.png" }, away: { name: "Marrocos", code: "MAR", flag: "/flags/ma.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston" 
},
  { id: 16, group: "C", date: "19/06", time: "21:30", home: { name: "Brasil", code: "BRA", flag: "/flags/br.png" }, away: { name: "Haiti", code: "HAI", flag: "/flags/ht.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia" },
  { id: 17, group: "C", date: "24/06", time: "19:00", home: { name: "Marrocos", code: "MAR", flag: "/flags/ma.png" }, away: { name: "Haiti", code: "HAI", flag: "/flags/ht.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta" 
},
  { id: 18, group: "C", date: "24/06", time: "19:00", home: { name: "Escócia", code: "SCO", flag: "/flags/sc.png" }, away: { name: "Brasil", code: "BRA", flag: "/flags/br.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami" },

  // ── Grupo D ──
  { id: 19, group: "D", date: "12/06", time: "22:00", home: { name: "Estados Unidos", code: "USA", flag: "/flags/us.png" }, away: { name: "Paraguai", code: "PAR", flag: "/flags/py.png" }, stadium: "SoFi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles" },
  { id: 20, group: "D", date: "14/06", time: "01:00", home: { name: "Austrália", code: "AUS", flag: "/flags/au.png" }, away: { name: "Turquia", code: "TUR", flag: "/flags/tr.png" }, stadium: "BC Place", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver" },
  { id: 21, group: "D", date: "19/06", time: "16:00", home: { name: "Estados Unidos", code: "USA", flag: "/flags/us.png" }, away: { name: "Austrália", code: "AUS", flag: "/flags/au.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle" },
  { id: 22, group: "D", date: "20/06", time: "01:00", home: { name: "Turquia", code: "TUR", flag: "/flags/tr.png" }, away: { name: "Paraguai", code: "PAR", flag: "/flags/py.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco (Santa Clara)" 
},
  { id: 23, group: "D", date: "25/06", time: "23:00", home: { name: "Turquia", code: "TUR", flag: "/flags/tr.png" }, away: { name: "Estados Unidos", code: "USA", flag: "/flags/us.png" }, stadium: "Rose Bowl", stadiumView: "/stadiums/RoseBowl.png", city: "Los Angeles (Pasadena)" },
  { id: 24, group: "D", date: "25/06", time: "20:00", home: { name: "Paraguai", code: "PAR", flag: "/flags/py.png" }, away: { name: "Austrália", code: "AUS", flag: "/flags/au.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco (Santa Clara)" },

  // ── Grupo E ──
  { id: 25, group: "E", date: "14/06", time: "14:00", home: { name: "Alemanha", code: "GER", flag: "/flags/de.png" }, away: { name: "Curaçau", code: "CUW", flag: "/flags/cw.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston" 
},
  { id: 26, group: "E", date: "14/06", time: "20:00", home: { name: "Costa do Marfim", code: "CIV", flag: "/flags/ci.png" }, away: { name: "Equador", code: "ECU", flag: "/flags/ec.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia" },
  { id: 27, group: "E", date: "20/06", time: "17:00", home: { name: "Alemanha", code: "GER", flag: "/flags/de.png" }, away: { name: "Costa do Marfim", code: "CIV", flag: "/flags/ci.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto" 
},
{ id: 28, group: "E", date: "20/06", time: "21:00", home: { name: "Equador", code: "ECU", flag: "/flags/ec.png" }, away: { name: "Curaçau", code: "CUW", flag: "/flags/cw.png" }, stadium: "Arrowhead Stadium", stadiumView: "/stadiums/ArrowHead.png", city: "Kansas city" 
},
{ id: 29, group: "E", date: "25/06", time: "17:00", home: { name: "Equador", code: "ECU", flag: "/flags/ec.png" }, away: { name: "Alemanha", code: "GER", flag: "/flags/de.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York / Nova Jersey" 
},
{ id: 30, group: "E", date: "25/06", time: "17:00", home: { name: "Curaçau", code: "CUW", flag: "/flags/cw.png" }, away: { name: "Costa do Marfim", code: "CIV", flag: "/flags/ci.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia" 
},

  // ── Grupo F ──
  { id: 31, group: "F", date: "14/06", time: "17:00", home: { name: "Holanda", code: "NED", flag: "/flags/nl.png" }, away: { name: "Japão", code: "JPN", flag: "/flags/jp.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas" 
},
  { id: 32, group: "F", date: "14/06", time: "23:00", home: { name: "Suécia", code: "SWE", flag: "/flags/se.png" }, away: { name: "Tunísia", code: "TUN", flag: "/flags/tn.png" }, stadium: "Estadio BBVA", stadiumView: "/stadiums/BBVA.png", city: "Monterrey" 
},
  { id: 33, group: "F", date: "20/06", time: "14:00", home: { name: "Holanda", code: "NED", flag: "/flags/nl.png" }, away: { name: "Suécia", code: "SWE", flag: "/flags/se.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston" 
},
  { id: 34, group: "F", date: "21/06", time: "01:00", home: { name: "Tunisia", code: "TUN", flag: "/flags/tn.png" }, away: { name: "Japão", code: "JPN", flag: "/flags/jp.png" }, stadium: "Estadio BBVA", stadiumView: "/stadiums/BBVA.png", city: "Monterrey" 
},
  { id: 35, group: "F", date: "25/06", time: "20:00", home: { name: "Tunisia", code: "TUN", flag: "/flags/tn.png" }, away: { name: "Holanda", code: "NED", flag: "/flags/nl.png" }, stadium: "Arrowhead Stadium", stadiumView: "/stadiums/ArrowHead.png", city: "Kansas City" 
},
  { id: 36, group: "F", date: "25/06", time: "20:00", home: { name: "Japão", code: "JPN", flag: "/flags/jp.png" }, away: { name: "Suécia", code: "SWE", flag: "/flags/se.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas" 
},

  // ── Grupo G ──
  { id: 37, group: "G", date: "15/06", time: "16:00", home: { name: "Bélgica", code: "BEL", flag: "/flags/be.png" }, away: { name: "Egito", code: "EGY", flag: "/flags/eg.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle" 
},
  { id: 38, group: "G", date: "15/06", time: "22:00", home: { name: "Irã", code: "IRN", flag: "/flags/ir.png" }, away: { name: "Nova Zelândia", code: "NZL", flag: "/flags/nz.png" }, stadium: "So-fi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles" 
},
  { id: 39, group: "G", date: "21/06", time: "16:00", home: { name: "Bélgica", code: "BEL", flag: "/flags/be.png" }, away: { name: "Irã", code: "IRN", flag: "/flags/ir.png" }, stadium: "SoFi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles" 
},
  { id: 40, group: "G", date: "21/06", time: "22:00", home: { name: "Nova Zelândia", code: "NZE", flag: "/flags/nz.png" }, away: { name: "Egito", code: "EGY", flag: "/flags/eg.png" }, stadium: "BC Place", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver" 
},
  { id: 41, group: "G", date: "27/06", time: "00:00", home: { name: "Egito", code: "EGY", flag: "/flags/eg.png" }, away: { name: "Irã", code: "IRN", flag: "/flags/ir.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle" 
},
  { id: 42, group: "G", date: "27/06", time: "00:00", home: { name: "Nova Zelândia", code: "NZE", flag: "/flags/nz.png" }, away: { name: "Bélgica", code: "BEL", flag: "/flags/be.png" }, stadium: "BC Place Stadium", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver" 
},

  // ── Grupo H ──
  { id: 43, group: "H", date: "15/06", time: "13:00", home: { name: "Espanha", code: "ESP", flag: "/flags/es.png" }, away: { name: "Cabo Verde", code: "CPV", flag: "/flags/cv.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta" 
},
  { id: 44, group: "H", date: "15/06", time: "19:00", home: { name: "Arábia Saudita", code: "KSA", flag: "/flags/sa.png" }, away: { name: "Uruguai", code: "URY", flag: "/flags/uy.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami" 
},
  { id: 45, group: "H", date: "21/06", time: "13:00", home: { name: "Espanha", code: "ESP", flag: "/flags/es.png" }, away: { name: "Arábia Saudita", code: "KSA", flag: "/flags/sa.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta" 
},
  { id: 46, group: "H", date: "21/06", time: "19:00", home: { name: "Uruguai", code: "URY", flag: "/flags/uy.png" }, away: { name: "Cabo Verde", code: "CPV", flag: "/flags/cv.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami" 
},
  { id: 47, group: "H", date: "26/06", time: "21:00", home: { name: "Cabo Verde", code: "CPV", flag: "/flags/cv.png" }, away: { name: "Arábia Saudita", code: "KSA", flag: "/flags/sa.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston" 
},
  { id: 48, group: "H", date: "26/06", time: "21:00", home: { name: "Uruguai", code: "URY", flag: "/flags/uy.png" }, away: { name: "Espanha", code: "ESP", flag: "/flags/es.png" }, stadium: "Estadio Akron", stadiumView: "/stadiums/Akron.png", city: "Guadalajara" 
},

  // ── Grupo I ──
  { id: 49, group: "I", date: "16/06", time: "16:00", home: { name: "França", code: "FRA", flag: "/flags/fr.png" }, away: { name: "Senegal", code: "SEN", flag: "/flags/sn.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York / Nova Jersey" },
  { id: 50, group: "I", date: "16/06", time: "19:00", home: { name: "Iraque", code: "IRQ", flag: "/flags/iq.png" }, away: { name: "Noruega", code: "NOR", flag: "/flags/no.png" } , stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston (Foxborough)" 
},
  { id: 51, group: "I", date: "22/06", time: "18:00", home: { name: "França", code: "FRA", flag: "/flags/fr.png" }, away: { name: "Iraque", code: "IRQ", flag: "/flags/iq.png" } , stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia" 
},
  { id: 52, group: "I", date: "22/06", time: "21:00", home: { name: "Noruega", code: "NOR", flag: "/flags/no.png" }, away: { name: "Senegal", code: "SEN", flag: "/flags/sn.png" } , stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York / Nova Jersey" 
},
 { id: 53, group: "I", date: "26/06", time: "16:00", home: { name: "Senegal", code: "SEN", flag: "/flags/sn.png" }, away: { name: "Iraque", code: "IRQ", flag: "/flags/iq.png" } , stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto" 
},
  { id: 54, group: "I", date: "26/06", time: "16:00", home: { name: "Noruega", code: "NOR", flag: "/flags/no.png" }, away: { name: "França", code: "FRA", flag: "/flags/fr.png" } , stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston" 
},

  // ── Grupo J ──
  { id: 55, group: "J", date: "16/06", time: "22:00", home: { name: "Argentina", code: "ARG", flag: "/flags/ar.png" }, away: { name: "Argélia", code: "ALG", flag: "/flags/dz.png" }, stadium: "Arrowhead Stadium", stadiumView: "/stadiums/ArrowHead.png", city: "Kansas City" },
  { id: 56, group: "J", date: "17/06", time: "01:00", home: { name: "Áustria", code: "AUT", flag: "/flags/at.png" }, away: { name: "Jordânia", code: "JOR", flag: "/flags/jo.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco (Santa Clara)" 
},
  { id: 57, group: "J", date: "22/06", time: "14:00", home: { name: "Argentina", code: "ARG", flag: "/flags/ar.png" }, away: { name: "Áustria", code: "AUT", flag: "/flags/at.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas" 
},
  { id: 58, group: "J", date: "23/06", time: "00:00", home: { name: "Jordânia", code: "JOR", flag: "/flags/jo.png" }, away: { name: "Argélia", code: "ALG", flag: "/flags/dz.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco (Santa Clara)" 
},
  { id: 59, group: "J", date: "27/06", time: "23:00", home: { name: "Jordânia", code: "JOR", flag: "/flags/jo.png" }, away: { name: "Argentina", code: "ARG", flag: "/flags/ar.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas" 
},
  { id: 60, group: "J", date: "27/06", time: "23:00", home: { name: "Argélia", code: "ALG", flag: "/flags/dz.png" }, away: { name: "Áustria", code: "AUT", flag: "/flags/at.png" }, stadium: "Arrowhead Stadium", stadiumView: "/stadiums/ArrowHead.png", city: "Kansas City" 
},


  // ── Grupo K ──
  { id: 61, group: "K", date: "17/06", time: "14:00", home: { name: "Portugal", code: "POR", flag: "/flags/pt.png" }, away:{ name: "RD Congo", code: "COD", flag: "/flags/cd.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston"
},
  { id: 62, group: "K", date: "17/06", time: "23:00", home: { name: "Uzbequistão", code: "UZB", flag: "/flags/uz.png" }, away: { name: "Colômbia", code: "COL", flag: "/flags/co.png" }, stadium: "Estadio Azteca", stadiumView: "/stadiums/Azteca.png", city: "Cidade do México" },
  { id: 63, group: "K", date: "23/06", time: "14:00", home: { name: "Portugal", code: "POR", flag: "/flags/pt.png" }, away:{ name: "Uzbequistão", code: "UZB", flag: "/flags/uz.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston"
},
  { id: 64, group: "K", date: "23/06", time: "23:00", home: { name: "Colômbia", code: "COL", flag: "/flags/co.png" }, away:{ name: "RD Congo", code: "COD", flag: "/flags/cd.png" }, stadium: "Estadio Akron", stadiumView: "/stadiums/Akron.png", city: "Guadalajara"},
  { id: 65, group: "K", date: "27/06", time: "20:30", home: { name: "RD Congo", code: "COD", flag: "/flags/cd.png" }, away:{ name: "Uzbequistão", code: "UZB", flag: "/flags/uz.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta"},
  { id: 66, group: "K", date: "27/06", time: "20:30", home: { name: "Colômbia", code: "COL", flag: "/flags/co.png" }, away:{ name: "Portugal", code: "POR", flag: "/flags/pt.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami"},

  // ── Grupo L ──
  { id: 67, group: "L", date: "17/06", time: "17:00", home: { name: "Inglaterra", code: "ENG", flag: "/flags/en.png" }, away:{ name: "Croácia", code: "CRO", flag: "/flags/hr.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas" },
  { id: 68, group: "L", date: "17/06", time: "20:00", home: { name: "Gana", code: "GHA", flag: "/flags/gh.png" }, away: { name: "Panamá", code: "PAN", flag: "/flags/pa.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto" 
},
  { id: 69, group: "L", date: "23/06", time: "17:00", home: { name: "Inglaterra", code: "ENG", flag: "/flags/en.png" }, away: { name: "Gana", code: "GHA", flag: "/flags/gh.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston (Foxborough)" },
  { id: 70, group: "L", date: "23/06", time: "20:00", home: { name: "Panamá", code: "PAN", flag: "/flags/pa.png" }, away: { name: "Croácia", code: "CRO", flag: "/flags/hr.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto" 
},
  { id: 71, group: "L", date: "27/06", time: "18:00", home: { name: "Croácia", code: "CRO", flag: "/flags/hr.png" }, away: { name: "Gana", code: "GHA", flag: "/flags/gh.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia" 
},
  { id: 72, group: "L", date: "27/06", time: "18:00", home: { name: "Panamá", code: "PAN", flag: "/flags/pa.png" }, away: { name: "Inglaterra", code: "ENG", flag: "/flags/en.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York / Nova Jersey" 
},
];