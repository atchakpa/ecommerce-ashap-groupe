import format from '@/helpers/format'
import useToastCustum from '@/hooks/useToastCustum'
import params from '@/params'
import { Box, Image, Text, Button, useBoolean, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Tag } from '@chakra-ui/react'
import { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import ButtonIcon from '../ButtonIcon'
import HeaderTitle from '../HeaderTitle'

export default function ProductCard ({
  product = {
    idArticle: '',
    nomArticle: '',
    courteDescription: '',
    descriptionArticle: '',
    prixVente: 0,
    images: [],
    isNew: false,
    isAvailableCommand: false,
    avanceSurCommane: 0,
    tax: 'E'
  }
}) {
  const toast = useToastCustum()
  const [openModal, setOpenModal] = useBoolean()
  const [imageViewer, setImageViewer] = useState(product.images[0])

  const addToBag = (qte = 1) => {
    const bagLocalStorageContent = window.localStorage.getItem(params.BAG_KEY)
    const bagContent = bagLocalStorageContent === null ? [] : JSON.parse(bagLocalStorageContent)
    const searchIndex = bagContent.findIndex(el => el.idArticle === product.idArticle)
    if (searchIndex <= -1) {
      bagContent.push({
        idArticle: product.idArticle,
        nomArticle: product.nomArticle,
        quantite: qte,
        prixVente: product.prixVente,
        images: product.images,
        tax: product.taxMecef
      })
    } else {
      bagContent[searchIndex].quantite = (bagContent[searchIndex].quantite + qte)
    }
    toast.toastSucces('Ajouter au panier avec succès')
    window.localStorage.setItem(params.BAG_KEY, JSON.stringify(bagContent))
  }

  return (
    <>
      {/* Apercu produit */}
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal.off()}
        closeOnOverlayClick={false}
        isCentered
        size={['full', '4xl']}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HeaderTitle
              title={product.nomArticle}
              divider
              onClose={() => setOpenModal.off()}
            />
          </ModalHeader>
          <ModalBody>
            <Box
              display='flex'
              flexDirection={['column', 'row']}
              spacing={10}
              alignItems='flex-start'
              position='relative'
            >
              <Box
                display='flex'
                flexDirection={['column-reverse', 'row']}
              >
                <Box
                  display='flex'
                  flexDirection={['row', 'column']}
                  justifyContent='flex-start'
                  alignItems={['center', 'flex-start']}
                  height='full'
                >
                  {
                    product.images.map((oneImage) => {
                      return (
                        <Image
                          key={oneImage}
                          src={oneImage}
                          height={35}
                          width={35}
                          rounded={5}
                          my={[1, 3]}
                          mx={[0, 3]}
                          cursor='pointer'
                          _hover={{ shadow: 'lg' }}
                          onClick={() => setImageViewer(oneImage)}
                        />
                      )
                    })
                  }
                </Box>
                <Image
                  src={imageViewer}
                  height={300}
                  width={300}
                />

              </Box>

              <Box
                flex={5}
                pt={[5, 0]}
                pl={[0, 10]}
              >
                <Tag
                  fontSize='xl'
                  lineHeight='shorter'
                  fontWeight='bold'
                  colorScheme={params.THEME_COLOR}
                >
                  {format.numberToString(product.prixVente)}
                </Tag>
                <Text
                  fontSize='sm'
                  lineHeight='shorter'
                >
                  {product.courteDescription}
                </Text>

                <Button
                  onClick={() => addToBag()}
                  variant='solid'
                  colorScheme={params.THEME_COLOR}
                  mt={3}
                >
                  Ajouter au panier
                </Button>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box
        rounded={10}
        // _hover={{shadow: 'md'}}
        overflow='hidden'
        cursor='pointer'
        width={350}
        position='relative'
        _hover={{
          shadow: 'lg',
          border: '2px',
          borderColor: 'gray.100'
        }}
      >
        {
          product.isNew && (
            <Tag
              position='absolute'
              variant='solid'
              top={2}
              left={2}
              colorScheme='green'
              size='sm'
            >
              Nouveau
            </Tag>
          )
        }
        {
          product.isAvailableCommand && (
            <Tag
              position='absolute'
              variant='solid'
              top={2}
              left={2}
              colorScheme='orange'
              size='sm'
            >
              Disponible sur commande
            </Tag>
          )
        }
        <Box
          overflow='hidden'
          px={5}
        >
          <Image
            src={product.images[0]}
            height={350}
            objectFit='contain'
            _hover={{ shadow: 'lg' }}
            // _hover={{transform: 'scale(1.1)'}}
            // transition='100ms ease-in-out'
            bg='gray.200'
            mb={2}
            rounded={10}
          />

        </Box>
        <HStack position='absolute' top={300} width='full' px={10}>
          <ButtonIcon
            icon={BsEye}
            label='Apercu'
            action={() => setOpenModal.on()}
            variant='solid'
            colorScheme='gray'
            shadow='lg'
          />
          <Button
            colorScheme={params.THEME_COLOR}
            variant='solid'
            shadow='md'
            flex={1}
            onClick={() => addToBag()}
          >
            Ajouter au panier
          </Button>
        </HStack>

        <Box
          p={3}
          // bg={`${params.THEME_COLOR}.500`}
          // bg={`gray.500`}
          lineHeight='shorter'
        >
          <HStack>
            <Text fontWeight='bold' fontSize='md'>{format.numberToString(product.prixVente)}</Text>
            {
              product.holdPrixVente > 0 && product.holdPrixVente > product.prixVente && (
                <Text
                  fontWeight='bold'
                  fontSize='sm'
                  textDecoration='line-through'
                  color='red.600'
                >
                  {format.numberToString(product.prixVente)}
                </Text>
              )
            }
          </HStack>
          <Text fontSize='xs' noOfLines={1} title={product.nomArticle} color='gray.600'>{product.nomArticle}</Text>
        </Box>

      </Box>
    </>
  )
}
