'use client'

import { MapPin } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import Tilt from 'react-parallax-tilt'


export interface IStadium {
  name: string;
  city: string;
  country: string;
  image: string;
  capacity: string;
  curiosity: string;
  mapsQuery: string;
}

export function StadiumCard({image, name, capacity, mapsQuery, city, country, curiosity }: IStadium) {
   return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.08}
      scale={1.01}
      transitionSpeed={2000}
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      className="w-full max-w-[300px]"
    >
      <div
        className="
        relative group w-full
        p-[1px] rounded-xl
        bg-gradient-to-br from-amber-400 via-yellow-500 to-emerald-800
        transition-all duration-500
        hover:shadow-[0_0_25px_rgba(251,191,36,0.25),0_0_40px_rgba(16,185,129,0.15)]
      "
      >

        {/* CARD */}
        <div className="relative bg-zinc-950 rounded-xl overflow-hidden">

          {/* SHINE */}
          <div
            className="
            absolute inset-0 z-10 pointer-events-none
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            opacity-0 group-hover:opacity-100
            translate-x-[-120%] group-hover:translate-x-[120%]
            transition-all duration-700
          "
          />

          {/* IMAGE */}
          <div 
            className="relative overflow-hidden"
          >
            <Image
              src={image}
              alt={name}
              width={300}
              height={160}
              className="
                aspect-video object-cover
                group-hover:scale-110
                transition-transform duration-700 ease-out
              "
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* CAPACITY */}
            <span
              className="
              absolute top-2 right-2
              px-2 py-0.5
              bg-black/60 backdrop-blur-sm
              border border-amber-400/40
              rounded-md
              text-xs font-bold tracking-widest
              text-amber-300
              shadow-md
            "
            >
              {capacity}
            </span>
          </div>

          {/* CONTENT */}
          <div className="px-4 py-3 flex flex-col gap-2">

            <div>
              <h3
                className="
                text-lg font-bold
                text-white
                truncate
                group-hover:text-amber-300
                transition-colors
              "
              >
                {name}
              </h3>

              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                className="
                flex items-center gap-1.5 
                text-sm text-amber-400
                hover:text-amber-200
                transition-colors
              "
              >
                <MapPin size={12}/> {city}, {country}
              </Link>
            </div>

            {/* TEXTO CONTROLADO */}
            <p
              className=" w-fit
              text-justify
              text-sm text-zinc-400
              leading-relaxed
              line-clamp-3
              min-h-[106px]
              overflow-y-auto
              group-hover:text-zinc-300
              transition-colors
            "
            >
              {curiosity}
            </p>

          </div>

        </div>
      </div>
    </Tilt>
  )
}