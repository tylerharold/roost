import { forwardRef } from 'react'

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {}

const Panel = forwardRef<HTMLDivElement, PanelProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-neutral-800 border border-neutral-600 rounded-lg p-4 md:p-6 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Panel.displayName = 'Panel'

export default Panel
