import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './services/appoloClient';
import HomePage from './pages/HomePage';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <HomePage />
        <ProductCard />
      </div>
    </ApolloProvider>
  );
}

export default App;
