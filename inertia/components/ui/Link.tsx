import { forwardRef } from 'react'
import { Link as InertiaLink } from '@inertiajs/react'
import type { InertiaLinkProps } from '@inertiajs/react'

export interface LinkProps extends InertiaLinkProps {
  children: React.ReactNode
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <InertiaLink
        ref={ref}
        className={`text-primary-500 underline hover:text-primary-600 transition-colors ${className}`}
        {...props}
      >
        {children}
      </InertiaLink>
    )
  }
)

Link.displayName = 'Link'

export default Link
