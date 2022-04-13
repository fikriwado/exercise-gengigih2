import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box, InputGroup, Input, Button,
} from '@chakra-ui/react';
import { getGifs } from '../../utils/fetchApi';
import { setQuery } from '../../redux/searchSlice';

function Searchbar({ handleResultGifs }) {
    const { query } = useSelector((state) => state.search);
    const dispatch = useDispatch();

    const handleSubmit = async() => {
        const images = await getGifs(query, 12);
        handleResultGifs(images);
    };

    return (
        <Box w="350px" mx="auto" mt={10} mb={4}>
            <InputGroup>
                <Input type="text" onChange={(e) => dispatch(setQuery(e.target.value))} />
                <Button px={6} ml={2} bg="orange.400" color="white" onClick={handleSubmit}>Search</Button>
            </InputGroup>
        </Box>
    );
}

export default Searchbar;
