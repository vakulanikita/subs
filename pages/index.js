import Head from 'next/head'
import Image from 'next/image'
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
import SubItem from '../components/sub-item'
import PanelBottom from '../components/panel-bottom'

export default function Home() {

  return (
    <Main title="Dashboard">
      <Heading
        as="h3"
        fontSize="2xl"
        mb={3}
      >
        Your <br /> Subscriptions
      </Heading>

      <Box flexGrow={1}>
        <SubItem />
        <SubItem />

        <NextLink href="./sign-in">
          <Link>Go to SignIN</Link>
        </NextLink>
        <br />
        <NextLink href="./sign-up">
          <Link>Go to SignUP</Link>
        </NextLink>
      </Box>


      <PanelBottom />
    </Main>
  )
}
