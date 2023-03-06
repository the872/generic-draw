import { ArrowDownIcon, ChevronDownIcon, ChevronUpIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, Heading, HStack, Select, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./SVGOptions.module.css"
const SVGOptions = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  }
  return (<VStack my="20px">
    <Button onClick={handleMenuClick}>
      Advanced Options {isMenuVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </Button>
    <Box className={styles.menu} h={isMenuVisible ? "150px" : "0px"}>
      {isMenuVisible && (
        <HStack>
          <VStack w="140px" alignItems="start">
            <Heading size="md" fontWeight="light">Shapes</Heading>
            <Checkbox size="lg">Circles</Checkbox>
            <Checkbox size="lg">Squares</Checkbox>
            <Checkbox size="lg">Paths</Checkbox>
          </VStack>
          <VStack w="140px" alignItems="start">
            <Heading size="md" fontWeight="light">Style</Heading>
            <Checkbox size="lg">Abstract</Checkbox>
            <Checkbox size="lg">Geometric</Checkbox>
            <Checkbox size="lg">Linear</Checkbox>
          </VStack>
          <VStack w="140px" alignItems="start">
            <Heading size="md" fontWeight="light">Symmetry</Heading>
            <Checkbox size="lg">Symmetric</Checkbox>
            <Checkbox size="lg">Asymmetric</Checkbox>
            <Checkbox size="lg">Distributed</Checkbox>

          </VStack>
        </HStack>
      )}
    </Box>
  </VStack>);
}

export default SVGOptions;