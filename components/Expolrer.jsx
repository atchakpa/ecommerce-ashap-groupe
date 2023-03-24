import data from '@/data'
import _const from '@/helpers/_const'
import useListeCategorieArticle from '@/hooks/useListeCategorieArticle'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Center, Wrap, Box, Text } from '@chakra-ui/react'
import ProductCard from './product/ProductCard'

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
        <Text color={`${_const.THEME_COLOR}.500`} fontSize='sm'>
          Découvrez toutes les catégories
        </Text>
      </Box>

      <Tabs
        variant='solid-rounded'
        _active={{ rounded: 10 }}
        colorScheme={_const.THEME_COLOR}
        mt={5}
        rounded={10}
      >
        <TabList
          rounded={10}
          justifyContent='center'
          width='auto'
        >
          {
            listeCategorie.map((oneCategorie) => {
              return (
                <Tab key={oneCategorie.idCategorieArticle}> {oneCategorie.nomCategorieArticle} </Tab>
              )
            })
          }
        </TabList>

        <TabPanels>
          <TabPanel>
            <Wrap
              p={3}
              spacing={10}
            >
              {
                data.map((product) => {
                  return (
                    <ProductCard
                      key={product.idArticle}
                      product={product}
                    />
                  )
                })
              }

            </Wrap>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </Center>
  )
}
