import React from 'react';
import {
    Container, Box, Heading,
} from '@chakra-ui/react';
import Gif from '../Gif';

function Gifs({ gifs }) {
    return (
        <Container p={4} maxW="2xl" centerContent>
            {gifs.map((item, index) => (
                <Box p={4} mb={5} key={index}>
                    <Gif url={item.images.fixed_width.url} title={item.title} />
                    <Heading as="h4" mt={4} size="md">{item.title}</Heading>
                </Box>
            ))}
        </Container>
    );
}

export default Gifs;
