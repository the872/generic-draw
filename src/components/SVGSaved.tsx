import { Box, Button, Flex, FlexProps, Heading, HStack, IconButton, Image, Spinner, VStack } from '@chakra-ui/react'
import { AddIcon, CheckIcon, DownloadIcon, EditIcon, PlusSquareIcon, RepeatIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import srcList from '../examples/examples';

import styles from './SVGSaved.module.css';
function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
const emptySvg = () => `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"></svg>`
const SVGSaved = (props) => {
    return (
        <VStack mb="40px" alignItems="start">
            <Heading size="sm" fontWeight="light">Saved</Heading>
            <HStack overflow="scroll" border="1px solid rgba(180,220,220,0.7)" w={props.w} h="150px">
                {props.saved.map(x =>
                    <Box border="1px solid black" style={{margin: "20px"}} boxSize="100px" position="relative">
                        <Box className={styles.overlay} alignItems="center">
                            <HStack alignItems="center" justifyContent="center" w="100%" h="100%">
                                <EditIcon boxSize="50px" borderRadius="10px" color="rgb(75,75,75)" />
                            </HStack>
                        </Box>
                        <div className={styles.svgContainer} dangerouslySetInnerHTML={{"__html": x}}></div>                    </Box>)}
                <IconButton onClick={() => props.addToSaved(emptySvg())} aria-label='new-project-button' icon={<PlusSquareIcon />} />
            </HStack>
        </VStack>)
}

export default SVGSaved;