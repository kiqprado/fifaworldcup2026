import { IMatch } from '@/app/components/card-match'

export const matches: IMatch[] = [
  // ── Grupo A ──
  { id: 1, group: "A", date: "11/06", time: "17:00", home: { name: "México", code: "MEX", flag: "/flags/mx.png" }, away: { name: "Tchéquia", code: "CZE", flag: "/flags/cz.png" }, stadium: "Estadio Azteca", stadiumView: "/stadiums/Azteca.png", city: "Cidade do México" },
  { id: 2, group: "A", date: "12/06", time: "14:00", home: { name: "África do Sul", code: "RSA", flag: "/flags/za.png" }, away: { name: "Coreia do Sul", code: "KOR", flag: "/flags/kr.png" }, stadium: "SoFi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles" },
  { id: 3, group: "A", date: "16/06", time: "17:00", home: { name: "México", code: "MEX", flag: "/flags/mx.png" }, away: { name: "Coreia do Sul", code: "KOR", flag: "/flags/kr.png" }, stadium: "Estadio Azteca", stadiumView: "/stadiums/Azteca.png", city: "Cidade do México" },
  { id: 4, group: "A", date: "16/06", time: "20:00", home: { name: "Tchéquia", code: "CZE", flag: "/flags/cz.png" }, away: { name: "África do Sul", code: "RSA", flag: "/flags/za.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas" },
  { id: 5, group: "A", date: "21/06", time: "17:00", home: { name: "Coreia do Sul", code: "KOR", flag: "/flags/kr.png" }, away: { name: "Tchéquia", code: "CZE", flag: "/flags/cz.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York" },
  { id: 6, group: "A", date: "21/06", time: "17:00", home: { name: "África do Sul", code: "RSA", flag: "/flags/za.png" }, away: { name: "México", code: "MEX", flag: "/flags/mx.png" }, stadium: "Estadio Akron", stadiumView: "/stadiums/Akron.png", city: "Guadalajara" },

  // ── Grupo B ──
  { id: 7, group: "B", date: "11/06", time: "20:00", home: { name: "Canadá", code: "CAN", flag: "/flags/ca.png" }, away: { name: "Suíça", code: "SUI", flag: "/flags/ch.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto" },
  { id: 8, group: "B", date: "12/06", time: "17:00", home: { name: "Bósnia e Herzegovina", code: "BIH", flag: "/flags/ba.png" }, away: { name: "Catar", code: "QAT", flag: "/flags/qa.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami" },
  { id: 9, group: "B", date: "17/06", time: "14:00", home: { name: "Canadá", code: "CAN", flag: "/flags/ca.png" }, away: { name: "Catar", code: "QAT", flag: "/flags/qa.png" }, stadium: "BC Place", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver" },
  { id: 10, group: "B", date: "17/06", time: "17:00", home: { name: "Suíça", code: "SUI", flag: "/flags/ch.png" }, away: { name: "Bósnia e Herzegovina", code: "BIH", flag: "/flags/ba.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle" },
  { id: 11, group: "B", date: "22/06", time: "17:00", home: { name: "Catar", code: "QAT", flag: "/flags/qa.png" }, away: { name: "Suíça", code: "SUI", flag: "/flags/ch.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami" },
  { id: 12, group: "B", date: "22/06", time: "17:00", home: { name: "Bósnia e Herzegovina", code: "BIH", flag: "/flags/ba.png" }, away: { name: "Canadá", code: "CAN", flag: "/flags/ca.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto" },

  // ── Grupo C ──
  { id: 13, group: "C", date: "12/06", time: "20:00", home: { name: "Brasil", code: "BRA", flag: "/flags/br.png" }, away: { name: "Escócia", code: "SCO", flag: "/flags/sc.png" }, stadium: "Rose Bowl", stadiumView: "/stadiums/RoseBowl.png", city: "Los Angeles" },
  { id: 14, group: "C", date: "13/06", time: "14:00", home: { name: "Marrocos", code: "MAR", flag: "/flags/ma.png" }, away: { name: "Haiti", code: "HAI", flag: "/flags/ht.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia" },
  { id: 15, group: "C", date: "17/06", time: "20:00", home: { name: "Brasil", code: "BRA", flag: "/flags/br.png" }, away: { name: "Haiti", code: "HAI", flag: "/flags/ht.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas" },
  { id: 16, group: "C", date: "18/06", time: "14:00", home: { name: "Escócia", code: "SCO", flag: "/flags/sc.png" }, away: { name: "Marrocos", code: "MAR", flag: "/flags/ma.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York" },
  { id: 17, group: "C", date: "23/06", time: "17:00", home: { name: "Haiti", code: "HAI", flag: "/flags/ht.png" }, away: { name: "Escócia", code: "SCO", flag: "/flags/sc.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia" },
  { id: 18, group: "C", date: "23/06", time: "17:00", home: { name: "Marrocos", code: "MAR", flag: "/flags/ma.png" }, away: { name: "Brasil", code: "BRA", flag: "/flags/br.png" }, stadium: "Rose Bowl", stadiumView: "/stadiums/RoseBowl.png", city: "Los Angeles" },

  // ── Grupo D ──
  { id: 19, group: "D", date: "13/06", time: "17:00", home: { name: "Estados Unidos", code: "USA", flag: "/flags/us.png" }, away: { name: "Turquia", code: "TUR", flag: "/flags/tr.png" }, stadium: "SoFi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles" },
  { id: 20, group: "D", date: "13/06", time: "20:00", home: { name: "Paraguai", code: "PAR", flag: "/flags/py.png" }, away: { name: "Austrália", code: "AUS", flag: "/flags/au.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston" },
  { id: 21, group: "D", date: "18/06", time: "17:00", home: { name: "Estados Unidos", code: "USA", flag: "/flags/us.png" }, away: { name: "Austrália", code: "AUS", flag: "/flags/au.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York" },
  { id: 22, group: "D", date: "18/06", time: "20:00", home: { name: "Turquia", code: "TUR", flag: "/flags/tr.png" }, away: { name: "Paraguai", code: "PAR", flag: "/flags/py.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta" },
  { id: 23, group: "D", date: "23/06", time: "20:00", home: { name: "Austrália", code: "AUS", flag: "/flags/au.png" }, away: { name: "Turquia", code: "TUR", flag: "/flags/tr.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston" },
  { id: 24, group: "D", date: "23/06", time: "20:00", home: { name: "Paraguai", code: "PAR", flag: "/flags/py.png" }, away: { name: "Estados Unidos", code: "USA", flag: "/flags/us.png" }, stadium: "SoFi Stadium", stadiumView: "/stadiums/Sofi.png", city: "Los Angeles" },

  // ── Grupo E ──
  { id: 25, group: "E", date: "14/06", time: "14:00", home: { name: "Alemanha", code: "GER", flag: "/flags/de.png" }, away: { name: "Equador", code: "ECU", flag: "/flags/ec.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia" },
  { id: 26, group: "E", date: "14/06", time: "17:00", home: { name: "Curaçao", code: "CUW", flag: "/flags/cw.png" }, away: { name: "Costa do Marfim", code: "CIV", flag: "/flags/ci.png" }, stadium: "Geodis Park", stadiumView: "/stadiums/Geodis.png", city: "Nashville" },
  { id: 27, group: "E", date: "19/06", time: "14:00", home: { name: "Alemanha", code: "GER", flag: "/flags/de.png" }, away: { name: "Costa do Marfim", code: "CIV", flag: "/flags/ci.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York" },
  { id: 28, group: "E", date: "19/06", time: "17:00", home: { name: "Equador", code: "ECU", flag: "/flags/ec.png" }, away: { name: "Curaçao", code: "CUW", flag: "/flags/cw.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami" },
  { id: 29, group: "E", date: "24/06", time: "17:00", home: { name: "Costa do Marfim", code: "CIV", flag: "/flags/ci.png" }, away: { name: "Equador", code: "ECU", flag: "/flags/ec.png" }, stadium: "Geodis Park", stadiumView: "/stadiums/Geodis.png", city: "Nashville" },
  { id: 30, group: "E", date: "24/06", time: "17:00", home: { name: "Curaçao", code: "CUW", flag: "/flags/cw.png" }, away: { name: "Alemanha", code: "GER", flag: "/flags/de.png" }, stadium: "Lincoln Financial Field", stadiumView: "/stadiums/Lincoln.png", city: "Filadélfia" },

  // ── Grupo F ──
  { id: 31, group: "F", date: "14/06", time: "20:00", home: { name: "Países Baixos", code: "NED", flag: "/flags/nl.png" }, away: { name: "Tunísia", code: "TUN", flag: "/flags/tn.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston" },
  { id: 32, group: "F", date: "15/06", time: "14:00", home: { name: "Japão", code: "JPN", flag: "/flags/jp.png" }, away: { name: "Suécia", code: "SWE", flag: "/flags/se.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco" },
  { id: 33, group: "F", date: "19/06", time: "20:00", home: { name: "Países Baixos", code: "NED", flag: "/flags/nl.png" }, away: { name: "Suécia", code: "SWE", flag: "/flags/se.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston" },
  { id: 34, group: "F", date: "20/06", time: "14:00", home: { name: "Tunísia", code: "TUN", flag: "/flags/tn.png" }, away: { name: "Japão", code: "JPN", flag: "/flags/jp.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta" },
  { id: 35, group: "F", date: "24/06", time: "20:00", home: { name: "Suécia", code: "SWE", flag: "/flags/se.png" }, away: { name: "Tunísia", code: "TUN", flag: "/flags/tn.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco" },
  { id: 36, group: "F", date: "24/06", time: "20:00", home: { name: "Japão", code: "JPN", flag: "/flags/jp.png" }, away: { name: "Países Baixos", code: "NED", flag: "/flags/nl.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston" },

  // ── Grupo G ──
  { id: 37, group: "G", date: "15/06", time: "17:00", home: { name: "Bélgica", code: "BEL", flag: "/flags/be.png" }, away: { name: "Nova Zelândia", code: "NZL", flag: "/flags/nz.png" }, stadium: "BC Place", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver" },
  { id: 38, group: "G", date: "15/06", time: "20:00", home: { name: "Egito", code: "EGY", flag: "/flags/eg.png" }, away: { name: "Irã", code: "IRN", flag: "/flags/ir.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston" },
  { id: 39, group: "G", date: "20/06", time: "17:00", home: { name: "Bélgica", code: "BEL", flag: "/flags/be.png" }, away: { name: "Irã", code: "IRN", flag: "/flags/ir.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto" },
  { id: 40, group: "G", date: "20/06", time: "20:00", home: { name: "Nova Zelândia", code: "NZL", flag: "/flags/nz.png" }, away: { name: "Egito", code: "EGY", flag: "/flags/eg.png" }, stadium: "BC Place", stadiumView: "/stadiums/BCPlace.png", city: "Vancouver" },
  { id: 41, group: "G", date: "25/06", time: "17:00", home: { name: "Irã", code: "IRN", flag: "/flags/ir.png" }, away: { name: "Nova Zelândia", code: "NZL", flag: "/flags/nz.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston" },
  { id: 42, group: "G", date: "25/06", time: "17:00", home: { name: "Egito", code: "EGY", flag: "/flags/eg.png" }, away: { name: "Bélgica", code: "BEL", flag: "/flags/be.png" }, stadium: "BMO Field", stadiumView: "/stadiums/BMO.png", city: "Toronto" },

  // ── Grupo H ──
  { id: 43, group: "H", date: "16/06", time: "14:00", home: { name: "Espanha", code: "ESP", flag: "/flags/es.png" }, away: { name: "Uruguai", code: "URU", flag: "/flags/uy.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami" },
  { id: 44, group: "H", date: "16/06", time: "11:00", home: { name: "Cabo Verde", code: "CPV", flag: "/flags/cv.png" }, away: { name: "Arábia Saudita", code: "KSA", flag: "/flags/sa.png" }, stadium: "Geodis Park", stadiumView: "/stadiums/Geodis.png", city: "Nashville" },
  { id: 45, group: "H", date: "21/06", time: "14:00", home: { name: "Espanha", code: "ESP", flag: "/flags/es.png" }, away: { name: "Arábia Saudita", code: "KSA", flag: "/flags/sa.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas" },
  { id: 46, group: "H", date: "21/06", time: "20:00", home: { name: "Uruguai", code: "URU", flag: "/flags/uy.png" }, away: { name: "Cabo Verde", code: "CPV", flag: "/flags/cv.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami" },
  { id: 47, group: "H", date: "26/06", time: "17:00", home: { name: "Arábia Saudita", code: "KSA", flag: "/flags/sa.png" }, away: { name: "Uruguai", code: "URU", flag: "/flags/uy.png" }, stadium: "Geodis Park", stadiumView: "/stadiums/Geodis.png", city: "Nashville" },
  { id: 48, group: "H", date: "26/06", time: "17:00", home: { name: "Cabo Verde", code: "CPV", flag: "/flags/cv.png" }, away: { name: "Espanha", code: "ESP", flag: "/flags/es.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas" },

  // ── Grupo I ──
  { id: 49, group: "I", date: "13/06", time: "11:00", home: { name: "França", code: "FRA", flag: "/flags/fr.png" }, away: { name: "Noruega", code: "NOR", flag: "/flags/no.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta" },
  { id: 50, group: "I", date: "14/06", time: "11:00", home: { name: "Senegal", code: "SEN", flag: "/flags/sn.png" }, away: { name: "RD Congo", code: "COD", flag: "/flags/cd.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco" },
  { id: 51, group: "I", date: "18/06", time: "11:00", home: { name: "França", code: "FRA", flag: "/flags/fr.png" }, away: { name: "RD Congo", code: "COD", flag: "/flags/cd.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta" },
  { id: 52, group: "I", date: "18/06", time: "20:00", home: { name: "Noruega", code: "NOR", flag: "/flags/no.png" }, away: { name: "Senegal", code: "SEN", flag: "/flags/sn.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle" },
  { id: 53, group: "I", date: "23/06", time: "14:00", home: { name: "RD Congo", code: "COD", flag: "/flags/cd.png" }, away: { name: "Noruega", code: "NOR", flag: "/flags/no.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco" },
  { id: 54, group: "I", date: "23/06", time: "14:00", home: { name: "Senegal", code: "SEN", flag: "/flags/sn.png" }, away: { name: "França", code: "FRA", flag: "/flags/fr.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta" },

  // ── Grupo J ──
  { id: 55, group: "J", date: "15/06", time: "11:00", home: { name: "Argentina", code: "ARG", flag: "/flags/ar.png" }, away: { name: "Jordânia", code: "JOR", flag: "/flags/jo.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami" },
  { id: 56, group: "J", date: "15/06", time: "14:00", home: { name: "Argélia", code: "ALG", flag: "/flags/dz.png" }, away: { name: "Áustria", code: "AUT", flag: "/flags/at.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas" },
  { id: 57, group: "J", date: "20/06", time: "11:00", home: { name: "Argentina", code: "ARG", flag: "/flags/ar.png" }, away: { name: "Áustria", code: "AUT", flag: "/flags/at.png" }, stadium: "MetLife Stadium", stadiumView: "/stadiums/MetLife.png", city: "Nova York" },
  { id: 58, group: "J", date: "20/06", time: "14:00", home: { name: "Jordânia", code: "JOR", flag: "/flags/jo.png" }, away: { name: "Argélia", code: "ALG", flag: "/flags/dz.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle" },
  { id: 59, group: "J", date: "25/06", time: "20:00", home: { name: "Áustria", code: "AUT", flag: "/flags/at.png" }, away: { name: "Jordânia", code: "JOR", flag: "/flags/jo.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas" },
  { id: 60, group: "J", date: "25/06", time: "20:00", home: { name: "Argélia", code: "ALG", flag: "/flags/dz.png" }, away: { name: "Argentina", code: "ARG", flag: "/flags/ar.png" }, stadium: "Hard Rock Stadium", stadiumView: "/stadiums/HardRock.png", city: "Miami" },

  // ── Grupo K ──
  { id: 61, group: "K", date: "12/06", time: "11:00", home: { name: "Portugal", code: "POR", flag: "/flags/pt.png" }, away: { name: "Colômbia", code: "COL", flag: "/flags/co.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta" },
  { id: 62, group: "K", date: "12/06", time: "20:00", home: { name: "Iraque", code: "IRQ", flag: "/flags/iq.png" }, away: { name: "Uzbequistão", code: "UZB", flag: "/flags/uz.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle" },
  { id: 63, group: "K", date: "17/06", time: "11:00", home: { name: "Portugal", code: "POR", flag: "/flags/pt.png" }, away: { name: "Uzbequistão", code: "UZB", flag: "/flags/uz.png" }, stadium: "AT&T Stadium", stadiumView: "/stadiums/AT&T.png", city: "Dallas" },
  { id: 64, group: "K", date: "17/06", time: "20:00", home: { name: "Colômbia", code: "COL", flag: "/flags/co.png" }, away: { name: "Iraque", code: "IRQ", flag: "/flags/iq.png" }, stadium: "NRG Stadium", stadiumView: "/stadiums/Nrg.png", city: "Houston" },
  { id: 65, group: "K", date: "22/06", time: "14:00", home: { name: "Uzbequistão", code: "UZB", flag: "/flags/uz.png" }, away: { name: "Colômbia", code: "COL", flag: "/flags/co.png" }, stadium: "Lumen Field", stadiumView: "/stadiums/Lumen.png", city: "Seattle" },
  { id: 66, group: "K", date: "22/06", time: "14:00", home: { name: "Iraque", code: "IRQ", flag: "/flags/iq.png" }, away: { name: "Portugal", code: "POR", flag: "/flags/pt.png" }, stadium: "Mercedes-Benz Stadium", stadiumView: "/stadiums/Mercedes.png", city: "Atlanta" },

  // ── Grupo L ──
  { id: 67, group: "L", date: "11/06", time: "14:00", home: { name: "Inglaterra", code: "ENG", flag: "/flags/en.png" }, away: { name: "Panamá", code: "PAN", flag: "/flags/pa.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco" },
  { id: 68, group: "L", date: "11/06", time: "11:00", home: { name: "Croácia", code: "CRO", flag: "/flags/hr.png" }, away: { name: "Gana", code: "GHA", flag: "/flags/gh.png" }, stadium: "Geodis Park", stadiumView: "/stadiums/Geodis.png", city: "Nashville" },
  { id: 69, group: "L", date: "16/06", time: "20:00", home: { name: "Inglaterra", code: "ENG", flag: "/flags/en.png" }, away: { name: "Gana", code: "GHA", flag: "/flags/gh.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston" },
  { id: 70, group: "L", date: "16/06", time: "14:00", home: { name: "Panamá", code: "PAN", flag: "/flags/pa.png" }, away: { name: "Croácia", code: "CRO", flag: "/flags/hr.png" }, stadium: "Levi's Stadium", stadiumView: "/stadiums/Levis.png", city: "São Francisco" },
  { id: 71, group: "L", date: "22/06", time: "20:00", home: { name: "Gana", code: "GHA", flag: "/flags/gh.png" }, away: { name: "Panamá", code: "PAN", flag: "/flags/pa.png" }, stadium: "Geodis Park", stadiumView: "/stadiums/Geodis.png", city: "Nashville" },
  { id: 72, group: "L", date: "22/06", time: "20:00", home: { name: "Croácia", code: "CRO", flag: "/flags/hr.png" }, away: { name: "Inglaterra", code: "ENG", flag: "/flags/en.png" }, stadium: "Gillette Stadium", stadiumView: "/stadiums/Gillette.png", city: "Boston" },
];

