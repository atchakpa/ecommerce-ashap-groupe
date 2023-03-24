import params from '@/params'
import { HStack, Box, Text, Icon, Divider } from '@chakra-ui/react'
import { BsCarFront, BsHeadset, BsShieldLock } from 'react-icons/bs'

export default function ConditionsLivraison () {
  return (
    <Box
      // bg={`${_const.THEME_COLOR}.500`}
      bgGradient={`linear(to-b, ${params.THEME_COLOR}.300, ${params.THEME_COLOR}.500, ${params.THEME_COLOR}.600 )`}
      p={[5, 14]}
      width='full'
      justifyContent='center'
      spacing={10}
      my={5}
      rounded={10}
    >
      <Box
        color='white'
        textAlign='center'
        lineHeight='shorter'
      >
        <Text fontWeight='bold' fontSize='xl'>ASHAB GROUP</Text>
        <Text>Choisissez la qualité</Text>
        <Divider />
      </Box>
      <Box
        mt={5}
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection={['column', 'row']}
      >
        <HStack
          color='white'
          m={[3, 5]}
        >
          <Icon as={BsCarFront} h={[8, 12]} w={[8, 12]} />
          <Box
            lineHeight='none'
          >
            <Text fontWeight='bold'>
              Livraison gratuite
            </Text>
            <Text fontSize={['xs', 'md']}>
              A partir de 100 000
            </Text>
          </Box>

        </HStack>
        <HStack
          color='white'
          m={[3, 5]}
        >
          <Icon as={BsShieldLock} h={[8, 12]} w={[8, 12]} />
          <Box
            lineHeight='shorter'
          >
            <Text fontWeight='bold'>
              Paiement sécurisé
            </Text>
            <Text
              fontSize={['xs', 'md']}
            >
              Toutes les cartes acceptes
            </Text>
          </Box>

        </HStack>
        <HStack
          color='white'
          m={[3, 5]}
        >
          <Icon as={BsHeadset} h={[8, 12]} w={[8, 12]} />
          <Box
            lineHeight='shorter'
          >
            <Text fontWeight='bold'>
              Centre d'aide. 24/7
            </Text>
            <Text
              fontSize={['xs', 'md']}
            >
              Support Technique
            </Text>
          </Box>

        </HStack>
      </Box>
    </Box>
  )
}
