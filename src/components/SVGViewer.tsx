import { Box, Button, Flex, FlexProps, HStack, IconButton, Spinner, VStack } from '@chakra-ui/react'
import { AddIcon, CheckIcon, DownloadIcon, PlusSquareIcon, RepeatIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import srcList from '../examples/examples';

import styles from './SVGViewer.module.css';
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

const SVGViewer = (props) => {
    const [srcIdx, setSrcIdx] = useState(getRandomInt(0, srcList.length - 1));
    const [added, setAdded] = useState(false);
    const [downloaded, setDownloaded] = useState(false);
    const [reloaded, setReloaded] = useState(true);
    const [pendingAdd, setPendingAdd] = useState(false);
    const [pendingDownload, setPendingDownload] = useState(false);
    const [pendingReload, setPendingReload] = useState(false);

    const divRef = useRef(null);
    // useEffect(() => {
    //     if (divRef.current == null) {
    //         return;
    //     }
    //     const svgElement = divRef.current.querySelector('svg');
    //     if (divRef !== null) {
    //         svgElement.setAttribute('style', 'width:100%;height:100%;');
    //     }
    // }, [reloaded]);

    const handleReload = () => {
        if (pendingReload) {
            return;
        }
        console.log("adding");
        props.addToHistory(divRef.current.innerHTML);
        setAdded(false);
        setReloaded(false);
        setDownloaded(false);
        setPendingReload(true);
        setTimeout(() => {
            setPendingReload(false);
            setSrcIdx(getRandomInt(0, srcList.length - 1));
            setReloaded(true);
        }, 1000);
    }

    const handleAdd = () => {
        if (added) {
            return;
        }
        setPendingAdd(true);
        setTimeout(() => {
            setPendingAdd(false);
            setAdded(true);
        }, 1000);
    }

    const handleDownload = () => {
        downloadContent(divRef.current.innerHTML, 'download.svg');
        if (downloaded) {
            return;
        }
        setPendingDownload(true);
        setTimeout(() => {
            setPendingDownload(false);
            setDownloaded(true);
        }, 1000);
    }


    return (
        <VStack>
            {!reloaded ?
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
                    <Box onClick={handleReload} className={styles.overlay} alignItems="center">
                        <HStack alignItems="center" justifyContent="center" w="100%" h="100%">
                            <RepeatIcon boxSize="75px" borderRadius="10px" color="rgb(75,75,75)" />
                        </HStack>
                    </Box>
                    <div ref={divRef} className={styles.svgContainer} dangerouslySetInnerHTML={{ __html: srcList[srcIdx] }} />
                </Box>
            }
            <HStack pt="10px" justifyContent="center">
                <IconButton _disabled={{ pointerEvents: "none" }} isDisabled={added} backgroundColor={added ? "lightgreen" : ""} isLoading={pendingReload || pendingAdd} onClick={handleAdd} aria-label='add-button' icon={added ? <CheckIcon /> : <AddIcon />}></IconButton>
                <IconButton _disabled={{ pointerEvents: "none" }} isDisabled={downloaded} backgroundColor={downloaded ? "lightgreen" : ""} isLoading={pendingReload || pendingDownload} onClick={handleDownload} aria-label='download-button' icon={downloaded ? <CheckIcon /> : <DownloadIcon />}></IconButton>
            </HStack>
        </VStack>)
}

export default SVGViewer;