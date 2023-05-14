import React from 'react';
import './App.css';
import { Answer } from './components/answer/Answer';
import { Question } from './components/question/Question';
import { Result } from './components/result/Result';
import { Header } from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <Answer />
      <Question />
      <Result />
    </>
  );
}

export default App;
