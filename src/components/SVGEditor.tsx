import { Box, Button, Flex, FlexProps } from '@chakra-ui/react'
import { useEffect, useRef } from 'react';
import { ReactSVG } from 'react-svg';
import src from '../examples/example1';

import styles from './SVGEditor.module.css';

const SVGEditor = (props) => {
    
    const divRef = useRef(null);
    useEffect(() => {
        const svgElement = divRef.current.querySelector('svg');
        svgElement.setAttribute('style', 'width:100%;height:100%;');
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
      }, []);
    
    return (<Box
        border="1px solid rgba(180,220,220,1)"
        bgColor="white" boxSize="600px"
        margin="100px" borderRadius="10px">
        <div ref={divRef} dangerouslySetInnerHTML={{ __html: src }} />
    </Box>)
}

export default SVGEditor;