import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core';
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";



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
      colors: {
        'purple-gray': ['#252028'],
      },
    }}
    >
      <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      </ChakraProvider>
      </MantineProvider>
  )

}
