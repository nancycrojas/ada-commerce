import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  SimpleGrid,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'

import { loginWithEmail } from '../../services/auth'

export const Login = () => {
  const { register, handleSubmit, formState } = useForm()

  const { errors, isSubmitting } = formState

  const onSubmit = async (data) => {
    try {
      const user = await loginWithEmail(data)
      console.log(user)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SimpleGrid
      h="100vh"
      templateColumns={{ base: '1fr', md: '1fr 1fr' }}
      position="relative"
    >
      <Flex justifyContent="center" align="center" p={2}>
        <Button
          position="absolute"
          top="4"
          left="4"
          as={NavLink}
          fontWeight="semibold"
          to="/"
          _hover={{ color: '#BE3969' }}
        >
          Volver
        </Button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading as="h1" mb={4} color="#BE3969" textAlign="center">
            Iniciar Sesión
          </Heading>
          <Button type="button" mb={4} w="full">
            <Link mr={2}>
              <FcGoogle size={20} />
            </Link>
            Continuar con Google
          </Button>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              {...register('email', {
                required: 'Este campo es requerido',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Este email no es válido',
                },
              })}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel mt={2}>Contraseña</FormLabel>
            <Input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              {...register('password', {
                required: 'Este campo es requerido',
                minLength: {
                  value: 6,
                  message: 'El mínimo de caracteres es 6',
                },
              })}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            <Button type="submit" mt={4} w="full" isLoading={isSubmitting}>
              Iniciar Sesión
            </Button>
            <Flex justifyContent="center" mt={3}>
              <Link
                as={NavLink}
                fontWeight="semibold"
                to="/registro"
                _hover={{ color: '#BE3969' }}
              >
                Registrarse
              </Link>
            </Flex>
          </FormControl>
        </form>
      </Flex>
      <Box bg="gray.200" display={{ base: 'none', md: 'block' }} />
    </SimpleGrid>
  )
}
