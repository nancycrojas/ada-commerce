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
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {
  const { image, name, description, price, id } = product
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md" fontWeight={400}>
            {name}
          </Heading>
          <Text fontWeight={300} fontSize="lg">
            {description}
          </Text>
          <Text fontWeight={300} fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
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
          <Button variant="ghost" color="#BE3969">
            Agregar al carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
