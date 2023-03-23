import { Button, Tooltip,IconButton, Icon, Stack, HStack, Text, useBoolean, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Box, Image, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react"
import ButtonIcon from "./ButtonIcon"
import {BsBag, BsTrash} from 'react-icons/bs'
import params from "@/params"
import HeaderTitle from "./HeaderTitle"
import { useEffect, useState } from "react"
import format from "@/helpers/format"

export default function Panier(){
  const [open, setOpen] = useBoolean()
  let bagLocalStorageContent = null
  const [bagContent, setBagContent] = useState([])

  const deleteFromBagContent = (index) => {
    const liste = Object.assign([], bagContent)
    liste.splice(index,1)
    setBagContent(liste)
  }

  useEffect(() => {
    if (open) {
      bagLocalStorageContent = window.localStorage.getItem(params.BAG_KEY)
      setBagContent(bagLocalStorageContent === null ? [] :  JSON.parse(bagLocalStorageContent))
    }
  }, [open])
  
  return (
    <>
      <Stack
        cursor='pointer'
        alignItems='center'
        spacing={0.5}
        rounded={10}
        px={5}
        py={1}
        _hover={{bg: `${params.THEME_COLOR}.50`}}
        onClick={() => setOpen.toggle()}
      >
          <Icon as={BsBag} h={8} w={8} color='gray.500' />
          <Text
            fontSize='sm'
            color='gray.400'
          >
            Panier
          </Text>
      </Stack>
      <Drawer
        isOpen={open}
        onClose={() => setOpen.off()}
        size={['full', 'lg']}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerHeader>
            <HeaderTitle
              title="Panier"
              subTitle="Contenu de mon panier"
              divider
              onClose={() => setOpen.off()}
            />
          </DrawerHeader>

          <DrawerBody>
            <Stack
              spacing={3}
            >
              {
                bagContent.map((oneArticle, index) => {
                  return (
                    <HStack
                      key={oneArticle.idArticle}
                      p={3}
                      bg='gray.100'
                      rounded={10}
                      justifyContent='space-between'
                    >
                      <HStack spacing={5}>
                        <Image 
                          src={oneArticle.images[0]} 
                          height={[45, 100]} 
                          width={45, 100} 
                          rounded={10} 
                          bg='white'
                        />
                        <Stack>
                          <Text
                            fontSize={['sm', 'lg']}
                            noOfLines={1}
                            title={oneArticle.nomArticle}
                          >
                            {oneArticle.nomArticle}
                          </Text>
                          <HStack>
                            <Text
                              fontWeight='bold'
                              fontSize='sm'
                            >
                              {format.numberToString(oneArticle.prixVente)}
                            </Text>
                            <NumberInput
                              defaultValue={oneArticle.quantite}
                              textAlign='center'
                              size='sm'
                              min={1}
                              bg='white'
                              width='80px'
                              onChange={(val) => {
                                const line = {
                                  ...info.row.original,
                                  quantite: Number(val.target.value)
                                }
                                service.replaceLine({
                                  ...line
                                }, info.row.index)
                              }}
                            >
                              <NumberInputField rounded={5} />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                            <Text
                              fontWeight='bold'
                            >
                              {format.numberToString((oneArticle.prixVente * oneArticle.quantite))}
                            </Text>
                          </HStack>
                        </Stack>
                      </HStack>

                      <ButtonIcon
                        icon={BsTrash}
                        iconColor='red.600'
                        variant='ghost'
                        iconSize={6}
                        action={() => {
                          deleteFromBagContent(index)
                        }}
                      />
                    </HStack>
                  )
                })
              }
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}