import { ChakraProvider, Flex, Heading, HStack, Image } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'


function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function NavBar() {
  return (<HStack w="100vw" h="150px" borderBottom="1px solid rgba(200,240,240,1)">
    <Image borderRadius="8px" paddingLeft="2px" boxSize="146px" src={`/logos/${getRandomInt(1, 25)}.svg`} />
    <Heading fontWeight="hairline" color={`rgba(${getRandomInt(40, 240)},${getRandomInt(40, 240)},${getRandomInt(40, 240)},1)`} paddingTop="105px" paddingLeft="0px">generic.design</Heading>
  </HStack>);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}


export default MyApp;
