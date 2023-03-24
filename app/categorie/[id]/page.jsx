'use client'
import ProductCard from '@/components/product/ProductCard'
import format from '@/helpers/format'
import useListeCategorieWithArticle from '@/hooks/useListeCategorieWithArticle'
import { HStack, Text, Image, Wrap, Box } from '@chakra-ui/react'

export default function CategorieArticle ({
  params: dataParams
}) {
  const { id } = dataParams
  const { data } = useListeCategorieWithArticle(`${id}`)

  return (
    <>
      <HStack
        bg='gray.100'
        p={5}
        mt={3}
        rounded={10}
      >
        <Image
          src={data.imageCategorieArticle}
          height={75}
          width={75}
          objetcFit='contain'
        />
        <Box
          lineHeight='none'
        >
          <Text
            fontWeight='bold'
            fontSize={['3xl']}
            color='gray.600'
            noOfLines={1}
          >
            {data.nomCategorieArticle}
          </Text>
          <Text
            fontWeight='bold'
            fontSize={['sm']}
            color='gray.500'
          >
            {format.numberToString(data.article.length)} article.s
          </Text>

        </Box>
      </HStack>

      <Wrap
        p={5}
        mt={5}
        spacing={10}
      >
        {
          data.article.map((product) => {
            return (
              <ProductCard
                key={product.idArticle}
                product={product}
              />
            )
          })
        }
      </Wrap>
    </>
  )
}
