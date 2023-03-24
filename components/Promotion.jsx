import _const from '@/helpers/_const'
import useListeArticle from '@/hooks/useListeArticle'
import { Stack, Text, Box, Center, Wrap } from '@chakra-ui/react'
import ProductCard from './product/ProductCard'

export default function Promotion ({
  title = 'Solde',
  subTitle = 'En ce moment, dépêche toi avant la fin'
}) {
  const { data: listeArticle } = useListeArticle('/en-promotion')

  if (listeArticle.length <= 0) {
    return null
  }

  return (
    <Center
      py={24}
      flexDirection='column'
    >
      <Stack>
        <Box
          fontWeight='bold'
          fontSize='xl'
          lineHeight='shorter'
          textAlign='center'
        >
          <Text fontSize='4xl'>{title}</Text>
          <Text color={`${_const.THEME_COLOR}.500`} fontSize='sm'>{subTitle}</Text>
        </Box>

      </Stack>

      <Wrap
        p={5}
        mt={5}
        spacing={10}
      >
        {
          listeArticle.map((product) => {
            return (
              <ProductCard
                key={product.idArticle}
                product={product}
              />
            )
          })
        }
      </Wrap>

    </Center>
  )
}
