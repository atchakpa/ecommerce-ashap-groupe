'use client'
import Explorer from '@/components/Expolrer'
import Hero from '@/components/Hero'
import {Text} from '@chakra-ui/react'
import data from '@/data'
import NouvelArrivage from '@/components/NouvelArrivage'
import ConditionsLivraison from '@/components/ConditionsLivraison'
import useListeArticle from '@/hooks/useListeArticle'



export default function Home() {
  const {data: listeArticleEnVedette} = useListeArticle('?enVedette=true&isPublished=true')
  return (
    <>
      <Hero products={listeArticleEnVedette} />
      <NouvelArrivage/>
      <Explorer/>

      <ConditionsLivraison/>
    </>
  )
}
