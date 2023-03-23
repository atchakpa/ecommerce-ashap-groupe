import _const from "@/helpers/_const"
import { HStack, Box, Text, Icon,Divider } from "@chakra-ui/react"
import { BsCarFront, BsHeadset, BsShieldLock } from "react-icons/bs"
import { MdDeliveryDining } from "react-icons/md"

export default function ConditionsLivraison(){

  return (
    <Box
      bg={`${_const.THEME_COLOR}.500`}
        p={20}
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
        <Divider/>
      </Box>
      <HStack
        mt={5}
      >
        <HStack
          color='white'
        >
          <Icon as={BsCarFront} h={12} w={12} />
          <Box
            lineHeight='shorter'
          >
            <Text>
              Livraison gratuite
            </Text>
            <Text
              fontWeight='thin'
            >
              A partir de 100 000
            </Text>
          </Box>
        
        </HStack>
        <HStack
          color='white'
        >
          <Icon as={BsShieldLock} h={12} w={12} />
          <Box
            lineHeight='shorter'
          >
            <Text>
              Paiement sécurisé
            </Text>
            <Text
              fontWeight='thin'
            >
              Toutes les cartes acceptes
            </Text>
          </Box>
        
        </HStack>
        <HStack
          color='white'
        >
          <Icon as={BsHeadset} h={12} w={12} />
          <Box
            lineHeight='shorter'
          >
            <Text>
              Centre d'aide. 24/7
            </Text>
            <Text
              fontWeight='thin'
            >
              Support Technique
            </Text>
          </Box>
        
        </HStack>
      </HStack>
    </Box>
  )
}