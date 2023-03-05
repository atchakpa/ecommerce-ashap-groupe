import {HStack, Stack, Image, Text, Icon} from '@chakra-ui/react'
import { BsTelephone } from 'react-icons/bs'
import {MdOutlineLocationOn} from 'react-icons/md'

export default function PiedDePage() {

  return (
    <HStack
      bg='gray.200'
      justifyContent='center'
      p={[2, 10]}
      spacing={[0, 20]}
      flexDirection={['column', 'row']}
    >
      <Stack>
        <Image src='/images/logo.png' height={100} />
      </Stack>
      <Stack
        lineHeight='shorter'
      >
        <Text
          fontWeight='bold'
          fontSize='xl'
        >
          Contacts
        </Text>
        <HStack>
          <Icon as={MdOutlineLocationOn} h={6} w={6} />
          <Text
            color='gray.600'
            fontSize='sm'
          >
            Abomey-Calavi, 100m avant Togoudo quittant iita
          </Text>
        </HStack>
        <HStack>
          <Icon as={BsTelephone} h={5} w={5} />
          <Text
            color='gray.600'
            fontSize='sm'
          >
            229 97 84 33 33 / 52 29 59 29
          </Text>
        </HStack>
        <Text
          color='gray.600'
          fontSize='sm'
        >229 </Text>
      </Stack>

      <Stack>
        <Image src='/images/paiement_accepte.jpeg' height={6}  />
      </Stack>
    </HStack>
  )
}