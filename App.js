import React, { lazy, Suspense } from 'react';
import './App.css';
import Header from './Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Postform from './SpaceHistory/PostForm';
import ErrorBoundary from './ErrorHandler/ErrorBoundary';

function App() {

const Spacxpayloads = lazy(()=>import('./PayLoads/spacexPayload'))
const Home = lazy(()=>import('./Home/Home'))
const SignIn = lazy(()=>import('./SignIn/signIn')) 
const  LoadsTable=lazy(()=>import('./PayLoads/payloadsTable')) 
const SpacxHistorty =lazy(()=>import('./SpaceHistory/EmployeesHistory'));



return (
    <div className="App">
    <BrowserRouter>
    <Header></Header>
  <Suspense fallback={<div class="loader"></div>}>
      <Routes>
      <Route exact  path='/Home' element={<Home/>} />
        <Route path='spaceXhistory' element={<ErrorBoundary><SpacxHistorty /></ErrorBoundary>}/>
        <Route path='spacexPayload' element={<Spacxpayloads />}/>
        <Route path='payloadsTable' element={<LoadsTable />}/>
        <Route path='SignIn' element={<SignIn />}/>
        <Route path='PostForm' element={<Postform />}/>
  
        </Routes>
        

    </Suspense>
  </BrowserRouter>
    </div>
  );
}

export default App;
