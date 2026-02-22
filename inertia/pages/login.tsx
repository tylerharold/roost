import { Head, useForm } from '@inertiajs/react'
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Input,
  Label,
  Panel,
  PrimaryButton,
} from '~/components/ui'
import { FormEvent } from 'react'

type LoginProps = {
  serverName: string
  serverIconUrl: string
}

export default function Login({ serverName, serverIconUrl }: LoginProps) {
  const { data, setData, post, processing, errors, clearErrors } = useForm({
    username: '',
    password: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    post('/api/v1/auth/login')
  }

  return (
    <>
      <Head title="Login" />

      <div className="flex flex-col justify-center mx-auto items-center w-full min-h-screen space-y-8">
        <div className="flex flex-col space-y-3 items-center text-center">
          <Avatar className="w-16 h-16">
            {serverIconUrl && <AvatarImage src={serverIconUrl} alt={serverName} />}
            <AvatarFallback>{serverName.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1">
            <h1 className="text-neutral-50 text-4xl font-bold">{serverName}</h1>
            <p className="text-neutral-300">Sign in to continue</p>
          </div>
        </div>
        <Panel className="lg:min-w-md max-w-lg w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    value={data.username}
                    onChange={(e) => {
                      clearErrors('username')
                      setData('username', e.target.value)
                    }}
                    placeholder="roost"
                  />
                  {errors.username && (
                    <span className="text-red-400 text-sm">{errors.username}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    value={data.password}
                    onChange={(e) => {
                      clearErrors('password')
                      setData('password', e.target.value)
                    }}
                    placeholder="********"
                  />
                  {errors.password && (
                    <span className="text-red-400 text-sm">{errors.password}</span>
                  )}
                </div>
              </div>
            </div>

            <PrimaryButton type="submit" className="w-full" disabled={processing}>
              {processing ? 'Signing in...' : 'Sign In'}
            </PrimaryButton>
          </form>
        </Panel>
      </div>
    </>
  )
}
