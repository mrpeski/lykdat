import { useEffect, useState } from 'react'
/* 
*  We could use this by executing code when the mouse
*  enters a hotzone.
*   We could also use this in A/B testing new features of the 
*   product. This could be promotional pages(Black Friday et al).
* 
*/
const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const setFromEvent = (e: MouseEvent) =>
            setPosition({ x: e.clientX, y: e.clientY })
        window.addEventListener('mousemove', setFromEvent)

        return () => {
            window.removeEventListener('mousemove', setFromEvent)
        }
    }, [])

    return position
}

export default useMousePosition
