import './styles/tailwind.css';
import { Fragment } from 'react';
import Head from './componets/Head/Head';
import { Route, Routes } from 'react-router-dom'
import Home from './componets/Pages/Home';
import About from './componets/Pages/About';

function App() {
  return (
    <Fragment>
      <Head/>
      <Routes>
      <Route path='/' element={<Home/>} exact>
      </Route>
      <Route path='/about' element={<About/>} exact>
      </Route>
      </Routes>
      
      
    </Fragment>

  );
}

export default App;

