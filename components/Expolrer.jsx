import useListeCategorieArticle from '@/hooks/useListeCategorieArticle'
import params from '@/params'
import { Link } from '@chakra-ui/next-js'
import { Center, Wrap, Box, Text, Stack, Image } from '@chakra-ui/react'

export default function Explorer () {
  const { data: listeCategorie } = useListeCategorieArticle('?display=true')
  return (
    <Center
      mt={5}
      p={24}
      flexDirection='column'
      bg='gray.50'
      rounded={12}
      // mx={['0%', '15%']}
    >
      <Box
        fontWeight='bold'
        fontSize='xl'
        lineHeight='shorter'
        textAlign='center'
      >
        <Text fontSize='4xl'>Explorer</Text>
        <Text color={`${params.THEME_COLOR}.500`} fontSize='sm'>
          Découvrez toutes les catégories
        </Text>
      </Box>

      <Wrap
        mt={5}
      >
        {
            listeCategorie.map((oneCategorie) => {
              return (
                <Link
                  key={oneCategorie.idCategorieArticle}
                  href={`/categorie/${oneCategorie.idCategorieArticle}`}
                >
                  <Stack
                    p={3}
                    rounded={10}
                    _hover={{ border: '2px', borderColor: `${params.THEME_COLOR}.500`, bg: 'white' }}
                    cursor='pointer'
                    transition='100ms ease-in-out'
                  >
                    <Image
                      src={oneCategorie.imageCategorieArticle}
                      height={150}
                      width={150}
                    />
                    <Text
                      fontWeight='bold'
                      fontSize='sm'
                      textAlign='center'
                    >
                      {oneCategorie.nomCategorieArticle}
                    </Text>
                  </Stack>
                </Link>
              )
            })
          }
      </Wrap>

    </Center>
  )
}
