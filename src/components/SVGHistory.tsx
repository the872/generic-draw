import { Box, Button, Flex, FlexProps, Heading, HStack, IconButton, Image, Spinner, VStack } from '@chakra-ui/react'
import { AddIcon, CheckIcon, DownloadIcon, PlusSquareIcon, RepeatIcon } from '@chakra-ui/icons';
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
    return (
        <VStack my="40px" alignItems="start">
        <Heading size="sm" fontWeight="light">History</Heading>
        <HStack overflow="scroll" border="1px solid rgba(180,220,220,0.7)" w={props.w} h="150px">
            {props.history.map(x => <div className={styles.svgContainer} style={{margin: "20px"}} dangerouslySetInnerHTML={{"__html": x}}></div>)}
        </HStack>
        </VStack>)
}

export default SVGHistory;