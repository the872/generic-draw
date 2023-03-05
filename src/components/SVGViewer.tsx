import { Box, Button, Flex, FlexProps, HStack, IconButton, Spinner, VStack } from '@chakra-ui/react'
import { AddIcon, CheckIcon, DownloadIcon, PlusSquareIcon, RepeatIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import srcList from '../examples/examples';

import styles from './SVGViewer.module.css';

const SVGViewer = (props) => {
    const divRef = useRef(null);
    return (
        <VStack>
            {!props.reloaded ?
                <Flex justifyContent="center" alignItems="center"
                    boxSize="600px">
                    <Spinner boxSize="100px"
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500' />
                </Flex> :
                <Box border="1px solid rgba(180,220,220,1)"
                    bgColor="white" boxSize="600px"
                    borderRadius="10px" position="relative">
                    <Box onClick={props.handleReload} className={styles.overlay} alignItems="center">
                        <HStack alignItems="center" justifyContent="center" w="100%" h="100%">
                            <RepeatIcon boxSize="75px" borderRadius="10px" color="rgb(75,75,75)" />
                        </HStack>
                    </Box>
                    <div ref={divRef} className={styles.svgContainer} dangerouslySetInnerHTML={{ __html: props.src }} />
                </Box>
            }
            <HStack pt="10px" justifyContent="center">
                <IconButton _disabled={{ pointerEvents: "none" }} isDisabled={props.added} backgroundColor={props.added ? "lightgreen" : ""} isLoading={props.pendingReload || props.pendingAdd} onClick={props.handleAdd} aria-label='add-button' icon={props.added ? <CheckIcon /> : <AddIcon />}></IconButton>
                <IconButton _disabled={{ pointerEvents: "none" }} isDisabled={props.downloaded} backgroundColor={props.downloaded ? "lightgreen" : ""} isLoading={props.pendingReload || props.pendingDownload} onClick={props.handleDownload} aria-label='download-button' icon={props.downloaded ? <CheckIcon /> : <DownloadIcon />}></IconButton>
            </HStack>
        </VStack>)
}

export default SVGViewer;