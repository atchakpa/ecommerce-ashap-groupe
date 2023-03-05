import { Button, Tooltip,IconButton, Icon } from "@chakra-ui/react"
import ButtonIcon from "./ButtonIcon"
import {BsBag} from 'react-icons/bs'

export default function Panier(){

  return (
    <>
      <Tooltip
        label="Panier"
        hasArrow
        rounded={5}
      >
        <IconButton
          icon={<Icon as={BsBag} h={6} w={6} />}
        />
      </Tooltip>
      
    </>
  )
}