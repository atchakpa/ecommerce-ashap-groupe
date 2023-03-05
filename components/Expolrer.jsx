import data from '@/data'
import _const from '@/helpers/_const'
import {Tabs, TabList, Tab, TabPanels, TabPanel, Center, Wrap} from '@chakra-ui/react'
import ProductCard from './product/ProductCard'

export default function Explorer() {
  return (
    <Center mt={5}>
      <Tabs
        variant='solid-rounded'
        colorScheme={_const.THEME_COLOR}
      >
        <TabList
          bg='gray.100'
          px={3}
          py={2}
          rounded='full'
          justifyContent='center'
          width='auto'
        >
          <Tab 
            _active={{
              bg: `${_const.THEME_COLOR}.500`
            }}
          >Desktop</Tab>
          <Tab>Laptop</Tab>
          <Tab>Accessoire</Tab>
          <Tab>Électroménager</Tab>
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