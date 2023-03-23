import format from '@/helpers/format'
import useToastCustum from '@/hooks/useToastCustum'
import params from '@/params'
import {HStack, Box, Text, Image, Button} from '@chakra-ui/react'
import { useMemo } from 'react'
import { Carousel } from 'react-responsive-carousel'
import '../app/caroussel.css'

export default function Hero({
  products
}){
  const toast = useToastCustum()
  const addToBag = (product) => {
    const bagLocalStorageContent = window.localStorage.getItem(params.BAG_KEY)
    const bagContent = bagLocalStorageContent === null ? [] :  JSON.parse(bagLocalStorageContent)
    const searchIndex = bagContent.findIndex(el => el.idArticle === product.idArticle)
    if (searchIndex <= -1) {
      bagContent.push({
        idArticle: product.idArticle,
        nomArticle: product.nomArticle,
        quantite: 1,
        prixVente: product.prixVente,
        images: product.images
      })
    } else {
      bagContent[searchIndex].quantite += 1
    }
    toast.toastSucces("Ajouter au panier avec succès")
    window.localStorage.setItem(params.BAG_KEY, JSON.stringify(bagContent))
  }

  return (
    <HStack
      bgImage='/images/fond_hero.jpg'
      bgSize='cover'
      position='relative'
      justifyContent='center'
      flexDirection={['column-reverse', 'row']}
      height={['60vh', '80vh']}
      spacing={[0, 10]}
      py={[2, 24]}
      px={[0, '15%']}
      rounded={20}
      mt={3}
    >
      <Box 
        position='absolute' 
        bgGradient={'linear(to-bl, blue.500, pink.500)'} 
        height='full' 
        width='full' 
        opacity={0.9}
        rounded={20}
      />
      <Carousel
        infiniteLoop
        autoPlay
        interval={2000}
      >
        {
          products.map((product) => {
            return (
              <HStack
                key={product.idArticle}
                flexDirection={['column-reverse', 'row']}
              >
                <Box
                  lineHeight='none'
                  // position='absolute'
                  zIndex={10}
                  minWidth='300px'
                  mr={[0, -14]}
                >
      
                  <Text
                    fontWeight='black'
                    fontSize={['xl', '3xl']}
                    color='white'
                    p={[8, 0]}
                  >
                    {product.nomArticle}
                  </Text>
                  <Text
                    // fontWeight='black'
                    fontSize={['xs', 'xl']}
                    color='white'
                  >
                    {format.numberToString(product.prixVente)}
                  </Text>
                  <Button
                    mt={3}
                    variant='ghost'
                    colorScheme='gray'
                    color='white'
                    _hover={{bg: `${params.THEME_COLOR}.500`}}
                    onClick={() => addToBag(product)}
                  >
                    Ajouter au panier
                  </Button>
                </Box>
      
                <Image 
                  zIndex={999} 
                  src={product.images[0]} 
                  width={[300, 400]} 
                  height={[400, 600]} 
                  p={[0, 10, 20]} 
                  objectFit='contain' 
                />
              </HStack>
            )
          })
        }
      </Carousel>
      
    </HStack>
  )
}