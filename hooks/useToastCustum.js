import { useToast } from '@chakra-ui/react'
import params from '@/params'

export default function useToastCustum () {
  const toast = useToast()
  return {
    toastErr: (message, description) => toast({
      title: message,
      description: description || undefined,
      status: 'error',
      position: params.TOAST_POSITION,
      isClosable: true
    }),
    toastSucces: (message, description) => toast({
      title: message,
      description: description || undefined,
      status: 'success',
      position: params.TOAST_POSITION,
      isClosable: true
    }),
    toastWarning: (message, description) => toast({
      title: message,
      description: description || undefined,
      status: 'warning',
      position: params.TOAST_POSITION,
      isClosable: true
    }),
    toastInfo: (message, description) => toast({
      title: message,
      description: description || undefined,
      status: 'info',
      position: params.TOAST_POSITION,
      isClosable: true
    })
  }
}
