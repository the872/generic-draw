import { CheckIcon, DownloadIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, FlexProps, HStack, IconButton, VStack } from '@chakra-ui/react'
import { useEffect, useRef } from 'react';

import styles from './SVGEditor.module.css';

const SVGEditor = (props) => {

  const divRef = useRef(null);
  useEffect(() => {
    const svgElement = divRef.current.querySelector('svg');
    const svgChildElements = svgElement.querySelectorAll('*');

    function handleDragStart(event) {
      console.log('Drag started!');
      event.dataTransfer.setData('text/plain', event.target.id);
    }

    function handleDrag(event) {
      console.log('Dragging...');
    }

    function handleDragEnd(event) {
      console.log('Drag ended!');
    }

    svgChildElements.forEach((element) => {
      element.setAttribute('class', styles.draggable);
      element.addEventListener('dragstart', handleDragStart);
      element.addEventListener('drag', handleDrag);
      element.addEventListener('dragend', handleDragEnd);
    });

    return () => {
      svgChildElements.forEach((element) => {
        element.removeEventListener('dragstart', handleDragStart);
        element.removeEventListener('drag', handleDrag);
        element.removeEventListener('dragend', handleDragEnd);
      });
    };
  }, [props.src]);

  return (
    <VStack><Box
      border="1px solid rgba(180,220,220,1)"
      bgColor="white" boxSize="80vw"
      maxHeight="600px" maxWidth="600px"
      borderRadius="10px">
      <div className={styles.svgContainer} ref={divRef} dangerouslySetInnerHTML={{ __html: props.src }} />
    </Box>
      <HStack pt="10px" justifyContent="center">
        <IconButton _disabled={{ pointerEvents: "none" }} isDisabled={props.downloaded} backgroundColor={props.downloaded ? "lightgreen" : ""} isLoading={props.pendingReload || props.pendingDownload} onClick={props.handleDownload} aria-label='download-button' icon={props.downloaded ? <CheckIcon /> : <DownloadIcon />}></IconButton>
      </HStack>
    </VStack>)
}

export default SVGEditor;