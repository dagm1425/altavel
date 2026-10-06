import { cn } from '@/lib/utils'

// Full-bleed section background. tone: 'light' (white), 'stone', or 'dark' (ink).
export function Band({ tone = 'light', children }) {
  return <div className={cn('band', tone !== 'light' && tone)}>{children}</div>
}
