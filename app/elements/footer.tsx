import Link from 'next/link'

export function Footer() {
  return(
    <div
      className='relative w-full
        flex items-center justify-center
        py-2'
    >
      <div
        className='absolute top-0 left-0 right-0 
        h-[2px]  bg-gradient-to-r from-transparent via-amber-400 to-transparent '
      />

      <span
        className='tracking-wider mr-2 text-sm'
      >FIFA WC 2026 ~ Desenvolvido por</span>
      <Link
        href="https://kiqstudio.vercel.app/"
        target='_blank'
        className='tracking-widest text-sm'
      >
        KiqStudio
      </Link>
    </div>
  )
}