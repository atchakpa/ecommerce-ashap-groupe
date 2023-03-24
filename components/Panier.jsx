import { Icon, Stack, HStack, Text, useBoolean, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Box, Image, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button, Divider, Input } from '@chakra-ui/react'
import ButtonIcon from './ButtonIcon'
import { BsArrowLeft, BsBag, BsTrash } from 'react-icons/bs'
import params from '@/params'
import HeaderTitle from './HeaderTitle'
import { useEffect, useMemo, useState } from 'react'
import format from '@/helpers/format'
import _ from 'lodash'
import http from '@/helpers/http'
import useToastCustum from '@/hooks/useToastCustum'

export default function Panier () {
  const toast = useToastCustum()
  const [open, setOpen] = useBoolean()
  let bagLocalStorageContent = null
  const [bagContent, setBagContent] = useState([])
  const [enableInputClient, setEnableInputClient] = useBoolean()
  const [processingPayement, setProcessingPayement] = useBoolean()
  const [clientInfo, setClientInfo] = useState({
    intituleUser: '',
    contactWhatsAppContact: ''
  })

  const saveDoc = () => {
    if (clientInfo.intituleUser === '') {
      toast.toastErr('Veuillez saisir votre nom et votre prénom')
      return
    }
    if (clientInfo.contactWhatsAppContact === '') {
      toast.toastErr('Veuillez saisir votre contact whatsapp')
      return
    }
    setProcessingPayement.on()
    http.post('/document-vente/ecommerce', { client: clientInfo, articles: bagContent })
      .then((rps) => {
        http.post('https://api.cbiz.avi-tech.africa/compte-whats-app/api/send-message', {
          phones: [{ intitule: '', phone: clientInfo.contactWhatsAppContact }],
          message: `Cher.e client *${clientInfo.intituleUser}*\nTrouvez ci-joint la proforma de votre commande.`,
          media: {
            mimetype: '',
            data: '',
            filename: ''
          },
          caption: '',
          hasMedia: false,
          hasUrlMedia: false,
          hasFilePathMedia: false,
          idCompte: ''
        }, {
          headers: {
            apiKey: 'zphlhq9lzezh5rq'
          }
        })
        http.post('https://api.cbiz.avi-tech.africa/compte-whats-app/api/send-message', {
          phones: [{ intitule: '', phone: clientInfo.contactWhatsAppContact }],
          message: '',
          media: rps,
          caption: '',
          hasMedia: true,
          hasUrlMedia: false,
          hasFilePathMedia: false,
          idCompte: ''
        }, {
          headers: {
            apiKey: 'zphlhq9lzezh5rq'
          }
        })
        console.log(rps)
        // declenchePaiement()
      })
      .catch((err) => {
        toast.toastErr(err.response.data.message)
      })
      .finally(() => setProcessingPayement.off())
  }

  const deleteFromBagContent = (index) => {
    const liste = Object.assign([], bagContent)
    liste.splice(index, 1)
    setBagContent(liste)
  }

  const editQuantite = (index, newQuantite) => {
    const liste = Object.assign([], bagContent)
    liste[index].quantite = newQuantite
    setBagContent(liste)
  }

  const totalAPayer = useMemo(() => {
    return _.sumBy(bagContent, el => el.quantite * el.prixVente)
  }, [bagContent])

  useEffect(() => {
    if (open) {
      bagLocalStorageContent = window.localStorage.getItem(params.BAG_KEY)
      setBagContent(bagLocalStorageContent === null ? [] : JSON.parse(bagLocalStorageContent))
    }
  }, [open])

  useEffect(() => {
    window.localStorage.setItem(params.BAG_KEY, JSON.stringify(bagContent))
  }, [bagContent])

  return (
    <>
      <Stack
        cursor='pointer'
        alignItems='center'
        spacing={0.5}
        rounded={10}
        px={5}
        py={1}
        _hover={{ bg: `${params.THEME_COLOR}.50` }}
        onClick={() => setOpen.toggle()}
      >
        <Icon as={BsBag} h={[6, 8]} w={[6, 8]} color='gray.500' />
        <Text
          fontSize={['xs', 'sm']}
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
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <HeaderTitle
              title='Panier'
              subTitle='Contenu de mon panier'
              divider
              onClose={() => setOpen.off()}
            />
          </DrawerHeader>

          <DrawerBody>
            {
              !enableInputClient && bagContent.length > 0 && (
                <Stack
                  spacing={5}
                >
                  <Box
                    lineHeight='none'
                    textAlign='center'
                  >
                    <Text
                      fontWeight='black'
                      fontSize={['3xl', '6xl']}
                    >
                      {format.numberToString(totalAPayer)}
                    </Text>
                    <Text
                      fontSize='sm'
                    >total a payer
                    </Text>
                  </Box>
                  <Button
                    mt={3}
                    variant='solid'
                    onClick={() => setEnableInputClient.on()}
                  >
                    Passer la commande
                  </Button>

                </Stack>
              )
            }
            {
              enableInputClient && (
                <Stack>
                  <Text
                    fontSize='sm'
                    fontWeight='bold'
                  >Terminer votre commande
                  </Text>
                  <Input
                    placeholder='Nom et prenom'
                    value={clientInfo.intituleUser}
                    onChange={(val) => setClientInfo({ ...clientInfo, intituleUser: val.target.value })}
                  />
                  <Input
                    placeholder='Contact WhatsApp (22997979797)'
                    value={clientInfo.contactWhatsAppContact}
                    onChange={(val) => setClientInfo({ ...clientInfo, contactWhatsAppContact: val.target.value })}
                  />
                  <HStack width='full'>
                    <ButtonIcon
                      icon={BsArrowLeft}
                      variant='solid'
                      colorScheme='gray'
                      action={() => setEnableInputClient.off()}
                    />
                    <Button
                      variant='solid'
                      width='full'
                      onClick={() => saveDoc()}
                      isLoading={processingPayement}
                    >
                      Valider et payer {format.numberToString(totalAPayer)}
                    </Button>
                  </HStack>
                </Stack>

              )

            }
            <Divider my={5} />
            <Stack
              spacing={3}
              mt={5}
            >
              {
                bagContent.map((oneArticle, index) => {
                  return (
                    <HStack
                      key={oneArticle.idArticle}
                      p={[1, 3]}
                      py={[2, 3]}
                      bg='gray.100'
                      rounded={10}
                      justifyContent='space-between'
                    >
                      <HStack spacing={5}>
                        <Image
                          src={oneArticle.images[0]}
                          height={50}
                          width={50}
                          rounded={[5, 10]}
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
                              fontSize={['xs', 'md']}
                            >
                              {format.numberToString(oneArticle.prixVente)}
                            </Text>
                            <NumberInput
                              defaultValue={oneArticle.quantite}
                              textAlign='center'
                              size={['xs', 'sm']}
                              min={1}
                              bg='white'
                              width='80px'
                              onChange={(val) => editQuantite(index, Number(val))}
                            >
                              <NumberInputField rounded={5} />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                            <Text
                              fontWeight='bold'
                              fontSize={['xs', 'md']}
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
                        iconSize={5}
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
