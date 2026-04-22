import { squads } from '@/data/squads'
import { CardSquadLineUpReserves, CardSquadLineUpStarters} from '@/app/components/card-squad-lineup'


export default function LineUp() {
  return(
    <div
      className='w-full flex flex-col items-center '
    >
        <div
          className='h-svh w-[88%] px-8 py-6
            border border-amber-700 rounded-lg
            bg-green-800'
        >
          <div
            className='relative h-full w-full rounded-sm
              flex items-center justify-between
              border border-zinc-300'
          >
            <div
              className='h-[75%] w-44
                flex items-center justify-start
                border border-zinc-300'
            >
              <div
                className='h-[60%] w-[50%]
                  border border-zinc-300'
              ></div>
            </div>
            
            
              <div
                className='w-52 h-52 flex items-center justify-center
                  border border-zinc-300 rounded-full'
              >
                <div className='w-2 h-2 bg-zinc-300 rounded-full'/>
                <div className='absolute h-full w-0.5 bg-zinc-300'/>
              </div>

            <div
              className='h-[75%] w-44
                flex items-center justify-end
                border border-zinc-300'
            >
              <div
                className='h-[60%] w-[50%]
                  border border-zinc-300'
              ></div>
            </div>

          </div>
        </div>
        <div
          className='w-full flex justify-evenly'
        >
          
          
        </div>
    </div>
  )
}