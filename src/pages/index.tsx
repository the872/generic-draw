import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Box,
  UnorderedList,
  HStack,
  VStack,
  Button,
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
import SVGSaved from '../components/SVGSaved'
import SVGEditor from '../components/SVGEditor'
import SVGOptions from '../components/SVGOptions'

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function downloadContent(content, filename) {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
const Index = () => {
  const [history, setHistory] = useState(srcList.slice(0, 3))
  const [saved, setSaved] = useState(srcList.slice(0, 3))
  const [mode, setMode] = useState("view")
  const [currentSvg, setCurrentSvg] = useState(srcList[0]);
  const [added, setAdded] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [reloaded, setReloaded] = useState(true);
  const [pendingAdd, setPendingAdd] = useState(false);
  const [pendingDownload, setPendingDownload] = useState(false);
  const [pendingReload, setPendingReload] = useState(false);

  const addToHistory = (a) => {
    setHistory([a, ...history.slice(0, 15)]);
  }
  const addToSaved = (a) => {
    console.log(a);
    setSaved([...saved, a]);
  }

  const handleDownload = () => {
    downloadContent(currentSvg, 'download.svg');
    if (downloaded) {
      return;
    }
    setPendingDownload(true);
    setTimeout(() => {
      setPendingDownload(false);
      setDownloaded(true);
    }, 1000);
  }

  const handleAdd = () => {
    addToSaved(currentSvg);
    if (added) {
      return;
    }
    setPendingAdd(true);
    setTimeout(() => {
      setPendingAdd(false);
      setAdded(true);
    }, 1000);
  }

  const handleReload = () => {
    console.log(pendingReload);
    if (pendingReload) {
      return;
    }
    console.log("adding");
    addToHistory(currentSvg);
    setAdded(false);
    setReloaded(false);
    setDownloaded(false);
    setPendingReload(true);
    setTimeout(() => {
      setPendingReload(false);
      setCurrentSvg(srcList[getRandomInt(0, srcList.length - 1)]);
      setReloaded(true);
    }, 1000);
  }
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  }
  return (
    <Container>
      <SVGHistory history={history} setMode={setMode} setCurrentSvg={setCurrentSvg} w="80vw" />
      <SVGOptions/>
      {
        mode === "view" ?
          <SVGViewer added={added} downloaded={downloaded}
            reloaded={reloaded}
            handleDownload={handleDownload}
            handleReload={handleReload}
            handleAdd={handleAdd}
            pendingAdd={pendingAdd}
            pendingReload={pendingReload}
            pendingDownload={pendingDownload}
            src={currentSvg}
            addToHistory={addToHistory}
            addToSaved={addToSaved} /> :
          <SVGEditor src={currentSvg} downloaded={downloaded}
            addToHistory={addToHistory} addToSaved={addToSaved}
            pendingDownload={pendingDownload}
            handleDownload={handleDownload}
          />
      }
      <SVGSaved saved={saved} addToSaved={addToSaved} setMode={setMode} setCurrentSvg={setCurrentSvg} w="80vw" />
      <DarkModeSwitch />
      <Footer>
        <Text fontWeight="thin">stay generic</Text>
      </Footer>
    </Container>
  )
}

export default Index
