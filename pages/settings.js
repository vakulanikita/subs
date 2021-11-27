import NextLink from 'next/link'
import Main from '../components/layouts/main'
import { 
  Text,
  Container,
  Box,
  Flex,
  Heading,
  Alert,
  AlertIcon,
  Link
} from "@chakra-ui/react"
import PanelBottom from '../components/panel-bottom'

export default function Settings() {
  return (
    <Main title="Dashboard">
      <Heading
        as="h3"
        fontSize="2xl"
        mb={3}
      >
        Settings
      </Heading>

      <Box  flexGrow={1}>
        There is nothing to configure
      </Box>

      <PanelBottom />
    </Main>
  )
}