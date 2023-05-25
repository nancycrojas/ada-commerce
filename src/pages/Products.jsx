import { Flex, Spinner, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { ProductCard } from '../components/ProductCard'
import { getAllProducts } from '../services/products'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await getAllProducts()
        setProducts(products)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  return (
    <Flex flexWrap="wrap" justifyContent="center" gap={4} m={6}>
      {error && <Text>Ha ocurrido un error</Text>}
      {loading && (
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
          <Text>Cargando ...</Text>
        </Flex>
      )}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {!loading && !products.length && <Text>No se encontraron productos</Text>}
    </Flex>
  )
}
