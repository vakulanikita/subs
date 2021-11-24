import {
  Box,
  Flex
} from '@chakra-ui/react'

export default function SubItem() {
  return(
    <Flex
      mb={3}
      p={3}
      border="1px"
      justify="space-between"
      alignItems="center"
      borderRadius={8}
    >
      <Flex>
        <Flex
          borderRadius={8}
          w={10}
          h={10}
          fontSize={24}
          mr={3}
          bg="tomato"
          justify="center"
          alignItems="center"
        >
          S
        </Flex>
        <Flex flexDir="column">
          <Box fontSize={14}>Spotify</Box>
          <Box fontSize={12}>22 dec 2021</Box>
        </Flex>
      </Flex>
      <Box>
        75₽
      </Box>
    </Flex>
  )
}