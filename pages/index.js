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

export default function Home() {
  return (
    <Main title="Dashboard">
      <Text mb={3}>My Subs</Text>

      <SubItem />
      <SubItem />

      <NextLink href="./sign-in">
        <Link>Go to SignIN</Link>
      </NextLink>

      <NextLink href="./sign-up">
        <Link>Go to SignUP</Link>
      </NextLink>
    </Main>
  )
}
