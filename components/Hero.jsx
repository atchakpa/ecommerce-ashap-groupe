import format from '@/helpers/format'
import useToastCustum from '@/hooks/useToastCustum'
import params from '@/params'
import { HStack, Box, Text, Image, Button } from '@chakra-ui/react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Hero ({
  products
}) {
  const toast = useToastCustum()
  const addToBag = (product) => {
    const bagLocalStorageContent = window.localStorage.getItem(params.BAG_KEY)
    const bagContent = bagLocalStorageContent === null ? [] : JSON.parse(bagLocalStorageContent)
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
    toast.toastSucces('Ajouter au panier avec succès')
    window.localStorage.setItem(params.BAG_KEY, JSON.stringify(bagContent))
  }

  return (
    <>
      <Box
        bgImage='/images/fond_hero.jpg'
        bgSize='cover'
        bgPosition='center'
        position='relative'
        justifyContent='center'
        flexDirection={['column-reverse', 'row']}
        height={['70vh', '80vh']}
        py={[10, 14]}
        px={[0, '10%']}
        rounded={20}
        mt={3}
      >
        <Box
          position='absolute'
          bgGradient='linear(to-bl, blue.500, blue.800)'
          height='full'
          width='full'
          opacity={0.9}
          rounded={20}
          top={0}
          left={0}
        />
        <Slider
          dots
          infinite
          speed={1000}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={3000}
        >
          {
            products.map((product) => {
              return (
                <Box
                  key={product.idArticle}
                >
                  <HStack
                    flexDirection={['column-reverse', 'row']}
                    spacing={[0, 3]}
                  >
                    <Box
                      lineHeight='none'
                      zIndex={10}
                      minWidth='100px'
                      display='flex'
                      flexDirection='column'
                      overflow='hidden'
                    >
                      <Text
                        fontWeight='bold'
                        fontSize={['xl', '3xl']}
                        color='white'
                        p={[2, 0]}
                        textAlign={['center', 'left']}
                      >
                        {product.nomArticle}
                      </Text>
                      <Text
                        fontSize={['sm', 'xl']}
                        textAlign={['center', 'left']}
                        color='white'
                      >
                        {format.numberToString(product.prixVente)}
                      </Text>
                      <Button
                        mt={3}
                        variant='solid'
                        colorScheme={params.THEME_COLOR}
                        // color='white'
                        // _hover={{bg: `${params.THEME_COLOR}.500`}}
                        rounded={5}
                        onClick={() => addToBag(product)}
                        width='auto'
                        alignSelf={['center', 'flex-start']}
                      >
                        Ajouter au panier
                      </Button>
                    </Box>

                    <Image
                      zIndex={999}
                      src={product.images[0]}
                      width={[250, 400]}
                      height={[250, 400]}
                      objectFit='contain'
                      rounded={10}
                    />
                  </HStack>

                </Box>
              )
            })
          }

        </Slider>
      </Box>
    </>
  )
}
