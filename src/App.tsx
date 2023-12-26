import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { LogContext } from './context';
import { useState } from 'react';


function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <LogContext.Provider value={{
      isLogged,
      setIsLogged
    }} >
      <div className="App">
        <Header />
        <Body />
      </div>
    </LogContext.Provider>
  );
}

export default App;
