
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './Components/Header/Header';
import Sidebar from './Components/sidebar/Sidebar';
import Homescreen from './Components/Screen/Homescreen/Homescreen';
import {  Routes , Route } from 'react-router-dom';
import WatchScreen from './Components/Screen/watchscreen/watchScreen';




function App() {
  return (
    <>
    <div className='App'>
  
  <Header/>
  
  <div className='app_container   mt-5 d-flex h-100'>
    <Sidebar/>
  
    <Container fluid className = "app_main  ">
      <Routes>
      <Route path="/" element={<Homescreen/>}/>
      {/* <Route path="/watchscreen" element={<WatchScreen/>}/> */}

      </Routes>
    
    </Container>
  </div>
  </div>

    </>
    
    
  );
}

export default App;
