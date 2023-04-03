import Head from 'next/head'
import Hero from '@/components/Hero'


export default function Home() {
  return (
    <>
      <main className='w-2/3 m-auto'>
        <Hero />
      </main>
    </>
  )
}
