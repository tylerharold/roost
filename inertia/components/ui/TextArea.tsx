import { forwardRef } from 'react'

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`px-4 py-2 bg-neutral-700 border border-neutral-600 text-neutral-100 placeholder:text-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-colors resize-y min-h-[100px] ${className}`}
        {...props}
      />
    )
  }
)

TextArea.displayName = 'TextArea'

export default TextArea
