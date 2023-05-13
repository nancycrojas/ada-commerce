import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <VStack
      justifyContent="center"
      alignItems="center"
      flex={1}
      gap={6}
      textAlign="center"
    >
      <Heading size="4xl">404</Heading>
      <Text fontWeight="semibold">Esta página no está disponible</Text>
      <Text>
        Es posible que el enlace que seleccionaste no funcione o que se haya
        eliminado la página.
      </Text>
      <Button>
        <Link to="/">Volver a inicio</Link>
      </Button>
    </VStack>
  )
}
