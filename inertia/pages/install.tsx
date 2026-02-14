import { Head, useForm } from '@inertiajs/react'
import { Input, Label, Panel, PrimaryButton, TextArea } from '~/components/ui'
import type { FormEvent } from 'react'

export default function Install() {
  const { data, setData, post, processing, errors, clearErrors } = useForm({
    server: {
      name: '',
      description: '',
    },
    owner: {
      username: '',
      password: '',
    },
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    post('/api/v1/installer/install')
  }

  return (
    <>
      <Head title="Install" />

      <div className="flex flex-col justify-center mx-auto items-center w-full min-h-screen space-y-8">
        <div className="flex flex-col space-y-1 text-center">
          <h1 className="text-neutral-50 text-4xl font-bold">Installation</h1>
          <p className="text-neutral-300">Welcome to Roost!</p>
        </div>
        <Panel className="lg:min-w-2xl max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col space-y-2">
              <span className="text-neutral-100 text-lg font-medium">Server Settings</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <Label htmlFor="server_name">Server Name</Label>
                <div className="flex flex-col space-y-1">
                  <Input
                    type="text"
                    id="server_name"
                    value={data.server.name}
                    onChange={(e) => {
                      clearErrors('server.name')
                      setData('server.name', e.target.value)
                    }}
                    placeholder="My awesome Roost server!"
                  />
                  {errors['server.name'] && (
                    <span className="text-red-400 text-sm">{errors['server.name']}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <Label htmlFor="server_description">Server Description</Label>
                <div className="flex flex-col space-y-1">
                  <TextArea
                    id="server_description"
                    value={data.server.description}
                    onChange={(e) => {
                      clearErrors('server.description')
                      setData('server.description', e.target.value)
                    }}
                    placeholder="My awesome Roost server!"
                  />
                  {errors['server.description'] && (
                    <span className="text-red-400 text-sm">{errors['server.description']}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="text-neutral-100 text-lg font-medium">Owner User</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <Label htmlFor="owner_username">Username</Label>
                <div className="flex flex-col space-y-1">
                  <Input
                    type="text"
                    id="owner_username"
                    value={data.owner.username}
                    onChange={(e) => {
                      clearErrors('owner.username')
                      setData('owner.username', e.target.value)
                    }}
                    placeholder="admin"
                  />
                  {errors['owner.username'] && (
                    <span className="text-red-400 text-sm">{errors['owner.username']}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <Label htmlFor="owner_password">Password</Label>
                <div className="flex flex-col space-y-1">
                  <Input
                    type="password"
                    id="owner_password"
                    value={data.owner.password}
                    onChange={(e) => {
                      clearErrors('owner.password')
                      setData('owner.password', e.target.value)
                    }}
                    placeholder="yH`1u0£s8\Kv"
                  />
                  {errors['owner.password'] && (
                    <span className="text-red-400 text-sm">{errors['owner.password']}</span>
                  )}
                </div>
              </div>
            </div>

            <PrimaryButton type="submit" className="w-full" disabled={processing}>
              {processing ? 'Creating Server...' : 'Create Server'}
            </PrimaryButton>
          </form>
        </Panel>
      </div>
    </>
  )
}
