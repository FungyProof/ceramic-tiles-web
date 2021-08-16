import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react'
import React from 'react'

import Hero from './components/Hero'

const Home = () => {

  // if (error) return <strong>Error: {JSON.stringify(error)}</strong>

  return (
    <Box p={6}>
      <Hero />
      <Box width="100%"></Box>
    </Box>
  )
}

export default Home
