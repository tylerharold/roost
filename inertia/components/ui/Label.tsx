import { forwardRef } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

export interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <LabelPrimitive.Root
        ref={ref}
        className={`text-sm text-neutral-400 font-medium ${className}`}
        {...props}
      >
        {children}
      </LabelPrimitive.Root>
    )
  }
)

Label.displayName = 'Label'

export default Label
