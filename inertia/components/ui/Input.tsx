import { forwardRef } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`px-4 py-2 bg-neutral-700 border border-neutral-600 text-neutral-100 placeholder:text-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-colors ${className}`}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input
