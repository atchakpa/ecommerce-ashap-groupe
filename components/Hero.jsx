import _const from '@/helpers/_const'
import {HStack, Box, Text, Image, Button} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import '../app/caroussel.css'

export default function Hero({
  products
}){

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
    >
      <Box 
        position='absolute' 
        bgGradient={'linear(to-bl, blue.500, pink.500)'} 
        height='full' 
        width='full' 
        opacity={0.9}
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
                
              >
                <Box
                  lineHeight='none'
                  // position='absolute'
                  zIndex={10}
                >
      
                  <Text
                    fontWeight='black'
                    fontSize={['3xl', '5xl']}
                    color='white'
                  >
                    {product.nomArticle}
                  </Text>
                  <Text
                    fontWeight='black'
                    fontSize={['xs', 'xl']}
                    color='white'
                  >
                    {product.courteDescription}
                  </Text>
                  <Button
                    size='lg'
                    mt={3}
                    variant='solid'
                    colorScheme='gray'
                  >
                    En savoir plus
                  </Button>
                </Box>
      
                <Image zIndex={999} src={product.images} width={[300, 400]} objectFit='cover' />
              </HStack>
            )
          })
        }
      </Carousel>
      
    </HStack>
  )
}