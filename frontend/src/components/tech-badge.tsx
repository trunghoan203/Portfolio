interface TechBadgeProps {
  name: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function TechBadge({ name, variant = 'outline' }: TechBadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors'
  
  const variants = {
    primary: 'bg-accent text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border border-border text-foreground/80 hover:border-accent',
  }

  return (
    <span className={`${baseStyles} ${variants[variant]}`}>
      {name}
    </span>
  )
}
