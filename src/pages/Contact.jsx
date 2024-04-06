import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../context/UserContext'
import { createContact } from '../services/products'

export const Contact = () => {
  const { user } = useContext(UserContext)

  const { register, handleSubmit, formState } = useForm()

  const { errors, isDirty } = formState
  const navigate = useNavigate()

  const toast = useToast()

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await createContact({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      })
      toast({
        title: 'Tu mensaje fue enviado con éxito',
        status: 'success',
        colorScheme: 'pink',
        duration: 2500,
      })
      navigate('/')
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SimpleGrid p={{ base: '0', md: '24px' }}>
      <SimpleGrid p={6} gap={6} columns={{ base: 1, lg: 2 }}>
        <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid gap={4}>
            <Heading
              as="h2"
              size="lg"
              fontWeight="normal"
              mb={{ base: '0', xl: '8' }}
            >
              Envianos un mensaje
            </Heading>
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name">Nombre</FormLabel>
              <Input
                type="text"
                name="name"
                id="name"
                size="sm"
                autoComplete="off"
                {...register('name', {
                  required: 'Este campo es requerido',
                  minLength: {
                    value: 3,
                    message: 'El mínimo de caracteres es 3',
                  },
                })}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                name="email"
                id="email"
                size="sm"
                defaultValue={user?.email}
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
            <FormControl isInvalid={errors.phone}>
              <FormLabel htmlFor="phone">Teléfono</FormLabel>
              <Input
                type="tel"
                name="phone"
                id="phone"
                size="sm"
                {...register('phone', {
                  required: 'Este campo es requerido',
                  minLength: {
                    value: 10,
                    message: 'Este teléfono no es válido',
                  },
                  pattern: {
                    value:
                      /^\+?([0-9]{1,3})?[-. (]?([0-9]{1,4})[-. )]?([-0-9]{1,7})$/,
                    message: 'Este teléfono no es válido',
                  },
                })}
              />
              <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.message}>
              <FormLabel htmlFor="message">Mensaje</FormLabel>
              <Textarea
                placeholder="Escribe tu consulta aquí"
                name="message"
                id="message"
                size="sm"
                autoComplete="off"
                {...register('message', {
                  required: 'Este campo es requerido',
                  minLength: {
                    value: 3,
                    message: 'El mínimo de caracteres es 3',
                  },
                })}
              />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            </FormControl>
            <HStack
              justifyContent="space-between"
              fontSize="xl"
              fontWeight="semibold"
            ></HStack>
            {error && <Text>Se produjo un error</Text>}
            <Button
              type="submit"
              w="full"
              size="lg"
              py={6}
              bg="black"
              color="white"
              textTransform="uppercase"
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              fontSize={{ base: '11px', sm: '18px', md: '18px', lg: '18px' }}
              isDisabled={!isDirty}
              mt={{ base: '0', xl: '8' }}
            >
              {loading ? 'Enviando ...' : 'Enviar'}
            </Button>
          </SimpleGrid>
        </Stack>
        <Stack
          w={{ base: '100%', lg: '70%' }}
          justifyContent="center"
          alignItems="center"
          h="auto"
          m="0 auto"
        >
          <Image
            w="100%"
            h="auto"
            src="/contact.png"
            alt="persona con mochila"
          />
        </Stack>
      </SimpleGrid>
    </SimpleGrid>
  )
}
