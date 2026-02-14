import { forwardRef } from 'react'

export interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`cursor-pointer px-4 py-2 bg-neutral-500 text-neutral-100 font-medium rounded-lg hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

SecondaryButton.displayName = 'SecondaryButton'

export default SecondaryButton
