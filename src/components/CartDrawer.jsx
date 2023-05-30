import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react'
import { useContext } from 'react'

import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'

export const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, clearCart } = useContext(CartContext)

  const cartProducts = cart.reduce((accProducts, product) => {
    const { id, quantity } = product
    if (accProducts[id]) {
      accProducts[id].quantity += quantity
    } else {
      accProducts[id] = { ...product }
    }
    return accProducts
  }, {})

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Mi Carrito</DrawerHeader>

        <DrawerBody>
          {!cart.length && <Text>No hay productos en el carrito</Text>}
          {cart &&
            Object.values(cartProducts).map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
        </DrawerBody>

        <DrawerFooter>
          {cart.length > 0 && (
            <>
              <Button
                variant="outline"
                mr={3}
                onClick={clearCart}
                fontSize={{ base: '12px', sm: '16px', md: '16px', lg: '16px' }}
              >
                Vaciar Carrito
              </Button>
              <Button
                bg="#BE3969"
                color="white"
                _hover={{
                  boxShadow: 'lg',
                }}
                fontSize={{ base: '12px', sm: '16px', md: '16px', lg: '16px' }}
              >
                Finalizar Compra
              </Button>
            </>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
