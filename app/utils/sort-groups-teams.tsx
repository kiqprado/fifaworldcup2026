export function sortGroupTeams<T extends {
  pts: number
  sg: number
  gp: number
}>(
  teams: T[]
) {
  return [...teams].sort((a, b) => {
    // Pontos
    if (b.pts !== a.pts) {
      return b.pts - a.pts
    }

    // Saldo de gols
    if (b.sg !== a.sg) {
      return b.sg - a.sg
    }

    // Gols pró (critério comum)
    if (b.gp !== a.gp) {
      return b.gp - a.gp
    }

    return 0
  })
}