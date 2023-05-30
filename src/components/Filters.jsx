import {
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
} from '@chakra-ui/react'

export const Filters = () => {
  return (
    <SimpleGrid
      w="full"
      columns={{ base: 1, md: 3 }}
      gap={{ base: 4, md: 9 }}
      p={{ base: '20px 20px', md: '20px 80px' }}
    >
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input name="name" type="text" placeholder="Buscar" />
      </FormControl>
      <FormControl>
        <FormLabel>Categoría</FormLabel>
        <Select>
          <option value="seleccionar">Seleccionar</option>
          <option value="calzado">Calzado</option>
          <option value="accesorios">Accesorios</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Precio Máximo</FormLabel>
        <Input placeholder="Hasta" />
      </FormControl>
    </SimpleGrid>
  )
}
