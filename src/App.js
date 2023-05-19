import { Container } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react';
import Trivia from "./components/Trivia"
import customTheme from "./theme/customTheme";


const App = () => {
  
  return (
    <ChakraProvider theme={customTheme}>
      <Container>
        <Trivia />
      </Container>
    </ChakraProvider> 
  )
}

export default App