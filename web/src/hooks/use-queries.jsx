import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export default function useQueries() {
  const { search } = useLocation()

  return useMemo(() => new URLSearchParams(search), [search])
}
