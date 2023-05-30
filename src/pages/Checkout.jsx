import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

export const Checkout = () => {
  return (
    <SimpleGrid p={{ base: '0', md: '24px' }}>
      <Heading as="h2" size="lg" fontWeight="normal" pl={6}>
        Finalizar Compra
      </Heading>
      <SimpleGrid p={6} gap={6} columns={{ base: 1, md: 2 }}>
        <Stack>
          <Card
            direction={{ base: 'row', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            maxH="170px"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100px', sm: '150px' }}
              maxH={{ base: '100%', sm: '150px' }}
              src={'image'}
              alt={'name'}
            />
            <Stack>
              <CardBody mt="0">
                <Heading size="sm">{'name'}</Heading>
                <Text>
                  {'quantity'} x ${'price'}
                </Text>
                <Text>Total: ${'price' * 'quantity'}</Text>
                <Button variant="solid" colorScheme="blue" size="xs">
                  Eliminar
                </Button>
              </CardBody>
            </Stack>
          </Card>
        </Stack>
        <Stack>
          <form>
            <Heading as="h2" size="md" fontWeight="normal" pb={6}>
              Información para la entrega
            </Heading>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="
                text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Dirección</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Provincia</FormLabel>
              <Input
                type="
                text"
              />
            </FormControl>
            <HStack
              justifyContent="space-between"
              pt={4}
              fontSize="xl"
              fontWeight="semibold"
            >
              <Text>Total:</Text>
              <Text>$</Text>
            </HStack>
          </form>
          <Button
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
          >
            Confirmar Compra
          </Button>
        </Stack>
      </SimpleGrid>
    </SimpleGrid>
  )
}
