import {
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
  useDisclosure,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { BsBagHeart } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import { UserContext } from '../context/UserContext'
import { CartDrawer } from './CartDrawer'

export const Header = () => {
  const { user, handleLogout } = useContext(UserContext)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HStack justifyContent="space-between" p={4}>
      <Heading color="#BE3969">AdaCommerce</Heading>
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
                <MenuItem>Mis Pedidos</MenuItem>
                <MenuItem onClick={() => handleLogout()}>
                  Cerrar Sesión
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        )}
        <IconButton
          _hover={{ color: '#BE3969' }}
          icon={<BsBagHeart size={20} />}
          onClick={onOpen}
        />
      </HStack>
      <CartDrawer isOpen={isOpen} onClose={onClose} />
    </HStack>
  )
}
