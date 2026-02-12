import { Head } from '@inertiajs/react'

export default function Home() {
  return (
    <>
      <Head title="Not Available" />

      <div className="flex flex-col justify-center mx-auto items-center text-center w-full h-screen">
        <h1 className="text-2xl text-neutral-50 font-bold">Roost is currently unavailable.</h1>
        <p className="text-md text-neutral-100">Please contact your server administrator for more information.</p>
      </div>
    </>
  )
}
