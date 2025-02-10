// src/App.jsx

import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router';
import SignUpForm from './components/SignUpForm/SignUpForm';

const App = () => {
  
  return (
    <>
      <NavBar />
      {/* Add the Routes component to wrap our individual routes*/}
      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  );
};

export default App;

