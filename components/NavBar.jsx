import useListeCategorieArticle from '@/hooks/useListeCategorieArticle'
import params from '@/params'
import { HStack, Button, Image, Text, InputGroup, Input, InputRightElement, Icon, Box,Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { useState } from 'react'
import { BsGrid, BsSearch } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md'
import ButtonIcon from './ButtonIcon'
import Panier from './Panier'

export default function NavBar() {
  const [searchText, setSearchText] = useState('')
  const {data: listeCategorie} = useListeCategorieArticle('?display=true')
  return (
    <Box
      shadow='md'
      position='sticky'
      top={0}
      py={3}
      px={[2, 24]}
      bg='white'
      zIndex={999}
    >
      <HStack
        justifyContent='space-between'
        alignItems='center'
      >
        <HStack
          fontWeight='bold'
          
        >
          <Icon as={MdOutlineLocationOn} h={5} w={5} />
          <Text fontSize='sm'>Abomey-Calavi</Text>
          <Text fontSize='xs' fontWeight='normal' color='gray.400'>229 97 84 33 33 / 52 29 59 29</Text>
        </HStack>
        <HStack>Abomey-Calavi

        </HStack>
      </HStack>
      <HStack
        justifyContent='space-between'
        spacing={[2, 10]}
        mt={5}
      >
        <HStack>
          <Image src='/images/logo.png' height={50} />
        </HStack>

        <HStack flex={1}>
          <Menu>
            <MenuButton
              as={Button}
              size='md'
              variant='solid'
              colorScheme={params.THEME_COLOR}
              leftIcon={<Icon as={BsGrid} />}
              width='170px'
            >
              Catégorie
            </MenuButton>
            <MenuList 
              // mt={-1} 
              shadow='lg'
              border='2px'
              borderColor='gray.600'
              border='none'
              rounded={10}
              width='250px'
              // height='300px'
            >
              {
                listeCategorie.map((oneCategorie) => {
                  return (
                    <MenuItem 
                      key={oneCategorie.idCategorieArticle}
                      fontWeight='bold'
                      fontSize='sm'
                    >
                      <Image 
                        src={oneCategorie.imageCategorieArticle} 
                        height={35}
                        width={35}
                        objectFit='contain'
                        mr={3}
                      />
                      {oneCategorie.nomCategorieArticle}
                    </MenuItem>
                  )
                })
              }
            </MenuList>
          </Menu>
          <InputGroup
            alignItems='center'
          >
            <Input
              value={searchText}
              onChange={(val) => setSearchText(val.target.value)}
              placeholder='Rechercher'
              size='md'
              width='full'
              bg='gray.200'
              rounded={10}
            />
            
            <InputRightElement>
              <Icon as={BsSearch}  color='gray.400' mt={2} />
            </InputRightElement>
          </InputGroup>

        </HStack>

        <HStack>
          <Panier/>
        </HStack>
      </HStack>
    </Box>
  )
}