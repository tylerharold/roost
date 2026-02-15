import { forwardRef } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

export interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {}
export interface AvatarImageProps extends React.ComponentProps<typeof AvatarPrimitive.Image> {}
export interface AvatarFallbackProps extends React.ComponentProps<
  typeof AvatarPrimitive.Fallback
> {}

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(({ className = '', ...props }, ref) => {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={`relative flex shrink-0 overflow-hidden rounded-full ${className}`}
      {...props}
    />
  )
})

Avatar.displayName = 'Avatar'

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <AvatarPrimitive.Image
        ref={ref}
        className={`aspect-square h-full w-full object-cover ${className}`}
        {...props}
      />
    )
  }
)

AvatarImage.displayName = 'AvatarImage'

const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <AvatarPrimitive.Fallback
        ref={ref}
        className={`flex h-full w-full items-center justify-center rounded-full bg-neutral-700 text-neutral-100 font-medium ${className}`}
        {...props}
      />
    )
  }
)

AvatarFallback.displayName = 'AvatarFallback'

export { Avatar, AvatarImage, AvatarFallback }
export default Avatar
