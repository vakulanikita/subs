import NextLink from 'next/link'
import Main from '../components/layouts/main'
import { 
  Text,
  Container,
  Box,
  Button,
  Flex,
  Heading,
  Alert,
  AlertIcon,
  Link
} from "@chakra-ui/react"
import PanelBottom from '../components/panel-bottom'
import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons'

export default function Settings() {
  return (
    <Main title="Dashboard">
      <Heading
        as="h3"
        fontSize="2xl"
        mb={5}
      >
        Settings
      </Heading>

      <Box  flexGrow={1}>
        <Button
          justifyContent="space-between"
          alignItems="center"
          w="full"
          rightIcon={<ChevronRightIcon />}
          mb={1}>
          <Flex alignItems="center">
            <StarIcon mr={1} />
            <Text lineHeight="none">Get Premium</Text>
          </Flex>
        </Button>

        <Text fontSize="xs" px={3} mb={4} lineHeight="shorter">
          Support the development and get all the features without restrictions by
          purchasing the Premium version.
        </Text>

        <Button fontSize="xs" w="full" justifyContent="space-between">
          <Text>Feedback</Text>
          <Text color="spacejelly.700">info@nikitavakula.com</Text>
        </Button>

      </Box>

      <PanelBottom />
    </Main>
  )
}