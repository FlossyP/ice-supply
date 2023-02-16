import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core';
import { extendTheme } from "@chakra-ui/react";
import Navbar from '../Components/navbar'


export default function App({ Component, pageProps }: AppProps) {
  
  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "#121212",
        },
      }),
    },
  });

  return (
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: 'dark',
    }}
    >
      <ChakraProvider theme={theme}>
      <Navbar/>
      <Component {...pageProps} />
      </ChakraProvider>
      </MantineProvider>
  )

}
