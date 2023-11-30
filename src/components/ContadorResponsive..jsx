import React from 'react'
import { useState } from 'react'
import { Button} from '@chakra-ui/react'
import { Container, Text, Heading} from '@chakra-ui/react'


const Contador = () => {
const [contador,setContador]= useState(0)

const sumar = () => {
    setContador(contador +1)
}

const restar = () => {
    if(contador > 0)
    setContador(contador -1)
}
const reinicio = () => {
    setContador(0)
}


  return (
    <Container p="50px" shadow={"10px 10px 5px 0px rgba(0,0,0,0.75)"} border="5px solid gray" borderRadius={"30px"} maxW='md' mt="250px" centerContent bg='tomato' >
  
    <Heading fontSize='30px' centerContent bg='tomato' h='50px' color='white'>Contador</Heading>
  <Text  fontSize='30px' color={"white"} bg="tomato"   fontWeight='bold' as='span'>{contador}</Text>
    <Container maxW='container.sm' borderRadius='md' align='center'  mt="30px" bg='tomato' h='100px' color='white'>
    <Button ml="5px" colorScheme='blue' onClick={sumar}>Sumar</Button>
    <Button ml="5px" colorScheme='red' onClick={reinicio}>Reinicio</Button>
    <Button ml="5px" colorScheme='green' onClick={restar}>Restar</Button>
  </Container>
    
    </Container>
  )
}

export default Contador