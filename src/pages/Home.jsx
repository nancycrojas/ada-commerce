import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'

export const Home = () => {
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
        bg="#E8E8E6"
      >
        <Box>
          <Heading
            as="h1"
            fontWeight="normal"
            color="#BE3969"
            size={{ xl: 'lg', sm: 'lg' }}
          >
            <b>PROYECTO FINAL ADAITW</b>, UN ECOMMERCE PARA APRENDER Y APLICAR{' '}
            <b>TECNOLOGIAS WEB.</b>
          </Heading>
          <Button
            as="a"
            href="https://adaitw.org/"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="pink"
            variant="outline"
            border="2px"
            borderRadius="50px"
            // p={6}
            p={{ base: 2, md: 5 }}
            size={{ base: 'sm', md: 'md' }}
            mt={8}
          >
            VER MAS
          </Button>
        </Box>
        <Image
          width="340px"
          src="https://firebasestorage.googleapis.com/v0/b/ada-commerce.appspot.com/o/home.png?alt=media&token=1e932c55-fb61-48a0-9852-7c47ff202633"
          alt="persona comprando"
        />
      </Flex>
      <Box mt={8}>
        <Heading as="h2" size="lg">
          Los más buscados
        </Heading>
      </Box>
    </Flex>
  )
}
