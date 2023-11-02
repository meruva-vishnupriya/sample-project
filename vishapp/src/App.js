import logo from './logo.svg';
import './App.css';
import Dashboard from './DashBoard';
import Grades from './Grades';
import Help from './Help';
import About from './About';
import Header from './header.js'

import { BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
                <Route path='/' element={<Dashboard/>}></Route>
            <Route path='ojha' element={<Dashboard/>}></Route>
            <Route path='/bhabani' element={<Grades />}></Route>
            <Route path='/sankar' element={<Help />}></Route>
            <Route path='/Vishnu' element={<About />}></Route>

            
            </Routes>

    </div>
  );
}

export default App;
