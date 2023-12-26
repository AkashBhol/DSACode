//import Grid from '@mui/material/Grid';
import {  BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Login';
import AddEmployee from './components/AddEmployee';
import ShowEmployee from './components/ShowEmployee';
//import { Switch } from '@mui/material';


const Approuts=()=>{
    return(
       <BrowserRouter>
       <Routes>
       <Route path={"/"} element={<Login/>}></Route>
       <Route path={"/Add_new_Employee"}  element={<AddEmployee/>}></Route>
       <Route path={"/ShowEmployee"} element={<ShowEmployee/>}></Route>
       <Route path={"/back"} element={<AddEmployee/>}></Route>
       <Route path={"/back1"} element={<Login/>}></Route>
       </Routes>
       </BrowserRouter>
    
    )
}
export default Approuts;