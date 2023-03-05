import format from '@/helpers/format'
import _const from '@/helpers/_const'
import {Box, Image, Text, Button, Collapse, useBoolean, HStack, SlideFade, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Tag} from '@chakra-ui/react'
import HeaderTitle from '../HeaderTitle'

export default function ProductCard({
  product= {
    nomArticle,
    courteDescription,
    descriptionArticle,
    prixVente,
    images
  }
}){

  const [hover, setHover] = useBoolean()
  const [openModal, setOpenModal] = useBoolean()

  return (
    <>
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
                src={product.images.split(',')[0]} 
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
                  colorScheme={_const.THEME_COLOR}
                  mt={2}
                >{format.numberToString(product.prixVente)}</Tag>
                
              </Box>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
        rounded={10}
        shadow='xs'
        _hover={{shadow: 'md'}}
        overflow='hidden'
        cursor='pointer'
        width={350}
        position='relative'
        onMouseMove={() => setHover.on()}
        onMouseLeave={() => setHover.off()}
      >
        <Box
          overflow='hidden'
        >
          <Image 
            src={product.images.split(',')[0]} 
            height={350}
            objectFit='contain' 
            _hover={{transform: 'scale(1.1)'}}
            transition='100ms ease-in-out'
          />
        
        </Box>
        <SlideFade direction='bottom' in={hover} >
          <HStack position='absolute' top={300} width='full' px={5}>
            <Button
              variant='solid'
              shadow='md'
              flex={1}
              onClick={() => setOpenModal.on()}
            >
              Apercu
            </Button>
            <Button
              colorScheme={_const.THEME_COLOR}
              variant='solid'
              shadow='md'
              flex={1}
            >
              Ajouter au panier
            </Button>
          </HStack>
        
        </SlideFade>
        <Box 
          p={3}
          bg={`gray.100`}
        >
          <Text fontWeight='bold' noOfLines={1} title={product.nomArticle}>{product.nomArticle}</Text>
          <Text fontSize='sm' noOfLines={2} title={product.courteDescription}>{product.courteDescription}</Text>
        </Box>
        
      </Box>
    </>
  )
}