import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Box,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import SVGViewer from '../components/SVGViewer'
import SVGHistory from '../components/SVGHistory'
import { useState } from 'react'
import srcList from '../examples/examples';

const Index = () => {
  const [history, setHistory] = useState(srcList.slice(0,3))
  const addToHistory = (a) => {
    setHistory([a, ...history.slice(0,15)]);
  }
  return (
    <Container>
      <SVGHistory history={history} w="80vw"/>
      <SVGViewer addToHistory={addToHistory}/>
      <DarkModeSwitch />
      <Footer>
        <Text fontWeight="thin">stay generic</Text>
      </Footer>
    </Container>
  )
}

export default Index
