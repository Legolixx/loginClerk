import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default function Home() {
  const { userId } = auth()

  if (userId) {
    redirect('/home')
  }
  return (
    <main className="">
      <h1>IMAGEM AQUI</h1>
    </main>
  )
}
