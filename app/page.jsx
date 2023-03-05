'use client'
import Explorer from '@/components/Expolrer'
import Hero from '@/components/Hero'
import {Text} from '@chakra-ui/react'
import data from '@/data'
import NouvelArrivage from '@/components/NouvelArrivage'
import ConditionsLivraison from '@/components/ConditionsLivraison'



export default function Home() {
  return (
    <>
      <Hero products={data} />
      <NouvelArrivage/>
      <Explorer/>

      <ConditionsLivraison/>
    </>
  )
}
