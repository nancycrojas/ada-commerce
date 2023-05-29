import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useContext } from 'react'

import { CartContext } from '../context/CartContext'

export const CartItem = ({ product }) => {
  const { name, image, quantity, price, id } = product
  const { removeProduct } = useContext(CartContext)

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      maxH={{ base: '100%', sm: '150px' }}
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '150px' }}
        maxH={{ base: '100%', sm: '150px' }}
        src={image}
        alt={name}
      />

      <Stack>
        <CardBody>
          <Heading size="sm">{name}</Heading>
          <Text>
            {quantity} x ${price}
          </Text>
          <Text>Total: ${price * quantity}</Text>
          <Button
            variant="solid"
            colorScheme="blue"
            size="xs"
            onClick={() => removeProduct(id)}
          >
            Eliminar
          </Button>
        </CardBody>
      </Stack>
    </Card>
  )
}
