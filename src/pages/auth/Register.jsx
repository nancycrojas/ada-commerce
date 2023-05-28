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
  Text,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { NavLink, useNavigate } from 'react-router-dom'

import { loginWithGoogle, registerUser } from '../../services/auth'

export const Register = () => {
  const { register, handleSubmit, formState } = useForm()

  const { errors, isSubmitting } = formState
  const navigate = useNavigate()
  const toast = useToast()

  const onSubmit = async (data) => {
    try {
      const user = await registerUser(data)
      console.log(user)
      if (user) {
        navigate('/')
        toast({
          title: 'Cuenta creada exitosamente',
          status: 'success',
          colorScheme: 'pink',
          duration: 2500,
          isClosable: false,
        })
      } else {
        throw new Error('Error al crear la cuenta')
      }
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error al crear la cuenta',
        status: 'error',
        colorScheme: 'pink',
        duration: 2500,
        isClosable: false,
      })
    }
  }

  const handleRegisterWithGoogle = async () => {
    try {
      const user = await loginWithGoogle()
      if (user) {
        navigate('/productos')
        toast({
          title: 'Cuenta creada exitosamente',
          status: 'success',
          colorScheme: 'pink',
          duration: 2500,
          isClosable: false,
        })
      }
    } catch (error) {
      toast({
        title: 'Error en el inicio de sesión',
        status: 'error',
        colorScheme: 'pink',
        duration: 2500,
        isClosable: false,
      })
    }
  }

  return (
    <SimpleGrid h="100vh" templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
      <Flex justifyContent="center" align="center" p={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading as="h1" mb={4} color="#BE3969" textAlign="center">
            Crear cuenta
          </Heading>
          <Button
            type="button"
            mb={4}
            w="full"
            onClick={handleRegisterWithGoogle}
          >
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
              Crear Cuenta
            </Button>
            <Flex justifyContent="center" mt={3} gap={2}>
              <Text>¿Ya tenes cuenta?</Text>
              <Link
                as={NavLink}
                fontWeight="semibold"
                to="/iniciar-sesion"
                _hover={{ color: '#BE3969' }}
              >
                Iniciar Sesión
              </Link>
            </Flex>
          </FormControl>
        </form>
      </Flex>
      <Box bg="gray.200" display={{ base: 'none', md: 'block' }} />
    </SimpleGrid>
  )
}
