import 'animate.css'

import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Badge,
  Button,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Show,
  useDisclosure,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { BsBagHeart } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import { CartDrawer } from './CartDrawer'

export const Header = () => {
  const { user, handleLogout } = useContext(UserContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart } = useContext(CartContext)

  return (
    <HStack justifyContent="space-between" p={4} px={{ base: 3, md: 7 }}>
      <Show below="md">
        <Menu>
          <MenuButton as={IconButton} icon={<HamburgerIcon size={15} />} />
          <Portal>
            <MenuList>
              <MenuItem as={NavLink} to="/">
                INICIO
              </MenuItem>
              <MenuItem as={NavLink} to="/productos">
                PRODUCTOS
              </MenuItem>
              {!user ? (
                <>
                  <MenuItem as={NavLink} to="/iniciar-sesion">
                    Iniciar Sesión
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem as={NavLink} to="/mi-cuenta/pedidos">
                    Mis Pedidos
                  </MenuItem>
                  <MenuItem onClick={() => handleLogout()}>
                    Cerrar Sesión
                  </MenuItem>
                </>
              )}
            </MenuList>
          </Portal>
        </Menu>
      </Show>
      <Heading
        as={NavLink}
        to="/"
        color="#BE3969"
        fontSize={{ base: '18px', sm: '24px', md: '36px', lg: '36px' }}
      >
        AdaCommerce
      </Heading>
      <HStack gap={6}>
        <Show above="md">
          <HStack as="nav" gap={6}>
            <Link
              as={NavLink}
              fontWeight="semibold"
              to="/"
              _hover={{ color: '#BE3969' }}
            >
              INICIO
            </Link>
            <Link
              as={NavLink}
              fontWeight="semibold"
              to="/productos"
              _hover={{ color: '#BE3969' }}
            >
              PRODUCTOS
            </Link>
          </HStack>
        </Show>
        <HStack gap={6}>
          <Show above="md">
            {!user ? (
              <Button>
                <Link
                  as={NavLink}
                  to="/iniciar-sesion"
                  _hover={{ color: '#BE3969' }}
                >
                  Iniciar Sesión
                </Link>
              </Button>
            ) : (
              <Menu>
                <MenuButton as={Button}>
                  <FaUserAlt size={15} />
                </MenuButton>
                <Portal>
                  <MenuList>
                    <MenuItem as={NavLink} to="/mi-cuenta/pedidos">
                      Mis Pedidos
                    </MenuItem>
                    <MenuItem onClick={() => handleLogout()}>
                      Cerrar Sesión
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            )}
          </Show>
          <IconButton
            _hover={{ color: '#BE3969' }}
            icon={<BsBagHeart size={20} />}
            onClick={onOpen}
          />
          {cart.length > 0 && (
            <Badge
              position="absolute"
              top={2}
              right={{ md: 5, base: 1 }}
              borderRadius="full"
              color="white"
              bg="#BE3969"
              w="20px"
              h="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {cart.length}
            </Badge>
          )}
        </HStack>
      </HStack>
      <CartDrawer isOpen={isOpen} onClose={onClose} />
    </HStack>
  )
}
