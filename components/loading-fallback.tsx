interface LoadingFallbackProps {
  className?: string
  text?: string
}

export default function LoadingFallback({
  className = "flex items-center justify-center p-8",
  text = "Lädt...",
}: LoadingFallbackProps) {
  return (
    <div className={className}>
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#E4FD90]"></div>
        <span className="text-gray-600">{text}</span>
      </div>
    </div>
  )
}
