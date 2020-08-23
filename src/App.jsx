import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import  Myvideos from './Myvideos';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
    return(
        <>
          <div className="app">
            <Header/>
           
            <div className="app_page">
           
            <Sidebar/>
            <Myvideos/>
            </div>
            </div>  
          
        </>
    )
}
export default App;