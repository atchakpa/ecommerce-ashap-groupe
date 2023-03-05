import { HStack } from "@chakra-ui/react"
import { BsWhatsapp } from "react-icons/bs"
import ButtonIcon from "./ButtonIcon"

export default function SocialMedia(){

  return (
    <HStack>
      <ButtonIcon
        icon={BsWhatsapp}
        iconColor={'white'}
        iconSize={6}
        action={() => window.open('https://wa.me/22997843333', '_blank')}
      />
      <ButtonIcon
        icon={BsWhatsapp}
        iconColor={'whatsapp.500'}
        iconSize={6}
      />
    </HStack>
  )
}