import Head from 'next/head'
import {
  Container,
  Box,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'

export default function Main({ children, title = "page", align = "left" }) {
  return (
    <>
      <Head>
        <title>Subs | {title}</title>
      </Head>
      {/* <= 768px content */}
      <Container
        display={['flex', 'flex', 'none']}
        flexDir="column"
        flexShrink={0}
        py={2}
        h="100vh"
        color="spacejelly"
        align={align}
      >
        { children }
      </Container>

      {/* >768px content */}
      <Container
        display={['none', 'none', 'block']}
        pt={8}
      >
        <Alert status="warning"><AlertIcon />Subs доступно только на мобильных устройствах</Alert>
      </Container>
    </>

  )
}