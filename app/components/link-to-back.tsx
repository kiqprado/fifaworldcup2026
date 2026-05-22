import Link from "next/link"

import { MoveLeft } from 'lucide-react'

interface ILinkToBack {
  href: string
}

export function LinkToBack({ href}: ILinkToBack) {
  return(
    <Link 
      href={href} 
      className='absolute top-4 left-4
        flex items-center justify-center
        px-3 py-0.5 rounded-xl outline-none
        transition-all duration-300 ease-in-out
        will-change-transform hover:scale-[1.03] active:scale-[0.98]
        font-medium tracking-wide text-black
        bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400
        border border-yellow-300/20
        shadow-[0_0_11px_rgba(255,215,0,0.5)]
        hover:shadow-[0_0_22px_rgba(255,215,0,0.8)]'
        title="Voltar ao início"
      >
          <MoveLeft size={22}/>
      </Link>
  )
}