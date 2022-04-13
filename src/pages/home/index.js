import React from 'react';
import {
    Container, Box, Heading, Image,
} from '@chakra-ui/react';

function Home() {
    return (
        <Container maxW="2xl" centerContent>
            <Box p={4} color="gray.900">
                <Heading as="h1">Selamat Datang di Home</Heading>
                <Image boxSize="300px" mx="auto" mt="5" src="https://avatars.githubusercontent.com/u/60835073?v=4" alt="profil" />
            </Box>
        </Container>
    );
}

export default Home;
