import { forwardRef } from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

export interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(({ className = '', ...props }, ref) => {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      className={`relative h-6 w-11 cursor-pointer rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-neutral-900 data-[state=checked]:bg-lime-500 data-[state=unchecked]:bg-neutral-500 ${className}`}
      {...props}
    >
      <SwitchPrimitive.Thumb className="block h-5 w-5 rounded-full bg-neutral-50 transition-transform translate-x-0.5 data-[state=checked]:translate-x-[22px]" />
    </SwitchPrimitive.Root>
  )
})

Switch.displayName = 'Switch'

export default Switch
