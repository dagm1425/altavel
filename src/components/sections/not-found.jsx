import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty'
import { FullWidthDivider } from '@/components/full-width-divider'
import { CompassIcon, HomeIcon } from 'lucide-react'

// Adapted from Efferd's not-found-1 block.
export function NotFoundPage() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
      <div className="flex min-h-[70vh] items-center border-x">
        <div className="relative">
          <FullWidthDivider position="top" />
          <Empty>
            <EmptyHeader>
              <EmptyTitle className="font-mono text-8xl font-black">404</EmptyTitle>
              <EmptyDescription className="text-balance">
                The page you&apos;re looking for might have been moved or doesn&apos;t exist.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex flex-wrap justify-center gap-2">
                <Button asChild>
                  <Link to="/">
                    <HomeIcon data-icon="inline-start" />
                    Go home
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/services">
                    <CompassIcon data-icon="inline-start" />
                    Explore services
                  </Link>
                </Button>
              </div>
            </EmptyContent>
          </Empty>
          <FullWidthDivider position="bottom" />
        </div>
      </div>
    </div>
  )
}
