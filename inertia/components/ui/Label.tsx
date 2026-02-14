import { forwardRef } from 'react'
import { Label as LabelPrimitive } from '@radix-ui/react-label'

export interface LabelProps extends React.ComponentProps<typeof LabelPrimitive> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className = '', ...props }, ref) => {
  return (
    <LabelPrimitive
      ref={ref}
      className={`text-sm text-neutral-400 font-medium ${className}`}
      {...props}
    />
  )
})

Label.displayName = 'Label'

export default Label
