import logo from './logo.svg';
import 'C:/Users/cgvak/Desktop/React/acecart/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import { Route,Routes } from 'react-router-dom';
import SchoolPage from './Components/SchoolPage/SchoolPage';
import { CartProvider } from 'react-use-cart';
import SchoolUniformProducts from './Components/SchoolPage/SchoolProductsSecond';

function App() {
  return (
    <div className="App">
        <CartProvider>
        <SchoolUniformProducts></SchoolUniformProducts>
        </CartProvider>
    </div>
  );
}

export default App;
