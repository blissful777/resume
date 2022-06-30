import React, { useState, useEffect } from 'react';
import './App.css';
import Aside from './components/aside/Aside';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Loader from './components/UI/loader/Loader.jsx'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [setLoading]);

  return (
    <div className="App">
      {
        loading
          ?
          <Loader />
          :
          <div>
            <Header />
            <Main />
            <Aside />
            <Footer />
          </div>
      }
    </div>
  );
}

export default App;
