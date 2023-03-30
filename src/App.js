
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home'
import Login from './Components/Login';
import Detail from './Components/Detail';
import Error from './Components/Error';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";


function App() {
  return (
 <>
 <BrowserRouter>
 <Header/>
 <Routes>

 <Route path="/"  element={<Home/>}/>
 
 <Route path="/login"  element={<Login/>}/>
 <Route path="/detail"  element={<Detail/>}/>
 <Route path="/*"  element={<Error/>}/>
 {/* <Login/> */}
 </Routes>
 </BrowserRouter>
 </> 
  );
}

export default App;
