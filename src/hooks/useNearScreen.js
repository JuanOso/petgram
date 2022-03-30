import { useEffect, useRef, useState } from 'react'

export function useNearScreen () {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(function () {
    // esto es un import dinamico, solo se importa cuando es necesario
    import('intersection-observer')
      .then(() => {
        const visualizacionDom = new window.IntersectionObserver(
          function (entries) {
            // is intersecting es una propiedad de entries
            const { isIntersecting } = entries[0]
            // console.log(isIntersecting)
            if (isIntersecting) {
              setShow(true)
              visualizacionDom.disconnect()
            }
          })
        visualizacionDom.observe(element.current)
      })
  }, [element])

  return [show, element]
}
