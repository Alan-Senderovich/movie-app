import Link from 'next/link'

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 text-black`}>
      <h1 className='text-3xl'>HOME</h1>
      <Link href="/movie" className='bg-lightBlue p-4 rounded-md hover:scale-110 duration-300'>
        Go to movies
      </Link>
    </main>
  )
}
