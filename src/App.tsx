// import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { 
  ChakraProvider,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Card />
    </ChakraProvider>
  );
}

export default App;
