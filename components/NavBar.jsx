import useListeCategorieArticle from '@/hooks/useListeCategorieArticle'
import params from '@/params'
import { Link } from '@chakra-ui/next-js'
import { HStack, Button, Image, Text, InputGroup, Input, InputRightElement, Icon, Box, Menu, MenuButton, MenuList, MenuItem, Hide, useBoolean, Drawer, DrawerBody, DrawerOverlay, DrawerHeader, DrawerContent } from '@chakra-ui/react'
import { useState } from 'react'
import { BsGrid, BsJustifyLeft, BsSearch } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md'
import ButtonIcon from './ButtonIcon'
import HeaderTitle from './HeaderTitle'
import Panier from './Panier'

export default function NavBar () {
  const [openMobileMenu, setOpenMobileMenu] = useBoolean()
  const [searchText, setSearchText] = useState('')
  const { data: listeCategorie } = useListeCategorieArticle('?display=true')
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

      {/* Menu mobile */}
      <Drawer
        isOpen={openMobileMenu}
        onClose={() => setOpenMobileMenu.off()}
        placement='left'
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <HeaderTitle
              title='ASHAB GROUP'
              subTitle='Choisissez la qualité'
              onClose={() => setOpenMobileMenu.off()}
              divider
            />
          </DrawerHeader>

          <DrawerBody>
            {
              listeCategorie.map((oneCategorie) => {
                return (
                  <Link
                    key={oneCategorie.idCategorieArticle}
                    href={`/categorie/${oneCategorie.idCategorieArticle}`}
                  >
                    <Button
                      rounded={0}
                      width='full'
                      justifyContent='flex-start'
                      size='md'
                      onClick={() => setOpenMobileMenu.off()}
                    >
                      <Image
                        src={oneCategorie.imageCategorieArticle}
                        height={10}
                        width={10}
                        rounded={5}
                        mr={5}
                      />
                      {oneCategorie.nomCategorieArticle}
                    </Button>

                  </Link>
                )
              })
            }
          </DrawerBody>
        </DrawerContent>
      </Drawer>

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
        <HStack>
          Abomey-Calavi
        </HStack>
      </HStack>
      <HStack
        justifyContent='space-between'
        spacing={[2, 10]}
        mt={5}
      >

        <HStack flex={1}>
          <Hide
            above='md'
          >
            <ButtonIcon
              icon={BsJustifyLeft}
              iconSize={6}
              action={() => setOpenMobileMenu.toggle()}
            />
          </Hide>
          <HStack>
            <Link href='/'>
              <Image src='/images/logo.png' height={50} />
            </Link>
          </HStack>
          <Hide
            below='md'
          >
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
                borderColor='gray.100'
                rounded={10}
                width='250px'
                // height='300px'
              >
                {
                  listeCategorie.map((oneCategorie) => {
                    return (
                      <Link
                        key={oneCategorie.idCategorieArticle}
                        href={`/categorie/${oneCategorie.idCategorieArticle}`}
                      >
                        <MenuItem
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
                      </Link>
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
                <Icon as={BsSearch} color='gray.400' mt={2} />
              </InputRightElement>
            </InputGroup>
          </Hide>

        </HStack>

        <HStack>
          <Panier />
        </HStack>
      </HStack>
    </Box>
  )
}
