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
} from '@chakra-ui/react'
import { useContext } from 'react'
import { BsBagHeart } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import { UserContext } from '../context/UserContext'

export const Header = () => {
  const { user, handleLogout } = useContext(UserContext)

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
            <MenuList>
              <MenuItem>Mis Pedidos</MenuItem>
              <MenuItem onClick={() => handleLogout()}>Cerrar Sesión</MenuItem>
            </MenuList>
          </Menu>
        )}
        <IconButton>
          <Link as={NavLink} to="/carrito" _hover={{ color: '#BE3969' }}>
            <BsBagHeart size={20} />
          </Link>
        </IconButton>
      </HStack>
    </HStack>
  )
}
