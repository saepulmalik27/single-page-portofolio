import Header from '@/components/templates/header'
import Contact from '@/components/templates/section/contact'
import Hero from '@/components/templates/section/hero'
import Profile from '@/components/templates/section/profile'
import Work from '@/components/templates/section/work'


export default function Home() {
  return (
    <main className='py-[34px]' >
      <Header/>
      <Hero/>
      <Profile/>
      <Work/>
      <Contact/>
      <Header/>
    </main>
  )
}
