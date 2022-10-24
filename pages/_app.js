import { ChakraProvider } from '@chakra-ui/react';
import '../assets/main.css';

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />

        </ChakraProvider>
    );
}