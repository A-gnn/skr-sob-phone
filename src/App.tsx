import React from 'react';
import { BrowserRouter ,Outlet} from 'react-router-dom';
import Denglu from './Pages/Denglu';
import Router from '../src/router/router'
// import All from './Pages/All';
// import Zhuce from 'Pagess/Zhuce';
// import One from 'Pagess/One'
function App() {
  return (
    <div >

      <BrowserRouter>
      {/* <Denglu />  */}
      <Router/>
      {/* <One/> */}
      </BrowserRouter>
      
       
       {/* <All/> */}
      
    </div>
  );
}

export default App;
