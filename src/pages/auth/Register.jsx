import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useState } from 'react'

import { register } from '../../services/auth'

export const Register = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const user = await register(values)
    console.log(user)
  }

  return (
    <Flex p={5}>
      <form onSubmit={onSubmit}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <Button type="submit" mt={4}>
            Crear Cuenta
          </Button>
        </FormControl>
      </form>
    </Flex>
  )
}
