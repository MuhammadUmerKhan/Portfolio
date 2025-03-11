"use client"

import { useState, useEffect } from "react"

// Custom hook for image loading
export const useImageLoader = (src) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoaded(false)
    setError(false)

    const img = new Image()
    img.src = src

    img.onload = () => {
      setLoaded(true)
    }

    img.onerror = () => {
      setError(true)
      setLoaded(true) // Still mark as loaded to remove loading state
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return { loaded, error }
}

// Image component with loading state
const ImageWithLoader = ({ src, alt, className, style, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src || "/placeholder.svg"}
        alt={alt || "Image"}
        className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={style}
        onLoad={() => {
          setIsLoaded(true)
          if (onLoad) onLoad()
        }}
      />
    </div>
  )
}

export default ImageWithLoader

