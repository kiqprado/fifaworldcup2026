'use client'

import { Search, SearchCheck, SearchX } from "lucide-react"

interface IInput {
  value: string
  onChange: (value: string) => void
  hasAnyResult: boolean
}

export function Input({ value, onChange, hasAnyResult}: IInput) {

  function HandleChangeInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value)
  }

  function InternIconOnRender() {
    if(!value.trim()) {
      return <Search size={18}/>
    }
    if(hasAnyResult) {
      return <SearchCheck size={18} className='text-green-400' />
    }
    return <SearchX size={18} className='text-red-400' />
  }

  return(
    <div
      className='w-full flex items-center gap-3
      px-3 py-1
      border rounded-xl border-zinc-500'
    >
      {InternIconOnRender()}
      <input 
        type="search"  
        placeholder="Digite aqui"
        onChange={HandleChangeInputValue}
        value={value}
        className='outline-none w-full'
      />
    </div>
  )
}