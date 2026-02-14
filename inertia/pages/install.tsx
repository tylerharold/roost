import { Form, Head } from '@inertiajs/react'
import { Input, Label, Panel, PrimaryButton, TextArea } from '~/components/ui'

export default function Install() {
  return (
    <>
      <Head title="Install" />

      <div className="flex flex-col justify-center mx-auto items-center w-full min-h-screen space-y-8">
        <div className="flex flex-col space-y-1 text-center">
          <h1 className="text-neutral-50 text-4xl font-bold">Installation</h1>
          <p className="text-neutral-300">Welcome to Roost!</p>
        </div>
        <Panel className="lg:min-w-2xl max-w-3xl">
          <Form action="/api/v1/installer/install" className="space-y-8">
            <div className="flex flex-col space-y-2">
              <span className="text-neutral-100 text-lg font-medium">Server Settings</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <Label htmlFor="server_name">Server Name</Label>
                <Input
                  type="text"
                  id="server_name"
                  name="server_name"
                  placeholder="My awesome Roost server!"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <Label htmlFor="server_description">Server Description</Label>
                <TextArea
                  id="server_description"
                  name="server_description"
                  placeholder="My awesome Roost server!"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="text-neutral-100 text-lg font-medium">Owner User</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <Label htmlFor="owner_username">Username</Label>
                <Input
                  type="text"
                  id="owner_username"
                  name="owner_password"
                  placeholder="admin"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <Label htmlFor="server_description">Password</Label>
                <Input
                  type="password"
                  id="owner_password"
                  name="owner_password"
                  placeholder="yH`1u0£s8\Kv"
                />
              </div>
            </div>

            <PrimaryButton
              type="submit"
              className="w-full"
            >
              Create Server
            </PrimaryButton>

          </Form>
        </Panel>
      </div>
    </>
  )
}
