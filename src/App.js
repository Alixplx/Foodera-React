import { Fragment } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navs from './components/Navs/Navs';

function App() {
  return (

    <div className="App">

      <Fragment>

        <Navs />
        <Home />  
        
      </Fragment>  

    </div>
  );
}

export default App;
