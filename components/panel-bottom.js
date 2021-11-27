import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Flex,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import {  PlusSquareIcon, HamburgerIcon, SettingsIcon } from '@chakra-ui/icons'
import AddItemForm from './add-item-form'

export default function PanelBottom() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

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

      <button ref={btnRef} onClick={onOpen}>
        <PlusSquareIcon w={6} h={6} />
      </button>

      <NextLink href="./settings">
        <Link>
          <SettingsIcon w={6} h={6} />
        </Link>
      </NextLink>

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        w="full"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add new subscription</DrawerHeader>

          <DrawerBody>
            <AddItemForm />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            {/* <Button form="add-item" type="submit" colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <style global jsx>{`
        .chakra-slide {
          height: 95vh !important;
        }
        input {
          background: lightgray;
        }
      `}</style>
    </Flex>
  )
}