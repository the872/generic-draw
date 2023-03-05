import { Box, Button, Flex, FlexProps, Heading, HStack, IconButton, Image, Spinner, VStack } from '@chakra-ui/react'
import { AddIcon, CheckIcon, DownloadIcon, PlusSquareIcon, RepeatIcon, ViewIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import srcList from '../examples/examples';

import styles from './SVGHistory.module.css';
function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const SVGHistory = (props) => {
    const handleClick = (x) => {
        props.setCurrentSvg(x);
        props.setMode('view');
    }
    return (
        <VStack my="40px" alignItems="start">
            <Heading size="sm" fontWeight="light">History</Heading>
            <HStack overflow="scroll" border="1px solid rgba(180,220,220,0.7)" w={props.w} h="150px">
                {props.history.map(x =>
                    <Box border="1px solid black" style={{ margin: "20px" }} boxSize="100px" position="relative">
                        <Box onClick={() => handleClick(x)} className={styles.overlay} alignItems="center">
                            <HStack alignItems="center" justifyContent="center" w="100%" h="100%">
                                <ViewIcon boxSize="50px" borderRadius="10px" color="rgb(75,75,75)" />
                            </HStack>
                        </Box>
                        <div className={styles.svgContainer} dangerouslySetInnerHTML={{ "__html": x }}></div>
                    </Box>)}
            </HStack>
        </VStack>)
}

export default SVGHistory;