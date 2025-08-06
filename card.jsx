
export function Card({ children, className }) {
  return <div className={`bg-white border ${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
