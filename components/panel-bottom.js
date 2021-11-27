import NextLink from 'next/link'
import { Box, Button, Flex, Link } from '@chakra-ui/react'
import {  PlusSquareIcon, HamburgerIcon, SettingsIcon } from '@chakra-ui/icons'

export default function PanelBottom() {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      h={50}
    > 
      <NextLink href="./">
        <Link>
          <HamburgerIcon w={6} h={6} />
        </Link>
      </NextLink>

      <button>
        <PlusSquareIcon w={6} h={6} />
      </button>

      <NextLink href="./settings">
        <Link>
          <SettingsIcon w={6} h={6} />
        </Link>
      </NextLink>
    </Flex>
  )
}