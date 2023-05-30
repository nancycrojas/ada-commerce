import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../context/CartContext'

export const ProductCard = ({ product }) => {
  const { image, name, price, id } = product
  const { addProduct } = useContext(CartContext)
  const toast = useToast()

  const addProductToCart = (product, quantity) => {
    addProduct({
      ...product,
      quantity,
    })
    toast({
      title: 'Producto agregado',
      status: 'success',
      colorScheme: 'pink',
      duration: 2500,
      isClosable: false,
    })
  }

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md" fontWeight={400}>
            {name}
          </Heading>
          <Text fontWeight={300} fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup
          spacing="2"
          display="flex"
          flexDirection={{
            base: 'column',
            sm: 'row',
            md: 'row',
            lg: 'row',
            xl: 'row',
          }}
        >
          <Button
            as={Link}
            to={id}
            variant="solid"
            bg="black"
            color="white"
            textTransform="uppercase"
            _hover={{
              transform: 'translateY(1px)',
              boxShadow: 'lg',
            }}
          >
            Ver Detalles
          </Button>
          <Button
            variant="ghost"
            color="#BE3969"
            onClick={() => addProductToCart(product, 1)}
          >
            Agregar al carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
