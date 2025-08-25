export function Card({ children, className = "", ...props }) {
  return (
    <div className={`rounded-lg bg-white shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  )
}