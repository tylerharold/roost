import { Head } from '@inertiajs/react'
import { Avatar, AvatarImage, AvatarFallback, Panel, Link } from '~/components/ui'

type HomeProps = {
  installed: boolean
  server?: {
    name: string
    icon?: string
    description?: string
  }
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head title="Not Available" />

      {props.installed ? (
        <div className="flex flex-col justify-center mx-auto items-center text-center w-full h-screen sm:px-0 px-6">
          <Panel className="sm:w-xl w-full flex flex-col">
            <Avatar className="h-16 w-16 flex mx-auto mb-4">
              {props.server!.icon && (
                <AvatarImage src={props.server!.icon} alt={props.server!.name} />
              )}
              <AvatarFallback>{props.server!.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl text-neutral-50 font-bold">{props.server!.name}</h1>
            <p className="text-md text-neutral-100">{props.server!.description}</p>

            <Link href="/login">Login</Link>
          </Panel>
        </div>
      ) : (
        <div className="flex flex-col justify-center mx-auto items-center text-center w-full h-screen">
          <Panel>
            <h1 className="text-2xl text-neutral-50 font-bold">Roost is currently unavailable.</h1>
            <p className="text-md text-neutral-100">
              Please contact your server administrator for more information.
            </p>
          </Panel>
        </div>
      )}
    </>
  )
}
