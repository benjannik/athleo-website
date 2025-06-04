"use client"

import Image from "next/image"
import { useState } from "react"
import type { ImageProps } from "next/image"

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
  fallbackText?: string
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg?height=200&width=300&text=Image+Not+Found",
  fallbackText,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  if (hasError && fallbackText) {
    return (
      <div
        className="flex items-center justify-center bg-gray-100 text-gray-500 text-sm"
        style={{ width: props.width, height: props.height }}
      >
        {fallbackText}
      </div>
    )
  }

  return <Image {...props} src={imgSrc || "/placeholder.svg"} alt={alt} onError={handleError} />
}
