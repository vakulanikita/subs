import Head from 'next/head'
import Image from 'next/image'
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
    <>
    {/* <= 768px content */}
    <Container
      display={['block', 'block', 'none']}
      bg="lightgray"
      pt={5}
      h="100vh"
      color="spacejelly"
    >
      <Text mb={3}>My Subs</Text>
      
      <SubItem />
      <SubItem />

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
