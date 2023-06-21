import logo from './logo.svg';
import 'C:/Users/cgvak/Desktop/React/acecart/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import { Route,Routes } from 'react-router-dom';
import SchoolPage from './Components/SchoolPage/SchoolPage';

function App() {
  return (
    <div className="App">
        <HomePage />
        <Routes>
          <Route exact path='/' element={<SecondSection />} />
          <Route path="/school" element={<SchoolPage />} />
        </Routes>
    </div>
  );
}

export default App;
