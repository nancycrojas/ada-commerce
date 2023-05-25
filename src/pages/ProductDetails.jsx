import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getProductById } from '../services/products'

export const ProductDetails = () => {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const productData = await getProductById(id)
        setProduct(productData)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [id])

  return (
    <Container maxW="5xl">
      {loading ? (
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Spinner
            thickness="3px"
            speed="0.65s"
            emptyColor="gray.200"
            color="pink.600"
            size="lg"
          />
        </Flex>
      ) : error ? (
        <Text textAlign="center">
          Error al cargar los detalles del producto
        </Text>
      ) : (
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              src={product?.image}
              alt={product?.name}
              borderRadius="lg"
              fit="cover"
              w="100%"
              h={{ base: '100%', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as="header">
              <Heading
                fontWeight="normal"
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
              >
                {product?.name}
              </Heading>
              <Text fontWeight={300} fontSize="2xl">
                ${product?.price}
              </Text>
            </Box>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction="column"
              divider={<StackDivider borderColor="gray.300" />}
            >
              <Text fontSize="2xl" fontWeight={300}>
                {product?.description}
              </Text>

              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color="#D69E2E"
                  fontWeight={500}
                  textTransform="uppercase"
                  mb={4}
                >
                  Categoria
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <Text spacing={2}>{product?.category}</Text>
                </SimpleGrid>
              </Box>
            </Stack>

            <Button
              w="full"
              size="lg"
              py={7}
              bg="black"
              color="white"
              textTransform="uppercase"
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
            >
              Agregar al Carrito
            </Button>
          </Stack>
        </SimpleGrid>
      )}
    </Container>
  )
}
