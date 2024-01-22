import { useEffect, useState } from 'react'

const getMatches = (query) => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches
  }
  return false
}

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(query)

  useEffect(() => {
    function handleChange() {
      setMatches(getMatches(query))
    }

    const matchMedia = window.matchMedia(query)

    handleChange()

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
  }, [query])

  return matches
}
