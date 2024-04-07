import 'animate.css'

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { IsLoading } from '../components/IsLoading'
import { ProductCard } from '../components/ProductCard'
import { getAllProducts } from '../services/products'

export const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await getAllProducts()
        setProducts(products.slice(0, 4))
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Flex flexDirection="column" m={{ base: '10px', md: '30px' }}>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        align="center"
        p={{
          base: '30px 20px',
          sm: '30px 50px 20px 80px',
          md: '40px 20px 40px 120px',
          lg: '40px 90px 40px 160px ',
        }}
        bg="background"
        minH={400}
      >
        <Box>
          <Heading
            className="animate__animated animate__slideInLeft"
            as="h1"
            fontWeight="normal"
            color="brand.500"
            size={{ xl: 'lg', sm: 'lg' }}
          >
            <b>PROYECTO FINAL ADAITW</b>, UN ECOMMERCE PARA APRENDER Y APLICAR{' '}
            <b>TECNOLOGIAS WEB.</b>
          </Heading>
          <Button
            className="animate__animated animate__slideInRight"
            as="a"
            href="https://adaitw.org/"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="brand"
            variant="outline"
            border="2px"
            borderRadius="50px"
            p={{ base: 2, md: 5 }}
            size={{ base: 'sm', md: 'md' }}
            mt={8}
          >
            VER MAS
          </Button>
        </Box>
        <Box position="relative">
          <Image
            className="animate__animated animate__slideInRight"
            w={{ base: '340px', md: '640px' }}
            src="https://firebasestorage.googleapis.com/v0/b/ada-commerce.appspot.com/o/home.png?alt=media&token=b65c8096-649f-4a88-8021-4f05148ec409&_gl=1*p87ftk*_ga*ODgwODUwMTE3LjE2ODM3NTczMDA.*_ga_CW55HF8NVT*MTY4NTg3NTEyMy43MC4xLjE2ODU4NzU5MjkuMC4wLjA."
            alt="persona comprando"
          />
          {showLogo && (
            <Image
              className="animate__animated animate__fadeIn"
              src="/logo-react.png"
              alt="Logo de React"
              position="absolute"
              top="0"
              right="0"
              w="50px"
            />
          )}
        </Box>
      </Flex>
      <Box mt={8}>
        <Heading as="h2" size="lg" pb={8}>
          Los más buscados
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={2}>
          {error && <Text>Ha ocurrido un error</Text>}
          {loading && <IsLoading />}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {!loading && !products.length && (
            <Text>No se encontraron productos</Text>
          )}
        </SimpleGrid>
      </Box>
    </Flex>
  )
}
