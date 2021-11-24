import {
  Box,
  Flex,
  Text
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
        <Flex flexDir="column" justify="space-between">
          <Box fontSize={15} lineHeight="shorter">Spotify</Box>
          <Box fontSize={12} lineHeight="short">22 dec 2021</Box>
        </Flex>
      </Flex>
      <Box>
        <Text as="span" mr={0.5}>75</Text>₽
      </Box>
    </Flex>
  )
}