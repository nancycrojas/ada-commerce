import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'

export const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Mi Carrito</DrawerHeader>

        <DrawerBody></DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3}>
            Vaciar Carrito
          </Button>
          <Button
            bg="#BE3969"
            color="white"
            _hover={{
              boxShadow: 'lg',
            }}
          >
            Finalizar Compra
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
