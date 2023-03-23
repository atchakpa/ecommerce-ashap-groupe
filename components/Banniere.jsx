import _const from "@/helpers/_const"
import { HStack, Text } from "@chakra-ui/react"
import SocialMedia from "./SocialMedia"

export default function Banniere(){

  return (
    <HStack
      bgGradient='linear(to-r, pink.500, blue.500, pink.500)'
      p={3}
      justifyContent='space-between'
    >
        <Text
          textAlign='center'
          color='white'
          fontWeight='bold'
          fontSize={['xs', '2xl']}
          lineHeight='shorter'
        >
          ASHAB GROUP
        </Text>
        <Text
          textAlign='center'
          color='white'
          fontWeight='bold'
          fontSize={['xs', '2xl']}
          lineHeight='shorter'
        >
          Choisissez la qualité
        </Text>
        <SocialMedia/>
    </HStack>
  )
}