import React from 'react';
import CustomInput from '../../components';

const Home = () => (
  <CustomInput onChange={inputValue => console.log(inputValue)} />
);

export default Home;
