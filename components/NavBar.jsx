import { HStack, Button, Image, Text, InputGroup, Input, InputRightElement, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import ButtonIcon from './ButtonIcon'
import Panier from './Panier'

export default function NavBar() {
  const [searchText, setSearchText] = useState('')
  return (
    <HStack
      justifyContent='space-between'
      shadow='md'
      position='sticky'
      top={0}
      p={3}
      px={[2, 24]}
      bg='white'
      zIndex={9999}
    >
      <HStack>
        <Image src='/images/logo.png' height={50} />
      </HStack>

      <HStack>
        <InputGroup
          alignItems='center'
        >
          <Input
            value={searchText}
            onChange={(val) => setSearchText(val.target.value)}
            placeholder='Rechercher'
            // size='md'
            // width={['xs', 'md']}
            bg='gray.100'
            rounded='full'
          />
          
          <InputRightElement>
            <Icon as={BsSearch}  color='gray.400' />
          </InputRightElement>
        </InputGroup>

      </HStack>

      <HStack>
        <Panier/>
      </HStack>
    </HStack>
  )
}