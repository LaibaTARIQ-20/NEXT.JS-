interface GradientBlurProps {
  color: 'purple' | 'pink' | 'blue'
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export default function GradientBlur({ color, size = 'medium', className = '' }: GradientBlurProps) {
  const colors = {
    purple: 'bg-purple-600/30',
    pink: 'bg-pink-600/30',
    blue: 'bg-blue-600/30'
  }
  
  const sizes = {
    small: 'w-64 h-64',
    medium: 'w-96 h-96',
    large: 'w-[600px] h-[600px]'
  }

  return (
    <div 
      className={`absolute ${colors[color]} ${sizes[size]} rounded-full blur-3xl pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}