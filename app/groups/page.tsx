'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'

import Link from 'next/link'

import { groups } from '@/data/groups'
import { CardGroup, CardGroupQualifier, IGroup } from '@/app/components/card-group'
import { NormalizeText } from '../utils/normalize-input-search'
import { ButtonFilterElement } from '@/app/elements/button-matches-filter'

import { HeaderPageTitle } from '@/app/elements/header-page-title'

import { LayoutGrid, TableOfContents} from 'lucide-react'
import { Input } from '../components/input'

export default function GroupsPage() {
  const [ view, setView ] = useState<'card' | 'table'>('card')
  const [searchValue, setSearchValue] = useState('')

  const searchParams = useSearchParams()
  const teamCode = searchParams.get('team')

  function IsTeamSelectedOnGroup(group: IGroup) {
    if(!teamCode) return false
    return group.teams.some(team => team.code === teamCode)
  }

  function DoesGroupMatchSearch(group: IGroup, search: string) {
    const normalizedSearch = NormalizeText(search)

    if (!normalizedSearch) {
      return false
    }

    const normalizedGroupKey = NormalizeText(group.keyGroup)
    const normalizedGroupLabel = NormalizeText(`Grupo ${group.keyGroup}`)

    const matchesGroup =
      normalizedGroupKey === normalizedSearch ||
      normalizedGroupLabel.includes(normalizedSearch)

    const matchesTeam = group.teams.some(team => {
      const normalizedName = NormalizeText(team.name)
      const normalizedCode = NormalizeText(team.code ?? '')

      return (
        normalizedName.includes(normalizedSearch) ||
        normalizedCode.includes(normalizedSearch)
      )
    })

    return matchesGroup || matchesTeam
  }

  const orderedGroups = useMemo(() => {
    const normalizedSearch = NormalizeText(searchValue)

    if (!normalizedSearch) {
      return groups
    }

    return [...groups].sort((a, b) => {
      const aMatches = DoesGroupMatchSearch(a, normalizedSearch)
      const bMatches = DoesGroupMatchSearch(b, normalizedSearch)

      if (aMatches && !bMatches) {
        return -1
      }

      if (!aMatches && bMatches) {
        return 1
      }

      return 0
    })
  }, [searchValue])

  const highlightedGroupKey =
    searchValue.trim()
      ? orderedGroups.find(group =>
          DoesGroupMatchSearch(group, searchValue)
        )?.keyGroup ?? null
      : null

      const hasAnyResult =
    !searchValue.trim() || highlightedGroupKey !== null

  return(
    <div className='min-h-svh relative flex flex-col items-center'>
      <Link
        href={'/'}
        className='absolute top-4 left-4'
      >
        Voltar
      </Link>
      
      <HeaderPageTitle
        title='Grupos'
        description='12 grupos com 4 seleções cada. A fase de grupos define os classificados para o mata-mata.'
      />

      <div className="w-[80%]">
  <div
    className="overflow-hidden
      relative rounded-3xl
      border border-amber-400/15
      bg-zinc-950/75 backdrop-blur-2xl
      shadow-[0_0_60px_rgba(0,0,0,0.65)]
    "
  >
    {/* Glow decorativo */}
    <div
      className="
        pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.10),transparent_35%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.06),transparent_35%)]
      "
    />

    <div className="relative z-10 p-3">
      <div
        className="
          flex flex-col xl:flex-row
          xl:items-center
          gap-3
        "
      >
        {/* MENU DE VISUALIZAÇÃO */}
        <div
          className="
            flex-1
            grid grid-cols-2 gap-4
            rounded-2xl
            border border-white/8
            bg-gradient-to-r
            from-zinc-900/95
            via-zinc-900/85
            to-zinc-900/95
            shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
            xl:min-w-[520px]
            xl:flex-shrink-0
          "
        >
          <ButtonFilterElement
            onClick={() => setView('card')}
            icon={<LayoutGrid size={16} />}
            title="Cards"
            active={view === 'card'}
            accent="amber"
            showPulse={view === 'card'}
          />

          <ButtonFilterElement
            onClick={() => setView('table')}
            icon={<TableOfContents size={16} />}
            title="Classificação"
            active={view === 'table'}
            accent="cyan"
            showPulse={view === 'table'}
          />
        </div>

        {/* INPUT DE PESQUISA */}
        <div className="relative min-w-fit">
          <div
            className="
              pointer-events-none absolute -inset-[1px]
              rounded-2xl
              bg-gradient-to-r
              from-amber-400/20
              via-cyan-400/10
              to-amber-400/20
              blur-sm
              opacity-70
            "
          />

          <div
            className="
              relative rounded-2xl
              border border-white/10
              bg-zinc-950/90 backdrop-blur-xl
              shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
            "
          >
            <Input
              value={searchValue}
              onChange={setSearchValue}
              hasAnyResult={hasAnyResult}
              placeholder="Procure sua seleção"
              variant="min"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
      <div
        className='flex flex-wrap justify-center gap-8 py-8'
      >
        {orderedGroups.map(group => {
          const highlight =
            IsTeamSelectedOnGroup(group) ||
            group.keyGroup === highlightedGroupKey
          return view === 'card'
            ? (
              <CardGroup
                key={group.keyGroup}
                keyGroup={group.keyGroup}
                teams={group.teams}
                highlight={highlight}
              />
            ) : (
              <CardGroupQualifier
                key={group.keyGroup}
                keyGroup={group.keyGroup}
                teams={group.teams}
                highlight={highlight}
              />
            )
        })}
      </div>
    </div>
  )
}