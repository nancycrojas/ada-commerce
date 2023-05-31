import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { CartItem } from '../components/CartItem'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

export const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext)
  const { user } = useContext(UserContext)

  const { register, handleSubmit, formState } = useForm()

  const { errors, isSubmitting, isDirty } = formState
  const navigate = useNavigate()

  const toast = useToast()

  const onSubmitOrder = (data) => {
    console.log(data)
    navigate('/mi-cuenta')
    toast({
      title: 'Tu orden fue creada con éxito',
      status: 'success',
      colorScheme: 'pink',
      duration: 2500,
    })
    clearCart()
  }

  return (
    <SimpleGrid p={{ base: '0', md: '24px' }}>
      <Heading as="h2" size="lg" fontWeight="normal" pl={6}>
        Finalizar Compra
      </Heading>
      <SimpleGrid p={6} gap={6} columns={{ base: 1, md: 2 }}>
        {cart.length === 0 ? (
          <Text>No hay productos en tu carrito</Text>
        ) : (
          <Stack>
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </Stack>
        )}
        <Stack>
          <form onSubmit={handleSubmit(onSubmitOrder)}>
            <SimpleGrid gap={4}>
              <Heading as="h2" size="md" fontWeight="normal">
                Información para la entrega
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
                  defaultValue={user.email}
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
              <FormControl isInvalid={errors.address}>
                <FormLabel htmlFor="address">Dirección</FormLabel>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  size="sm"
                  autoComplete="off"
                  {...register('address', {
                    required: 'Este campo es requerido',
                    minLength: {
                      value: 3,
                      message: 'El mínimo de caracteres es 3',
                    },
                  })}
                />
                <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.province}>
                <FormLabel htmlFor="province">Provincia</FormLabel>
                <Input
                  type="text"
                  name="province"
                  id="province"
                  size="sm"
                  autoComplete="off"
                  {...register('province', {
                    required: 'Este campo es requerido',
                    minLength: {
                      value: 3,
                      message: 'El mínimo de caracteres es 3',
                    },
                  })}
                />
                <FormErrorMessage>{errors.province?.message}</FormErrorMessage>
              </FormControl>
              <HStack
                justifyContent="space-between"
                fontSize="xl"
                fontWeight="semibold"
              >
                <Text>Total:</Text>
                <Text>$</Text>
              </HStack>
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
                isLoading={isSubmitting}
                isDisabled={!isDirty}
              >
                Confirmar Compra
              </Button>
            </SimpleGrid>
          </form>
        </Stack>
      </SimpleGrid>
    </SimpleGrid>
  )
}
