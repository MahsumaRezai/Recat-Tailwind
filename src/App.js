import './styles/tailwind.css';
import { Fragment } from 'react';
import Head from './componets/Head/Head';
import { Route, Routes } from 'react-router-dom'
import Home from './componets/Pages/Home';
import Footer from './componets/Footer/Footer';
import Lesson from './componets/Pages/Lesson';


function App() {
  return (
    <Fragment>
      <Head/>
      <Routes>
      <Route path='/' element={<Home/>} exact>
      </Route>
      <Route path='/Lesson' element={<Lesson/>} exact>
      </Route>
      
      </Routes>
      <Footer/>
    </Fragment>

  );
}

export default App;

