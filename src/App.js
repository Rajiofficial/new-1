import Addimage from './Addimage';
import './App.css';
import Imagegallery from './Imagegallery';
import View from './View';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (


       
<BrowserRouter>
<Routes>
<Route path='/' element={<Imagegallery/>}/>
<Route path='/add' element={<Addimage/>}/>
<Route path='/view' element={<View/>}/>




</Routes>


</BrowserRouter>
  

  );
}

export default App;
