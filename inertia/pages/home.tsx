import { Head } from '@inertiajs/react'
import { Panel } from '~/components/ui'

type HomeProps = {
  installed: boolean
  server?: {
    name: string
    description?: string
  }
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head title="Not Available" />

      {props.installed ? (
        <div className="flex flex-col justify-center mx-auto items-center text-center w-full h-screen sm:px-0 px-6">
          <Panel className="sm:w-xl w-full">
            <h1 className="text-2xl text-neutral-50 font-bold">{props.server!.name}</h1>
            <p className="text-md text-neutral-100">{props.server!.description}</p>
          </Panel>
        </div>
      ) : (
        <div className="flex flex-col justify-center mx-auto items-center text-center w-full h-screen">
          <Panel>
            <h1 className="text-2xl text-neutral-50 font-bold">Roost is currently unavailable.</h1>
            <p className="text-md text-neutral-100">Please contact your server administrator for more information.</p>
          </Panel>
        </div>
      )}
    </>
  )
}
