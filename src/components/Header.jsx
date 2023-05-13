import { Button, Heading, HStack, IconButton, Link } from '@chakra-ui/react'
import { BsBagHeart } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export const Header = () => {
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
        <Button>
          <Link as={NavLink} to="/iniciar-sesion" _hover={{ color: '#BE3969' }}>
            Iniciar Sesión
          </Link>
        </Button>
        <IconButton>
          <Link as={NavLink} to="/carrito" _hover={{ color: '#BE3969' }}>
            <BsBagHeart size={20} />
          </Link>
        </IconButton>
      </HStack>
    </HStack>
  )
}
