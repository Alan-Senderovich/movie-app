import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return <>
    <Link href="/" className='flex items-center w-[140px]'>
      <Image
        src="/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="logo"
        width={300}
        height={300}
        className='w-full'
        priority
      />
    </Link>
  </>
}

export default Logo