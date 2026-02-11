import { useState, useEffect, useCallback } from 'react'

interface TypeWriterProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
  className?: string
}

export default function TypeWriter({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
  className = '',
}: TypeWriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const fullText = texts[currentTextIndex]

    if (!isDeleting) {
      setCurrentText(fullText.substring(0, currentText.length + 1))
      if (currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime)
        return
      }
    } else {
      setCurrentText(fullText.substring(0, currentText.length - 1))
      if (currentText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        return
      }
    }
  }, [currentText, currentTextIndex, isDeleting, texts, pauseTime])

  useEffect(() => {
    const timer = setTimeout(tick, isDeleting ? deleteSpeed : speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting, deleteSpeed, speed])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-cowboy-gold">|</span>
    </span>
  )
}
