import React from 'react';
import { Header } from './stories/Header';
import { Answer } from './components/answer/answer';
import { Question } from './components/question/question';
import { Result } from './components/result/result';

function App() {
  return (
    <>
      <Header onLogin={function (): void {
        throw new Error('Function not implemented.');
      } } onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } onCreateAccount={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <Answer />
      <Question />
      <Result />
    </>
  );
}

export default App;
