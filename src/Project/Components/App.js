import React from 'react';
import NewAppBar from './NewAppBar';
import ReferCard from './ReferCard';
import FormComp from './FormComp';
import ReferCount from './ReferCount';
import './NewAppBar.css';
import Footer from './Footer';
import DropDownForm from './DropDownForm';
import ReferCopy from './ReferCopy';


const App = () => {
  return (
    <>
      <NewAppBar/>
      <ReferCard />
      <DropDownForm/>
      <ReferCopy/>
      <FormComp />
      <ReferCount />
      <Footer/>
    </>
  )
}

export default App
