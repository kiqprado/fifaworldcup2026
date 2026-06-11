'use client'

import { useEffect, useState } from 'react'

export function useNow() {
  const [, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setTick(value => value + 1)
    }, 60000)

    return () => clearInterval(id)
  }, [])

  return new Date()
}