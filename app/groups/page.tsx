'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'

import Link from 'next/link'

import { groups } from '@/data/groups'
import { CardGroup, CardGroupQualifier, IGroup } from '@/app/components/card-group'
import { NormalizeText } from '../utils/normalize-input-search'

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
    <div>
      <Link
        href={'/'}
      >
        Voltar
      </Link>
      
      <HeaderPageTitle
        title='Grupos'
        description='12 grupos com 4 seleções cada. A fase de grupos define os classificados para o mata-mata.'
      />

      <div
        className='flex items-center gap-6'
      >
        <button
          onClick={() => setView('card')}
          className='w-46 flex items-center gap-2
          px-4 py-1.5  cursor-pointer
          border rounded-xl border-zinc-400'
        ><LayoutGrid size={16}/> Cards</button>
        <button
          onClick={() => setView('table')}
          className='w-46 flex items-center gap-2
          px-4 py-1.5 cursor-pointer
          border rounded-xl border-zinc-400'
        ><TableOfContents size={16}/> Classificação</button>
      </div>

      <Input
        value={searchValue}
        onChange={setSearchValue}
        hasAnyResult={hasAnyResult}
      />
      
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