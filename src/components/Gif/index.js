import React from 'react';
import {
    Box, Image,
} from '@chakra-ui/react';

function Gif({ title, url }) {
    return (
        <Box>
            <Image boxSize="300px" mx="auto" src={url} alt={title} />
        </Box>
    );
}

export default Gif;
