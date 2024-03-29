'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, Box, Container } from '@chakra-ui/react'
import theme from '@/helpers/theme'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import queryClient from '@/helpers/queryClient'
import NavBar from '@/components/NavBar'
import PiedDePage from '@/components/PiedDePage'
// import Banniere from '@/components/Banniere'

export default function RootLayout ({
  children
}) {
  return (
    <html lang='fr'>
      <head>
        <title>ASHAB GROUP</title>
        <link rel='shortcut icon' type='image/png' href='/images/icon.png' />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <CacheProvider>
            <ChakraProvider theme={theme}>
              <Box
                position='relative'
                // overflowX='hidden'
              >
                <NavBar />
                <Container
                  minWidth={['auto', '70vw']}
                  overflowX='hidden'
                >
                  {children}
                </Container>
                <PiedDePage />
              </Box>
            </ChakraProvider>
          </CacheProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
