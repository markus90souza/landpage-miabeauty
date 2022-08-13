import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

import { Hero } from '@layouts/Hero'
import { Location } from '@layouts/Location'
import { Services } from '@layouts/Services'

import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Location />
      <Footer />
    </>
  )
}

export default Home
