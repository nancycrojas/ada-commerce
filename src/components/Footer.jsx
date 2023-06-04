import { HStack, Link, Text } from '@chakra-ui/react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <HStack
      h={200}
      bg="#111111"
      flexDirection="column"
      justifyContent="center"
      gap={4}
      textAlign="center"
    >
      <HStack gap={6}>
        <Link
          w="30px"
          h="30px"
          borderRadius="50%"
          bg="#7E7E7E"
          href="https://www.instagram.com/"
          target="_blank"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={20}
        >
          <BsInstagram />
        </Link>
        <Link
          w="30px"
          h="30px"
          borderRadius="50%"
          bg="#7E7E7E"
          href="https://www.facebook.com/"
          target="_blank"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={20}
        >
          <FaFacebookF />
        </Link>
        <Link
          w="30px"
          h="30px"
          borderRadius="50%"
          bg="#7E7E7E"
          href="https://twitter.com/"
          target="_blank"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={20}
        >
          <FaTwitter />
        </Link>
      </HStack>
      <Text color="#7E7E7E">Proyecto final © 2023 AdaCommerce</Text>
      <Text color="#7E7E7E">
        Hecho con ❤️ por{' '}
        <Link
          as="a"
          href="https://www.linkedin.com/in/nancy-clarisa-rojas/"
          target="_blanck"
        >
          Nancy Rojas
        </Link>
      </Text>
    </HStack>
  )
}
