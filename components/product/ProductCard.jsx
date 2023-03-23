import format from '@/helpers/format'
import useToastCustum from '@/hooks/useToastCustum'
import params from '@/params'
import {Box, Image, Text, Button, Collapse, useBoolean, HStack, SlideFade, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Tag} from '@chakra-ui/react'
import { BsEye } from 'react-icons/bs'
import ButtonIcon from '../ButtonIcon'
import HeaderTitle from '../HeaderTitle'

export default function ProductCard({
  product= {
    idArticle,
    nomArticle,
    courteDescription,
    descriptionArticle,
    prixVente,
    images,
    isNew,
    isAvailableCommand,
    avanceSurCommane
  }
}){
  const toast = useToastCustum()
  const [hover, setHover] = useBoolean()
  const [openModal, setOpenModal] = useBoolean()

  const addToBag = () => {
    const bagLocalStorageContent = window.localStorage.getItem(params.BAG_KEY)
    const bagContent = bagLocalStorageContent === null ? [] :  JSON.parse(bagLocalStorageContent)
    const searchIndex = bagContent.findIndex(el => el.idArticle === product.idArticle)
    if (searchIndex <= -1) {
      bagContent.push({
        idArticle: product.idArticle,
        nomArticle: product.nomArticle,
        quantite: 1,
        prixVente: product.prixVente,
        images: product.images
      })
    } else {
      bagContent[searchIndex].quantite += 1
    }
    toast.toastSucces("Ajouter au panier avec succès")
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
        size='4xl'
      >
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>
            <HeaderTitle
              title='Apercu'
              subTitle='Apercu rapide'
              divider
              onClose={() => setOpenModal.off()}
            />
          </ModalHeader>
          <ModalBody>
            <HStack
              spacing={10}
              alignItems='flex-start'
            >
              <Image 
                src={product.images[0]} 
                height={300} 
                width={300} 
                objectFit='cover' 
                flex={2}
              />

              <Box
                flex={5}
              >
                <Text 
                  fontSize='xl'
                  lineHeight='shorter'
                  fontWeight='bold'
                >
                  {product.nomArticle}
                </Text>
                <Tag
                  fontWeight='bold'
                  colorScheme={params.THEME_COLOR}
                  mt={2}
                >
                  {format.numberToString(product.prixVente)}</Tag>
              </Box>
            </HStack>
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
        onMouseMove={() => setHover.on()}
        onMouseLeave={() => setHover.off()}
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
            _hover={{shadow: 'lg'}}
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