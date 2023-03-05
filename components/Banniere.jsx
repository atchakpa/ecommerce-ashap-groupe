import _const from "@/helpers/_const"
import { HStack, Text } from "@chakra-ui/react"
import SocialMedia from "./SocialMedia"

export default function Banniere(){

  return (
    <HStack
      bg={`${_const.THEME_COLOR}.500`}
      p={3}
      justifyContent='space-between'
    >
        <Text
          textAlign='center'
          color='white'
          fontWeight='bold'
          fontSize='2xl'
        >
          ASHAB GROUP
        </Text>
        <Text
          textAlign='center'
          color='white'
          fontWeight='bold'
        >
          Choisissez la qualité
        </Text>
        <SocialMedia/>
    </HStack>
  )
}