import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core';
import { extendTheme } from "@chakra-ui/react";
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react"

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

  const darkTheme = createTheme({
    type: 'dark',
  });

  return (
  <ChakraProvider>
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: 'dark',
    }}
    >
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
      </NextUIProvider>
      </MantineProvider>
      </ChakraProvider>

  )

}
