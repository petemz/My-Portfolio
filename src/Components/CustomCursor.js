import React, { useEffect, useState, useCallback } from 'react'

const CustomCursor = () => {
    const [ isHoveringButtonOrLink, setIsHoveringButtonOrLink ] = useState(false)
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const [isHoveringArt, setIsHoveringArt] = useState(false)
    const [isCursorVisible, setIsCursorVisible] = useState(false)

    const handleMouseEnterButtonOrLink = (e) => {
        let targetName = e.currentTarget.className
        let name = targetName.includes('art')
        name && setIsHoveringArt(true)

        setIsHoveringButtonOrLink(true)
    }
    const handleMouseLeaveButtonOrLink = (e) => {
        setIsHoveringArt(false)
        setIsHoveringButtonOrLink(false)
    }
    const handleMouseClick = useCallback((e) => {
        let targetName = e.currentTarget.className
        let name = targetName.includes('angleBrk')
        name === false && setIsHoveringButtonOrLink(false)
        
        setIsHoveringArt(false)
    }, [])

    // Add event listeners for buttons and links
    const buttonsAndLinks = document.querySelectorAll('button, a, .art')

    buttonsAndLinks.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterButtonOrLink)
        el.addEventListener('click', handleMouseClick)
        el.addEventListener('mouseleave', handleMouseLeaveButtonOrLink)
    })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY })
            setIsCursorVisible(true); // on render show the cursor only when the mouse moves into the viewport
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)

            // Clean up event listeners
            buttonsAndLinks.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnterButtonOrLink)
                el.removeEventListener('mouseleave', handleMouseLeaveButtonOrLink)
                el.removeEventListener('click', handleMouseClick)
            })        
        }
    }, [])

    // Check for hover support using feature detection
    const supportsHover = window.matchMedia('(hover: hover)').matches;

    if (!supportsHover || !isCursorVisible) {
        return null; // Don't render the cursor on devices that don't support hover (most mobile devices)
    }

    const cursorStyle = {
        position: 'fixed',
        top: cursorPosition.y,
        left: cursorPosition.x,
        pointerEvents: 'none',
        zIndex: 9999,
        borderRadius: '50%',
    }

    const hoveringCursorStyle = {
        width: '25px',
        height: '25px',
        border: 'black 1px solid',
        opacity: '80%',
        transition: 'width 0.2s, height 0.2s, border 0.2s, background 0.2s',
        background: 'white', 
    }

    const texCursorStyle = {
        position: 'fixed',
        top: `calc(${cursorPosition.y}px - 33.5px)`,
        left: `calc(${cursorPosition.x}px - 33.5px)`,
        pointerEvents: 'none',
        zIndex: 9999,
        borderRadius: '50%',
        width: '80px',
        height: '80px',
        border: 'black 1px solid',
        opacity: '100%',
        transition: 'width 0.1s, height 0.1s, border 0.1s, background 0.1s',
    }

    return (
        <>
            {isHoveringButtonOrLink ? 
                <div style={{...hoveringCursorStyle, ...cursorStyle}}/>
            :   
                <>
                    <div style={cursorStyle} className=' w-3 h-3 rounded-full bg-black '></div>
                    <div style={{...texCursorStyle}} className=' w-3 h-3 rounded-full '></div>
                </>
            }
        </>
    )
}

export default CustomCursor
