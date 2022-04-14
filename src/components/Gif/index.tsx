import React from 'react';
import {
    Box, Image,
} from '@chakra-ui/react';

type GifProps = {
    title: string;
    url: string;
};

function Gif({ title, url }: GifProps) {
    return (
        <Box>
            <Image boxSize="300px" mx="auto" src={url} alt={title} />
        </Box>
    );
}

export default Gif;
