import { forwardRef } from 'react'

export interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="file"
        className={`block w-full text-sm text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neutral-700 file:text-neutral-100 hover:file:bg-neutral-600 ${className}`}
        {...props}
      />
    )
  }
)

FileInput.displayName = 'FileInput'

export default FileInput
