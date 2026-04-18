'use client'

import { useState } from 'react'

import Link from 'next/link'

import { groups } from '@/data/groups'
import { CardGroup, CardGroupQualifier } from '@/app/components/card-group'

import { LayoutGrid, TableOfContents} from 'lucide-react'

export default function GroupsPage() {
  const [ view, setView ] = useState<'card' | 'table'>('card')

  return(
    <div>
      <Link
        href={'/'}
      >
        Voltar
      </Link>
      <div
        className='space-y-4'
      >
        <h1
          className='text-7xl font-bold tracking-wider text-amber-300'
        >
          Grupos
        </h1>
        <span
          className='text-zinc-400'
        >12 grupos com 4 seleções cada. A fase de grupos define os classificados para o mata-mata.</span>
      </div>

      <div
        className='flex items-center gap-6'
      >
        <button
          onClick={() => setView('card')}
          className='w-46 flex items-center gap-2
          px-4 py-1.5
          border rounded-xl border-zinc-400'
        ><LayoutGrid size={16}/> Cards</button>
        <button
          onClick={() => setView('table')}
          className='w-46 flex items-center gap-2
          px-4 py-1.5
          border rounded-xl border-zinc-400'
        ><TableOfContents size={16}/> Classificação</button>
      </div>
      <div
        className='flex flex-wrap justify-center gap-4'
      >
        {groups.map(group => (
          view === 'card' 
          ?
          <CardGroup
            key={group.keyGroup}
            keyGroup={group.keyGroup}
            teams={group.teams}
          />
          :
          <CardGroupQualifier
            key={group.keyGroup}
            keyGroup={group.keyGroup}
            teams={group.teams}
          />
        ))}
      </div>
    </div>
  )
}